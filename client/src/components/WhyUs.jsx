import React from 'react';
import './WhyUs.css';

const features = [
  {
    icon: '🧪',
    title: 'Real-World Virtual Labs',
    desc: 'Practice on industry-grade virtual environments. 200+ hands-on labs covering real attack scenarios and defense techniques.',
    color: '#00f5ff',
  },
  {
    icon: '🏆',
    title: 'Industry-Recognized Certs',
    desc: 'Earn globally accepted certifications aligned with CEH, OSCP, CISSP, and CompTIA standards. Employers trust our credentials.',
    color: '#a78bfa',
  },
  {
    icon: '👨‍💼',
    title: 'Expert Instructors',
    desc: 'Learn from certified professionals with active industry experience — penetration testers, SOC leads, and security architects.',
    color: '#f59e0b',
  },
  {
    icon: '💼',
    title: '98% Job Placement Rate',
    desc: 'Our dedicated placement team connects you with 500+ hiring partners including top MNCs, startups, and government agencies.',
    color: '#10b981',
  },
  {
    icon: '🔄',
    title: 'Lifetime Access & Updates',
    desc: 'Cyber threats evolve fast. Get lifetime access to course materials with regular updates reflecting the latest CVEs and tools.',
    color: '#ff3a3a',
  },
  {
    icon: '🤝',
    title: 'Active Learning Community',
    desc: 'Join 50,000+ security professionals on Discord. Weekly CTF challenges, bug bounty tips, and peer learning sessions.',
    color: '#06b6d4',
  },
];

const WhyUs = () => {
  return (
    <section className="why-us section" id="why-us">
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

      {/* Left glow */}
      <div className="glow-orb" style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
        left: '-100px', top: '50%', transform: 'translateY(-50%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="why-us__header">
          <div className="section-tag">Why Choose Us</div>
          <h2 className="section-title">
            The <span>CyberSec Academy</span><br />Advantage
          </h2>
          <p className="section-subtitle">
            We don't just teach cybersecurity — we build security professionals who are job-ready from day one.
          </p>
        </div>

        <div className="why-us__grid">
          {features.map((f, i) => (
            <div key={i} className="why-card glass-card" style={{ '--card-color': f.color }}>
              <div className="why-card__icon" style={{
                background: `${f.color}15`,
                border: `1px solid ${f.color}30`,
                color: f.color,
              }}>
                <span>{f.icon}</span>
              </div>
              <h3 className="why-card__title">{f.title}</h3>
              <p className="why-card__desc">{f.desc}</p>
              <div className="why-card__arrow">→</div>
            </div>
          ))}
        </div>

        {/* Achievement strip */}
        <div className="why-us__achievements">
          {[
            { val: '50K+', label: 'Students Trained', icon: '🎓' },
            { val: '200+', label: 'Expert Courses', icon: '📚' },
            { val: '500+', label: 'Hiring Partners', icon: '🏢' },
            { val: '98%', label: 'Placement Rate', icon: '💼' },
            { val: '4.9★', label: 'Average Rating', icon: '⭐' },
          ].map((a, i) => (
            <div key={i} className="why-achievement">
              <div className="why-achievement__icon">{a.icon}</div>
              <div className="why-achievement__val">{a.val}</div>
              <div className="why-achievement__label">{a.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
