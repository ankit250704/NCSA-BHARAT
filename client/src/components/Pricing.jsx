import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 999, annually: 799 },
    desc: 'Perfect for beginners exploring cybersecurity',
    features: [
      '5 Foundation Courses',
      'Basic Virtual Labs (10 labs)',
      'Community Forum Access',
      'Course Completion Certificates',
      'Email Support',
      'Mobile App Access',
    ],
    notIncluded: ['Live Mentoring Sessions', 'Advanced Labs', 'Placement Assistance', 'Certification Prep'],
    color: '#7c3aed',
    icon: '🚀',
  },
  {
    name: 'Professional',
    price: { monthly: 2999, annually: 2399 },
    desc: 'For serious learners ready to go pro',
    features: [
      'All 200+ Courses',
      'Advanced Virtual Labs (300+ labs)',
      '1-on-1 Mentoring (4 sessions/month)',
      'Industry Certifications',
      'CTF Competitions',
      'Priority Support (24/7)',
      'Career Guidance',
      'LinkedIn Profile Review',
    ],
    notIncluded: ['Dedicated Placement Manager', 'Internship Placement'],
    color: '#00f5ff',
    icon: '⚡',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 5999, annually: 4799 },
    desc: 'Complete package with guaranteed placement',
    features: [
      'Everything in Professional',
      'Dedicated Placement Manager',
      'Guaranteed Interview Calls (min. 5)',
      'Internship Placement',
      'Resume & Portfolio Building',
      'Mock Interviews',
      'Salary Negotiation Support',
      'Alumni Network Access',
    ],
    notIncluded: [],
    color: '#f59e0b',
    icon: '👑',
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState('monthly');

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="pricing__header">
          <div className="section-tag">Pricing</div>
          <h2 className="section-title">
            Invest in Your<br /><span>Cybersecurity Career</span>
          </h2>
          <p className="section-subtitle">
            Transparent pricing with no hidden fees. All plans include lifetime access to purchased content.
          </p>

          {/* Billing toggle */}
          <div className="pricing__toggle">
            <span className={billing === 'monthly' ? 'active' : ''}>Monthly</span>
            <button
              className={`pricing__toggle-btn ${billing === 'annually' ? 'annually' : ''}`}
              onClick={() => setBilling(billing === 'monthly' ? 'annually' : 'monthly')}
              aria-label="Toggle billing"
            >
              <span className="pricing__toggle-thumb" />
            </button>
            <span className={billing === 'annually' ? 'active' : ''}>
              Annual <span className="pricing__save-badge">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card glass-card ${plan.popular ? 'pricing-card--popular' : ''}`}
              style={{ '--card-color': plan.color }}
            >
              {plan.popular && (
                <div className="pricing-card__ribbon">⚡ Most Popular</div>
              )}
              <div className="pricing-card__icon">{plan.icon}</div>
              <div className="pricing-card__name">{plan.name}</div>
              <div className="pricing-card__desc">{plan.desc}</div>

              <div className="pricing-card__price">
                <span className="pricing-card__currency">₹</span>
                <span className="pricing-card__amount">
                  {billing === 'monthly' ? plan.price.monthly.toLocaleString() : plan.price.annually.toLocaleString()}
                </span>
                <span className="pricing-card__period">/mo</span>
              </div>

              <Link
                to="/register"
                className={`btn pricing-card__cta ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
              >
                {plan.popular ? '⚡ Get Started Now' : 'Get Started'}
              </Link>

              <div className="pricing-card__divider" />

              <ul className="pricing-card__features">
                {plan.features.map((f, j) => (
                  <li key={j} className="pricing-feature pricing-feature--included">
                    <span className="pricing-feature__icon">✓</span>
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f, j) => (
                  <li key={j} className="pricing-feature pricing-feature--excluded">
                    <span className="pricing-feature__icon">✕</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pricing__guarantee">
          <div className="pricing__guarantee-icon">🛡️</div>
          <div>
            <h4>30-Day Money Back Guarantee</h4>
            <p>Not satisfied? Get a full refund within 30 days, no questions asked.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
