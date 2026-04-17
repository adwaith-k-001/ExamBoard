import { createContext, useContext, useState, useCallback } from 'react';

const KEY = 'examboard_study_log';
const StudyLogContext = createContext(null);

export function StudyLogProvider({ children }) {
  const [sessions, setSessions] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)) ?? []; }
    catch { return []; }
  });

  const addSession = useCallback((session) => {
    setSessions(prev => {
      const next = [session, ...prev];
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const deleteSession = useCallback((id) => {
    setSessions(prev => {
      const next = prev.filter(s => s.id !== id);
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return (
    <StudyLogContext.Provider value={{ sessions, addSession, deleteSession }}>
      {children}
    </StudyLogContext.Provider>
  );
}

export const useStudyLog = () => useContext(StudyLogContext);
