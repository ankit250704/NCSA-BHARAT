import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Courses', to: '/courses' },
    { label: 'Virtual Lab', to: '/virtual-lab' },
    { label: 'Why Us', to: '/why-us' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Reviews', to: '/testimonials' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" stroke="#00f5ff" strokeWidth="2" fill="none"/>
              <polygon points="20,8 32,15 32,25 20,32 8,25 8,15" stroke="#00f5ff" strokeWidth="1.5" fill="rgba(0,245,255,0.07)"/>
              <text x="20" y="24" textAnchor="middle" fill="#00f5ff" fontSize="14" fontWeight="bold" fontFamily="Orbitron">CS</text>
            </svg>
          </div>
          <span className="navbar__logo-text">CYBER<span>SEC</span></span>
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="navbar__actions">
          <Link to="/login" className="btn btn-outline navbar__btn-login">Sign In</Link>
          <Link to="/register" className="btn btn-primary navbar__btn-register">Enroll Now</Link>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) => `navbar__mobile-link ${isActive ? 'active' : ''}`}
            end={link.to === '/'}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <div className="navbar__mobile-actions">
          <Link to="/login" className="btn btn-outline" onClick={() => setMobileOpen(false)}>Sign In</Link>
          <Link to="/register" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Enroll Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
