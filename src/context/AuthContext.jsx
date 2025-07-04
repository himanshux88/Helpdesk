import React, { createContext, useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();

const adminCredentials = {
  email: 'admin@admin.com',
  password: 'admin123',
};

const userCredentials = {
  email: 'user12@user.com',
  password: 'user123',
};

const supportCredentials = {
  email: 'support@support.com',
  password: 'support123',
};

const AUTH_KEY = 'helpdesk_auth';

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const stored = localStorage.getItem(AUTH_KEY);
    return stored ? JSON.parse(stored) : { isAuthenticated: false, role: null };
  });

  useEffect(() => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
  }, [auth]);

  const signIn = (email, password) => {
    if (email === adminCredentials.email && password === adminCredentials.password) {
      setAuth({ isAuthenticated: true, role: 'admin' });
      return { success: true, role: 'admin' };
    }
    if (email === userCredentials.email && password === userCredentials.password) {
      setAuth({ isAuthenticated: true, role: 'user' });
      return { success: true, role: 'user' };
    }
    if (email === supportCredentials.email && password === supportCredentials.password) {
      setAuth({ isAuthenticated: true, role: 'support' });
      return { success: true, role: 'support' };
    }
    return { success: false };
  };

  const signOut = () => {
    setAuth({ isAuthenticated: false, role: null });
    localStorage.removeItem(AUTH_KEY);
  };

  return (
    <AuthContext.Provider value={{ ...auth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const RequireAuth = ({ children, role }) => {
  const { isAuthenticated, role: userRole } = useAuth();
  if (!isAuthenticated || (role && userRole !== role)) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}; 