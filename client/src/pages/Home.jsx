import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Footer from '../components/Footer';
import './Home.css';

const explorationCards = [
  {
    title: 'Training Programs & Certifications',
    desc: 'Offensive Security, Cloud Defense, SOC Analysis, and Web App Pentesting. Taught by industry-certified professionals.',
    icon: '⚔️',
    color: '#00f5ff',
    link: '/courses',
    btnText: 'View All Courses →',
    tag: '200+ Courses',
  },
  {
    title: 'Virtual Cyber Range & Labs',
    desc: 'Zero setup required. Spin up browser-based Kali Linux machines, vulnerable networks, and live CTF challenges.',
    icon: '🖥️',
    color: '#7c3aed',
    link: '/virtual-lab',
    btnText: 'Explore Virtual Lab →',
    tag: '300+ Labs',
  },
  {
    title: 'Why Choose CyberSec Academy',
    desc: 'Discover our 98% placement track record, career guidance, top hiring partners, and active Discord community.',
    icon: '🏆',
    color: '#39ff14',
    link: '/why-us',
    btnText: 'Learn Our Story →',
    tag: '98% Placement',
  },
  {
    title: 'Transparent Plans & Pricing',
    desc: 'Flexible monthly or annual plans with EMI options. Guaranteed 30-day money back guarantee on all subscriptions.',
    icon: '⚡',
    color: '#f59e0b',
    link: '/pricing',
    btnText: 'Check Pricing Plans →',
    tag: 'Save 20% Annual',
  },
  {
    title: 'Student Reviews & Success Stories',
    desc: 'Read testimonials from security analysts and ethical hackers placed at top Fortune 500 tech firms.',
    icon: '⭐',
    color: '#ff3a3a',
    link: '/testimonials',
    btnText: 'Read Reviews →',
    tag: '4.9/5 Rating',
  },
  {
    title: 'Contact & Counseling',
    desc: 'Need advice choosing the right cybersecurity roadmap? Schedule a free consultation with our career counselors.',
    icon: '📡',
    color: '#06b6d4',
    link: '/contact',
    btnText: 'Get In Touch →',
    tag: '24/7 Support',
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="page-enter">
        <Hero />
        <TrustBar />

        {/* Portal Navigator Grid */}
        <section className="home-portal section">
          <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="home-portal__header">
              <div className="section-tag">Explore Platform</div>
              <h2 className="section-title">
                Everything You Need to <span>Become a Hacker</span>
              </h2>
              <p className="section-subtitle">
                Select a section below to dive into our course catalog, hands-on cyber range, student stories, or enrollment options.
              </p>
            </div>

            <div className="home-portal__grid">
              {explorationCards.map((card, idx) => (
                <Link
                  key={idx}
                  to={card.link}
                  className="home-portal__card glass-card"
                  style={{ '--card-color': card.color }}
                >
                  <div className="home-portal__card-top">
                    <div
                      className="home-portal__icon"
                      style={{
                        background: `${card.color}18`,
                        border: `1px solid ${card.color}35`,
                      }}
                    >
                      <span style={{ fontSize: '2rem' }}>{card.icon}</span>
                    </div>
                    <span
                      className="home-portal__tag"
                      style={{
                        color: card.color,
                        borderColor: `${card.color}40`,
                        background: `${card.color}10`,
                      }}
                    >
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="home-portal__title">{card.title}</h3>
                  <p className="home-portal__desc">{card.desc}</p>

                  <div className="home-portal__action" style={{ color: card.color }}>
                    {card.btnText}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
