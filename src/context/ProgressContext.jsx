import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { SUBJECTS } from '../data/subjects';
import { hasModuleDetail, CG_MODULE_DATA, CG_QPS } from '../data/cgModuleData';
import { CD_MODULE_DATA, CD_QPS } from '../data/cdModuleData';
import { AAD_MODULE_DATA, AAD_QPS } from '../data/aadModuleData';

function getModuleMap(subjectId) {
  if (subjectId === 'CST302') return { dataMap: CD_MODULE_DATA,  qps: CD_QPS  };
  if (subjectId === 'CST306') return { dataMap: AAD_MODULE_DATA, qps: AAD_QPS };
  return { dataMap: CG_MODULE_DATA, qps: CG_QPS };
}
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
  const firestoreTimer = useRef(null);

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

  // ── Save to localStorage + Firestore (debounced 1.5s) ──
  function persist(data) {
    saveLocal(data);
    if (user?.uid && user.uid !== 'local') {
      clearTimeout(firestoreTimer.current);
      firestoreTimer.current = setTimeout(() => {
        setDoc(doc(db, 'users', user.uid), { progress: data }, { merge: true })
          .catch(err => console.error('Firestore save error:', err));
      }, 1500);
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

  // Toggle a single question within a QP
  const toggleQPQuestion = (subjectId, moduleId, questionId) => {
    const d = getDetail(subjectId, moduleId);
    applyDetail(subjectId, moduleId, {
      ...d, qp: { ...d.qp, [questionId]: !d.qp[questionId] },
    });
  };

  // Check all / uncheck all questions for a QP paper
  const bulkToggleQP = (subjectId, moduleId, questions) => {
    const d = getDetail(subjectId, moduleId);
    const allDone = questions.every(q => d.qp?.[q.id]);
    const newQp = { ...d.qp };
    questions.forEach(q => { newQp[q.id] = !allDone; });
    applyDetail(subjectId, moduleId, { ...d, qp: newQp });
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
        const { dataMap, qps } = getModuleMap(subjectId);
        const modData = dataMap[m.id];
        if (modData) {
          const topics = modData.topics;
          const detail = progress[subjectId]?.moduleDetail?.[m.id] || {};
          const allQs       = modData.pyqQuestions || [];
          const watchedFrac = topics.filter(t => detail.watched?.[t.id]).length / topics.length;
          const studiedFrac = topics.filter(t => detail.studied?.[t.id]).length / topics.length;
          const qpFrac      = allQs.length > 0
            ? allQs.filter(q => detail.qp?.[q.id]).length / allQs.length
            : 0;
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
      toggleQPQuestion,
      bulkToggleQP,
      toggleModuleRevision,
      getModuleDetail,
      getSubjectCompletion,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => useContext(ProgressContext);
