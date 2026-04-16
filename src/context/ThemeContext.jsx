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
   LIGHT  — Warm Parchment (deeper)
══════════════════════════════════════════════════ */
const LIGHT = {
  // Backgrounds — deeper warm tan / parchment
  bg:        '#EDE3C4',
  surface:   '#F3EACE',
  card:      '#F3EACE',
  cardAlt:   '#E8DEB8',
  hero:      'linear-gradient(135deg, #F0E8CE 0%, #E6DAB0 100%)',

  // Borders — warm amber tint (slightly stronger)
  br:    'rgba(130,95,0,0.22)',
  brS:   'rgba(130,95,0,0.16)',
  brC:   'rgba(130,95,0,0.20)',
  brCD:  'rgba(130,95,0,0.30)',
  brI:   'rgba(130,95,0,0.26)',

  // Text — warm dark brown scale
  t1:    '#1C1205',
  t1b:   '#2D1F08',
  t2:    '#6B5332',
  t50:   'rgba(28,18,5,0.68)',
  t45:   'rgba(28,18,5,0.64)',
  t40:   'rgba(28,18,5,0.60)',
  t35:   'rgba(28,18,5,0.54)',
  t33:   'rgba(28,18,5,0.50)',
  t30:   'rgba(28,18,5,0.46)',
  t28:   'rgba(28,18,5,0.42)',
  t25:   'rgba(28,18,5,0.38)',
  t22:   'rgba(28,18,5,0.34)',
  t20:   'rgba(28,18,5,0.30)',
  t18:   'rgba(28,18,5,0.26)',
  t15:   'rgba(28,18,5,0.22)',
  t12:   'rgba(28,18,5,0.18)',
  tH:    'rgba(28,18,5,0.74)',

  // Interactive — warm amber tints
  inputBg:   'rgba(130,95,0,0.08)',
  inputBgF:  'rgba(180,83,9,0.12)',
  hoverBg:   'rgba(130,95,0,0.11)',
  activeBg:  'rgba(180,83,9,0.14)',
  subtleBg:  'rgba(130,95,0,0.08)',

  // Countdown block
  cdBg:     'rgba(130,95,0,0.08)',
  cdBr:     'rgba(130,95,0,0.22)',
  cdText:   '#1C1205',
  cdInset:  'inset 0 1px 0 rgba(255,240,180,0.6)',

  // Structure
  divider:  'rgba(130,95,0,0.14)',
  ring:     'rgba(130,95,0,0.18)',
  glass:    'rgba(237,227,196,0.94)',
  pillBg:   'rgba(130,95,0,0.09)',
  pillBr:   'rgba(130,95,0,0.20)',

  // Sidebar nav — warm amber accent
  navActive:   '#92400E',
  navInactive: 'rgba(28,18,5,0.50)',
  navHoverBg:  'rgba(130,95,0,0.12)',
  navHoverT:   'rgba(28,18,5,0.76)',
  navLabel:    'rgba(28,18,5,0.32)',
  navActiveBg: 'rgba(146,64,14,0.12)',
  navInd:      'linear-gradient(180deg, #B45309, #D97706)',

  // Login page — deeper warm beige left panel
  loginLeft:    'linear-gradient(160deg, #EDE3C4 0%, #E4D5A0 55%, #D8C880 100%)',
  loginPillBg:  'rgba(146,64,14,0.08)',
  loginPillBr:  'rgba(146,64,14,0.20)',
  loginRight:   '#EDE3C4',
  loginGrid:    0.09,
  loginGlow1:   'rgba(180,83,9,0.14)',
  loginGlow2:   'rgba(217,119,6,0.10)',
  loginAccGrad: 'linear-gradient(135deg, #78350F 0%, #B45309 100%)',

  // Brand
  brand: 'linear-gradient(135deg, #1C1205 40%, #B45309)',

  // Resource cards
  resBg: '#E8DEB8',
  resBr: 'rgba(130,95,0,0.18)',

  // Schedule items
  schBg: 'rgba(130,95,0,0.08)',
  schBr: 'rgba(130,95,0,0.16)',

  // Module done-state hex alpha suffixes (appended to subject color)
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
