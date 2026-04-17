import { useMemo, useState } from 'react';
import { useStudyLog } from '../context/StudyLogContext';
import { useTheme } from '../context/ThemeContext';
import { useIsMobile } from '../hooks/useIsMobile';
import { ALL_SUBJECTS, getSubjectColor } from '../data/subjects';

const ACTIVITIES = [
  { key: 'lectures', label: 'Lectures', color: '#6366F1' },
  { key: 'studying', label: 'Studying', color: '#8B5CF6' },
  { key: 'pyq',      label: 'PYQ',      color: '#10B981' },
  { key: 'revision', label: 'Revision', color: '#F59E0B' },
];

const RANGES = [
  { key: '7d',  label: '7d' },
  { key: '14d', label: '14d' },
  { key: '30d', label: '30d' },
  { key: 'all', label: 'All' },
];

/* ─── helpers ────────────────────────────────────────────────── */
function fmt(s) {
  if (!s || s <= 0) return '0m';
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (h > 0 && m > 0) return `${h}h ${m}m`;
  if (h > 0) return `${h}h`;
  return `${m}m`;
}

function fmtH(s) { return (s / 3600).toFixed(1) + 'h'; }

function getDayStr(offsetDays = 0) {
  return new Date(Date.now() - offsetDays * 86400000).toISOString().split('T')[0];
}

function shortDay(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
}

function shortDayAbbr(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

/* ─── Donut Chart ────────────────────────────────────────────── */
function DonutChart({ data, size = 156, thickness = 26 }) {
  const { t } = useTheme();
  const cx = size / 2, cy = size / 2;
  const r  = (size - thickness) / 2 - 2;
  const circ = 2 * Math.PI * r;
  const total = data.reduce((s, d) => s + d.value, 0);

  if (total === 0) {
    return (
      <svg width={size} height={size}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={t.ring} strokeWidth={thickness} />
        <text x={cx} y={cy + 4} textAnchor="middle" fontSize={11} fill={t.t20} fontFamily="inherit">
          No data
        </text>
      </svg>
    );
  }

  const GAP_DEG = data.length > 1 ? 3 : 0;
  const totalAngle = 360 - data.length * GAP_DEG;

  let angle = -90;
  const segs = data.map(d => {
    const span = (d.value / total) * totalAngle;
    const start = angle;
    angle += span + GAP_DEG;
    return { ...d, startAngle: start, span };
  });

  return (
    <svg width={size} height={size}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={t.ring} strokeWidth={thickness} />
      {segs.map((seg, i) => {
        if (seg.span < 0.5) return null;
        const frac = seg.span / 360;
        return (
          <circle
            key={i}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth={thickness}
            strokeDasharray={`${frac * circ} ${circ}`}
            strokeDashoffset={0}
            transform={`rotate(${seg.startAngle}, ${cx}, ${cy})`}
            opacity={0.88}
          />
        );
      })}
    </svg>
  );
}

/* ─── Legend ─────────────────────────────────────────────────── */
function Legend({ items, t }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, minWidth: 0 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
          <div style={{ width: 10, height: 10, borderRadius: 3, background: item.color, flexShrink: 0 }} />
          <span style={{ fontSize: 12, color: t.t30, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {item.label}
          </span>
          <span style={{ fontSize: 12, fontWeight: 700, color: t.t40, flexShrink: 0 }}>{fmt(item.value)}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Vertical Bar Chart (daily) ─────────────────────────────── */
function DailyBarChart({ days, t, isMobile }) {
  if (!days.length) return null;
  const maxVal = Math.max(...days.map(d => d.total), 1);
  const chartH  = isMobile ? 100 : 130;
  const barW    = isMobile ? 18 : 26;
  const gap     = isMobile ? 4 : 8;
  const count   = days.length;
  const svgW    = count * (barW + gap) + gap;

  return (
    <div style={{ overflowX: 'auto', overflowY: 'visible', paddingBottom: 4 }}>
      <svg width={svgW} height={chartH + 32} style={{ display: 'block' }}>
        {days.map((day, i) => {
          const x = gap + i * (barW + gap);
          const filled = (day.total / maxVal) * chartH;
          return (
            <g key={day.date}>
              {/* Background track */}
              <rect
                x={x} y={0} width={barW} height={chartH}
                rx={4} fill={t.ring} opacity={0.6}
              />
              {/* Stacked fill by activity */}
              {(() => {
                let yOff = chartH;
                return ACTIVITIES.map(act => {
                  const val = day[act.key] || 0;
                  if (!val) return null;
                  const h = (val / maxVal) * chartH;
                  yOff -= h;
                  return (
                    <rect
                      key={act.key}
                      x={x} y={yOff} width={barW} height={h}
                      rx={h >= chartH ? 4 : 2}
                      fill={act.color}
                      opacity={0.85}
                    />
                  );
                });
              })()}
              {/* Label */}
              <text
                x={x + barW / 2}
                y={chartH + 16}
                textAnchor="middle"
                fontSize={9}
                fill={t.t18}
                fontFamily="inherit"
              >
                {new Date(day.date + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
              </text>
              {day.total > 0 && (
                <text
                  x={x + barW / 2}
                  y={chartH - filled - 5}
                  textAnchor="middle"
                  fontSize={8}
                  fill={t.t25}
                  fontFamily="inherit"
                >
                  {Math.round(day.total / 60)}m
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ─── Horizontal Bar Row ──────────────────────────────────────── */
function HBar({ label, subLabel, value, maxValue, color, t }) {
  const pct = maxValue > 0 ? (value / maxValue) * 100 : 0;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: t.t35, maxWidth: '65%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {label}
        </span>
        <span style={{ fontSize: 11, fontWeight: 700, color: t.t30, flexShrink: 0 }}>{fmt(value)}</span>
      </div>
      {subLabel && <p style={{ fontSize: 10, color: t.t18, marginTop: -3 }}>{subLabel}</p>}
      <div style={{ height: 6, borderRadius: 4, background: t.ring, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: 4, transition: 'width 0.5s ease' }} />
      </div>
    </div>
  );
}

/* ─── Stacked Horizontal Bar ──────────────────────────────────── */
function StackedHBar({ label, segments, total, maxTotal, t }) {
  const pct = maxTotal > 0 ? (total / maxTotal) * 100 : 0;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: t.t40 }}>{label}</span>
        <span style={{ fontSize: 11, color: t.t25 }}>{fmt(total)}</span>
      </div>
      <div style={{ height: 10, borderRadius: 5, background: t.ring, overflow: 'hidden', display: 'flex' }}>
        {segments.map((seg, i) => {
          const segPct = total > 0 ? (seg.value / maxTotal) * 100 : 0;
          if (!seg.value) return null;
          return (
            <div key={i} style={{ height: '100%', width: `${segPct}%`, background: seg.color, transition: 'width 0.5s ease' }} />
          );
        })}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {segments.filter(s => s.value > 0).map((seg, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 6, height: 6, borderRadius: 2, background: seg.color }} />
            <span style={{ fontSize: 10, color: t.t22 }}>{seg.label} {fmt(seg.value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Calendar Heatmap ────────────────────────────────────────── */
function CalendarHeatmap({ sessions, t, isMobile }) {
  const WEEKS = isMobile ? 10 : 14;
  const totalDays = WEEKS * 7;

  const byDate = useMemo(() => {
    const map = {};
    for (const s of sessions) {
      map[s.date] = (map[s.date] || 0) + s.duration;
    }
    return map;
  }, [sessions]);

  const today = new Date();
  const todayDow = today.getDay();
  const endOffset = (todayDow + 6) % 7; // days since last Monday
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - (totalDays - 1) - endOffset + 6);

  const days = [];
  for (let i = 0; i < totalDays; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    const str = d.toISOString().split('T')[0];
    const val = byDate[str] || 0;
    const isFuture = d > today;
    days.push({ str, val, isFuture });
  }

  const maxVal = Math.max(...days.map(d => d.val), 3600);
  const cellSize = isMobile ? 14 : 16;
  const cellGap  = isMobile ? 2 : 3;

  const weeks = [];
  for (let w = 0; w < WEEKS; w++) {
    weeks.push(days.slice(w * 7, w * 7 + 7));
  }

  const DOW_LABELS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  function heatColor(val, isFuture) {
    if (isFuture) return 'transparent';
    if (!val) return t.ring;
    const intensity = Math.min(Math.log(val + 1) / Math.log(maxVal + 1), 1);
    if (intensity < 0.25) return '#1e1b4b';
    if (intensity < 0.5)  return '#3730a3';
    if (intensity < 0.75) return '#4f46e5';
    return '#818cf8';
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <div style={{ display: 'flex', gap: cellGap + 2, alignItems: 'flex-start' }}>
        {/* Day-of-week labels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: cellGap, paddingTop: 20 }}>
          {DOW_LABELS.map((l, i) => (
            <div key={i} style={{ width: 12, height: cellSize, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 9, color: t.t18, fontWeight: 600 }}>{i % 2 === 0 ? l : ''}</span>
            </div>
          ))}
        </div>
        {/* Weeks grid */}
        <div>
          {/* Month labels */}
          <div style={{ display: 'flex', gap: cellGap, marginBottom: 4 }}>
            {weeks.map((week, wi) => {
              const firstDay = new Date(week[0].str + 'T00:00:00');
              const label = firstDay.getDate() <= 7
                ? firstDay.toLocaleDateString('en-IN', { month: 'short' })
                : '';
              return (
                <div key={wi} style={{ width: cellSize, flexShrink: 0 }}>
                  <span style={{ fontSize: 9, color: t.t20 }}>{label}</span>
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: cellGap }}>
            {weeks.map((week, wi) => (
              <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: cellGap }}>
                {week.map((day, di) => (
                  <div
                    key={di}
                    title={day.str + (day.val ? ` · ${fmt(day.val)}` : '')}
                    style={{
                      width: cellSize, height: cellSize,
                      borderRadius: 3,
                      background: heatColor(day.val, day.isFuture),
                      border: day.str === getDayStr(0) ? '1px solid #818cf8' : 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Intensity scale */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10 }}>
        <span style={{ fontSize: 10, color: t.t18 }}>Less</span>
        {['#1e1b4b', '#3730a3', '#4f46e5', '#818cf8'].map((c, i) => (
          <div key={i} style={{ width: 12, height: 12, borderRadius: 3, background: c }} />
        ))}
        <span style={{ fontSize: 10, color: t.t18 }}>More</span>
      </div>
    </div>
  );
}

/* ─── Section card ────────────────────────────────────────────── */
function Card({ title, children, t, style = {} }) {
  return (
    <div style={{ padding: '18px 20px', borderRadius: 12, background: t.card, border: `1px solid ${t.brC}`, ...style }}>
      {title && (
        <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: t.t20, marginBottom: 16 }}>
          {title}
        </p>
      )}
      {children}
    </div>
  );
}

/* ════════════════════════════════════════
   StatsPage
════════════════════════════════════════ */
export default function StatsPage() {
  const { t, mode } = useTheme();
  const { sessions } = useStudyLog();
  const isMobile = useIsMobile();

  const [range, setRange] = useState('14d');

  /* ── filter sessions by range ── */
  const filtered = useMemo(() => {
    if (range === 'all') return sessions;
    const days = range === '7d' ? 7 : range === '14d' ? 14 : 30;
    const cutoff = getDayStr(days - 1);
    return sessions.filter(s => s.date >= cutoff);
  }, [sessions, range]);

  /* ── summary stats ── */
  const summary = useMemo(() => {
    const totalSec   = filtered.reduce((a, s) => a + s.duration, 0);
    const uniqueDays = new Set(filtered.map(s => s.date)).size;
    const todayStr   = getDayStr(0);
    const todaySec   = filtered.filter(s => s.date === todayStr).reduce((a, s) => a + s.duration, 0);

    // streak from all sessions (not range-filtered)
    let streak = 0;
    let d = new Date();
    while (true) {
      const str = d.toISOString().split('T')[0];
      if (!sessions.find(s => s.date === str)) break;
      streak++;
      d.setDate(d.getDate() - 1);
    }

    const avgSec = uniqueDays > 0 ? totalSec / uniqueDays : 0;
    return { totalSec, uniqueDays, sessionCount: filtered.length, todaySec, streak, avgSec };
  }, [filtered, sessions]);

  /* ── subject totals ── */
  const subjectData = useMemo(() => {
    const totals = {};
    for (const s of filtered) totals[s.subjectId] = (totals[s.subjectId] || 0) + s.duration;
    return Object.entries(totals)
      .map(([id, value]) => {
        const sub = ALL_SUBJECTS.find(s => s.id === id);
        return { id, value, label: sub?.shortName ?? id, color: sub ? getSubjectColor(sub, mode) : '#6366F1' };
      })
      .sort((a, b) => b.value - a.value);
  }, [filtered, mode]);

  /* ── activity totals ── */
  const activityData = useMemo(() => {
    const totals = {};
    for (const s of filtered) totals[s.activity] = (totals[s.activity] || 0) + s.duration;
    return ACTIVITIES
      .map(a => ({ ...a, value: totals[a.key] || 0 }))
      .filter(a => a.value > 0);
  }, [filtered]);

  /* ── stacked: subject × activity ── */
  const subjectActivityData = useMemo(() => {
    const map = {};
    for (const s of filtered) {
      if (!map[s.subjectId]) map[s.subjectId] = {};
      map[s.subjectId][s.activity] = (map[s.subjectId][s.activity] || 0) + s.duration;
    }
    return subjectData.map(sub => ({
      ...sub,
      segments: ACTIVITIES.map(a => ({ ...a, value: map[sub.id]?.[a.key] || 0 })),
    }));
  }, [filtered, subjectData]);

  /* ── daily bar data ── */
  const dailyData = useMemo(() => {
    const days = range === '7d' ? 7 : range === '14d' ? 14 : range === '30d' ? 30 : 30;
    const result = [];
    for (let i = days - 1; i >= 0; i--) {
      const date = getDayStr(i);
      const daySessions = filtered.filter(s => s.date === date);
      const entry = { date, total: 0 };
      for (const act of ACTIVITIES) {
        entry[act.key] = daySessions.filter(s => s.activity === act.key).reduce((a, s) => a + s.duration, 0);
        entry.total += entry[act.key];
      }
      result.push(entry);
    }
    return result;
  }, [filtered, range]);

  /* ── module totals (top 10) ── */
  const moduleData = useMemo(() => {
    const map = {};
    for (const s of filtered) {
      if (!s.moduleName) continue;
      const key = `${s.subjectId}|M${s.moduleId}`;
      if (!map[key]) {
        const sub = ALL_SUBJECTS.find(x => x.id === s.subjectId);
        map[key] = { label: `M${s.moduleId} · ${s.moduleName}`, value: 0, color: sub ? getSubjectColor(sub, mode) : '#6366F1' };
      }
      map[key].value += s.duration;
    }
    return Object.values(map).sort((a, b) => b.value - a.value).slice(0, 10);
  }, [filtered, mode]);

  /* ── topic totals (top 10) ── */
  const topicData = useMemo(() => {
    const map = {};
    for (const s of filtered) {
      if (!s.topicName) continue;
      const key = `${s.subjectId}|${s.topicId}`;
      if (!map[key]) {
        const sub = ALL_SUBJECTS.find(x => x.id === s.subjectId);
        map[key] = { label: s.topicName, value: 0, color: sub ? getSubjectColor(sub, mode) : '#6366F1' };
      }
      map[key].value += s.duration;
    }
    return Object.values(map).sort((a, b) => b.value - a.value).slice(0, 10);
  }, [filtered, mode]);

  /* ── activity-per-day (for activity trend) ── */
  const activityTrendData = useMemo(() => {
    const days = range === '7d' ? 7 : 14;
    const result = [];
    for (let i = days - 1; i >= 0; i--) {
      const date = getDayStr(i);
      const daySessions = sessions.filter(s => s.date === date);
      const entry = { date, total: 0 };
      for (const act of ACTIVITIES) {
        entry[act.key] = daySessions.filter(s => s.activity === act.key).reduce((a, s) => a + s.duration, 0);
        entry.total += entry[act.key];
      }
      result.push(entry);
    }
    return result;
  }, [sessions, range]);

  const isEmpty = filtered.length === 0;

  /* ── shared card style ── */
  const pad = isMobile ? '16px' : '28px 32px';

  return (
    <div style={{ padding: pad, maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', color: t.t1, marginBottom: 3 }}>
            Study Statistics
          </h1>
          <p style={{ fontSize: 13, color: t.t25 }}>Visualise your study patterns and progress</p>
        </div>

        {/* Range tabs */}
        <div style={{ display: 'flex', gap: 3, padding: 3, borderRadius: 10, background: t.subtleBg, border: `1px solid ${t.brS}` }}>
          {RANGES.map(r => (
            <button
              key={r.key}
              onClick={() => setRange(r.key)}
              style={{
                padding: '6px 14px', borderRadius: 7, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                background: range === r.key ? t.card : 'transparent',
                color:      range === r.key ? t.t1  : t.t30,
                border:     range === r.key ? `1px solid ${t.brC}` : '1px solid transparent',
                transition: 'all 0.13s',
              }}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {isEmpty ? (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <div style={{ fontSize: 40, marginBottom: 14 }}>📊</div>
          <p style={{ fontSize: 15, fontWeight: 600, color: t.t35, marginBottom: 6 }}>No data for this range</p>
          <p style={{ fontSize: 13, color: t.t20 }}>Log some study sessions to see your statistics</p>
        </div>
      ) : (
        <>
          {/* ── Summary row ── */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(5,1fr)', gap: 10 }}>
            {[
              { label: 'Total Time',    value: fmt(summary.totalSec),       sub: `${summary.sessionCount} sessions` },
              { label: "Today's Study", value: fmt(summary.todaySec),       sub: 'today' },
              { label: 'Study Days',    value: summary.uniqueDays,          sub: `in range` },
              { label: 'Daily Avg',     value: fmt(summary.avgSec),         sub: 'when active' },
              { label: 'Streak',        value: `${summary.streak}d`,        sub: summary.streak === 1 ? 'day' : 'days' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '14px 16px', borderRadius: 12, background: t.card, border: `1px solid ${t.brC}`, gridColumn: i === 4 && isMobile ? 'span 2' : undefined }}>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: t.t18, marginBottom: 6 }}>{s.label}</p>
                <p style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.03em', color: t.t1, lineHeight: 1.1 }}>{s.value}</p>
                <p style={{ fontSize: 11, color: t.t18, marginTop: 4 }}>{s.sub}</p>
              </div>
            ))}
          </div>

          {/* ── Daily Bar Chart ── */}
          <Card title="Daily Study Time" t={t}>
            <DailyBarChart days={dailyData} t={t} isMobile={isMobile} />
            {/* Activity legend */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 14 }}>
              {ACTIVITIES.map(a => (
                <div key={a.key} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div style={{ width: 9, height: 9, borderRadius: 3, background: a.color }} />
                  <span style={{ fontSize: 11, color: t.t25 }}>{a.label}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* ── Donut row ── */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
            {/* Subject distribution */}
            <Card title="Time by Subject" t={t}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <DonutChart data={subjectData} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    <span style={{ fontSize: 16, fontWeight: 800, color: t.t1, letterSpacing: '-0.02em' }}>{fmtH(summary.totalSec)}</span>
                    <span style={{ fontSize: 9, color: t.t20, textTransform: 'uppercase', letterSpacing: '0.1em' }}>total</span>
                  </div>
                </div>
                <Legend items={subjectData} t={t} />
              </div>
            </Card>

            {/* Activity distribution */}
            <Card title="Time by Activity" t={t}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <DonutChart data={activityData} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    <span style={{ fontSize: 16, fontWeight: 800, color: t.t1, letterSpacing: '-0.02em' }}>{activityData.length}</span>
                    <span style={{ fontSize: 9, color: t.t20, textTransform: 'uppercase', letterSpacing: '0.1em' }}>types</span>
                  </div>
                </div>
                <Legend items={activityData.map(a => ({ label: a.label, value: a.value, color: a.color }))} t={t} />
              </div>
            </Card>
          </div>

          {/* ── Subject comparison ── */}
          <Card title="Subject Comparison" t={t}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {subjectData.map((s, i) => (
                <HBar key={s.id} label={s.label} value={s.value} maxValue={subjectData[0].value} color={s.color} t={t} />
              ))}
            </div>
          </Card>

          {/* ── Activity breakdown per subject ── */}
          {subjectActivityData.length > 0 && (
            <Card title="Activity Breakdown by Subject" t={t}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {subjectActivityData.map(sub => (
                  <StackedHBar
                    key={sub.id}
                    label={sub.label}
                    segments={sub.segments}
                    total={sub.value}
                    maxTotal={subjectActivityData[0]?.value || 1}
                    t={t}
                  />
                ))}
              </div>
            </Card>
          )}

          {/* ── Module & Topic focus ── */}
          {(moduleData.length > 0 || topicData.length > 0) && (
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
              {moduleData.length > 0 && (
                <Card title="Module Focus (Top 10)" t={t}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                    {moduleData.map((m, i) => (
                      <HBar key={i} label={m.label} value={m.value} maxValue={moduleData[0].value} color={m.color} t={t} />
                    ))}
                  </div>
                </Card>
              )}
              {topicData.length > 0 && (
                <Card title="Topic Focus (Top 10)" t={t}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                    {topicData.map((tp, i) => (
                      <HBar key={i} label={tp.label} value={tp.value} maxValue={topicData[0].value} color={tp.color} t={t} />
                    ))}
                  </div>
                </Card>
              )}
            </div>
          )}

          {/* ── Per-subject activity time bars (separate bar chart per activity) ── */}
          <Card title="Activity vs Subject Matrix" t={t}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {ACTIVITIES.map(act => {
                const rows = subjectData.map(sub => {
                  const sessions4 = filtered.filter(s => s.subjectId === sub.id && s.activity === act.key);
                  return { ...sub, value: sessions4.reduce((a, s) => a + s.duration, 0) };
                }).filter(r => r.value > 0).sort((a, b) => b.value - a.value);
                if (!rows.length) return null;
                const maxV = rows[0].value;
                return (
                  <div key={act.key}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
                      <div style={{ width: 8, height: 8, borderRadius: 2, background: act.color }} />
                      <span style={{ fontSize: 12, fontWeight: 700, color: act.color }}>{act.label}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {rows.map((r, i) => (
                        <HBar key={r.id} label={r.label} value={r.value} maxValue={maxV} color={act.color} t={t} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* ── Study Calendar ── */}
          <Card title="Study Calendar (last 14 weeks)" t={t}>
            <CalendarHeatmap sessions={sessions} t={t} isMobile={isMobile} />
          </Card>
        </>
      )}
    </div>
  );
}
