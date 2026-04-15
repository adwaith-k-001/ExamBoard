import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function Countdown({ targetDate, color = '#6366f1', compact = false }) {
  const { t } = useTheme();
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calc = () => {
      const now    = new Date();
      const target = new Date(targetDate + 'T09:00:00');
      const diff   = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, over: true });
        return;
      }

      setTimeLeft({
        days:    Math.floor(diff / 864e5),
        hours:   Math.floor((diff % 864e5) / 36e5),
        minutes: Math.floor((diff % 36e5)  / 6e4),
        seconds: Math.floor((diff % 6e4)   / 1e3),
        over:    false,
      });
    };

    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (!timeLeft) return null;

  if (timeLeft.over) {
    return (
      <span style={{ fontSize: 12, color: t.t25, fontWeight: 500 }}>
        Exam complete
      </span>
    );
  }

  /* ── compact (subject page header) ── */
  if (compact) {
    const units = [
      { value: timeLeft.days,    label: 'D' },
      { value: timeLeft.hours,   label: 'H' },
      { value: timeLeft.minutes, label: 'M' },
      { value: timeLeft.seconds, label: 'S' },
    ];

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {units.map((u, i) => (
          <div key={u.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ textAlign: 'center', minWidth: 38 }}>
              <div style={{
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: '-0.04em',
                color: t.cdText,
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
              }}>
                {pad(u.value)}
              </div>
              <div style={{
                fontSize: 9,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginTop: 5,
                color: t.t25,
                fontWeight: 600,
              }}>
                {u.label}
              </div>
            </div>

            {i < units.length - 1 && (
              <div
                className="animate-colon"
                style={{ display: 'flex', flexDirection: 'column', gap: 5, paddingBottom: 18 }}
              >
                <div style={{ width: 3, height: 3, borderRadius: '50%', background: `${color}55` }} />
                <div style={{ width: 3, height: 3, borderRadius: '50%', background: `${color}55` }} />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  /* ── full (home hero) ── */
  const units = [
    { value: timeLeft.days,    label: 'Days' },
    { value: timeLeft.hours,   label: 'Hours' },
    { value: timeLeft.minutes, label: 'Mins' },
    { value: timeLeft.seconds, label: 'Secs' },
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
      {units.map((u, i) => (
        <div key={u.label} style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 78,
              height: 78,
              borderRadius: 14,
              background: t.cdBg,
              border: `1px solid ${t.cdBr}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: '-0.05em',
              color: t.cdText,
              fontVariantNumeric: 'tabular-nums',
              boxShadow: `0 0 28px ${color}10, ${t.cdInset}`,
            }}>
              {pad(u.value)}
            </div>
            <div style={{
              fontSize: 9,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              marginTop: 9,
              color: t.t20,
              fontWeight: 600,
            }}>
              {u.label}
            </div>
          </div>

          {i < units.length - 1 && (
            <div
              className="animate-colon"
              style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingBottom: 27 }}
            >
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: `${color}45` }} />
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: `${color}45` }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
