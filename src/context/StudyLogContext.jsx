import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useAuth } from './AuthContext';
import { db } from '../firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

const KEY = 'examboard_study_log';
const StudyLogContext = createContext(null);

function loadLocal() {
  try { return JSON.parse(localStorage.getItem(KEY)) ?? []; }
  catch { return []; }
}

function saveLocal(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function StudyLogProvider({ children }) {
  const { user } = useAuth();
  const [sessions, setSessions] = useState(loadLocal);
  const firestoreTimer = useRef(null);
  const isRemoteUpdate = useRef(false);

  // Real-time listener — fires on every change from any device
  useEffect(() => {
    if (!user?.uid || user.uid === 'local') return;

    const unsub = onSnapshot(
      doc(db, 'users', user.uid),
      (snap) => {
        if (snap.exists() && snap.data()?.studyLog) {
          const data = snap.data().studyLog;
          saveLocal(data);
          isRemoteUpdate.current = true;
          setSessions(data);
          isRemoteUpdate.current = false;
        }
      },
      (err) => console.error('StudyLog listener error:', err)
    );

    return () => unsub();
  }, [user?.uid]);

  function persistRemote(data) {
    if (!user?.uid || user.uid === 'local') return;
    clearTimeout(firestoreTimer.current);
    firestoreTimer.current = setTimeout(() => {
      setDoc(doc(db, 'users', user.uid), { studyLog: data }, { merge: true })
        .catch(err => console.error('StudyLog save error:', err));
    }, 1000);
  }

  const addSession = (session) => {
    const next = [session, ...sessions];
    setSessions(next);
    saveLocal(next);
    persistRemote(next);
  };

  const deleteSession = (id) => {
    const next = sessions.filter(s => s.id !== id);
    setSessions(next);
    saveLocal(next);
    persistRemote(next);
  };

  return (
    <StudyLogContext.Provider value={{ sessions, addSession, deleteSession }}>
      {children}
    </StudyLogContext.Provider>
  );
}

export const useStudyLog = () => useContext(StudyLogContext);
