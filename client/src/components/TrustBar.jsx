import React from 'react';
import './TrustBar.css';

const logos = [
  { name: 'NASSCOM', icon: '🏛️' },
  { name: 'CERT-In', icon: '🛡️' },
  { name: 'MeitY', icon: '🇮🇳' },
  { name: 'EC-Council', icon: '🔐' },
  { name: 'CompTIA', icon: '💻' },
  { name: 'Offensive Security', icon: '⚔️' },
  { name: 'ISACA', icon: '📋' },
  { name: '(ISC)²', icon: '🌐' },
  { name: 'NASSCOM', icon: '🏛️' },
  { name: 'CERT-In', icon: '🛡️' },
  { name: 'MeitY', icon: '🇮🇳' },
  { name: 'EC-Council', icon: '🔐' },
  { name: 'CompTIA', icon: '💻' },
  { name: 'Offensive Security', icon: '⚔️' },
  { name: 'ISACA', icon: '📋' },
  { name: '(ISC)²', icon: '🌐' },
];

const TrustBar = () => {
  return (
    <section className="trust-bar">
      <div className="trust-bar__label">
        <span>TRUSTED BY LEADING ORGANIZATIONS</span>
      </div>
      <div className="trust-bar__track-wrapper">
        <div className="trust-bar__track">
          {logos.map((logo, i) => (
            <div key={i} className="trust-bar__item">
              <span className="trust-bar__item-icon">{logo.icon}</span>
              <span className="trust-bar__item-name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
