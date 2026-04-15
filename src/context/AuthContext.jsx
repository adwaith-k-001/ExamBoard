import { createContext, useContext, useState } from 'react';

const VALID_EMAIL = 'adwaith@examboard.local';
const SESSION_KEY = 'examboard_session';

function parseJwt(token) {
  try {
    const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(
      decodeURIComponent(
        atob(base64).split('').map(c =>
          '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        ).join('')
      )
    );
  } catch {
    return null;
  }
}

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = sessionStorage.getItem(SESSION_KEY);
    return saved ? JSON.parse(saved) : null;
  });

  // ── Email + password login (personal fallback) ──
  const login = (email, password) => {
    if (email.trim().toLowerCase() !== VALID_EMAIL) {
      return { ok: false, error: 'Email not recognized. Access denied.' };
    }
    if (password !== 'exam2026') {
      return { ok: false, error: 'Incorrect password.' };
    }
    const session = { email: email.trim().toLowerCase(), provider: 'local' };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { ok: true };
  };

  // ── Google OAuth login ──
  const loginWithGoogle = (credentialResponse) => {
    const decoded = parseJwt(credentialResponse.credential);
    if (!decoded?.email) {
      return { ok: false, error: 'Could not verify Google account.' };
    }
    const session = {
      email:    decoded.email,
      name:     decoded.name   || decoded.email,
      picture:  decoded.picture || null,
      provider: 'google',
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { ok: true };
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
