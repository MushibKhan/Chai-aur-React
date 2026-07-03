import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  // ╔══════════════════════════════════════════════════════════════╗
  // ║  🔍 SEARCH BAR CONTROL: Pages where search should be HIDDEN    ║
  // ║  Add more paths here if you want to hide search on other pages ║
  // ╚══════════════════════════════════════════════════════════════╝
  const hideSearchOnPaths = ['/login', '/signup'];
  const shouldShowSearch = !hideSearchOnPaths.includes(location.pathname);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          {/* Brand Logo */}
          <Link className="navbar-brand fw-bold" to="/">
            <i className="bi bi-box-seam me-2"></i>
            MyApp
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/')}`} 
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/about')}`} 
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/services')}`} 
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/team">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/careers">
                      Careers
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <Link className="dropdown-item" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* 
              ╔══════════════════════════════════════════════════════════════╗
              ║  🔍 SEARCH BAR — Only shows when NOT on login/signup pages   ║
              ╚══════════════════════════════════════════════════════════════╝
            */}
            {shouldShowSearch && (
              <form className="d-flex me-3" role="search">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
            )}

            {/* Auth Buttons */}
            <div className="d-flex gap-2">
              <Link to="/login" className="btn btn-outline-light btn-sm">
                Log In
              </Link>
              <Link to="/signup" className="btn btn-light btn-sm fw-semibold text-primary">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;