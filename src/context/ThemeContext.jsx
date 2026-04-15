import { createContext, useContext, useEffect, useState } from 'react';

/* ══════════════════════════════════════════════════
   DARK  — Obsidian
══════════════════════════════════════════════════ */
const DARK = {
  // Backgrounds
  bg:        '#07090F',
  surface:   '#0B0E18',
  card:      '#0F1420',
  cardAlt:   '#0C1018',
  hero:      'linear-gradient(135deg, #0F1422 0%, #0C1018 100%)',

  // Borders
  br:    'rgba(255,255,255,0.055)',
  brS:   'rgba(255,255,255,0.05)',
  brC:   'rgba(255,255,255,0.06)',
  brCD:  'rgba(255,255,255,0.07)',
  brI:   'rgba(255,255,255,0.08)',

  // Text levels (opacity scale)
  t1:    '#E4E8F2',
  t1b:   '#DCE3EF',
  t2:    '#8592A8',
  t50:   'rgba(255,255,255,0.50)',
  t45:   'rgba(255,255,255,0.45)',
  t40:   'rgba(255,255,255,0.40)',
  t35:   'rgba(255,255,255,0.35)',
  t33:   'rgba(255,255,255,0.33)',
  t30:   'rgba(255,255,255,0.30)',
  t28:   'rgba(255,255,255,0.28)',
  t25:   'rgba(255,255,255,0.25)',
  t22:   'rgba(255,255,255,0.22)',
  t20:   'rgba(255,255,255,0.20)',
  t18:   'rgba(255,255,255,0.18)',
  t15:   'rgba(255,255,255,0.15)',
  t12:   'rgba(255,255,255,0.12)',
  tH:    'rgba(255,255,255,0.55)',

  // Interactive
  inputBg:   'rgba(255,255,255,0.04)',
  inputBgF:  'rgba(99,102,241,0.07)',
  hoverBg:   'rgba(255,255,255,0.035)',
  activeBg:  'rgba(255,255,255,0.06)',
  subtleBg:  'rgba(255,255,255,0.015)',

  // Countdown block
  cdBg:     'rgba(255,255,255,0.03)',
  cdBr:     'rgba(255,255,255,0.07)',
  cdText:   '#ffffff',
  cdInset:  'inset 0 1px 0 rgba(255,255,255,0.055)',

  // Structure
  divider:  'rgba(255,255,255,0.05)',
  ring:     'rgba(255,255,255,0.05)',
  glass:    'rgba(7,9,15,0.88)',
  pillBg:   'rgba(255,255,255,0.03)',
  pillBr:   'rgba(255,255,255,0.06)',

  // Sidebar nav
  navActive:   '#A5B4FC',
  navInactive: 'rgba(255,255,255,0.32)',
  navHoverBg:  'rgba(255,255,255,0.035)',
  navHoverT:   'rgba(255,255,255,0.55)',
  navLabel:    'rgba(255,255,255,0.18)',
  navActiveBg: 'rgba(99,102,241,0.1)',
  navInd:      'linear-gradient(180deg, #6366F1, #8B5CF6)',

  // Login page
  loginLeft:    'linear-gradient(160deg, #0C1028 0%, #09101C 55%, #070B14 100%)',
  loginPillBg:  'rgba(255,255,255,0.022)',
  loginPillBr:  'rgba(255,255,255,0.05)',
  loginRight:   '#07090F',
  loginGrid:    0.013,
  loginGlow1:   'rgba(99,102,241,0.10)',
  loginGlow2:   'rgba(139,92,246,0.07)',
  loginAccGrad: 'linear-gradient(135deg, #818CF8 0%, #C084FC 100%)',

  // Brand
  brand: 'linear-gradient(135deg, #E4E8F2 40%, #A5B4FC)',

  // Resource cards
  resBg: '#0C1018',
  resBr: 'rgba(255,255,255,0.05)',

  // Schedule items
  schBg: 'rgba(255,255,255,0.015)',
  schBr: 'rgba(255,255,255,0.05)',

  // Module done-state hex alpha suffixes (appended to subject color)
  doneBgA: '08',
  doneBrA: '1E',
};

/* ══════════════════════════════════════════════════
   LIGHT  — Obsidian Day
══════════════════════════════════════════════════ */
const LIGHT = {
  bg:        '#F3F5FB',
  surface:   '#FFFFFF',
  card:      '#FFFFFF',
  cardAlt:   '#F4F6FC',
  hero:      'linear-gradient(135deg, #FFFFFF 0%, #F4F7FD 100%)',

  br:    'rgba(0,0,0,0.08)',
  brS:   'rgba(0,0,0,0.06)',
  brC:   'rgba(0,0,0,0.08)',
  brCD:  'rgba(0,0,0,0.10)',
  brI:   'rgba(0,0,0,0.10)',

  t1:    '#0F172A',
  t1b:   '#1E293B',
  t2:    '#475569',
  t50:   'rgba(15,23,42,0.65)',
  t45:   'rgba(15,23,42,0.62)',
  t40:   'rgba(15,23,42,0.58)',
  t35:   'rgba(15,23,42,0.52)',
  t33:   'rgba(15,23,42,0.50)',
  t30:   'rgba(15,23,42,0.46)',
  t28:   'rgba(15,23,42,0.42)',
  t25:   'rgba(15,23,42,0.38)',
  t22:   'rgba(15,23,42,0.34)',
  t20:   'rgba(15,23,42,0.30)',
  t18:   'rgba(15,23,42,0.26)',
  t15:   'rgba(15,23,42,0.22)',
  t12:   'rgba(15,23,42,0.18)',
  tH:    'rgba(15,23,42,0.72)',

  inputBg:   'rgba(0,0,0,0.04)',
  inputBgF:  'rgba(99,102,241,0.06)',
  hoverBg:   'rgba(0,0,0,0.04)',
  activeBg:  'rgba(99,102,241,0.07)',
  subtleBg:  'rgba(0,0,0,0.025)',

  cdBg:     'rgba(0,0,0,0.04)',
  cdBr:     'rgba(0,0,0,0.10)',
  cdText:   '#0F172A',
  cdInset:  'inset 0 1px 0 rgba(0,0,0,0.04)',

  divider:  'rgba(0,0,0,0.07)',
  ring:     'rgba(0,0,0,0.08)',
  glass:    'rgba(243,245,251,0.92)',
  pillBg:   'rgba(0,0,0,0.03)',
  pillBr:   'rgba(0,0,0,0.08)',

  navActive:   '#4F46E5',
  navInactive: 'rgba(15,23,42,0.45)',
  navHoverBg:  'rgba(0,0,0,0.04)',
  navHoverT:   'rgba(15,23,42,0.72)',
  navLabel:    'rgba(15,23,42,0.30)',
  navActiveBg: 'rgba(99,102,241,0.08)',
  navInd:      'linear-gradient(180deg, #6366F1, #8B5CF6)',

  loginLeft:    'linear-gradient(160deg, #EEF0FA 0%, #E9ECF5 55%, #E4E8F2 100%)',
  loginPillBg:  'rgba(99,102,241,0.05)',
  loginPillBr:  'rgba(99,102,241,0.12)',
  loginRight:   '#F3F5FB',
  loginGrid:    0.055,
  loginGlow1:   'rgba(99,102,241,0.06)',
  loginGlow2:   'rgba(139,92,246,0.04)',
  loginAccGrad: 'linear-gradient(135deg, #4338CA 0%, #7C3AED 100%)',

  brand: 'linear-gradient(135deg, #1E293B 40%, #4F46E5)',

  resBg: '#F4F6FC',
  resBr: 'rgba(0,0,0,0.07)',

  schBg: 'rgba(0,0,0,0.025)',
  schBr: 'rgba(0,0,0,0.07)',

  doneBgA: '0E',
  doneBrA: '22',
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(
    () => localStorage.getItem('examboard_theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('examboard_theme', mode);
  }, [mode]);

  const toggle = () => setMode(m => (m === 'dark' ? 'light' : 'dark'));
  const t = mode === 'dark' ? DARK : LIGHT;

  return (
    <ThemeContext.Provider value={{ mode, toggle, t }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
