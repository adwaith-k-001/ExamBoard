import { useProgress } from '../context/ProgressContext';
import { SUBJECTS } from '../data/subjects';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { BookOpen, LayoutDashboard, LogOut } from 'lucide-react';

/* ── SVG progress ring ── */
function CircleProgress({ pct, color, size = 34, track }) {
  const r    = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke={track} strokeWidth={2.5}
      />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke={color} strokeWidth={2.5}
        strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
        style={{ transition: 'stroke-dasharray 0.6s cubic-bezier(0.4,0,0.2,1)' }}
      />
    </svg>
  );
}

/* ── Overview nav item ── */
function NavItem({ isActive, onClick, icon, label, t }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 10px',
        borderRadius: 8,
        background: isActive ? t.navActiveBg : 'transparent',
        color: isActive ? t.navActive : t.navInactive,
        border: 'none',
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: isActive ? 600 : 500,
        textAlign: 'left',
        position: 'relative',
        transition: 'background 0.12s, color 0.12s',
      }}
      onMouseEnter={e => {
        if (!isActive) {
          e.currentTarget.style.background = t.navHoverBg;
          e.currentTarget.style.color      = t.navHoverT;
        }
      }}
      onMouseLeave={e => {
        if (!isActive) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color      = t.navInactive;
        }
      }}
    >
      {isActive && (
        <div style={{
          position: 'absolute',
          left: 0, top: '50%', transform: 'translateY(-50%)',
          width: 3, height: 18, borderRadius: '0 2px 2px 0',
          background: t.navInd,
        }} />
      )}
      {icon}
      <span>{label}</span>
    </button>
  );
}

/* ── Subject nav item ── */
function SubjectItem({ subject, isActive, pct, diffDays, isPast, onClick, t }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 10px',
        borderRadius: 8,
        background: isActive ? `${subject.color}0F` : 'transparent',
        color: isActive ? t.t1 : t.navInactive,
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        position: 'relative',
        transition: 'background 0.12s, color 0.12s',
      }}
      onMouseEnter={e => {
        if (!isActive) {
          e.currentTarget.style.background = t.navHoverBg;
          e.currentTarget.style.color      = t.navHoverT;
        }
      }}
      onMouseLeave={e => {
        if (!isActive) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color      = t.navInactive;
        }
      }}
    >
      {isActive && (
        <div style={{
          position: 'absolute',
          left: 0, top: '50%', transform: 'translateY(-50%)',
          width: 3, height: 18, borderRadius: '0 2px 2px 0',
          background: subject.color,
        }} />
      )}

      {/* Progress ring */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <CircleProgress
          pct={pct}
          color={isActive ? subject.color : `${subject.color}55`}
          track={t.ring}
        />
        <span style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 7.5, fontWeight: 700, letterSpacing: '-0.02em',
          color: isActive ? subject.color : `${subject.color}70`,
        }}>
          {pct}
        </span>
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontSize: 13, fontWeight: 600, lineHeight: 1.3,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {subject.shortName}
        </p>
        <p style={{
          fontSize: 11, marginTop: 2,
          color: isPast ? t.t15 : t.t22,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {isPast ? 'Complete' : diffDays === 0 ? 'Today!' : `${diffDays}d left`}
        </p>
      </div>

      {!isPast && diffDays <= 5 && (
        <div style={{
          width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
          background: subject.color,
          boxShadow: `0 0 7px ${subject.color}`,
          animation: diffDays <= 2 ? 'dot-pulse 2s ease-in-out infinite' : 'none',
        }} />
      )}
    </button>
  );
}

/* ── Main sidebar ── */
export default function Sidebar({ activeSubject, onSelectSubject }) {
  const { t } = useTheme();
  const { getSubjectCompletion } = useProgress();
  const { logout } = useAuth();
  const now = new Date();

  return (
    <aside style={{
      width: 258,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      background: t.surface,
      borderRight: `1px solid ${t.br}`,
      height: '100%',
    }}>

      {/* ── Brand ── */}
      <div style={{
        padding: '22px 20px',
        borderBottom: `1px solid ${t.brS}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.12))',
            border: '1px solid rgba(99,102,241,0.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <BookOpen size={16} color="#9DAAF5" />
          </div>
          <div>
            <p style={{
              fontSize: 14, fontWeight: 700, letterSpacing: '-0.015em',
              background: t.brand,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              ExamBoard
            </p>
            <p style={{ fontSize: 11, color: t.t20, marginTop: 1 }}>
              KTU · S6 · 2026
            </p>
          </div>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav style={{
        flex: 1, padding: '14px 10px', overflowY: 'auto',
        display: 'flex', flexDirection: 'column', gap: 22,
      }}>
        <div>
          <NavItem
            isActive={activeSubject === null}
            onClick={() => onSelectSubject(null)}
            icon={<LayoutDashboard size={15} />}
            label="Overview"
            t={t}
          />
        </div>

        <div>
          <p style={{
            fontSize: 10, fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: '0.18em', color: t.navLabel,
            padding: '0 10px', marginBottom: 6,
          }}>
            Subjects
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {SUBJECTS.map((s) => {
              const pct      = getSubjectCompletion(s.id);
              const diffMs   = new Date(s.examDate) - now;
              const diffDays = Math.ceil(diffMs / 864e5);
              const isPast   = diffMs < 0;
              const isActive = activeSubject === s.id;

              return (
                <SubjectItem
                  key={s.id}
                  subject={s}
                  isActive={isActive}
                  pct={pct}
                  diffDays={diffDays}
                  isPast={isPast}
                  onClick={() => onSelectSubject(s.id)}
                  t={t}
                />
              );
            })}
          </div>
        </div>
      </nav>

      {/* ── Footer / user ── */}
      <div style={{
        padding: '14px 18px',
        borderTop: `1px solid ${t.brS}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: 'linear-gradient(135deg, #5B6EF5, #8B5CF6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 700, color: '#fff',
              flexShrink: 0,
            }}>
              A
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: t.t45, lineHeight: 1.2 }}>
                Adwaith
              </p>
              <p style={{ fontSize: 11, color: t.t18, marginTop: 1 }}>
                B.Tech CS · S6
              </p>
            </div>
          </div>

          <button
            onClick={logout}
            title="Sign out"
            style={{
              width: 30, height: 30, borderRadius: 8,
              background: 'transparent', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: t.t22, transition: 'all 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(239,68,68,0.1)';
              e.currentTarget.style.color = '#F87171';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = t.t22;
            }}
          >
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}
