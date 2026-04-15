import { SUBJECTS, getNextExam } from '../data/subjects';
import { useProgress } from '../context/ProgressContext';
import { useTheme } from '../context/ThemeContext';
import { useIsMobile } from '../hooks/useIsMobile';
import Countdown from '../components/Countdown';
import { Clock, TrendingUp, Award } from 'lucide-react';

/* ── Section label ── */
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

/* ── Stat card ── */
function StatCard({ icon, label, value, sub, accent, t }) {
  return (
    <div style={{
      padding: '18px 20px', borderRadius: 12,
      background: t.card, border: `1px solid ${t.brC}`,
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <div style={{
        width: 38, height: 38, borderRadius: 9,
        background: `${accent}12`, border: `1px solid ${accent}20`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: accent, flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <p style={{
          fontSize: 10, fontWeight: 600, textTransform: 'uppercase',
          letterSpacing: '0.1em', color: t.t28,
        }}>
          {label}
        </p>
        <p style={{
          fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em',
          color: t.t1, lineHeight: 1.25, marginTop: 2,
        }}>
          {value}
        </p>
        {sub && (
          <p style={{ fontSize: 11, color: t.t25, marginTop: 2 }}>{sub}</p>
        )}
      </div>
    </div>
  );
}

/* ── Subject card ── */
function SubjectCard({ subject, onSelect, t }) {
  const { getSubjectCompletion } = useProgress();
  const pct      = getSubjectCompletion(subject.id);
  const diffDays = Math.ceil((new Date(subject.examDate) - new Date()) / 864e5);
  const isPast   = diffDays < 0;

  return (
    <button
      onClick={() => onSelect(subject.id)}
      style={{
        padding: '20px', borderRadius: 14,
        background: t.card, border: `1px solid ${t.brC}`,
        textAlign: 'left', cursor: 'pointer', width: '100%',
        position: 'relative', overflow: 'hidden',
        transition: 'transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${subject.color}35`;
        e.currentTarget.style.boxShadow   = `0 8px 32px ${subject.color}0C, 0 2px 8px rgba(0,0,0,0.06)`;
        e.currentTarget.style.transform   = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = t.brC;
        e.currentTarget.style.boxShadow   = 'none';
        e.currentTarget.style.transform   = 'translateY(0)';
      }}
    >
      {/* Colour stripe */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${subject.color}90, ${subject.color}18, transparent)`,
      }} />
      {/* Ambient inner glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: 110, height: 110,
        background: `radial-gradient(circle at 90% 10%, ${subject.color}09, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Header row */}
      <div style={{
        display: 'flex', alignItems: 'flex-start',
        justifyContent: 'space-between', marginBottom: 14,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <div style={{
            width: 42, height: 42, borderRadius: 10,
            background: `${subject.color}14`, border: `1px solid ${subject.color}22`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 700, color: subject.color, flexShrink: 0,
            letterSpacing: '-0.02em',
          }}>
            {subject.shortName.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: t.t1, lineHeight: 1.25 }}>
              {subject.shortName}
            </p>
            <p style={{ fontSize: 11, color: t.t25, marginTop: 2 }}>{subject.code}</p>
          </div>
        </div>

        {/* Days badge */}
        <div style={{
          padding: '3px 8px', borderRadius: 6, flexShrink: 0,
          fontSize: 11, fontWeight: 600,
          background: isPast ? t.subtleBg : `${subject.color}14`,
          color: isPast ? t.t20 : subject.color,
          border: `1px solid ${isPast ? t.brS : `${subject.color}25`}`,
        }}>
          {isPast ? 'Done' : diffDays === 0 ? 'Today' : `${diffDays}d`}
        </div>
      </div>

      {/* Full name */}
      <p style={{ fontSize: 12, color: t.t33, marginBottom: 16, lineHeight: 1.5 }}>
        {subject.name}
      </p>

      {/* Progress bar */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7, fontSize: 11 }}>
          <span style={{ color: t.t20 }}>{subject.modules.length} modules</span>
          <span style={{ fontWeight: 600, color: pct > 0 ? subject.color : t.t20 }}>{pct}%</span>
        </div>
        <div style={{ height: 3, borderRadius: 4, background: t.subtleBg, overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 4, width: `${pct}%`,
            background: `linear-gradient(90deg, ${subject.color}80, ${subject.color})`,
            boxShadow: pct > 0 ? `0 0 8px ${subject.color}50` : 'none',
            transition: 'width 0.7s cubic-bezier(0.4,0,0.2,1)',
          }} />
        </div>
      </div>

      {/* Priority label */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 13 }}>
        <span style={{
          fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em',
          color: subject.priority === 'HIGH' ? '#F97316' : t.t18,
        }}>
          {subject.priority === 'HIGH' ? '↑ High' : 'Medium'}
        </span>
      </div>
    </button>
  );
}

/* ── Timeline item ── */
function TimelineItem({ subject, daysFromNow, t }) {
  const isPast  = daysFromNow < 0;
  const isNext  = daysFromNow >= 0 && daysFromNow <= 1;
  const date    = new Date(subject.examDate);
  const dateStr = date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  const dayStr  = date.toLocaleDateString('en-IN', { weekday: 'short' });

  return (
    <div style={{
      padding: '13px 14px', borderRadius: 10,
      background: isNext ? `${subject.color}08` : t.schBg,
      border: `1px solid ${isNext ? `${subject.color}28` : t.schBr}`,
      opacity: isPast ? 0.35 : 1,
      display: 'flex', flexDirection: 'column', gap: 8,
      position: 'relative', overflow: 'hidden',
    }}>
      {isNext && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: `linear-gradient(90deg, transparent, ${subject.color}60, transparent)`,
        }} />
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{
          width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
          background: isPast ? t.t12 : subject.color,
          boxShadow: isNext ? `0 0 8px ${subject.color}` : 'none',
        }} />
        <span style={{
          fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em',
          color: isNext ? subject.color : t.t22,
        }}>
          {subject.code}
        </span>
      </div>

      <p style={{
        fontSize: 12, fontWeight: 600, lineHeight: 1.35,
        color: isNext ? t.t1 : t.t40,
      }}>
        {subject.shortName}
      </p>

      <div>
        <p style={{
          fontSize: 13, fontWeight: 600,
          color: isNext ? subject.color : t.t30,
        }}>
          {dateStr}
        </p>
        <p style={{ fontSize: 10, color: t.t20, marginTop: 2 }}>
          {isPast ? 'done' : daysFromNow === 0 ? 'today' : dayStr}
        </p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   Home page
════════════════════════════════════════ */
export default function Home({ onSelectSubject }) {
  const { t } = useTheme();
  const isMobile = useIsMobile();
  const nextExam = getNextExam();
  const { getSubjectCompletion } = useProgress();
  const now = new Date();

  const nextDays  = nextExam
    ? Math.ceil((new Date(nextExam.examDate) - now) / 864e5)
    : 0;
  const totalPct  = Math.round(
    SUBJECTS.reduce((acc, s) => acc + getSubjectCompletion(s.id), 0) / SUBJECTS.length
  );
  const remaining = SUBJECTS.filter(s => new Date(s.examDate) >= now).length;
  const started   = SUBJECTS.filter(s => getSubjectCompletion(s.id) > 0).length;

  return (
    <div style={{
      padding: isMobile ? '16px' : '28px 32px', maxWidth: 1200, margin: '0 auto',
      display: 'flex', flexDirection: 'column', gap: isMobile ? 20 : 28,
    }}>

      {/* ── Stats row ── */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 10 }}>
        <StatCard
          icon={<Clock size={16} />}
          label="Next Exam In"
          value={nextDays > 0 ? `${nextDays}d` : nextDays === 0 ? 'Today!' : '—'}
          sub={nextExam ? nextExam.name : 'All done'}
          accent="#6366F1"
          t={t}
        />
        <StatCard
          icon={<TrendingUp size={16} />}
          label="Overall Progress"
          value={`${totalPct}%`}
          sub={`${started} of 6 subjects started`}
          accent="#10B981"
          t={t}
        />
        <StatCard
          icon={<Award size={16} />}
          label="Exams Remaining"
          value={remaining}
          sub={`${6 - remaining} completed`}
          accent="#F59E0B"
          t={t}
        />
      </div>

      {/* ── Hero: next exam countdown ── */}
      {nextExam && (
        <div style={{
          padding: '28px 32px', borderRadius: 16,
          background: t.hero,
          border: `1px solid ${nextExam.color}1E`,
          position: 'relative', overflow: 'hidden',
          boxShadow: `0 1px 0 ${t.brS}`,
        }}>
          {/* Top glow line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: `linear-gradient(90deg, transparent 5%, ${nextExam.color}55 50%, transparent 95%)`,
          }} />
          {/* Ambient radial */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: `radial-gradient(ellipse 55% 120% at 85% 50%, ${nextExam.color}0A, transparent)`,
          }} />

          <div style={{
            position: 'relative', zIndex: 1,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between', gap: isMobile ? 20 : 32,
          }}>
            {/* Left info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <div className="animate-dot-pulse" style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: nextExam.color, boxShadow: `0 0 9px ${nextExam.color}`,
                }} />
                <span style={{
                  fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.2em', color: `${nextExam.color}80`,
                }}>
                  Up Next
                </span>
              </div>

              <h2 style={{
                fontSize: 26, fontWeight: 800, letterSpacing: '-0.03em',
                color: t.t1, lineHeight: 1.2, marginBottom: 7,
              }}>
                {nextExam.name}
              </h2>
              <p style={{ fontSize: 13, color: t.t30, marginBottom: 20 }}>
                {new Date(nextExam.examDate).toLocaleDateString('en-IN', {
                  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
                })}
                <span style={{ color: t.t18 }}> · 9:00 AM</span>
              </p>

              {/* Badge row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                {[
                  { label: nextExam.code, color: nextExam.color, bg: `${nextExam.color}14`, border: `${nextExam.color}25` },
                  { label: '↑ High Priority', color: '#F97316', bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.2)' },
                  { label: '4 Credits', color: t.t28, bg: t.subtleBg, border: t.brS },
                ].map(b => (
                  <span key={b.label} style={{
                    padding: '4px 10px', borderRadius: 6,
                    fontSize: 12, fontWeight: 600,
                    color: b.color, background: b.bg, border: `1px solid ${b.border}`,
                  }}>
                    {b.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right countdown */}
            {!isMobile && (
              <div style={{ flexShrink: 0 }}>
                <Countdown targetDate={nextExam.examDate} color={nextExam.color} />
              </div>
            )}
            {isMobile && (
              <div style={{ alignSelf: 'center' }}>
                <Countdown targetDate={nextExam.examDate} color={nextExam.color} compact />
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Subject cards ── */}
      <div>
        <SectionLabel label="Subject Progress" t={t} />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 12 }}>
          {SUBJECTS.map(s => (
            <SubjectCard key={s.id} subject={s} onSelect={onSelectSubject} t={t} />
          ))}
        </div>
      </div>

      {/* ── Exam timeline ── */}
      <div>
        <SectionLabel label="Exam Schedule" t={t} />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)', gap: 10 }}>
          {SUBJECTS.map(s => {
            const diffDays = Math.ceil((new Date(s.examDate) - now) / 864e5);
            return <TimelineItem key={s.id} subject={s} daysFromNow={diffDays} t={t} />;
          })}
        </div>
      </div>

    </div>
  );
}
