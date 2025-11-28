// app or components/context/AuthContext.jsx
'use client';
import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const stored = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
      if (stored) setTokenState(stored);
    } catch (err) {
      console.error('Error reading token from localStorage', err);
    }
  }, []);

  const setToken = useCallback((t) => {
    console.log('AuthProvider.setToken', t);
    try {
      if (t) {
        localStorage.setItem('auth_token', t);
        setTokenState(t);
      } else {
        localStorage.removeItem('auth_token');
        setTokenState(null);
      }
    } catch (err) {
      console.error('Error saving token to localStorage', err);
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    router.push('/login');
  }, [router, setToken]);

  const value = useMemo(
    () => ({
      token,
      setToken,
      logout,
      isAuthenticated: !!token,
    }),
    [token, setToken, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (ctx === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
};
