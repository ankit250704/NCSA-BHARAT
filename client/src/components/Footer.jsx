import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const linkGroups = [
    {
      title: 'Programs',
      items: [
        { label: 'All Courses', to: '/courses' },
        { label: 'Virtual Cyber Lab', to: '/virtual-lab' },
        { label: 'Ethical Hacking', to: '/courses' },
        { label: 'Cloud Security', to: '/courses' },
        { label: 'SOC Analyst', to: '/courses' },
      ],
    },
    {
      title: 'Platform',
      items: [
        { label: 'Why Choose Us', to: '/why-us' },
        { label: 'Pricing & Plans', to: '/pricing' },
        { label: 'Student Reviews', to: '/testimonials' },
        { label: 'FAQ', to: '/faq' },
      ],
    },
    {
      title: 'Support',
      items: [
        { label: 'Contact Us', to: '/contact' },
        { label: 'Student Sign In', to: '/login' },
        { label: 'Create Account', to: '/register' },
      ],
    },
  ];

  const socials = [
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'YouTube', icon: '▶️', href: '#' },
    { name: 'Discord', icon: '🎮', href: '#' },
    { name: 'GitHub', icon: '⚡', href: '#' },
    { name: 'Instagram', icon: '📸', href: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <div className="footer__logo-icon">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                    <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" stroke="#00f5ff" strokeWidth="2" fill="none"/>
                    <polygon points="20,8 32,15 32,25 20,32 8,25 8,15" stroke="#00f5ff" strokeWidth="1.5" fill="rgba(0,245,255,0.07)"/>
                    <text x="20" y="24" textAnchor="middle" fill="#00f5ff" fontSize="14" fontWeight="bold" fontFamily="Orbitron">CS</text>
                  </svg>
                </div>
                <span>CYBER<span className="footer__logo-accent">SEC</span> ACADEMY</span>
              </Link>
              <p className="footer__brand-desc">
                India's leading cybersecurity training platform. Building the next generation of security professionals with hands-on, industry-aligned education.
              </p>
              <div className="footer__socials">
                {socials.map((s) => (
                  <a key={s.name} href={s.href} className="footer__social" aria-label={s.name} title={s.name}>
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div className="footer__newsletter">
                <div className="footer__newsletter-label">📬 Subscribe to Security Digest</div>
                <div className="footer__newsletter-form">
                  <input type="email" placeholder="your@email.com" className="footer__newsletter-input" />
                  <button className="btn btn-primary footer__newsletter-btn">Subscribe</button>
                </div>
              </div>
            </div>

            {/* Link columns */}
            {linkGroups.map((group) => (
              <div key={group.title} className="footer__col">
                <h4 className="footer__col-title">{group.title}</h4>
                <ul className="footer__col-list">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link to={item.to} className="footer__col-link">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">
              © {year} CyberSec Academy. All rights reserved. Crafted with 🛡️ for security professionals.
            </p>
            <div className="footer__bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Sitemap</a>
            </div>
            <div className="footer__certifications">
              {['ISO 27001', 'SSL Secured', 'GDPR Compliant'].map(c => (
                <span key={c} className="footer__cert-badge">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
