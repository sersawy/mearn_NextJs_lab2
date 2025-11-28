import Link from 'next/link';
import React from 'react';
import { useAuth } from '@/context/AuthContext';

export default function NavBar() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/todo">
                Todo
              </Link>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={logout}>
                  Logout
                </button>
              </li>
            )}
            {!isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" href="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
            {/* <li className="nav-item">
              <Link className="nav-link" href="/csr">
                CRS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/ssr">
                SSR
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/ssg">
                SSG
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/isr">
                ISR
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
