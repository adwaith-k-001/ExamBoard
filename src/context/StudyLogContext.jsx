import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useAuth } from './AuthContext';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

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

  // Load from Firestore when user logs in
  useEffect(() => {
    if (!user?.uid || user.uid === 'local') return;
    getDoc(doc(db, 'users', user.uid))
      .then(snap => {
        if (snap.exists() && snap.data()?.studyLog) {
          const data = snap.data().studyLog;
          saveLocal(data);
          setSessions(data);
        }
      })
      .catch(err => console.error('Firestore studyLog load error:', err));
  }, [user?.uid]);

  function persist(data) {
    saveLocal(data);
    if (user?.uid && user.uid !== 'local') {
      clearTimeout(firestoreTimer.current);
      firestoreTimer.current = setTimeout(() => {
        setDoc(doc(db, 'users', user.uid), { studyLog: data }, { merge: true })
          .catch(err => console.error('Firestore studyLog save error:', err));
      }, 1500);
    }
  }

  const addSession = (session) => {
    setSessions(prev => {
      const next = [session, ...prev];
      persist(next);
      return next;
    });
  };

  const deleteSession = (id) => {
    setSessions(prev => {
      const next = prev.filter(s => s.id !== id);
      persist(next);
      return next;
    });
  };

  return (
    <StudyLogContext.Provider value={{ sessions, addSession, deleteSession }}>
      {children}
    </StudyLogContext.Provider>
  );
}

export const useStudyLog = () => useContext(StudyLogContext);
