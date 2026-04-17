import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useIsMobile } from '../hooks/useIsMobile';
import { getSubjectColor } from '../data/subjects';
import { useElective } from '../context/ElectiveContext';
import { Sun, Moon } from 'lucide-react';

const isNative = !!window.Capacitor;

if (isNative) {
  GoogleAuth.initialize({
    clientId: '154690456525-di657ga7kntillmpbkmg4h7e4mm6fs13.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    grantOfflineAccess: true,
  });
}

export default function Login() {
  const { login, loginWithGoogle } = useAuth();
  const navigate     = useNavigate();
  const { t, mode, toggle } = useTheme();
  const { activeSubjects } = useElective();
  const isMobile = useIsMobile();
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const [loading,  setLoading]  = useState(false);
  const [focused,  setFocused]  = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      const result = login(email, password);
      if (result.ok) { navigate('/'); }
      else { setError(result.error); setLoading(false); }
    }, 500);
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const result = loginWithGoogle(credentialResponse);
    if (result.ok) { navigate('/'); }
    else { setError(result.error); }
  };

  const handleGoogleError = () => {
    setError('Google sign-in failed. Please try again.');
  };

  const handleNativeGoogle = async () => {
    try {
      const googleUser = await GoogleAuth.signIn();
      const idToken = googleUser?.authentication?.idToken;
      if (!idToken) throw new Error('No ID token');
      const result = loginWithGoogle({ credential: idToken });
      if (result.ok) { navigate('/'); }
      else { setError(result.error); }
    } catch (e) {
      setError('Google sign-in failed. Please try again.');
    }
  };

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', background: t.bg }}>

      {/* ════════════════════════════════════════
          LEFT  —  brand + subject list
      ════════════════════════════════════════ */}
      <div style={{
        width: '43%',
        display: isMobile ? 'none' : 'flex',
        flexDirection: 'column',
        padding: '44px 52px',
        background: t.loginLeft,
        borderRight: `1px solid ${t.br}`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Radial glows */}
        <div style={{
          position: 'absolute', top: '-100px', left: '-80px',
          width: 450, height: 450, borderRadius: '50%',
          background: `radial-gradient(circle, ${t.loginGlow1} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-120px', right: '-100px',
          width: 400, height: 400, borderRadius: '50%',
          background: `radial-gradient(circle, ${t.loginGlow2} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          opacity: t.loginGrid,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(120,120,180,0.8) 1px, transparent 1px), ' +
            'linear-gradient(90deg, rgba(120,120,180,0.8) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }} />

        {/* Brand */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 11,
              background: 'linear-gradient(135deg, rgba(99,102,241,0.28), rgba(139,92,246,0.14))',
              border: '1px solid rgba(99,102,241,0.28)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 28px rgba(99,102,241,0.18)',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="#A5B4FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', color: t.t1 }}>
                ExamBoard
              </p>
              <p style={{ fontSize: 11, color: t.t28, marginTop: 1 }}>KTU S6 · 2026</p>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ position: 'relative', zIndex: 1, marginTop: 60 }}>
          <p style={{
            fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.2em', color: '#6366F1', marginBottom: 14,
          }}>
            Exam Season Dashboard
          </p>
          <h1 style={{
            fontSize: 33, fontWeight: 800, letterSpacing: '-0.035em',
            color: t.t1, lineHeight: 1.2,
          }}>
            Study smarter,<br />
            <span style={{
              background: t.loginAccGrad,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              not harder.
            </span>
          </h1>
          <p style={{
            fontSize: 13, color: t.t30,
            marginTop: 14, lineHeight: 1.65,
          }}>
            Your personal command center for KTU B.Tech Semester&nbsp;6 exams.
            Track progress, watch countdowns, stay on top.
          </p>
        </div>

        {/* Subject pills */}
        <div style={{
          position: 'relative', zIndex: 1,
          marginTop: 36,
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          {activeSubjects.map((s) => {
            const diffDays = Math.ceil((new Date(s.examDate) - new Date()) / 864e5);
            const sColor   = getSubjectColor(s, mode);
            return (
              <div key={s.id} style={{
                display: 'flex', alignItems: 'center', gap: 11,
                padding: '9px 13px', borderRadius: 9,
                background: t.loginPillBg,
                border: `1px solid ${t.loginPillBr}`,
              }}>
                <div style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: sColor, flexShrink: 0,
                  boxShadow: `0 0 7px ${sColor}70`,
                }} />
                <span style={{ fontSize: 13, color: t.t50, flex: 1 }}>
                  {s.name}
                </span>
                <span style={{
                  fontSize: 11, fontWeight: 600,
                  color: diffDays > 0 ? sColor : t.t22,
                  background: diffDays > 0 ? `${sColor}12` : t.subtleBg,
                  border: `1px solid ${diffDays > 0 ? `${sColor}25` : t.brS}`,
                  padding: '2px 8px', borderRadius: 5,
                  whiteSpace: 'nowrap',
                }}>
                  {diffDays > 0 ? `${diffDays}d` : 'Done'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div style={{
          position: 'relative', zIndex: 1,
          marginTop: 'auto', paddingTop: 28,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <div style={{
            width: 6, height: 6, borderRadius: '50%',
            background: '#22C55E', boxShadow: '0 0 7px #22C55E',
          }} />
          <span style={{ fontSize: 12, color: t.t22 }}>
            Private access · Session encrypted
          </span>
        </div>
      </div>

      {/* ════════════════════════════════════════
          RIGHT  —  login form
      ════════════════════════════════════════ */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px',
        background: t.loginRight,
        position: 'relative',
      }}>
        {/* Theme toggle (top right corner) */}
        <button
          onClick={toggle}
          title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{
            position: 'absolute', top: 24, right: 24,
            width: 34, height: 34, borderRadius: 9,
            background: t.pillBg,
            border: `1px solid ${t.pillBr}`,
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: t.t40, transition: 'all 0.15s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = t.hoverBg;
            e.currentTarget.style.color = t.t1;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = t.pillBg;
            e.currentTarget.style.color = t.t40;
          }}
        >
          {mode === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        <div className="animate-slide-up" style={{ width: '100%', maxWidth: 390 }}>

          {/* Form header */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{
              fontSize: 24, fontWeight: 700, letterSpacing: '-0.025em',
              color: t.t1, lineHeight: 1.2,
            }}>
              Welcome back
            </h2>
            <p style={{ fontSize: 14, color: t.t33, marginTop: 7 }}>
              Sign in to access your exam dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

            {/* Email */}
            <div>
              <label style={{
                display: 'block', fontSize: 11, fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                color: t.t33, marginBottom: 8,
              }}>
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                placeholder="adwaith@examboard.local"
                required
                autoFocus
                style={{
                  width: '100%', height: 44,
                  padding: '0 13px', borderRadius: 9,
                  background: focused === 'email' ? t.inputBgF : t.inputBg,
                  border: `1px solid ${focused === 'email' ? 'rgba(99,102,241,0.45)' : t.brI}`,
                  outline: 'none',
                  fontSize: 14, color: t.t1, caretColor: '#6366F1',
                  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
                  boxShadow: focused === 'email' ? '0 0 0 3px rgba(99,102,241,0.1)' : 'none',
                }}
              />
            </div>

            {/* Password */}
            <div>
              <label style={{
                display: 'block', fontSize: 11, fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                color: t.t33, marginBottom: 8,
              }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onFocus={() => setFocused('password')}
                onBlur={() => setFocused(null)}
                placeholder="••••••••"
                required
                style={{
                  width: '100%', height: 44,
                  padding: '0 13px', borderRadius: 9,
                  background: focused === 'password' ? t.inputBgF : t.inputBg,
                  border: `1px solid ${focused === 'password' ? 'rgba(99,102,241,0.45)' : t.brI}`,
                  outline: 'none',
                  fontSize: 14, color: t.t1, caretColor: '#6366F1',
                  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
                  boxShadow: focused === 'password' ? '0 0 0 3px rgba(99,102,241,0.1)' : 'none',
                }}
              />
            </div>

            {/* Error message */}
            {error && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 13px', borderRadius: 9,
                background: 'rgba(239,68,68,0.07)',
                border: '1px solid rgba(239,68,68,0.18)',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="#F87171" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span style={{ fontSize: 13, color: '#F87171' }}>{error}</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: 4, height: 44, borderRadius: 9,
                background: loading
                  ? 'rgba(99,102,241,0.35)'
                  : 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: 14, fontWeight: 600, color: '#fff',
                letterSpacing: '-0.01em',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                transition: 'box-shadow 0.15s, background 0.15s',
                boxShadow: loading ? 'none' : '0 4px 20px rgba(99,102,241,0.32)',
              }}
              onMouseEnter={e => {
                if (!loading) e.currentTarget.style.boxShadow = '0 4px 30px rgba(99,102,241,0.52)';
              }}
              onMouseLeave={e => {
                if (!loading) e.currentTarget.style.boxShadow = '0 4px 20px rgba(99,102,241,0.32)';
              }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin-smooth" width="14" height="14"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  Signing in…
                </>
              ) : (
                'Continue →'
              )}
            </button>
          </form>

          {/* ── Google Sign-In ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 22 }}>
            <div style={{ flex: 1, height: 1, background: t.brS }} />
            <span style={{ fontSize: 11, color: t.t18, whiteSpace: 'nowrap' }}>or continue with</span>
            <div style={{ flex: 1, height: 1, background: t.brS }} />
          </div>

          <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
            {isNative ? (
              <button
                onClick={handleNativeGoogle}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 24px', borderRadius: 9,
                  background: mode === 'dark' ? '#1f1f1f' : '#fff',
                  border: `1px solid ${t.brI}`,
                  cursor: 'pointer', fontSize: 14, fontWeight: 500,
                  color: mode === 'dark' ? '#e3e3e3' : '#3c4043',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  width: '100%', justifyContent: 'center',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.7 2.5 30.2 0 24 0 14.6 0 6.6 5.4 2.7 13.3l7.8 6C12.4 13.2 17.7 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8C43.6 37.3 46.5 31.4 46.5 24.5z"/>
                  <path fill="#FBBC05" d="M10.5 28.6A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.1.8-4.6l-7.8-6A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.2z"/>
                  <path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.5-5.8c-2 1.4-4.7 2.2-7.7 2.2-6.3 0-11.6-3.7-13.5-9.2l-7.9 6.1C6.6 42.6 14.6 48 24 48z"/>
                </svg>
                Sign in with Google
              </button>
            ) : (
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                theme={mode === 'dark' ? 'filled_black' : 'outline'}
                shape="rectangular"
                size="large"
                text="signin_with"
                logo_alignment="left"
              />
            )}
          </div>

          <p style={{
            fontSize: 12, color: t.t15,
            marginTop: 22, textAlign: 'center',
          }}>
            Personal exam dashboard · Private access only
          </p>
        </div>
      </div>
    </div>
  );
}
