import { createContext, useContext, useState, useEffect } from 'react';
import { getActiveSubjects, ELECTIVE_OPTIONS } from '../data/subjects';
import { useAuth } from './AuthContext';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const STORAGE_KEY = 'examboard_elective';

const ElectiveContext = createContext(null);

export function ElectiveProvider({ children }) {
  const { user } = useAuth();
  const [electiveKey, setElectiveKeyState] = useState(
    () => localStorage.getItem(STORAGE_KEY) || 'python'
  );

  // Load from Firestore when user logs in
  useEffect(() => {
    if (!user?.uid || user.uid === 'local') return;
    getDoc(doc(db, 'users', user.uid))
      .then(snap => {
        const choice = snap.data()?.electiveChoice;
        if (choice && ELECTIVE_OPTIONS.some(o => o.key === choice)) {
          localStorage.setItem(STORAGE_KEY, choice);
          setElectiveKeyState(choice);
        }
      })
      .catch(err => console.error('Elective load error:', err));
  }, [user?.uid]);

  function setElectiveKey(key) {
    localStorage.setItem(STORAGE_KEY, key);
    setElectiveKeyState(key);
    if (user?.uid && user.uid !== 'local') {
      setDoc(doc(db, 'users', user.uid), { electiveChoice: key }, { merge: true })
        .catch(err => console.error('Elective save error:', err));
    }
  }

  const activeSubjects = getActiveSubjects(electiveKey);

  return (
    <ElectiveContext.Provider value={{ electiveKey, setElectiveKey, activeSubjects }}>
      {children}
    </ElectiveContext.Provider>
  );
}

export const useElective = () => useContext(ElectiveContext);
