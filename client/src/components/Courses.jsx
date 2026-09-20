import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Courses.css';

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
  },
];

const categories = ['All', 'Offensive Security', 'Cloud Security', 'Blue Team', 'Web Security', 'Forensics', 'Network Security'];

const Courses = () => {
  const [courses, setCourses] = useState(staticCourses);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filtered, setFiltered] = useState(staticCourses);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(res => { if (res.data.length) { setCourses(res.data); setFiltered(res.data); } })
      .catch(() => {});
  }, []);

  useEffect(() => {
    setFiltered(activeCategory === 'All' ? courses : courses.filter(c => c.category === activeCategory));
  }, [activeCategory, courses]);

  return (
    <section className="courses section" id="courses">
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="courses__header">
          <div className="section-tag">Our Programs</div>
          <h2 className="section-title">
            World-Class <span>Cybersecurity</span><br />Training Programs
          </h2>
          <p className="section-subtitle">
            Industry-aligned courses taught by certified security professionals with 10+ years of real-world experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="courses__filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`courses__filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="courses__grid">
          {filtered.map((course, i) => (
            <div
              key={course._id}
              className={`course-card glass-card ${course.popular ? 'course-card--popular' : ''}`}
              style={{ '--card-color': course.color || '#00f5ff', animationDelay: `${i * 0.1}s` }}
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
                {(course.skills || []).slice(0, 4).map(s => (
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

              <div className="course-card__footer">
                <div className="course-card__price">
                  <span className="course-card__price-amount">₹{(course.price || 0).toLocaleString()}</span>
                  <span className="course-card__price-emi">EMI available</span>
                </div>
                <Link to="/register" className="btn btn-primary course-card__enroll-btn">
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="courses__footer">
          <Link to="/courses" className="btn btn-outline">
            View All Courses →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
