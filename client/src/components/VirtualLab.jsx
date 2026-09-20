import React from 'react';
import { Link } from 'react-router-dom';
import './VirtualLab.css';

const labFeatures = [
  { icon: '🖥️', title: 'Browser-Based Labs', desc: 'No setup required. Launch Kali Linux, Windows Server, and vulnerable VMs directly in your browser.' },
  { icon: '📡', title: 'Real Network Simulations', desc: 'Practice on virtual networks that mimic enterprise environments with real traffic and vulnerabilities.' },
  { icon: '🎯', title: '300+ Lab Scenarios', desc: 'From basic enumeration to advanced APT simulations. New labs added weekly to match latest CVEs.' },
  { icon: '🏅', title: 'CTF Challenges', desc: 'Compete in weekly Capture The Flag events, build your portfolio, and climb the leaderboard.' },
];

const tools = ['Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark', 'Nmap', 'SQLMap', 'John the Ripper', 'Hashcat', 'Autopsy', 'Volatility', 'Splunk', 'ELK Stack'];

const VirtualLab = () => {
  return (
    <section className="vlab section" id="virtual-lab">
      <div className="container">
        <div className="vlab__inner">
          {/* Left */}
          <div className="vlab__left">
            <div className="section-tag">Virtual Lab</div>
            <h2 className="section-title">
              Hack. Defend. Learn.<br />
              In Our <span>Virtual Cyber Range</span>
            </h2>
            <p className="section-subtitle">
              Our browser-based virtual lab environment gives you access to real tools and scenarios without any setup. Practice anytime, anywhere.
            </p>

            <div className="vlab__features">
              {labFeatures.map((f, i) => (
                <div key={i} className="vlab__feature">
                  <div className="vlab__feature-icon">{f.icon}</div>
                  <div>
                    <h4 className="vlab__feature-title">{f.title}</h4>
                    <p className="vlab__feature-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/register" className="btn btn-primary" style={{ marginTop: '24px' }}>
              🚀 Launch Free Trial Lab
            </Link>
          </div>

          {/* Right: Lab Preview */}
          <div className="vlab__right">
            <div className="vlab__screen">
              <div className="vlab__screen-header">
                <div className="vlab__screen-dots">
                  <span className="dot dot--red" />
                  <span className="dot dot--yellow" />
                  <span className="dot dot--green" />
                </div>
                <div className="vlab__screen-tabs">
                  <span className="vlab__tab active">Terminal</span>
                  <span className="vlab__tab">Network Map</span>
                  <span className="vlab__tab">Burp Suite</span>
                </div>
                <div className="vlab__screen-status">
                  <span className="vlab__status-dot" />
                  Lab Active
                </div>
              </div>
              <div className="vlab__screen-body">
                <div className="vlab__screen-sidebar">
                  <div className="vlab__sidebar-title">🎯 Lab: Web App Pentest</div>
                  <div className="vlab__sidebar-progress">
                    <div className="vlab__progress-label">
                      <span>Progress</span><span>60%</span>
                    </div>
                    <div className="vlab__progress-bar">
                      <div className="vlab__progress-fill" style={{ width: '60%' }} />
                    </div>
                  </div>
                  <div className="vlab__sidebar-tasks">
                    {['Reconnaissance', 'Scanning & Enumeration', 'Exploitation', 'Post-Exploitation', 'Reporting'].map((t, i) => (
                      <div key={i} className={`vlab__task ${i < 2 ? 'done' : i === 2 ? 'active' : ''}`}>
                        <span className="vlab__task-check">{i < 2 ? '✓' : i === 2 ? '⟳' : '○'}</span>
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="vlab__terminal">
                  <div className="vlab__term-line"><span className="terminal-prompt">kali@lab</span><span className="terminal-path">:~#</span> sqlmap -u "http://target/login" --dbs</div>
                  <div className="vlab__term-out" style={{ color: '#fbbf24' }}>[*] Starting SQLMap v1.7...</div>
                  <div className="vlab__term-out" style={{ color: '#00f5ff' }}>[+] Found 3 databases:</div>
                  <div className="vlab__term-out" style={{ color: '#39ff14' }}>    information_schema</div>
                  <div className="vlab__term-out" style={{ color: '#39ff14' }}>    target_db</div>
                  <div className="vlab__term-out" style={{ color: '#39ff14' }}>    admin_panel</div>
                  <div className="vlab__term-line"><span className="terminal-prompt">kali@lab</span><span className="terminal-path">:~#</span><span className="terminal-cursor">█</span></div>
                </div>
              </div>
            </div>

            {/* Tool badges */}
            <div className="vlab__tools">
              <div className="vlab__tools-label">Available Tools</div>
              <div className="vlab__tools-grid">
                {tools.map(tool => (
                  <span key={tool} className="vlab__tool-badge">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualLab;
