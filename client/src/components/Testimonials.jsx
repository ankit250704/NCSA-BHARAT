import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Arjun Sharma',
    role: 'Penetration Tester',
    company: 'Wipro CyberSecurity',
    rating: 5,
    text: 'The Ethical Hacking course was a game-changer. The virtual labs are exactly like real-world scenarios. Within 3 months of completing, I landed my dream job at Wipro. Best investment I\'ve ever made in my career.',
    courseCompleted: 'Ethical Hacking & Penetration Testing',
    avatar: 'AS',
    avatarColor: '#00f5ff',
  },
  {
    name: 'Priya Nair',
    role: 'SOC Lead',
    company: 'Infosys CyberNext',
    rating: 5,
    text: 'The SOC Analyst program is incredibly comprehensive. MITRE ATT&CK framework training, Splunk SIEM hands-on — everything is perfectly structured. My salary doubled after this certification!',
    courseCompleted: 'SOC Analyst & Threat Hunting',
    avatar: 'PN',
    avatarColor: '#a78bfa',
  },
  {
    name: 'Rahul Verma',
    role: 'Cloud Security Engineer',
    company: 'Amazon Web Services',
    rating: 5,
    text: 'Cloud Security course is outstanding. The AWS security content alone is worth 10x the course fee. The instructors are actual practitioners, not just teachers. Got AWS Security Specialty certified!',
    courseCompleted: 'Cloud Security & DevSecOps',
    avatar: 'RV',
    avatarColor: '#f59e0b',
  },
  {
    name: 'Kavya Reddy',
    role: 'Bug Bounty Hunter',
    company: 'Freelance (₹5L+/month)',
    rating: 5,
    text: 'Web App Security course taught me OWASP Top 10 in depth with real vulnerable applications. I\'ve already earned ₹8 lakhs from bug bounties in the first year after completing this course!',
    courseCompleted: 'Web Application Security (OWASP)',
    avatar: 'KR',
    avatarColor: '#10b981',
  },
  {
    name: 'Vikram Singh',
    role: 'CISO',
    company: 'HDFC Bank',
    rating: 5,
    text: 'Enrolled my entire security team here. The DFIR course is exceptional — covers everything from memory forensics to enterprise incident response. Multiple team members are now certified.',
    courseCompleted: 'Digital Forensics & Incident Response',
    avatar: 'VS',
    avatarColor: '#ff3a3a',
  },
  {
    name: 'Meera Pillai',
    role: 'Network Security Engineer',
    company: 'Tata Communications',
    rating: 5,
    text: 'The Network Security course is comprehensive and practical. Zero Trust architecture labs are superb. The placement team helped me get 3 interview calls within a week of completion!',
    courseCompleted: 'Network Security & Zero Trust',
    avatar: 'MP',
    avatarColor: '#06b6d4',
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setIsAnimating(false);
    }, 200);
  };

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((active + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="testimonials section" id="testimonials">
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
      <div className="glow-orb" style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)',
        right: '-200px', top: '50%', transform: 'translateY(-50%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="testimonials__header">
          <div className="section-tag">Student Success</div>
          <h2 className="section-title">
            Real Stories from Real<br /><span>Security Professionals</span>
          </h2>
        </div>

        <div className="testimonials__featured">
          <div className={`testimonial-main glass-card ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            <div className="testimonial-main__quote">"</div>
            <p className="testimonial-main__text">{t.text}</p>
            <div className="testimonial-main__footer">
              <div className="testimonial-main__avatar" style={{ background: `${t.avatarColor}20`, border: `2px solid ${t.avatarColor}`, color: t.avatarColor }}>
                {t.avatar}
              </div>
              <div className="testimonial-main__info">
                <div className="testimonial-main__name">{t.name}</div>
                <div className="testimonial-main__role">{t.role} @ {t.company}</div>
                <div className="testimonial-main__course">📚 {t.courseCompleted}</div>
              </div>
              <div className="testimonial-main__stars">
                {Array.from({ length: t.rating }).map((_, i) => <span key={i}>★</span>)}
              </div>
            </div>
          </div>

          {/* Carousel navigation */}
          <div className="testimonials__nav">
            <button className="testimonials__nav-btn" onClick={prev} aria-label="Previous">←</button>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button key={i} className={`testimonials__dot ${i === active ? 'active' : ''}`} onClick={() => goTo(i)} />
              ))}
            </div>
            <button className="testimonials__nav-btn" onClick={next} aria-label="Next">→</button>
          </div>
        </div>

        {/* Mini testimonial grid */}
        <div className="testimonials__grid">
          {testimonials.filter((_, i) => i !== active).slice(0, 3).map((t, i) => (
            <div key={i} className="testimonial-mini glass-card">
              <div className="testimonial-mini__stars">
                {Array.from({ length: 5 }).map((_, j) => <span key={j} style={{ color: '#f59e0b' }}>★</span>)}
              </div>
              <p className="testimonial-mini__text">"{t.text.slice(0, 120)}..."</p>
              <div className="testimonial-mini__author">
                <div className="testimonial-mini__avatar" style={{ background: `${t.avatarColor}20`, color: t.avatarColor }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="testimonial-mini__name">{t.name}</div>
                  <div className="testimonial-mini__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
