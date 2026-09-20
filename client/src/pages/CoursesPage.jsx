import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/Courses.css';
import './CoursesPage.css';

const staticCourses = [
  {
    _id: '1',
    title: 'Ethical Hacking & Penetration Testing',
    description: 'Master the complete penetration testing methodology. From reconnaissance to exploitation, learn how professional hackers think and operate.',
    price: 4999,
    duration: '6 Months',
    level: 'Beginner to Pro',
    skills: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark'],
    popular: true,
    rating: 4.9,
    studentsEnrolled: 12847,
    category: 'Offensive Security',
    icon: '⚔️',
    color: '#ff3a3a',
    syllabus: [
      'Module 1: Introduction to Cyber Security & Linux Basics',
      'Module 2: Network Reconnaissance & Footprinting',
      'Module 3: Vulnerability Scanning & Analysis',
      'Module 4: System Hacking & Privilege Escalation',
      'Module 5: Web Application Security & OWASP Top 10',
      'Module 6: Capstone Penetration Testing Project'
    ]
  },
  {
    _id: '2',
    title: 'Cloud Security & DevSecOps',
    description: 'Secure AWS, Azure, and GCP environments. Learn container security, CI/CD pipeline hardening, and infrastructure as code security.',
    price: 5999,
    duration: '4 Months',
    level: 'Intermediate',
    skills: ['AWS Security', 'Docker', 'Kubernetes', 'Terraform'],
    popular: false,
    rating: 4.8,
    studentsEnrolled: 8234,
    category: 'Cloud Security',
    icon: '☁️',
    color: '#00f5ff',
    syllabus: [
      'Module 1: Cloud Architecture Security & IAM',
      'Module 2: Container Security with Docker & Kubernetes',
      'Module 3: DevSecOps CI/CD Integration',
      'Module 4: Infrastructure as Code (IaC) Scanning'
    ]
  },
  {
    _id: '3',
    title: 'SOC Analyst & Threat Hunting',
    description: 'Build a career as a Security Operations Center analyst. Learn SIEM tools, threat intelligence, incident response, and digital forensics.',
    price: 3999,
    duration: '3 Months',
    level: 'Beginner',
    skills: ['Splunk', 'ELK Stack', 'MITRE ATT&CK', 'Snort'],
    popular: false,
    rating: 4.9,
    studentsEnrolled: 9541,
    category: 'Blue Team',
    icon: '🔭',
    color: '#7c3aed',
    syllabus: [
      'Module 1: Fundamentals of SOC & Log Analysis',
      'Module 2: SIEM Deployment (Splunk & Elastic)',
      'Module 3: Threat Hunting with MITRE ATT&CK',
      'Module 4: Incident Response & Triage'
    ]
  },
  {
    _id: '4',
    title: 'Web Application Security (OWASP)',
    description: 'Deep dive into web app vulnerabilities — SQL injection, XSS, CSRF, SSRF, and more. Hands-on labs with real vulnerable applications.',
    price: 3499,
    duration: '2 Months',
    level: 'Intermediate',
    skills: ['OWASP Top 10', 'Burp Suite Pro', 'SQLMap', 'JavaScript'],
    popular: true,
    rating: 4.9,
    studentsEnrolled: 15203,
    category: 'Web Security',
    icon: '🌐',
    color: '#f59e0b',
    syllabus: [
      'Module 1: HTTP Fundamentals & Interception Proxies',
      'Module 2: Injection Attacks (SQLi, Command Injection)',
      'Module 3: Broken Access Control & XSS',
      'Module 4: API Security & OAuth Vulnerabilities'
    ]
  },
  {
    _id: '5',
    title: 'Digital Forensics & Incident Response',
    description: 'Investigate cyber incidents, analyze malware, recover evidence, and build airtight incident response plans for enterprise environments.',
    price: 4499,
    duration: '3 Months',
    level: 'Advanced',
    skills: ['Autopsy', 'Volatility', 'FTK Imager', 'OSINT'],
    popular: false,
    rating: 4.8,
    studentsEnrolled: 6129,
    category: 'Forensics',
    icon: '🔬',
    color: '#10b981',
    syllabus: [
      'Module 1: Evidence Collection & Chain of Custody',
      'Module 2: Memory Forensics with Volatility',
      'Module 3: Disk & Registry Analysis',
      'Module 4: Malware Static & Dynamic Analysis'
    ]
  },
  {
    _id: '6',
    title: 'Network Security & Zero Trust',
    description: 'Design and implement Zero Trust architecture. Master firewall rules, VPN configurations, IDS/IPS systems, and network monitoring.',
    price: 3999,
    duration: '2 Months',
    level: 'Intermediate',
    skills: ['Cisco', 'pfSense', 'Zeek', 'OpenVPN'],
    popular: false,
    rating: 4.7,
    studentsEnrolled: 7342,
    category: 'Network Security',
    icon: '🔒',
    color: '#06b6d4',
    syllabus: [
      'Module 1: TCP/IP & Network Protocol Analysis',
      'Module 2: Firewall & IDS/IPS Configuration',
      'Module 3: Zero Trust Architecture & Network Microsegmentation'
    ]
  },
];

const categories = ['All', 'Offensive Security', 'Cloud Security', 'Blue Team', 'Web Security', 'Forensics', 'Network Security'];
const levels = ['All Levels', 'Beginner', 'Beginner to Pro', 'Intermediate', 'Advanced'];

const CoursesPage = () => {
  const [courses, setCourses] = useState(staticCourses);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [sortBy, setSortBy] = useState('popular');
  const [activeModalCourse, setActiveModalCourse] = useState(null);
  const [enrolledMsg, setEnrolledMsg] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(res => { if (res.data && res.data.length) setCourses(res.data); })
      .catch(() => {});
  }, []);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) ||
                          course.description.toLowerCase().includes(search.toLowerCase()) ||
                          (course.skills && course.skills.some(s => s.toLowerCase().includes(search.toLowerCase())));
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return (b.studentsEnrolled || 0) - (a.studentsEnrolled || 0);
  });

  const handleEnroll = (courseTitle) => {
    setEnrolledMsg(`Successfully requested enrollment for "${courseTitle}"! Redirecting to sign up...`);
    setTimeout(() => {
      window.location.href = '/register';
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="courses-page page-enter">
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

        {/* Hero Header */}
        <header className="courses-page__hero container">
          <div className="section-tag">Explore All Programs</div>
          <h1 className="section-title">
            Industry-Certified <span>Cybersecurity</span> Catalog
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Hands-on training designed by cybersecurity veterans. Master real vulnerabilities in lab environments.
          </p>

          {/* Search Bar */}
          <div className="courses-page__search-bar">
            <span style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', paddingLeft: '8px' }}>🔍</span>
            <input
              type="text"
              className="courses-page__search-input"
              placeholder="Search courses, skills (e.g. Wireshark, Splunk, Metasploit)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', padding: '0 12px', cursor: 'pointer' }}
              >
                ✖
              </button>
            )}
          </div>

          {/* Controls / Filters */}
          <div className="courses-page__controls">
            <div className="courses-page__filters">
              <select
                className="courses-page__filter-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => <option key={cat} value={cat}>Category: {cat}</option>)}
              </select>

              <select
                className="courses-page__filter-select"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {levels.map(lvl => <option key={lvl} value={lvl}>Level: {lvl}</option>)}
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Sort by:</span>
              <select
                className="courses-page__filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </header>

        {/* Course Grid */}
        <main className="container">
          {enrolledMsg && (
            <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(0, 245, 255, 0.15)', border: '1px solid var(--cyan)', color: 'var(--cyan)', textAlign: 'center', marginBottom: '24px', fontWeight: 'bold' }}>
              {enrolledMsg}
            </div>
          )}

          <div className="courses-page__grid">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, i) => (
                <div
                  key={course._id}
                  className={`course-card glass-card ${course.popular ? 'course-card--popular' : ''}`}
                  style={{ '--card-color': course.color || '#00f5ff' }}
                >
                  {course.popular && (
                    <div className="course-card__popular-badge">🔥 Most Popular</div>
                  )}
                  <div className="course-card__header">
                    <div className="course-card__icon" style={{ background: `${course.color || '#00f5ff'}15`, border: `1px solid ${course.color || '#00f5ff'}30` }}>
                      <span style={{ fontSize: '2rem' }}>{course.icon || '🔐'}</span>
                    </div>
                    <div className="course-card__meta">
                      <span className="course-card__category">{course.category}</span>
                      <span className="course-card__level">{course.level}</span>
                    </div>
                  </div>

                  <h3 className="course-card__title">{course.title}</h3>
                  <p className="course-card__desc">{course.description}</p>

                  <div className="course-card__skills">
                    {(course.skills || []).map(s => (
                      <span key={s} className="course-card__skill">{s}</span>
                    ))}
                  </div>

                  <div className="course-card__stats">
                    <div className="course-card__stat">
                      <span className="course-card__stat-icon">⏱️</span>
                      {course.duration}
                    </div>
                    <div className="course-card__stat">
                      <span className="course-card__stat-icon">⭐</span>
                      {course.rating}
                    </div>
                    <div className="course-card__stat">
                      <span className="course-card__stat-icon">👥</span>
                      {(course.studentsEnrolled || 0).toLocaleString()}
                    </div>
                  </div>

                  <div className="course-card__footer" style={{ gap: '12px' }}>
                    <div className="course-card__price">
                      <span className="course-card__price-amount">₹{(course.price || 0).toLocaleString()}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        className="btn btn-outline"
                        style={{ padding: '10px 14px', fontSize: '0.85rem' }}
                        onClick={() => setActiveModalCourse(course)}
                      >
                        Syllabus
                      </button>
                      <button
                        className="btn btn-primary"
                        style={{ padding: '10px 14px', fontSize: '0.85rem' }}
                        onClick={() => handleEnroll(course.title)}
                      >
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
                <h3>No courses match your current search criteria.</h3>
                <p style={{ marginTop: '8px' }}>Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </main>

        {/* Syllabus Modal */}
        {activeModalCourse && (
          <div className="course-modal-backdrop" onClick={() => setActiveModalCourse(null)}>
            <div className="course-modal" onClick={e => e.stopPropagation()}>
              <button className="course-modal__close" onClick={() => setActiveModalCourse(null)}>✕</button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <span style={{ fontSize: '2.5rem' }}>{activeModalCourse.icon || '🎓'}</span>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem' }}>{activeModalCourse.title}</h2>
                  <span style={{ color: 'var(--cyan)', fontSize: '0.9rem' }}>{activeModalCourse.category} • {activeModalCourse.duration}</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>{activeModalCourse.description}</p>

              <h4 style={{ color: 'var(--text-primary)', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>Course Syllabus & Modules:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {(activeModalCourse.syllabus || [
                  'Module 1: Core Fundamentals & Theory',
                  'Module 2: Hands-On Vulnerability Labs',
                  'Module 3: Advanced Attack & Defense Vectors',
                  'Module 4: Real-World Incident Simulation Project'
                ]).map((mod, idx) => (
                  <li key={idx} style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '12px 16px', borderRadius: '8px', borderLeft: '3px solid var(--cyan)', fontSize: '0.95rem' }}>
                    {mod}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-glass)', paddingTop: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Total Investment</span>
                  <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--cyan)' }}>₹{activeModalCourse.price.toLocaleString()}</div>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setActiveModalCourse(null);
                    handleEnroll(activeModalCourse.title);
                  }}
                >
                  Enroll Now →
                </button>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default CoursesPage;
