'use client';
import { Roboto, ABeeZee } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '@/components/navbar';
import { useEffect } from 'react';
import { AuthProvider } from '@/context/AuthContext';

const myFont = ABeeZee({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle');
  }, []);
  return (
    <html lang="en">
      <body className={`${myFont.className}`}>
        <AuthProvider>
          <NavBar></NavBar>
          <div className="container mt-2">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
