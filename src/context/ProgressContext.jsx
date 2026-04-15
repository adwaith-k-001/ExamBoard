import { createContext, useContext, useState, useEffect } from 'react';
import { SUBJECTS } from '../data/subjects';
import { hasModuleDetail, CG_MODULE_DATA } from '../data/cgModuleData';
import { useAuth } from './AuthContext';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const STORAGE_KEY = 'examboard_progress';

function defaultProgress() {
  const init = {};
  SUBJECTS.forEach((s) => {
    init[s.id] = { modules: {}, moduleDetail: {} };
    s.modules.forEach((m) => {
      init[s.id].modules[m.id] = false;
    });
  });
  return init;
}

function loadLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return defaultProgress();
}

function saveLocal(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const { user } = useAuth();
  const [progress, setProgress] = useState(loadLocal);

  // ── Load from Firestore when user logs in ──
  useEffect(() => {
    if (!user?.uid || user.uid === 'local') return;
    getDoc(doc(db, 'users', user.uid))
      .then(snap => {
        if (snap.exists() && snap.data()?.progress) {
          const data = snap.data().progress;
          saveLocal(data);
          setProgress(data);
        }
      })
      .catch(err => console.error('Firestore load error:', err));
  }, [user?.uid]);

  // ── Save to localStorage + Firestore ──
  function persist(data) {
    saveLocal(data);
    if (user?.uid && user.uid !== 'local') {
      setDoc(doc(db, 'users', user.uid), { progress: data }, { merge: true })
        .catch(err => console.error('Firestore save error:', err));
    }
  }

  // ── Legacy module toggle ──
  const toggleModule = (subjectId, moduleId) => {
    const next = {
      ...progress,
      [subjectId]: {
        ...progress[subjectId],
        modules: {
          ...progress[subjectId]?.modules,
          [moduleId]: !progress[subjectId]?.modules[moduleId],
        },
      },
    };
    setProgress(next);
    persist(next);
  };

  function getDetail(subjectId, moduleId) {
    return progress[subjectId]?.moduleDetail?.[moduleId] || {
      watched: {}, studied: {}, qp: {}, revision: {},
    };
  }

  function applyDetail(subjectId, moduleId, detail) {
    const next = {
      ...progress,
      [subjectId]: {
        ...progress[subjectId],
        moduleDetail: {
          ...progress[subjectId]?.moduleDetail,
          [moduleId]: detail,
        },
      },
    };
    setProgress(next);
    persist(next);
  }

  const toggleTopicWatched = (subjectId, moduleId, topicId) => {
    const d = getDetail(subjectId, moduleId);
    applyDetail(subjectId, moduleId, {
      ...d, watched: { ...d.watched, [topicId]: !d.watched[topicId] },
    });
  };

  const toggleTopicStudied = (subjectId, moduleId, topicId) => {
    const d = getDetail(subjectId, moduleId);
    applyDetail(subjectId, moduleId, {
      ...d, studied: { ...d.studied, [topicId]: !d.studied[topicId] },
    });
  };

  const toggleModuleQP = (subjectId, moduleId, qpIdx) => {
    const d = getDetail(subjectId, moduleId);
    applyDetail(subjectId, moduleId, {
      ...d, qp: { ...d.qp, [qpIdx]: !d.qp[qpIdx] },
    });
  };

  const toggleModuleRevision = (subjectId, moduleId, revIdx) => {
    const d = getDetail(subjectId, moduleId);
    applyDetail(subjectId, moduleId, {
      ...d, revision: { ...d.revision, [revIdx]: !d.revision[revIdx] },
    });
  };

  const getModuleDetail = (subjectId, moduleId) => {
    return progress[subjectId]?.moduleDetail?.[moduleId] || {
      watched: {}, studied: {}, qp: {}, revision: {},
    };
  };

  const getSubjectCompletion = (subjectId) => {
    const subject = SUBJECTS.find((s) => s.id === subjectId);
    if (!subject) return 0;
    let doneWeight = 0;
    subject.modules.forEach((m) => {
      if (hasModuleDetail(subjectId, m.id)) {
        const modData = CG_MODULE_DATA[m.id];
        if (modData) {
          const topics = modData.topics;
          const detail = progress[subjectId]?.moduleDetail?.[m.id] || {};
          const watchedFrac = topics.filter(t => detail.watched?.[t.id]).length / topics.length;
          const studiedFrac = topics.filter(t => detail.studied?.[t.id]).length / topics.length;
          const qpFrac      = [0, 1, 2, 3].filter(i => detail.qp?.[i]).length / 4;
          const revFrac     = [0, 1, 2].filter(i => detail.revision?.[i]).length / 3;
          doneWeight += watchedFrac * 0.20 + studiedFrac * 0.40 + qpFrac * 0.25 + revFrac * 0.15;
        }
      } else {
        if (progress[subjectId]?.modules?.[m.id]) doneWeight += 1;
      }
    });
    return Math.round((doneWeight / subject.modules.length) * 100);
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      toggleModule,
      toggleTopicWatched,
      toggleTopicStudied,
      toggleModuleQP,
      toggleModuleRevision,
      getModuleDetail,
      getSubjectCompletion,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => useContext(ProgressContext);
