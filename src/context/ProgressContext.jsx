import { createContext, useContext, useState } from 'react';
import { SUBJECTS } from '../data/subjects';
import { hasModuleDetail, CG_MODULE_DATA } from '../data/cgModuleData';

const STORAGE_KEY = 'examboard_progress';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  const init = {};
  SUBJECTS.forEach((s) => {
    init[s.id] = { modules: {}, moduleDetail: {} };
    s.modules.forEach((m) => {
      init[s.id].modules[m.id] = false;
    });
  });
  return init;
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress);

  // ── Legacy module toggle (for modules without detailed data) ──
  const toggleModule = (subjectId, moduleId) => {
    setProgress((prev) => {
      const next = {
        ...prev,
        [subjectId]: {
          ...prev[subjectId],
          modules: {
            ...prev[subjectId]?.modules,
            [moduleId]: !prev[subjectId]?.modules[moduleId],
          },
        },
      };
      save(next);
      return next;
    });
  };

  // ── Helpers to get/init module detail ──
  function getDetail(prev, subjectId, moduleId) {
    return prev[subjectId]?.moduleDetail?.[moduleId] || {
      watched: {},
      studied: {},
      qp: {},
      revision: {},
    };
  }

  function setDetail(prev, subjectId, moduleId, detail) {
    const next = {
      ...prev,
      [subjectId]: {
        ...prev[subjectId],
        moduleDetail: {
          ...prev[subjectId]?.moduleDetail,
          [moduleId]: detail,
        },
      },
    };
    save(next);
    return next;
  }

  // ── Topic: watched (class/understood) ──
  const toggleTopicWatched = (subjectId, moduleId, topicId) => {
    setProgress((prev) => {
      const d = getDetail(prev, subjectId, moduleId);
      return setDetail(prev, subjectId, moduleId, {
        ...d,
        watched: { ...d.watched, [topicId]: !d.watched[topicId] },
      });
    });
  };

  // ── Topic: studied ──
  const toggleTopicStudied = (subjectId, moduleId, topicId) => {
    setProgress((prev) => {
      const d = getDetail(prev, subjectId, moduleId);
      return setDetail(prev, subjectId, moduleId, {
        ...d,
        studied: { ...d.studied, [topicId]: !d.studied[topicId] },
      });
    });
  };

  // ── QP progress (index 0-3) ──
  const toggleModuleQP = (subjectId, moduleId, qpIdx) => {
    setProgress((prev) => {
      const d = getDetail(prev, subjectId, moduleId);
      return setDetail(prev, subjectId, moduleId, {
        ...d,
        qp: { ...d.qp, [qpIdx]: !d.qp[qpIdx] },
      });
    });
  };

  // ── Revision (index 0-2) ──
  const toggleModuleRevision = (subjectId, moduleId, revIdx) => {
    setProgress((prev) => {
      const d = getDetail(prev, subjectId, moduleId);
      return setDetail(prev, subjectId, moduleId, {
        ...d,
        revision: { ...d.revision, [revIdx]: !d.revision[revIdx] },
      });
    });
  };

  // ── Read detail ──
  const getModuleDetail = (subjectId, moduleId) => {
    return progress[subjectId]?.moduleDetail?.[moduleId] || {
      watched: {},
      studied: {},
      qp: {},
      revision: {},
    };
  };

  // ── Subject completion ──
  // For detailed modules: weighted score across all 4 trackers
  //   Watched 20%  ·  Studied 40%  ·  QPs 25%  ·  Revisions 15%
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
