import { useState } from 'react';
import { SUBJECTS, getSubjectColor } from '../data/subjects';
import { CG_MODULE_DATA, CG_QPS, getTopicPriority } from '../data/cgModuleData';
import { CD_MODULE_DATA, CD_QPS } from '../data/cdModuleData';
import { AAD_MODULE_DATA, AAD_QPS } from '../data/aadModuleData';

function getSubjectData(subjectId, moduleId) {
  if (subjectId === 'CST302') return { moduleData: CD_MODULE_DATA[moduleId],  qps: CD_QPS  };
  if (subjectId === 'CST306') return { moduleData: AAD_MODULE_DATA[moduleId], qps: AAD_QPS };
  return { moduleData: CG_MODULE_DATA[moduleId], qps: CG_QPS };
}
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { VideoModal, PdfViewerModal } from '../components/ResourceModals';
import { Eye, BookOpen, Check, BarChart2, ListChecks, FolderOpen, Play, FileText } from 'lucide-react';

const PRIORITY_STYLES = {
  Critical: { color: '#EF4444', bg: 'rgba(239,68,68,0.12)', border: 'rgba(239,68,68,0.22)' },
  High:     { color: '#F97316', bg: 'rgba(249,115,22,0.12)', border: 'rgba(249,115,22,0.22)' },
  Medium:   { color: '#EAB308', bg: 'rgba(234,179,8,0.12)', border: 'rgba(234,179,8,0.22)' },
  Low:      { color: '#6B7280', bg: 'rgba(107,114,128,0.10)', border: 'rgba(107,114,128,0.18)' },
};

function PriorityBadge({ priority }) {
  const s = PRIORITY_STYLES[priority] || PRIORITY_STYLES.Low;
  return (
    <span style={{
      padding: '2px 8px', borderRadius: 5,
      fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em',
      color: s.color, background: s.bg, border: `1px solid ${s.border}`,
      flexShrink: 0,
    }}>
      {priority}
    </span>
  );
}

function ToggleChip({ active, onClick, icon, label, color, t }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 5,
        padding: '5px 10px', borderRadius: 7,
        fontSize: 11, fontWeight: 600, cursor: 'pointer',
        color: active ? color : t.t22,
        background: active ? `${color}12` : t.subtleBg,
        border: `1px solid ${active ? `${color}28` : t.brS}`,
        transition: 'all 0.15s',
        flexShrink: 0,
      }}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function CheckBox({ done, onClick, color, t }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 22, height: 22, borderRadius: 6, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: done ? color : 'transparent',
        border: `2px solid ${done ? color : t.brI}`,
        boxShadow: done ? `0 0 8px ${color}44` : 'none',
        cursor: 'pointer',
        transition: 'all 0.18s ease',
      }}
    >
      {done && <Check size={11} color="white" strokeWidth={3} />}
    </button>
  );
}

/* ═══════════════════════════════
   Progress Tab
═══════════════════════════════ */
function ProgressTab({ moduleData, qps, detail, subjectId, moduleId, color, t }) {
  const {
    toggleTopicWatched,
    toggleTopicStudied,
    toggleModuleQP,
    toggleModuleRevision,
  } = useProgress();

  const watchedCount  = moduleData.topics.filter(tp => detail.watched?.[tp.id]).length;
  const studiedCount  = moduleData.topics.filter(tp => detail.studied?.[tp.id]).length;
  const qpDoneCount   = qps.filter((_, i) => detail.qp?.[i]).length;
  const revDoneCount  = [0, 1, 2].filter(i => detail.revision?.[i]).length;
  const total         = moduleData.topics.length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

      {/* ── Summary chips ── */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {[
          { label: `${watchedCount}/${total} Watched`, active: watchedCount === total, c: '#6366f1' },
          { label: `${studiedCount}/${total} Studied`, active: studiedCount === total, c: color },
          { label: `${qpDoneCount}/${qps.length} QPs Done`, active: qpDoneCount === qps.length, c: '#10b981' },
          { label: `${revDoneCount}/3 Revised`, active: revDoneCount === 3, c: '#f59e0b' },
        ].map(chip => (
          <div key={chip.label} style={{
            padding: '5px 12px', borderRadius: 8,
            fontSize: 12, fontWeight: 600,
            color: chip.active ? chip.c : t.t30,
            background: chip.active ? `${chip.c}10` : t.subtleBg,
            border: `1px solid ${chip.active ? `${chip.c}22` : t.brS}`,
          }}>
            {chip.label}
          </div>
        ))}
      </div>

      {/* ── Topics ── */}
      <div>
        <SectionLabel label="Topics" t={t} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {moduleData.topics.map((topic) => {
            const watched = !!detail.watched?.[topic.id];
            const studied = !!detail.studied?.[topic.id];
            const allDone = watched && studied;
            return (
              <div key={topic.id} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '11px 14px', borderRadius: 10,
                background: allDone ? `${color}07` : t.card,
                border: `1px solid ${allDone ? `${color}18` : t.brC}`,
                transition: 'background 0.15s, border-color 0.15s',
              }}>
                <p style={{
                  flex: 1, fontSize: 13, fontWeight: 500,
                  color: allDone ? t.t30 : t.t1b,
                  textDecoration: allDone ? 'line-through' : 'none',
                  textDecorationColor: t.t15,
                  lineHeight: 1.35,
                }}>
                  {topic.name}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <ToggleChip
                    active={watched}
                    onClick={() => toggleTopicWatched(subjectId, moduleId, topic.id)}
                    icon={<Eye size={11} />}
                    label="Watched"
                    color="#6366f1"
                    t={t}
                  />
                  <ToggleChip
                    active={studied}
                    onClick={() => toggleTopicStudied(subjectId, moduleId, topic.id)}
                    icon={<BookOpen size={11} />}
                    label="Studied"
                    color={color}
                    t={t}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Question Papers ── */}
      <div>
        <SectionLabel label={`Question Papers (${qps.length} QPs)`} t={t} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
          {qps.map((qp, i) => {
            const done = !!detail.qp?.[i];
            return (
              <button
                key={qp.id}
                onClick={() => toggleModuleQP(subjectId, moduleId, i)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '13px 15px', borderRadius: 10, cursor: 'pointer', textAlign: 'left',
                  background: done ? '#10b98112' : t.card,
                  border: `1px solid ${done ? '#10b98130' : t.brC}`,
                  transition: 'all 0.15s',
                }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: done ? '#10b98118' : t.subtleBg,
                  border: `1px solid ${done ? '#10b98128' : t.brS}`,
                  fontSize: 11, fontWeight: 700,
                  color: done ? '#10b981' : t.t22,
                }}>
                  QP{i + 1}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: done ? '#10b981' : t.t1b }}>
                    {qp.label}
                  </p>
                  <p style={{ fontSize: 11, color: t.t20, marginTop: 1 }}>
                    {done ? 'Completed' : 'Not done'}
                  </p>
                </div>
                {/* Plain div — click handled by outer button */}
                <div style={{
                  width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: done ? '#10b981' : 'transparent',
                  border: `2px solid ${done ? '#10b981' : t.brCD}`,
                  boxShadow: done ? '0 0 8px #10b98144' : 'none',
                  transition: 'all 0.18s ease',
                }}>
                  {done && <Check size={11} color="white" strokeWidth={3} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Revisions ── */}
      <div>
        <SectionLabel label="Revisions" t={t} />
        <div style={{ display: 'flex', gap: 8 }}>
          {[0, 1, 2].map((i) => {
            const done = !!detail.revision?.[i];
            const revColor = ['#f59e0b', '#f97316', '#ef4444'][i];
            return (
              <button
                key={i}
                onClick={() => toggleModuleRevision(subjectId, moduleId, i)}
                style={{
                  flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
                  gap: 8, padding: '16px 12px', borderRadius: 12, cursor: 'pointer',
                  background: done ? `${revColor}12` : t.card,
                  border: `1px solid ${done ? `${revColor}30` : t.brC}`,
                  transition: 'all 0.15s',
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: done ? `${revColor}18` : t.subtleBg,
                  border: `1px solid ${done ? `${revColor}28` : t.brS}`,
                  color: done ? revColor : t.t22,
                  fontSize: 15, fontWeight: 800,
                }}>
                  {i + 1}
                </div>
                <p style={{ fontSize: 12, fontWeight: 600, color: done ? revColor : t.t25 }}>
                  Revision {i + 1}
                </p>
                <div style={{
                  width: 20, height: 20, borderRadius: 5,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: done ? revColor : 'transparent',
                  border: `2px solid ${done ? revColor : t.brCD}`,
                  boxShadow: done ? `0 0 8px ${revColor}44` : 'none',
                  transition: 'all 0.18s',
                }}>
                  {done && <Check size={10} color="white" strokeWidth={3} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}

/* ═══════════════════════════════
   Statistics Tab
═══════════════════════════════ */
function StatisticsTab({ moduleData, t }) {
  const [expandedTopic, setExpandedTopic] = useState(null);
  const totalMarks = Object.values(moduleData.topicWeightage).reduce((a, b) => a + b, 0);
  const maxMarks   = Math.max(...Object.values(moduleData.topicWeightage));

  const sortedTopics = [...moduleData.topics].sort(
    (a, b) => (moduleData.topicWeightage[b.id] || 0) - (moduleData.topicWeightage[a.id] || 0)
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

      {/* ── Mark Weightage ── */}
      <div>
        <SectionLabel label="Mark Weightage by Topic" t={t} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {sortedTopics.map((topic) => {
            const marks = moduleData.topicWeightage[topic.id] || 0;
            const pct   = totalMarks > 0 ? Math.round((marks / totalMarks) * 100) : 0;
            const barW  = maxMarks > 0 ? (marks / maxMarks) * 100 : 0;
            const priority = getTopicPriority(marks, totalMarks);
            const ps    = PRIORITY_STYLES[priority];
            return (
              <div key={topic.id} style={{
                padding: '12px 14px', borderRadius: 10,
                background: t.card, border: `1px solid ${t.brC}`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <p style={{ flex: 1, fontSize: 13, fontWeight: 500, color: t.t1b }}>
                    {topic.name}
                  </p>
                  <PriorityBadge priority={priority} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: ps.color, minWidth: 28, textAlign: 'right' }}>
                    {marks}
                  </span>
                  <span style={{ fontSize: 11, color: t.t20, minWidth: 32, textAlign: 'right' }}>
                    {pct}%
                  </span>
                </div>
                <div style={{ height: 3, borderRadius: 3, background: t.subtleBg, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 3,
                    width: `${barW}%`,
                    background: `linear-gradient(90deg, ${ps.color}80, ${ps.color})`,
                    transition: 'width 0.6s cubic-bezier(0.4,0,0.2,1)',
                  }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{
          marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap',
          padding: '10px 14px', borderRadius: 8,
          background: t.subtleBg, border: `1px solid ${t.brS}`,
        }}>
          {Object.entries(PRIORITY_STYLES).map(([label, s]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: s.color }} />
              <span style={{ fontSize: 11, color: t.t25 }}>{label}</span>
            </div>
          ))}
          <span style={{ fontSize: 11, color: t.t18, marginLeft: 'auto' }}>
            Total: {totalMarks} marks across 4 QPs
          </span>
        </div>
      </div>

      {/* ── Topic-wise Question Log ── */}
      <div>
        <SectionLabel label="Topic-wise Question Log" t={t} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {sortedTopics.map((topic) => {
            const marks     = moduleData.topicWeightage[topic.id] || 0;
            const priority  = getTopicPriority(marks, totalMarks);
            const ps        = PRIORITY_STYLES[priority];
            const questions = moduleData.pyqQuestions.filter(q => q.topicId === topic.id);
            const isOpen    = expandedTopic === topic.id;

            return (
              <div key={topic.id} style={{
                borderRadius: 10,
                border: `1px solid ${isOpen ? `${ps.color}25` : t.brC}`,
                overflow: 'hidden',
                background: t.card,
              }}>
                {/* Topic header */}
                <button
                  onClick={() => setExpandedTopic(isOpen ? null : topic.id)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                    padding: '12px 14px', cursor: 'pointer',
                    background: isOpen ? `${ps.color}07` : 'transparent',
                    border: 'none', textAlign: 'left',
                    transition: 'background 0.15s',
                  }}
                >
                  <div style={{
                    width: 4, height: 32, borderRadius: 2, flexShrink: 0,
                    background: marks > 0 ? ps.color : t.brS,
                  }} />
                  <p style={{ flex: 1, fontSize: 13, fontWeight: 600, color: t.t1b }}>
                    {topic.name}
                  </p>
                  <PriorityBadge priority={priority} />
                  <span style={{
                    fontSize: 11, color: t.t25,
                    padding: '3px 8px', borderRadius: 5,
                    background: t.subtleBg, border: `1px solid ${t.brS}`,
                  }}>
                    {questions.length} Qs · {marks} marks
                  </span>
                  <span style={{
                    fontSize: 14, color: t.t25,
                    transform: isOpen ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                    display: 'inline-block',
                  }}>›</span>
                </button>

                {/* Questions list */}
                {isOpen && (
                  <div style={{ borderTop: `1px solid ${t.brS}` }}>
                    {questions.length === 0 ? (
                      <p style={{ padding: '12px 14px', fontSize: 12, color: t.t20, fontStyle: 'italic' }}>
                        No questions from this topic in the 4 PYQs.
                      </p>
                    ) : (
                      questions.map((q, idx) => {
                        const qp = CG_QPS.find(qp => qp.id === q.qpId);
                        return (
                          <div key={q.id} style={{
                            display: 'flex', alignItems: 'flex-start', gap: 10,
                            padding: '10px 14px',
                            borderBottom: idx < questions.length - 1 ? `1px solid ${t.brS}` : 'none',
                          }}>
                            {/* QP label */}
                            <div style={{
                              flexShrink: 0, padding: '3px 8px', borderRadius: 5,
                              fontSize: 10, fontWeight: 700,
                              color: ps.color, background: `${ps.color}10`,
                              border: `1px solid ${ps.color}22`,
                              minWidth: 64, textAlign: 'center',
                              marginTop: 1,
                            }}>
                              {qp?.label}
                            </div>
                            {/* Q num */}
                            <span style={{
                              flexShrink: 0, fontSize: 11, color: t.t25,
                              paddingTop: 2, minWidth: 88,
                            }}>
                              {q.qNum}
                            </span>
                            {/* Question text */}
                            <p style={{
                              flex: 1, fontSize: 12, color: t.t33, lineHeight: 1.5,
                            }}>
                              {q.text}
                            </p>
                            {/* Marks */}
                            <span style={{
                              flexShrink: 0, fontSize: 12, fontWeight: 700,
                              color: t.t30, paddingTop: 2,
                            }}>
                              [{q.marks}]
                            </span>
                          </div>
                        );
                      })
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

/* ═══════════════════════════════
   Resources Tab
═══════════════════════════════ */
function ResourcesTab({ subject, moduleId, color, t }) {
  const [videoModal, setVideoModal] = useState(false);
  const [pdfModal,   setPdfModal]   = useState(false);

  const moduleNotes = (subject.links?.notes || []).filter(n =>
    n.moduleId === moduleId || n.moduleId == null
  );
  const videos      = subject.links?.videos || [];
  const notesFolder = subject.links?.notesFolder || null;
  const hasNotes    = moduleNotes.length > 0 || !!notesFolder;
  const hasVideos   = videos.length > 0;

  const cardStyle = (color, active) => ({
    padding: '20px', borderRadius: 12, textAlign: 'left', cursor: 'pointer',
    background: active ? `${color}10` : t.card,
    border: `1px solid ${active ? `${color}30` : t.brC}`,
    display: 'flex', flexDirection: 'column',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* ── Notes ── */}
      <div>
        <SectionLabel label="Notes" t={t} />
        {hasNotes ? (
          <button
            onClick={() => setPdfModal(true)}
            style={cardStyle(color, false)}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = `${color}45`;
              e.currentTarget.style.boxShadow = `0 0 0 3px ${color}10`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = t.brC;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ color: color, marginBottom: 10 }}><FileText size={18} /></div>
            <p style={{ fontSize: 13, fontWeight: 600, color: t.t1, marginBottom: 4 }}>
              Module {moduleId} Notes
            </p>
            <p style={{ fontSize: 12, color: t.t33, lineHeight: 1.55 }}>
              {moduleNotes.length > 0
                ? `${moduleNotes.length} file${moduleNotes.length !== 1 ? 's' : ''} — click to preview`
                : 'Available in Drive folder'}
            </p>
          </button>
        ) : (
          <div style={{
            padding: '16px 18px', borderRadius: 12,
            background: t.card, border: `1px solid ${t.brC}`,
            fontSize: 13, color: t.t22,
          }}>
            No notes added for this module yet.
          </div>
        )}
      </div>

      {/* ── Video Lectures ── */}
      <div>
        <SectionLabel label="Video Lectures" t={t} />
        {hasVideos ? (
          <button
            onClick={() => setVideoModal(true)}
            style={cardStyle(color, false)}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = `${color}45`;
              e.currentTarget.style.boxShadow = `0 0 0 3px ${color}10`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = t.brC;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ color: color, marginBottom: 10 }}><Play size={18} /></div>
            <p style={{ fontSize: 13, fontWeight: 600, color: t.t1, marginBottom: 4 }}>
              {subject.name} — Lecture Series
            </p>
            <p style={{ fontSize: 12, color: t.t33, lineHeight: 1.55 }}>
              {videos.length} playlist{videos.length !== 1 ? 's' : ''} available
            </p>
          </button>
        ) : (
          <div style={{
            padding: '16px 18px', borderRadius: 12,
            background: t.card, border: `1px solid ${t.brC}`,
            fontSize: 13, color: t.t22,
          }}>
            No video lectures added for this subject yet.
          </div>
        )}
      </div>

      {videoModal && (
        <VideoModal subject={subject} t={t} onClose={() => setVideoModal(false)} />
      )}
      {pdfModal && (
        <PdfViewerModal
          subject={subject}
          files={moduleNotes}
          folderUrl={notesFolder}
          label={`Module ${moduleId} Notes`}
          t={t}
          onClose={() => setPdfModal(false)}
        />
      )}
    </div>
  );
}

/* ═══════════════════════════════
   Shared
═══════════════════════════════ */
function SectionLabel({ label, t }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
      <h3 style={{
        fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
        letterSpacing: '0.2em', color: t.t20, whiteSpace: 'nowrap',
      }}>
        {label}
      </h3>
      <div style={{ flex: 1, height: 1, background: t.divider }} />
    </div>
  );
}

/* ═══════════════════════════════
   Main Page
═══════════════════════════════ */
export default function ModuleDetailPage({ subjectId, moduleId }) {
  const { t, mode }  = useTheme();
  const { getModuleDetail } = useProgress();
  const [activeTab, setActiveTab] = useState('progress');

  const subject                = SUBJECTS.find(s => s.id === subjectId);
  const { moduleData, qps }   = getSubjectData(subjectId, moduleId);
  const modMeta                = subject?.modules.find(m => m.id === moduleId);
  const detail     = getModuleDetail(subjectId, moduleId);

  if (!subject || !moduleData || !modMeta) return null;

  const color = getSubjectColor(subject, mode);

  return (
    <div style={{
      padding: '28px 32px', maxWidth: 1000, margin: '0 auto',
      display: 'flex', flexDirection: 'column', gap: 24,
    }}>

      {/* ── Module Header ── */}
      <div style={{
        padding: '22px 26px', borderRadius: 14,
        background: t.hero, border: `1px solid ${color}1E`,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: `linear-gradient(90deg, transparent 5%, ${color}55 40%, ${color}55 60%, transparent 95%)`,
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, width: 180, height: 180,
          background: `radial-gradient(circle at 90% 10%, ${color}0C, transparent 65%)`,
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{
              padding: '3px 9px', borderRadius: 5, fontSize: 11, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.08em',
              color: color, background: `${color}18`, border: `1px solid ${color}28`,
            }}>
              {subject.code}
            </span>
            <span style={{
              padding: '3px 9px', borderRadius: 5, fontSize: 11, fontWeight: 600,
              color: t.t25, background: t.subtleBg, border: `1px solid ${t.brS}`,
            }}>
              Module {moduleId}
            </span>
          </div>
          <h1 style={{
            fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em',
            color: t.t1, lineHeight: 1.2,
          }}>
            {modMeta.name}
          </h1>
          <p style={{ fontSize: 12, color: t.t25, marginTop: 6 }}>
            {moduleData.topics.length} topics · {qps.length} QPs · 3 revisions
          </p>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div style={{ display: 'flex', gap: 6 }}>
        {[
          { id: 'progress',   label: 'Progress',   icon: <ListChecks size={14} /> },
          { id: 'statistics', label: 'Statistics',  icon: <BarChart2  size={14} /> },
          { id: 'resources',  label: 'Resources',   icon: <FolderOpen size={14} /> },
        ].map(tab => {
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '8px 16px', borderRadius: 9,
                fontSize: 13, fontWeight: 600, cursor: 'pointer',
                color: active ? color : t.t30,
                background: active ? `${color}12` : t.subtleBg,
                border: `1px solid ${active ? `${color}28` : t.brS}`,
                transition: 'all 0.15s',
              }}
            >
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ── Tab content ── */}
      <div key={activeTab} className="animate-fade-in">
        {activeTab === 'progress' && (
          <ProgressTab
            moduleData={moduleData}
            qps={qps}
            detail={detail}
            subjectId={subjectId}
            moduleId={moduleId}
            color={color}
            t={t}
          />
        )}
        {activeTab === 'statistics' && (
          <StatisticsTab moduleData={moduleData} t={t} />
        )}
        {activeTab === 'resources' && (
          <ResourcesTab subject={subject} moduleId={moduleId} color={color} t={t} />
        )}
      </div>

    </div>
  );
}
