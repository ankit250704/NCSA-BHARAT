import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        color: Math.random() > 0.7 ? '#a78bfa' : '#00f5ff',
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });

      // Draw connecting lines
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const stats = [
    { value: '50K+', label: 'Students Trained' },
    { value: '200+', label: 'Expert Courses' },
    { value: '98%', label: 'Job Placement' },
    { value: '4.9★', label: 'Average Rating' },
  ];

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__grid-bg grid-bg" />

      {/* Glow orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="container hero__content">
        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>🔐 India's #1 Cybersecurity Training Platform</span>
          </div>

          <h1 className="hero__title">
            Master the Art of<br />
            <span className="hero__title-gradient">Cyber Defense</span><br />
            <span className="hero__title-sub">& Digital Security</span>
          </h1>

          <p className="hero__desc">
            Join 50,000+ security professionals. Learn ethical hacking, penetration testing, cloud security, and more with hands-on virtual labs and industry-recognized certifications.
          </p>

          <div className="hero__actions">
            <Link to="/register" className="btn btn-primary hero__btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              Start Learning Free
            </Link>
            <Link to="/courses" className="btn btn-outline hero__btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              Explore Courses
            </Link>
          </div>

          {/* Trust badges */}
          <div className="hero__trust">
            <span className="hero__trust-label">Recognized by:</span>
            <div className="hero__trust-logos">
              {['CEH', 'OSCP', 'CISSP', 'CompTIA', 'EC-Council'].map((cert) => (
                <div key={cert} className="hero__cert-badge">{cert}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Terminal / Shield visual */}
        <div className="hero__right">
          <div className="hero__terminal">
            <div className="hero__terminal-header">
              <div className="hero__terminal-dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <span className="hero__terminal-title">cybersec_academy — bash</span>
            </div>
            <div className="hero__terminal-body">
              <div className="hero__terminal-line">
                <span className="terminal-prompt">root@cybersec</span>
                <span className="terminal-path">:~#</span>
                <span className="terminal-cmd"> nmap -sV target.com</span>
              </div>
              <div className="terminal-output">Starting Nmap scan...</div>
              <div className="terminal-output terminal-output--cyan">PORT    STATE  SERVICE  VERSION</div>
              <div className="terminal-output">22/tcp  open   ssh      OpenSSH 8.2</div>
              <div className="terminal-output">80/tcp  open   http     Apache 2.4</div>
              <div className="terminal-output terminal-output--green">443/tcp open   ssl/http  nginx</div>
              <div className="terminal-output terminal-output--yellow">⚠ Vulnerability detected: CVE-2024-...</div>
              <div className="terminal-output terminal-output--cyan">Running exploit module...</div>
              <div className="hero__terminal-line">
                <span className="terminal-prompt">root@cybersec</span>
                <span className="terminal-path">:~#</span>
                <span className="terminal-cursor">█</span>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="hero__float-badge hero__float-badge--1">
            <div className="hero__float-icon">🛡️</div>
            <div>
              <div className="hero__float-val">A+</div>
              <div className="hero__float-label">Security Rating</div>
            </div>
          </div>
          <div className="hero__float-badge hero__float-badge--2">
            <div className="hero__float-icon">🎓</div>
            <div>
              <div className="hero__float-val">500+</div>
              <div className="hero__float-label">Certifications Issued Today</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero__stats">
        <div className="container">
          <div className="hero__stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="hero__stat">
                <div className="hero__stat-value">{s.value}</div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
