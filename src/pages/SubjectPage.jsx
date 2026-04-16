import { useState } from 'react';
import { SUBJECTS } from '../data/subjects';
import { CG_MODULE_DATA, CG_QPS, hasModuleDetail } from '../data/cgModuleData';
import { CD_MODULE_DATA, CD_QPS } from '../data/cdModuleData';
import { AAD_MODULE_DATA, AAD_QPS } from '../data/aadModuleData';

function getSubjectInfo(subjectId) {
  if (subjectId === 'CST302') return { moduleDataMap: CD_MODULE_DATA,  qps: CD_QPS  };
  if (subjectId === 'CST306') return { moduleDataMap: AAD_MODULE_DATA, qps: AAD_QPS };
  return { moduleDataMap: CG_MODULE_DATA, qps: CG_QPS };
}
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { useIsMobile } from '../hooks/useIsMobile';
import Countdown from '../components/Countdown';
import { PdfViewerModal } from '../components/ResourceModals';
import { CheckSquare, BarChart2, Check, Eye, BookOpen, ChevronRight } from 'lucide-react';

const RESOURCES = [
  { key: 'syllabus', label: 'Syllabus',     desc: 'Full KTU syllabus PDF',  icon: <CheckSquare size={18} /> },
  { key: 'pyq',      label: 'PYQ',          desc: 'Past year question papers', icon: <BarChart2  size={18} /> },
];



function SectionLabel({ label, t }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
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

/* ── Simple module toggle card (no detailed data) ── */
function SimpleModuleItem({ mod, done, color, isLastOdd, onToggle, t }) {
  return (
    <button
      onClick={onToggle}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '15px 17px', borderRadius: 11,
        background: done ? `${color}${t.doneBgA}` : t.card,
        border: `1px solid ${done ? `${color}${t.doneBrA}` : t.brC}`,
        textAlign: 'left', cursor: 'pointer', width: '100%',
        transition: 'background 0.15s ease, border-color 0.15s ease',
        gridColumn: isLastOdd ? 'span 2' : 'span 1',
      }}
      onMouseEnter={e => {
        if (!done) {
          e.currentTarget.style.borderColor = `${color}28`;
          e.currentTarget.style.background  = `${color}06`;
        }
      }}
      onMouseLeave={e => {
        if (!done) {
          e.currentTarget.style.borderColor = t.brC;
          e.currentTarget.style.background  = t.card;
        }
      }}
    >
      <div style={{
        width: 38, height: 38, borderRadius: 9, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, fontWeight: 700,
        background: done ? `${color}15` : t.subtleBg,
        border: `1px solid ${done ? `${color}25` : t.brS}`,
        color: done ? color : t.t22,
        transition: 'all 0.15s',
      }}>
        {mod.id}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontSize: 13, fontWeight: 600, lineHeight: 1.3,
          color: done ? t.t22 : t.t1b,
          textDecoration: done ? 'line-through' : 'none',
          textDecorationColor: t.t15,
        }}>
          Module {mod.id}
        </p>
        <p style={{
          fontSize: 12, marginTop: 3, lineHeight: 1.45,
          color: done ? t.t15 : t.t33,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {mod.name}
        </p>
      </div>
      <div style={{
        width: 21, height: 21, borderRadius: '50%', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: done ? color : 'transparent',
        border: `2px solid ${done ? color : t.brCD}`,
        boxShadow: done ? `0 0 10px ${color}55` : 'none',
        transition: 'all 0.2s ease',
      }}>
        {done && <Check size={10} color="white" strokeWidth={3} />}
      </div>
    </button>
  );
}

/* ── Detailed module card (CG M1/M2) ── */
function DetailedModuleItem({ mod, subjectId, color, isLastOdd, onOpen, t }) {
  const { getModuleDetail } = useProgress();
  const { moduleDataMap, qps } = getSubjectInfo(subjectId);
  const moduleData = moduleDataMap[mod.id];
  const detail     = getModuleDetail(subjectId, mod.id);

  if (!moduleData) return null;

  const topics      = moduleData.topics;
  const watchedCnt  = topics.filter(tp => detail.watched?.[tp.id]).length;
  const studiedCnt  = topics.filter(tp => detail.studied?.[tp.id]).length;
  const qpDoneCnt   = qps.filter((_, i) => detail.qp?.[i]).length;
  const revDoneCnt  = [0, 1, 2].filter(i => detail.revision?.[i]).length;
  const allStudied  = studiedCnt === topics.length;

  return (
    <button
      onClick={onOpen}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '15px 17px', borderRadius: 11,
        background: allStudied ? `${color}${t.doneBgA}` : t.card,
        border: `1px solid ${allStudied ? `${color}${t.doneBrA}` : t.brC}`,
        textAlign: 'left', cursor: 'pointer', width: '100%',
        transition: 'background 0.15s ease, border-color 0.15s ease',
        gridColumn: isLastOdd ? 'span 2' : 'span 1',
      }}
      onMouseEnter={e => {
        if (!allStudied) {
          e.currentTarget.style.borderColor = `${color}28`;
          e.currentTarget.style.background  = `${color}06`;
        }
      }}
      onMouseLeave={e => {
        if (!allStudied) {
          e.currentTarget.style.borderColor = t.brC;
          e.currentTarget.style.background  = t.card;
        }
      }}
    >
      {/* Number badge */}
      <div style={{
        width: 38, height: 38, borderRadius: 9, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, fontWeight: 700,
        background: allStudied ? `${color}15` : t.subtleBg,
        border: `1px solid ${allStudied ? `${color}25` : t.brS}`,
        color: allStudied ? color : t.t22,
        transition: 'all 0.15s',
      }}>
        {mod.id}
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontSize: 13, fontWeight: 600, lineHeight: 1.3,
          color: allStudied ? t.t22 : t.t1b,
          textDecoration: allStudied ? 'line-through' : 'none',
          textDecorationColor: t.t15,
        }}>
          Module {mod.id}
        </p>
        <p style={{
          fontSize: 12, marginTop: 2, lineHeight: 1.45,
          color: allStudied ? t.t15 : t.t33,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {mod.name}
        </p>
        {/* Progress mini row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Eye size={10} color={watchedCnt > 0 ? '#6366f1' : t.t18} />
            <span style={{ fontSize: 10, color: watchedCnt > 0 ? '#6366f1' : t.t18 }}>
              {watchedCnt}/{topics.length}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <BookOpen size={10} color={studiedCnt > 0 ? color : t.t18} />
            <span style={{ fontSize: 10, color: studiedCnt > 0 ? color : t.t18 }}>
              {studiedCnt}/{topics.length}
            </span>
          </div>
          {/* QP pips */}
          <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            {qps.map((_, i) => (
              <div key={i} style={{
                width: 6, height: 6, borderRadius: 2,
                background: detail.qp?.[i] ? '#10b981' : t.brCD,
              }} />
            ))}
          </div>
          {/* Revision pips */}
          <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: 6, height: 6, borderRadius: '50%',
                background: detail.revision?.[i] ? '#f59e0b' : t.brCD,
              }} />
            ))}
          </div>
        </div>
      </div>

      {/* Arrow */}
      <ChevronRight size={16} color={t.t22} style={{ flexShrink: 0 }} />
    </button>
  );
}

/* ════════════════════════════════════════
   Subject page
════════════════════════════════════════ */
export default function SubjectPage({ subjectId, onOpenModule }) {
  const { t } = useTheme();
  const isMobile = useIsMobile();
  const subject = SUBJECTS.find(s => s.id === subjectId);
  const { progress, toggleModule, getSubjectCompletion } = useProgress();
  const [pdfModalKey, setPdfModalKey] = useState(null); // 'syllabus' | 'pyq'

  if (!subject) return null;

  const pct       = getSubjectCompletion(subject.id);
  const modules   = progress[subject.id]?.modules || {};
  const doneCount = subject.modules.filter(m => modules[m.id]).length;

  const examDate = new Date(subject.examDate);
  const now      = new Date();
  const diffDays = Math.ceil((examDate - now) / 864e5);
  const isPast   = diffDays < 0;

  return (
    <div style={{
      padding: isMobile ? '16px' : '28px 32px', maxWidth: 1200, margin: '0 auto',
      display: 'flex', flexDirection: 'column', gap: isMobile ? 20 : 28,
    }}>

      {/* ── Subject header banner ── */}
      <div style={{
        padding: isMobile ? '20px 18px' : '28px 32px', borderRadius: 16,
        background: t.hero,
        border: `1px solid ${subject.color}1E`,
        position: 'relative', overflow: 'hidden',
        boxShadow: `0 1px 0 ${t.brS}`,
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: `linear-gradient(90deg, transparent 5%, ${subject.color}55 40%, ${subject.color}55 60%, transparent 95%)`,
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, width: 200, height: 200,
          background: `radial-gradient(circle at 90% 10%, ${subject.color}0D, transparent 65%)`,
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative', zIndex: 1,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between', gap: isMobile ? 16 : 32,
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, flexWrap: 'wrap',
            }}>
              <span style={{
                padding: '4px 10px', borderRadius: 6,
                fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                color: subject.color, background: `${subject.color}18`,
                border: `1px solid ${subject.color}28`,
              }}>
                {subject.code}
              </span>
              <span style={{
                padding: '4px 10px', borderRadius: 6, fontSize: 11, fontWeight: 600,
                color: t.t25, background: t.subtleBg, border: `1px solid ${t.brS}`,
              }}>
                {subject.credits} Credits
              </span>
              <span style={{
                padding: '4px 10px', borderRadius: 6, fontSize: 11, fontWeight: 600,
                color: subject.priority === 'HIGH' ? '#F97316' : t.t25,
                background: subject.priority === 'HIGH' ? 'rgba(249,115,22,0.1)' : t.subtleBg,
                border: `1px solid ${subject.priority === 'HIGH' ? 'rgba(249,115,22,0.22)' : t.brS}`,
              }}>
                {subject.priority === 'HIGH' ? '↑ High priority' : 'Medium priority'}
              </span>
            </div>

            <h1 style={{
              fontSize: 24, fontWeight: 800, letterSpacing: '-0.025em',
              color: t.t1, lineHeight: 1.2, marginBottom: 6,
            }}>
              {subject.name}
            </h1>
            <p style={{ fontSize: 13, color: t.t30, marginBottom: 20 }}>
              {isPast
                ? 'Exam complete'
                : `Exam on ${new Date(subject.examDate).toLocaleDateString('en-IN', {
                    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
                  })} · 9:00 AM`
              }
            </p>

            <div>
              <div style={{
                display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 12,
              }}>
                <span style={{ color: t.t25 }}>
                  {doneCount} of {subject.modules.length} modules complete
                </span>
                <span style={{ fontWeight: 600, color: pct > 0 ? subject.color : t.t22 }}>
                  {pct}%
                </span>
              </div>
              <div style={{ height: 3, borderRadius: 4, background: t.subtleBg, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', borderRadius: 4, width: `${pct}%`,
                  background: `linear-gradient(90deg, ${subject.color}80, ${subject.color})`,
                  boxShadow: pct > 0 ? `0 0 10px ${subject.color}50` : 'none',
                  transition: 'width 0.7s cubic-bezier(0.4,0,0.2,1)',
                }} />
              </div>
            </div>
          </div>

          {!isPast && !isMobile && (
            <div style={{
              flexShrink: 0, paddingLeft: 32,
              borderLeft: `1px solid ${t.brS}`,
            }}>
              <p style={{
                fontSize: 9, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.18em', color: `${subject.color}65`,
                textAlign: 'center', marginBottom: 12,
              }}>
                Time Left
              </p>
              <Countdown targetDate={subject.examDate} color={subject.color} compact />
            </div>
          )}
        </div>
      </div>

      {/* ── Modules ── */}
      <div>
        <SectionLabel label="Modules" t={t} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
          {subject.modules.map((mod, idx) => {
            const isLastOdd = subject.modules.length % 2 !== 0 && idx === subject.modules.length - 1;
            const isDetailed = hasModuleDetail(subject.id, mod.id);

            if (isDetailed) {
              return (
                <DetailedModuleItem
                  key={mod.id}
                  mod={mod}
                  subjectId={subject.id}
                  color={subject.color}
                  isLastOdd={isLastOdd}
                  onOpen={() => onOpenModule?.(mod.id)}
                  t={t}
                />
              );
            }

            const done = !!modules[mod.id];
            return (
              <SimpleModuleItem
                key={mod.id}
                mod={mod}
                done={done}
                color={subject.color}
                isLastOdd={isLastOdd}
                onToggle={() => toggleModule(subject.id, mod.id)}
                t={t}
              />
            );
          })}
        </div>
      </div>

      {/* ── Resources ── */}
      <div>
        <SectionLabel label="Resources" t={t} />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 10 }}>
          {RESOURCES.map(r => {
            const data    = subject.links?.[r.key];
            const files   = Array.isArray(data) ? data : [];
            const hasData = Array.isArray(data) ? true : !!data;
            const count   = files.length;

            const cardBase = {
              padding: '20px', borderRadius: 12,
              display: 'flex', flexDirection: 'column',
            };

            if (!hasData) {
              return (
                <div key={r.key} style={{
                  ...cardBase,
                  background: t.resBg, border: `1px solid ${t.resBr}`,
                  opacity: 0.48, cursor: 'not-allowed',
                }}>
                  <div style={{ color: t.t18, marginBottom: 12 }}>{r.icon}</div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: t.t25, marginBottom: 5 }}>{r.label}</p>
                  <p style={{ fontSize: 12, color: t.t15, lineHeight: 1.55, flex: 1 }}>{r.desc}</p>
                  <div style={{
                    marginTop: 14, padding: '3px 8px', borderRadius: 5,
                    display: 'inline-flex', alignSelf: 'flex-start',
                    fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em',
                    color: t.t12, background: t.subtleBg, border: `1px solid ${t.brS}`,
                  }}>
                    Coming soon
                  </div>
                </div>
              );
            }

            const badge = count > 0 ? `${count} file${count !== 1 ? 's' : ''} →` : 'Open →';
            const inner = (
              <>
                <div style={{ color: subject.color, marginBottom: 12 }}>{r.icon}</div>
                <p style={{ fontSize: 13, fontWeight: 600, color: t.t1, marginBottom: 5 }}>{r.label}</p>
                <p style={{ fontSize: 12, color: t.t33, lineHeight: 1.55, flex: 1 }}>{r.desc}</p>
                <div style={{
                  marginTop: 14, padding: '3px 8px', borderRadius: 5,
                  display: 'inline-flex', alignSelf: 'flex-start',
                  fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em',
                  color: subject.color, background: `${subject.color}12`, border: `1px solid ${subject.color}28`,
                }}>
                  {badge}
                </div>
              </>
            );

            return (
              <button key={r.key}
                onClick={() => setPdfModalKey(r.key)}
                style={{
                  ...cardBase, textAlign: 'left', cursor: 'pointer',
                  background: t.resBg, border: `1px solid ${subject.color}28`,
                  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${subject.color}55`;
                  e.currentTarget.style.boxShadow = `0 0 0 3px ${subject.color}12`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `${subject.color}28`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {inner}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── PDF Viewer Modal ── */}
      {pdfModalKey && (() => {
        const data      = subject.links?.[pdfModalKey];
        const files     = Array.isArray(data) ? data : [];
        const folderUrl = subject.links?.[`${pdfModalKey}Folder`] || null;
        const label     = { syllabus: 'Syllabus', pyq: 'PYQ' }[pdfModalKey] || pdfModalKey;
        return (
          <PdfViewerModal
            subject={subject} files={files} folderUrl={folderUrl} label={label}
            t={t} onClose={() => setPdfModalKey(null)}
          />
        );
      })()}

    </div>
  );
}
