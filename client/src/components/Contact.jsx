import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setStatus({ type: 'success', msg: "✅ Message sent! We'll be in touch within 24 hours." });
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setStatus({ type: 'error', msg: '❌ Failed to send. Please try again or email us directly.' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: '📧', label: 'Email Us', value: 'info@cybersecacademy.in', href: 'mailto:info@cybersecacademy.in' },
    { icon: '📞', label: 'Call Us', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: '💬', label: 'WhatsApp', value: '+91 98765 43210', href: 'https://wa.me/919876543210' },
    { icon: '📍', label: 'Location', value: 'Hyderabad, Bengaluru, Mumbai, Delhi', href: null },
  ];

  return (
    <section className="contact section" id="contact">
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      <div className="glow-orb" style={{
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(0,245,255,0.1) 0%, transparent 70%)',
        left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact__header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">
            Start Your Cybersecurity<br /><span>Journey Today</span>
          </h2>
          <p className="section-subtitle">
            Have questions? Our security experts are available 24/7 to help you choose the right learning path.
          </p>
        </div>

        <div className="contact__inner">
          {/* Form */}
          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="contact-form__grid">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Arjun Sharma"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="arjun@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <select id="subject" name="subject" className="form-input form-select" value={form.subject} onChange={handleChange}>
                  <option value="">Select a topic...</option>
                  <option value="course-inquiry">Course Inquiry</option>
                  <option value="placement">Placement Query</option>
                  <option value="pricing">Pricing & Plans</option>
                  <option value="corporate">Corporate Training</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="Tell us about your cybersecurity learning goals..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {status && (
              <div className={`contact-form__status ${status.type}`}>
                {status.msg}
              </div>
            )}

            <button type="submit" className="btn btn-primary contact-form__submit" disabled={loading}>
              {loading ? (
                <span className="contact-form__loading">
                  <span className="loading-dot" /><span className="loading-dot" /><span className="loading-dot" />
                  Sending...
                </span>
              ) : (
                <>🚀 Send Message</>
              )}
            </button>
          </form>

          {/* Contact info */}
          <div className="contact-info">
            {contactInfo.map((c, i) => (
              <div key={i} className="contact-info-card glass-card">
                <div className="contact-info-card__icon">{c.icon}</div>
                <div>
                  <div className="contact-info-card__label">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="contact-info-card__value contact-info-card__link">{c.value}</a>
                  ) : (
                    <div className="contact-info-card__value">{c.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div className="contact-cta glass-card">
              <div className="contact-cta__title">🎯 Free Career Counseling</div>
              <p className="contact-cta__desc">Book a free 30-minute call with our security career advisor to build your personalized learning roadmap.</p>
              <a href="tel:+919876543210" className="btn btn-primary" style={{ marginTop: '16px', justifyContent: 'center' }}>
                📞 Book Free Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
