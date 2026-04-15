import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Home from './Home';
import SubjectPage from './SubjectPage';
import ModuleDetailPage from './ModuleDetailPage';
import { SUBJECTS } from '../data/subjects';
import { useTheme } from '../context/ThemeContext';
import { useIsMobile } from '../hooks/useIsMobile';
import { ChevronRight, Calendar, Sun, Moon, Menu } from 'lucide-react';

export default function Dashboard() {
  const { t, mode, toggle } = useTheme();
  const isMobile = useIsMobile();
  const [activeSubject, setActiveSubject] = useState(null);
  const [activeModule,  setActiveModule]  = useState(null);
  const [sidebarOpen,   setSidebarOpen]   = useState(false);

  const subject = activeSubject ? SUBJECTS.find((s) => s.id === activeSubject) : null;
  const modMeta = (subject && activeModule != null)
    ? subject.modules.find(m => m.id === activeModule)
    : null;

  function handleSelectSubject(subjectId) {
    setActiveSubject(subjectId);
    setActiveModule(null);
    if (isMobile) setSidebarOpen(false);
  }

  function handleOpenModule(moduleId) {
    setActiveModule(moduleId);
  }

  function handleBackToSubject() {
    setActiveModule(null);
  }

  return (
    <div style={{
      display: 'flex', height: '100dvh', overflow: 'hidden',
      background: t.bg, color: t.t1,
    }}>
      {/* Mobile backdrop */}
      {isMobile && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 90,
            background: 'rgba(0,0,0,0.45)',
            backdropFilter: 'blur(2px)',
          }}
        />
      )}

      <Sidebar
        activeSubject={activeSubject}
        onSelectSubject={handleSelectSubject}
        isMobile={isMobile}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main panel */}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* ── Sticky header ── */}
        <header style={{
          flexShrink: 0, height: 54,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: isMobile ? '0 16px' : '0 32px',
          borderBottom: `1px solid ${t.brS}`,
          background: t.glass,
          backdropFilter: 'blur(14px)',
          position: 'relative', zIndex: 10,
        }}>
          {/* Left: hamburger (mobile) + breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {isMobile && (
              <button
                onClick={() => setSidebarOpen(true)}
                style={{
                  width: 34, height: 34, borderRadius: 8,
                  background: t.pillBg, border: `1px solid ${t.pillBr}`,
                  cursor: 'pointer', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: t.t40,
                }}
              >
                <Menu size={16} />
              </button>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
              <span style={{ color: t.t20 }}>S6</span>
              <ChevronRight size={12} color={t.t12} />
              {subject ? (
                <>
                  <button
                    onClick={() => handleSelectSubject(activeSubject)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      fontWeight: 600, color: subject.color, fontSize: 13, padding: 0,
                      transition: 'opacity 0.12s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.7'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                  >
                    {subject.shortName}
                  </button>
                  {modMeta && (
                    <>
                      <ChevronRight size={12} color={t.t12} />
                      <span style={{ color: t.t40 }}>M{activeModule}</span>
                    </>
                  )}
                </>
              ) : (
                <span style={{ color: t.t40, fontWeight: 500 }}>Overview</span>
              )}
            </div>
          </div>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {!isMobile && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '5px 12px', borderRadius: 8,
                background: t.pillBg, border: `1px solid ${t.pillBr}`,
                fontSize: 12, color: t.t25,
              }}>
                <Calendar size={11} />
                <span>6 exams · Apr 24 – May 12</span>
              </div>
            )}

            <button
              onClick={toggle}
              title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                width: 34, height: 34, borderRadius: 8,
                background: t.pillBg, border: `1px solid ${t.pillBr}`,
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: t.t40, transition: 'all 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = t.hoverBg;
                e.currentTarget.style.color = t.t1;
                e.currentTarget.style.borderColor = t.brCD;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = t.pillBg;
                e.currentTarget.style.color = t.t40;
                e.currentTarget.style.borderColor = t.pillBr;
              }}
            >
              {mode === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </header>

        {/* ── Scrollable content ── */}
        <main style={{ flex: 1, overflowY: 'auto' }}>
          {activeSubject === null ? (
            <Home onSelectSubject={handleSelectSubject} />
          ) : activeModule != null ? (
            <ModuleDetailPage
              subjectId={activeSubject}
              moduleId={activeModule}
              onBack={handleBackToSubject}
            />
          ) : (
            <SubjectPage
              subjectId={activeSubject}
              onOpenModule={handleOpenModule}
            />
          )}
        </main>
      </div>
    </div>
  );
}
