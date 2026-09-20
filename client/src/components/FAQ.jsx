import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Do I need prior programming knowledge to start?',
    a: 'No! Our beginner courses are designed for absolute beginners. We cover everything from networking basics and Linux fundamentals before moving to advanced security topics.',
  },
  {
    q: 'Are the certifications globally recognized?',
    a: 'Yes! Our certifications are industry-recognized and aligned with globally respected standards including CEH (Certified Ethical Hacker), CompTIA Security+, OSCP, and CISSP frameworks.',
  },
  {
    q: 'How do the virtual labs work?',
    a: 'Our browser-based labs run entirely in the cloud — no downloads required. You get access to fully configured attack/defense environments with Kali Linux, Windows targets, and network simulations.',
  },
  {
    q: 'What is the placement assistance process?',
    a: 'Professional and Enterprise plan students get dedicated placement managers, resume reviews, LinkedIn optimization, mock interviews, and direct connections with our 500+ hiring partner companies.',
  },
  {
    q: 'Can I access courses on mobile?',
    a: 'Yes! All courses are fully accessible on our mobile app (iOS & Android). You can watch lectures, read notes, and even run some lab exercises from your phone.',
  },
  {
    q: 'How long do I have access to the course content?',
    a: 'All enrolled students get lifetime access to their purchased course content, including all future updates. As new CVEs, tools, and techniques emerge, your course stays current.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'Yes! We offer a 30-day money-back guarantee. If you\'re not completely satisfied with your learning experience, contact us within 30 days for a full refund, no questions asked.',
  },
  {
    q: 'Do you offer corporate/team training?',
    a: 'Absolutely! We have customized enterprise packages for teams of 5 or more, including custom learning paths, dedicated instructors, and company-specific security assessments.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="faq__inner">
          <div className="faq__left">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title">
              Got <span>Questions?</span><br />We Have Answers.
            </h2>
            <p className="section-subtitle">
              Everything you need to know about our courses, certifications, and placement program.
            </p>
            <div className="faq__contact-prompt">
              <p>Still have questions? We're here to help.</p>
              <a href="#contact" className="btn btn-outline" style={{ marginTop: '16px' }}>
                💬 Chat With Us
              </a>
            </div>
          </div>

          <div className="faq__list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item glass-card ${openIndex === i ? 'faq-item--open' : ''}`}
              >
                <button
                  className="faq-item__question"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-item__icon">{openIndex === i ? '−' : '+'}</span>
                </button>
                <div className="faq-item__answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
