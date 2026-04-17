import { useState, useEffect, useRef, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useElective } from '../context/ElectiveContext';
import { useStudyLog } from '../context/StudyLogContext';
import { useIsMobile } from '../hooks/useIsMobile';
import { ALL_SUBJECTS, getSubjectColor } from '../data/subjects';
import { CG_MODULE_DATA } from '../data/cgModuleData';
import { CD_MODULE_DATA } from '../data/cdModuleData';
import { AAD_MODULE_DATA } from '../data/aadModuleData';
import {
  Play, Pause, Square, BookOpen, BarChart2,
  RefreshCw, PenLine, ChevronLeft, Check, Trash2,
} from 'lucide-react';

/* ─── helpers ─────────────────────────────────────────────── */
function getTopics(subjectId, moduleId) {
  if (subjectId === 'CST302') return CD_MODULE_DATA[moduleId]?.topics ?? [];
  if (subjectId === 'CST304') return CG_MODULE_DATA[moduleId]?.topics ?? [];
  if (subjectId === 'CST306') return AAD_MODULE_DATA[moduleId]?.topics ?? [];
  return [];
}

function formatElapsed(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const p = n => String(n).padStart(2, '0');
  return h > 0 ? `${p(h)}:${p(m)}:${p(sec)}` : `${p(m)}:${p(sec)}`;
}

function formatDuration(s) {
  if (s <= 0) return '0m';
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (h > 0 && m > 0) return `${h}h ${m}m`;
  if (h > 0) return `${h}h`;
  if (m > 0) return `${m}m`;
  return '<1m';
}

function formatDateLabel(dateStr) {
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  if (dateStr === today) return 'Today';
  if (dateStr === yesterday) return 'Yesterday';
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-IN', {
    weekday: 'long', day: 'numeric', month: 'short',
  });
}

const ACTIVITIES = [
  { key: 'lectures', label: 'Lectures',  icon: BookOpen,  color: '#6366F1', desc: 'Lectures & video sessions' },
  { key: 'studying', label: 'Studying',  icon: PenLine,   color: '#8B5CF6', desc: 'Active study & notes' },
  { key: 'pyq',      label: 'PYQ',       icon: BarChart2, color: '#10B981', desc: 'Past year questions' },
  { key: 'revision', label: 'Revision',  icon: RefreshCw, color: '#F59E0B', desc: 'Reviewing covered topics' },
];

/* ════════════════════════════════════════
   TimerPage
════════════════════════════════════════ */
export default function TimerPage() {
  const { t, mode } = useTheme();
  const isMobile = useIsMobile();
  const { sessions, addSession, deleteSession } = useStudyLog();
  const { activeSubjects } = useElective();

  const [tab, setTab]           = useState('new');
  const [step, setStep]         = useState(0);
  const [sel, setSel]           = useState({ subjectId: null, activity: null, moduleId: null, topicId: null });
  const [timerMode, setTimerMode] = useState('live');
  const [timerState, setTimerState] = useState('idle'); // idle | running | paused | stopped
  const [elapsed, setElapsed]   = useState(0);
  const [manualH, setManualH]   = useState('');
  const [manualM, setManualM]   = useState('');
  const intervalRef = useRef(null);

  /* ── timer tick ── */
  useEffect(() => {
    if (timerState === 'running') {
      intervalRef.current = setInterval(() => setElapsed(e => e + 1), 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [timerState]);

  /* ── derived ── */
  const subject      = sel.subjectId ? ALL_SUBJECTS.find(s => s.id === sel.subjectId) : null;
  const subjectColor = subject ? getSubjectColor(subject, mode) : '#6366F1';
  const activity     = ACTIVITIES.find(a => a.key === sel.activity) ?? null;
  const modules      = subject?.modules ?? [];
  const topics       = sel.moduleId != null ? getTopics(sel.subjectId, sel.moduleId) : [];
  const selectedMod  = modules.find(m => m.id === sel.moduleId) ?? null;
  const selectedTopic = topics.find(tp => tp.id === sel.topicId) ?? null;

  /* ── nav helpers ── */
  function resetTimer() {
    clearInterval(intervalRef.current);
    setTimerState('idle');
    setElapsed(0);
    setManualH('');
    setManualM('');
  }

  function resetAll() {
    resetTimer();
    setSel({ subjectId: null, activity: null, moduleId: null, topicId: null });
    setTimerMode('live');
    setStep(0);
  }

  function pickSubject(id) {
    setSel(s => ({ ...s, subjectId: id }));
    setStep(1);
  }

  function pickActivity(key) {
    setSel(s => ({ ...s, activity: key }));
    setStep(key === 'pyq' || key === 'revision' ? 4 : 2);
  }

  function pickModule(id) {
    setSel(s => ({ ...s, moduleId: id, topicId: null }));
    setStep(getTopics(sel.subjectId, id).length > 0 ? 3 : 4);
  }

  function pickTopic(id) {
    setSel(s => ({ ...s, topicId: id }));
    setStep(4);
  }

  function goBack() {
    if (step === 4) resetTimer();
    if (step === 1) {
      setSel({ subjectId: null, activity: null, moduleId: null, topicId: null });
      setStep(0);
    } else if (step === 2) {
      setSel(s => ({ ...s, activity: null, moduleId: null, topicId: null }));
      setStep(1);
    } else if (step === 3) {
      setSel(s => ({ ...s, moduleId: null, topicId: null }));
      setStep(2);
    } else if (step === 4) {
      const { activity: act, subjectId, moduleId } = sel;
      if (act === 'pyq' || act === 'revision') {
        setSel(s => ({ ...s, activity: null }));
        setStep(1);
      } else if (getTopics(subjectId, moduleId).length > 0) {
        setSel(s => ({ ...s, topicId: null }));
        setStep(3);
      } else {
        setSel(s => ({ ...s, moduleId: null, topicId: null }));
        setStep(2);
      }
    }
  }

  function saveSession(duration) {
    addSession({
      id: crypto.randomUUID(),
      subjectId:  sel.subjectId,
      activity:   sel.activity,
      moduleId:   sel.moduleId  ?? null,
      topicId:    sel.topicId   ?? null,
      moduleName: selectedMod?.name  ?? null,
      topicName:  selectedTopic?.name ?? null,
      duration,
      date:      new Date().toISOString().split('T')[0],
      timestamp: Date.now(),
    });
    resetTimer();
    setStep(5);
  }

  function handleSaveLive()   { if (elapsed  >= 60) saveSession(elapsed); }
  function handleSaveManual() {
    const total = (parseInt(manualH) || 0) * 3600 + (parseInt(manualM) || 0) * 60;
    if (total >= 60) saveSession(total);
  }

  /* ── history computations ── */
  const groupedSessions = useMemo(() => {
    const groups = {};
    for (const s of sessions) {
      if (!groups[s.date]) groups[s.date] = [];
      groups[s.date].push(s);
    }
    return Object.entries(groups).sort(([a], [b]) => b.localeCompare(a));
  }, [sessions]);

  const todayStr    = new Date().toISOString().split('T')[0];
  const todayTotal  = sessions.filter(s => s.date === todayStr).reduce((acc, s) => acc + s.duration, 0);
  const overallTotal = sessions.reduce((acc, s) => acc + s.duration, 0);

  const subjectTotals = useMemo(() => {
    const totals = {};
    for (const s of sessions) totals[s.subjectId] = (totals[s.subjectId] || 0) + s.duration;
    return totals;
  }, [sessions]);

  /* ── shared styles ── */
  const cardBtn = (color) => ({
    padding: '14px 16px', borderRadius: 10,
    background: t.card, border: `1px solid ${t.brC}`,
    textAlign: 'left', cursor: 'pointer', width: '100%',
    transition: 'border-color 0.14s, background 0.14s',
  });

  const manualTotal = (parseInt(manualH) || 0) * 3600 + (parseInt(manualM) || 0) * 60;

  /* ══════════════════════════════════════ */
  return (
    <div style={{ padding: isMobile ? '16px' : '28px 32px', maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* ── Page header ── */}
      <div>
        <div style={{ marginBottom: 16 }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', color: t.t1, marginBottom: 3 }}>
            Study Timer
          </h1>
          <p style={{ fontSize: 13, color: t.t25 }}>Track and log time spent on each subject</p>
        </div>

        {/* Tab switcher */}
        <div style={{ display: 'flex', gap: 3, padding: 3, borderRadius: 10, background: t.subtleBg, border: `1px solid ${t.brS}`, width: 'fit-content' }}>
          {[
            { key: 'new',     label: 'New Session' },
            { key: 'history', label: sessions.length > 0 ? `History (${sessions.length})` : 'History' },
          ].map(tb => (
            <button
              key={tb.key}
              onClick={() => setTab(tb.key)}
              style={{
                padding: '7px 16px', borderRadius: 7,
                fontSize: 13, fontWeight: 600,
                background: tab === tb.key ? t.card : 'transparent',
                color:      tab === tb.key ? t.t1  : t.t30,
                border:     tab === tb.key ? `1px solid ${t.brC}` : '1px solid transparent',
                cursor: 'pointer', transition: 'all 0.13s',
              }}
            >
              {tb.label}
            </button>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════
          NEW SESSION TAB
      ════════════════════════════════════ */}
      {tab === 'new' && (
        <div>
          {/* Back button + breadcrumb (steps 1–4) */}
          {step > 0 && step < 5 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <button
                onClick={goBack}
                style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: t.card, border: `1px solid ${t.brC}`,
                  cursor: 'pointer', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: t.t35,
                }}
              >
                <ChevronLeft size={15} />
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                {subject && (
                  <span style={{ padding: '3px 9px', borderRadius: 6, fontSize: 12, fontWeight: 600, background: `${subjectColor}14`, color: subjectColor, border: `1px solid ${subjectColor}25` }}>
                    {subject.shortName}
                  </span>
                )}
                {activity && (
                  <>
                    <span style={{ fontSize: 11, color: t.t18 }}>›</span>
                    <span style={{ padding: '3px 9px', borderRadius: 6, fontSize: 12, fontWeight: 600, background: `${activity.color}14`, color: activity.color, border: `1px solid ${activity.color}25` }}>
                      {activity.label}
                    </span>
                  </>
                )}
                {selectedMod && (
                  <>
                    <span style={{ fontSize: 11, color: t.t18 }}>›</span>
                    <span style={{ fontSize: 12, color: t.t30, fontWeight: 500 }}>M{sel.moduleId}</span>
                  </>
                )}
                {(selectedTopic || (sel.moduleId != null && sel.topicId === null && step === 4)) && (
                  <>
                    <span style={{ fontSize: 11, color: t.t18 }}>›</span>
                    <span style={{ fontSize: 12, color: t.t25, fontWeight: 500, maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {selectedTopic ? selectedTopic.name : 'All Topics'}
                    </span>
                  </>
                )}
              </div>
            </div>
          )}

          {/* ── Step 0: Subject picker ── */}
          {step === 0 && (
            <>
              <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: t.t1, marginBottom: 4 }}>What are you studying?</h2>
                <p style={{ fontSize: 13, color: t.t25 }}>Pick a subject to start logging</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 10 }}>
                {activeSubjects.map(s => {
                  const col = getSubjectColor(s, mode);
                  const diffDays = Math.ceil((new Date(s.examDate) - new Date()) / 864e5);
                  const isPast = diffDays < 0;
                  return (
                    <button
                      key={s.id}
                      onClick={() => pickSubject(s.id)}
                      style={{
                        padding: '16px 18px', borderRadius: 12,
                        background: t.card, border: `1px solid ${t.brC}`,
                        textAlign: 'left', cursor: 'pointer',
                        position: 'relative', overflow: 'hidden',
                        transition: 'border-color 0.14s, transform 0.14s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = `${col}40`;
                        e.currentTarget.style.transform   = 'translateY(-1px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = t.brC;
                        e.currentTarget.style.transform   = 'translateY(0)';
                      }}
                    >
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${col}90, transparent)` }} />
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <div style={{
                          width: 36, height: 36, borderRadius: 9,
                          background: `${col}14`, border: `1px solid ${col}22`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 11, fontWeight: 700, color: col, letterSpacing: '-0.02em',
                        }}>
                          {s.shortName.slice(0, 2).toUpperCase()}
                        </div>
                        <span style={{
                          fontSize: 11, fontWeight: 600, padding: '2px 7px', borderRadius: 5,
                          background: isPast ? t.subtleBg : `${col}12`,
                          color:      isPast ? t.t20      : col,
                          border: `1px solid ${isPast ? t.brS : `${col}20`}`,
                        }}>
                          {isPast ? 'Done' : diffDays === 0 ? 'Today' : `${diffDays}d`}
                        </span>
                      </div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: t.t1, marginBottom: 2 }}>{s.shortName}</p>
                      <p style={{ fontSize: 11, color: t.t25 }}>{s.code}</p>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* ── Step 1: Activity picker ── */}
          {step === 1 && (
            <>
              <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: t.t1, marginBottom: 4 }}>Type of session?</h2>
                <p style={{ fontSize: 13, color: t.t25 }}>What kind of studying are you doing?</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
                {ACTIVITIES.map(act => {
                  const Icon = act.icon;
                  return (
                    <button
                      key={act.key}
                      onClick={() => pickActivity(act.key)}
                      style={{ padding: '20px', borderRadius: 12, background: t.card, border: `1px solid ${t.brC}`, textAlign: 'left', cursor: 'pointer', transition: 'border-color 0.14s, background 0.14s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = `${act.color}40`; e.currentTarget.style.background = `${act.color}06`; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = t.brC;            e.currentTarget.style.background = t.card; }}
                    >
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: `${act.color}14`, border: `1px solid ${act.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: act.color, marginBottom: 12 }}>
                        <Icon size={18} />
                      </div>
                      <p style={{ fontSize: 15, fontWeight: 700, color: t.t1, marginBottom: 4 }}>{act.label}</p>
                      <p style={{ fontSize: 12, color: t.t25, lineHeight: 1.45 }}>{act.desc}</p>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* ── Step 2: Module picker ── */}
          {step === 2 && (
            <>
              <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: t.t1, marginBottom: 4 }}>Which module?</h2>
                <p style={{ fontSize: 13, color: t.t25 }}>Select the module you're working on</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {modules.map(mod => (
                  <button
                    key={mod.id}
                    onClick={() => pickModule(mod.id)}
                    style={{ ...cardBtn(subjectColor), display: 'flex', alignItems: 'center', gap: 14 }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${subjectColor}35`; e.currentTarget.style.background = `${subjectColor}06`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = t.brC;               e.currentTarget.style.background = t.card; }}
                  >
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${subjectColor}14`, border: `1px solid ${subjectColor}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: subjectColor, flexShrink: 0 }}>
                      {mod.id}
                    </div>
                    <p style={{ fontSize: 14, fontWeight: 500, color: t.t1, flex: 1, lineHeight: 1.4 }}>{mod.name}</p>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ── Step 3: Topic picker ── */}
          {step === 3 && (
            <>
              <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: t.t1, marginBottom: 4 }}>Which topic?</h2>
                <p style={{ fontSize: 13, color: t.t25 }}>Pick a specific topic or log for the whole module</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {/* All topics option */}
                <button
                  onClick={() => pickTopic(null)}
                  style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', borderRadius: 10, background: `${subjectColor}08`, border: `1px solid ${subjectColor}28`, textAlign: 'left', cursor: 'pointer', width: '100%', transition: 'border-color 0.14s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${subjectColor}55`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = `${subjectColor}28`; }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: subjectColor, flexShrink: 0 }} />
                  <p style={{ fontSize: 13, fontWeight: 600, color: subjectColor }}>All Topics / General</p>
                </button>

                {topics.map((topic, i) => (
                  <button
                    key={topic.id}
                    onClick={() => pickTopic(topic.id)}
                    style={{ ...cardBtn(), display: 'flex', alignItems: 'center', gap: 12 }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${subjectColor}30`; e.currentTarget.style.background = `${subjectColor}05`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = t.brC;               e.currentTarget.style.background = t.card; }}
                  >
                    <div style={{ width: 24, height: 24, borderRadius: 6, background: t.subtleBg, border: `1px solid ${t.brS}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600, color: t.t22, flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    <p style={{ fontSize: 13, fontWeight: 500, color: t.t35, flex: 1, lineHeight: 1.4 }}>{topic.name}</p>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ── Step 4: Timer / Entry ── */}
          {step === 4 && (
            <>
              {/* Session summary chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                {[
                  subject  && { label: subject.shortName, color: subjectColor },
                  activity && { label: activity.label,    color: activity.color },
                  selectedMod && { label: `Module ${sel.moduleId}`, color: t.t30 },
                  sel.moduleId != null && sel.topicId === null
                    ? { label: 'All Topics', color: t.t22 }
                    : null,
                  selectedTopic && { label: selectedTopic.name.length > 30 ? selectedTopic.name.slice(0, 30) + '…' : selectedTopic.name, color: t.t28 },
                ].filter(Boolean).map((chip, i) => (
                  <span key={i} style={{ padding: '4px 10px', borderRadius: 6, fontSize: 12, fontWeight: 600, background: `${chip.color}14`, color: chip.color, border: `1px solid ${chip.color}25` }}>
                    {chip.label}
                  </span>
                ))}
              </div>

              {/* Mode switcher */}
              <div style={{ display: 'flex', gap: 3, padding: 3, borderRadius: 10, background: t.subtleBg, border: `1px solid ${t.brS}`, width: 'fit-content', marginBottom: 28 }}>
                {[{ key: 'live', label: 'Live Timer' }, { key: 'manual', label: 'Log Time' }].map(m => (
                  <button
                    key={m.key}
                    onClick={() => { setTimerMode(m.key); resetTimer(); }}
                    style={{
                      padding: '7px 16px', borderRadius: 7,
                      fontSize: 13, fontWeight: 600,
                      background: timerMode === m.key ? t.card : 'transparent',
                      color:      timerMode === m.key ? t.t1  : t.t30,
                      border:     timerMode === m.key ? `1px solid ${t.brC}` : '1px solid transparent',
                      cursor: 'pointer',
                    }}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {/* ─ Live Timer ─ */}
              {timerMode === 'live' && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, padding: '24px 0' }}>
                  {/* Clock display */}
                  <div style={{
                    padding: isMobile ? '20px 32px' : '28px 56px',
                    borderRadius: 20,
                    background: t.card,
                    border: `1px solid ${timerState === 'running' ? `${subjectColor}30` : t.brC}`,
                    boxShadow: timerState === 'running' ? `0 0 50px ${subjectColor}0D` : 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontSize: isMobile ? 52 : 68,
                      fontWeight: 800,
                      letterSpacing: '-0.04em',
                      fontVariantNumeric: 'tabular-nums',
                      color: timerState === 'running' ? subjectColor
                           : timerState === 'stopped' ? subjectColor
                           : t.t1,
                      lineHeight: 1,
                      userSelect: 'none',
                      transition: 'color 0.3s',
                    }}>
                      {formatElapsed(elapsed)}
                    </div>
                    <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 10, color: timerState === 'running' ? `${subjectColor}70` : timerState === 'paused' ? t.t20 : t.t15 }}>
                      {timerState === 'running' ? 'Running' : timerState === 'paused' ? 'Paused' : timerState === 'stopped' ? 'Stopped' : 'Ready'}
                    </p>
                  </div>

                  {/* Controls */}
                  {timerState === 'stopped' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                      <p style={{ fontSize: 14, color: t.t30 }}>
                        Session complete — <strong style={{ color: t.t1 }}>{formatDuration(elapsed)}</strong> logged
                      </p>
                      <div style={{ display: 'flex', gap: 10 }}>
                        <button
                          onClick={resetTimer}
                          style={{ padding: '11px 20px', borderRadius: 9, background: t.subtleBg, color: t.t30, border: `1px solid ${t.brC}`, cursor: 'pointer', fontSize: 13, fontWeight: 600 }}
                        >
                          Discard
                        </button>
                        <button
                          onClick={handleSaveLive}
                          disabled={elapsed < 60}
                          style={{ padding: '11px 28px', borderRadius: 9, background: elapsed >= 60 ? subjectColor : t.subtleBg, color: elapsed >= 60 ? '#fff' : t.t20, border: 'none', cursor: elapsed >= 60 ? 'pointer' : 'not-allowed', fontSize: 13, fontWeight: 700 }}
                        >
                          Save Session
                        </button>
                      </div>
                      {elapsed < 60 && <p style={{ fontSize: 11, color: t.t18 }}>Minimum 1 minute to save</p>}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', gap: 10 }}>
                      {timerState === 'idle' && (
                        <button
                          onClick={() => setTimerState('running')}
                          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '13px 32px', borderRadius: 10, background: subjectColor, color: '#fff', border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 700 }}
                        >
                          <Play size={16} />
                          Start
                        </button>
                      )}
                      {(timerState === 'running' || timerState === 'paused') && (
                        <>
                          <button
                            onClick={() => setTimerState(timerState === 'running' ? 'paused' : 'running')}
                            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 10, background: t.card, color: t.t40, border: `1px solid ${t.brC}`, cursor: 'pointer', fontSize: 14, fontWeight: 600 }}
                          >
                            {timerState === 'running' ? <><Pause size={15} /> Pause</> : <><Play size={15} /> Resume</>}
                          </button>
                          <button
                            onClick={() => setTimerState('stopped')}
                            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 20px', borderRadius: 10, background: 'rgba(239,68,68,0.1)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)', cursor: 'pointer', fontSize: 14, fontWeight: 600 }}
                          >
                            <Square size={14} />
                            Stop
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* ─ Manual Entry ─ */}
              {timerMode === 'manual' && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, padding: '24px 0' }}>
                  <p style={{ fontSize: 14, color: t.t30 }}>How long did you study?</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                      <input
                        type="number" min="0" max="24"
                        value={manualH}
                        onChange={e => setManualH(e.target.value)}
                        placeholder="0"
                        style={{ width: 80, height: 72, textAlign: 'center', fontSize: 32, fontWeight: 700, background: t.card, color: t.t1, border: `1px solid ${t.brC}`, borderRadius: 12, outline: 'none', fontVariantNumeric: 'tabular-nums' }}
                        onFocus={e => { e.target.style.borderColor = subjectColor; }}
                        onBlur={e  => { e.target.style.borderColor = t.brC; }}
                      />
                      <span style={{ fontSize: 11, color: t.t20, letterSpacing: '0.1em', textTransform: 'uppercase' }}>hrs</span>
                    </div>
                    <span style={{ fontSize: 28, fontWeight: 700, color: t.t20, paddingBottom: 20 }}>:</span>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                      <input
                        type="number" min="0" max="59"
                        value={manualM}
                        onChange={e => setManualM(e.target.value)}
                        placeholder="0"
                        style={{ width: 80, height: 72, textAlign: 'center', fontSize: 32, fontWeight: 700, background: t.card, color: t.t1, border: `1px solid ${t.brC}`, borderRadius: 12, outline: 'none', fontVariantNumeric: 'tabular-nums' }}
                        onFocus={e => { e.target.style.borderColor = subjectColor; }}
                        onBlur={e  => { e.target.style.borderColor = t.brC; }}
                      />
                      <span style={{ fontSize: 11, color: t.t20, letterSpacing: '0.1em', textTransform: 'uppercase' }}>min</span>
                    </div>
                  </div>
                  <button
                    onClick={handleSaveManual}
                    disabled={manualTotal < 60}
                    style={{ padding: '13px 36px', borderRadius: 10, background: manualTotal >= 60 ? subjectColor : t.subtleBg, color: manualTotal >= 60 ? '#fff' : t.t20, border: 'none', cursor: manualTotal >= 60 ? 'pointer' : 'not-allowed', fontSize: 14, fontWeight: 700 }}
                  >
                    {manualTotal >= 60 ? `Save  ·  ${formatDuration(manualTotal)}` : 'Save'}
                  </button>
                  <p style={{ fontSize: 12, color: t.t15 }}>Minimum 1 minute to save</p>
                </div>
              )}
            </>
          )}

          {/* ── Step 5: Saved confirmation ── */}
          {step === 5 && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, padding: '52px 0' }}>
              <div style={{ width: 64, height: 64, borderRadius: 20, background: `${subjectColor}14`, border: `1px solid ${subjectColor}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Check size={28} color={subjectColor} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: t.t1, marginBottom: 8 }}>Session saved!</h2>
                <p style={{ fontSize: 13, color: t.t30, lineHeight: 1.55, maxWidth: 300 }}>
                  {activity?.label} session for <strong style={{ color: subjectColor }}>{subject?.shortName}</strong>
                  {selectedMod ? ` · Module ${sel.moduleId}` : ''}
                  {' '}has been logged.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={resetAll}
                  style={{ padding: '11px 22px', borderRadius: 9, background: t.card, color: t.t35, border: `1px solid ${t.brC}`, cursor: 'pointer', fontSize: 13, fontWeight: 600 }}
                >
                  Log Another
                </button>
                <button
                  onClick={() => { setTab('history'); resetAll(); }}
                  style={{ padding: '11px 26px', borderRadius: 9, background: subjectColor, color: '#fff', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700 }}
                >
                  View History
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ════════════════════════════════════
          HISTORY TAB
      ════════════════════════════════════ */}
      {tab === 'history' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {sessions.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '64px 0' }}>
              <div style={{ fontSize: 36, marginBottom: 14 }}>⏱</div>
              <p style={{ fontSize: 15, fontWeight: 600, color: t.t35, marginBottom: 6 }}>No sessions yet</p>
              <p style={{ fontSize: 13, color: t.t20, marginBottom: 20 }}>Log a session to see your history here</p>
              <button
                onClick={() => setTab('new')}
                style={{ padding: '10px 22px', borderRadius: 9, background: '#6366F1', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}
              >
                Start a Session
              </button>
            </div>
          ) : (
            <>
              {/* Stats row */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 10 }}>
                {[
                  { label: "Today's Time",      value: formatDuration(todayTotal),   sub: `${sessions.filter(s => s.date === todayStr).length} sessions today` },
                  { label: 'Total Logged',       value: formatDuration(overallTotal), sub: `${sessions.length} sessions total` },
                  { label: 'Subjects Studied',   value: Object.keys(subjectTotals).length, sub: 'different subjects' },
                ].map((stat, i) => (
                  <div key={i} style={{ padding: '16px 18px', borderRadius: 12, background: t.card, border: `1px solid ${t.brC}` }}>
                    <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: t.t22, marginBottom: 6 }}>{stat.label}</p>
                    <p style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', color: t.t1, lineHeight: 1.2 }}>{stat.value}</p>
                    <p style={{ fontSize: 11, color: t.t20, marginTop: 4 }}>{stat.sub}</p>
                  </div>
                ))}
              </div>

              {/* Subject breakdown */}
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: t.t20, marginBottom: 10 }}>Time per Subject</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {Object.entries(subjectTotals)
                    .sort(([, a], [, b]) => b - a)
                    .map(([subId, total]) => {
                      const sub = ALL_SUBJECTS.find(s => s.id === subId);
                      if (!sub) return null;
                      const col = getSubjectColor(sub, mode);
                      return (
                        <div key={subId} style={{ padding: '7px 13px', borderRadius: 8, background: `${col}12`, border: `1px solid ${col}25`, display: 'flex', alignItems: 'center', gap: 7 }}>
                          <div style={{ width: 7, height: 7, borderRadius: '50%', background: col }} />
                          <span style={{ fontSize: 12, fontWeight: 700, color: col }}>{sub.shortName}</span>
                          <span style={{ fontSize: 12, color: t.t30, fontWeight: 500 }}>{formatDuration(total)}</span>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* Session list grouped by date */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {groupedSessions.map(([date, daySessions]) => (
                  <div key={date}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                      <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: t.t20, whiteSpace: 'nowrap' }}>
                        {formatDateLabel(date)}
                      </p>
                      <div style={{ flex: 1, height: 1, background: t.divider }} />
                      <p style={{ fontSize: 11, color: t.t18, whiteSpace: 'nowrap' }}>
                        {formatDuration(daySessions.reduce((acc, s) => acc + s.duration, 0))}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {daySessions.map(sess => {
                        const sub = ALL_SUBJECTS.find(s => s.id === sess.subjectId);
                        const col = sub ? getSubjectColor(sub, mode) : '#6366F1';
                        const act = ACTIVITIES.find(a => a.key === sess.activity);
                        return (
                          <div key={sess.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 10, background: t.card, border: `1px solid ${t.brC}` }}>
                            <div style={{ width: 9, height: 9, borderRadius: '50%', background: col, flexShrink: 0 }} />
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                                <span style={{ fontSize: 12, fontWeight: 700, color: col }}>{sub?.shortName ?? sess.subjectId}</span>
                                <span style={{ fontSize: 11, color: t.t18 }}>·</span>
                                <span style={{ fontSize: 12, color: act?.color ?? t.t30, fontWeight: 600 }}>{act?.label ?? sess.activity}</span>
                                {sess.moduleName && (
                                  <>
                                    <span style={{ fontSize: 11, color: t.t18 }}>·</span>
                                    <span style={{ fontSize: 11, color: t.t25 }}>M{sess.moduleId}</span>
                                  </>
                                )}
                              </div>
                              {sess.topicName && (
                                <p style={{ fontSize: 11, color: t.t20, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                  {sess.topicName}
                                </p>
                              )}
                            </div>
                            <span style={{ fontSize: 13, fontWeight: 700, color: t.t35, flexShrink: 0 }}>
                              {formatDuration(sess.duration)}
                            </span>
                            <button
                              onClick={() => deleteSession(sess.id)}
                              style={{ width: 28, height: 28, borderRadius: 7, background: 'transparent', border: 'none', cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.t15, transition: 'color 0.12s, background 0.12s' }}
                              onMouseEnter={e => { e.currentTarget.style.color = '#F87171'; e.currentTarget.style.background = 'rgba(239,68,68,0.1)'; }}
                              onMouseLeave={e => { e.currentTarget.style.color = t.t15;    e.currentTarget.style.background = 'transparent'; }}
                              title="Delete session"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
