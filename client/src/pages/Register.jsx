import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';
import './AuthPage.css';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await api.post('/api/auth/register', {
        name: form.name, email: form.email, password: form.password
      });
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-page__bg">
        <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />
        <div className="glow-orb" style={{ width:'600px', height:'600px', background:'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)', top:'-100px', left:'-100px' }} />
        <div className="glow-orb" style={{ width:'400px', height:'400px', background:'radial-gradient(circle, rgba(0,245,255,0.1) 0%, transparent 70%)', bottom:'-100px', right:'-100px' }} />
      </div>

      <div className="auth-page__inner">
        <div className="auth-page__brand">
          <Link to="/" className="auth-page__logo">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" stroke="#00f5ff" strokeWidth="2" fill="none"/>
              <polygon points="20,8 32,15 32,25 20,32 8,25 8,15" stroke="#00f5ff" strokeWidth="1.5" fill="rgba(0,245,255,0.07)"/>
              <text x="20" y="24" textAnchor="middle" fill="#00f5ff" fontSize="14" fontWeight="bold" fontFamily="Orbitron">CS</text>
            </svg>
            <span>CYBERSEC ACADEMY</span>
          </Link>
          <h1 className="auth-page__brand-title">Begin Your<br /><span>Hacking Journey</span></h1>
          <p className="auth-page__brand-sub">Join 50,000+ security professionals who chose CyberSec Academy to launch their careers.</p>
          <div className="auth-page__perks">
            {[
              '✅ Free Trial Lab Access on signup',
              '✅ No credit card required',
              '✅ Cancel anytime',
              '✅ 30-day money back guarantee',
            ].map(p => (
              <div key={p} className="auth-page__perk">{p}</div>
            ))}
          </div>
        </div>

        <div className="auth-page__form-wrapper">
          <div className="auth-card glass-card">
            <h2 className="auth-card__title">Create Account</h2>
            <p className="auth-card__subtitle">Start your cybersecurity career today</p>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" name="name" className="form-input" placeholder="Arjun Sharma" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" name="email" className="form-input" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" name="password" className="form-input" placeholder="Min. 8 characters" value={form.password} onChange={handleChange} required minLength={8} />
              </div>
              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input type="password" name="confirmPassword" className="form-input" placeholder="Re-enter password" value={form.confirmPassword} onChange={handleChange} required />
              </div>

              <label className="auth-checkbox" style={{ marginBottom: '8px' }}>
                <input type="checkbox" required />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  I agree to the{' '}
                  <a href="#" style={{ color: 'var(--cyan)' }}>Terms of Service</a> and{' '}
                  <a href="#" style={{ color: 'var(--cyan)' }}>Privacy Policy</a>
                </span>
              </label>

              {error && <div className="auth-error">{error}</div>}

              <button type="submit" className="btn btn-primary auth-submit" disabled={loading}>
                {loading ? 'Creating account...' : '🚀 Create Free Account'}
              </button>

              <div className="auth-divider"><span>or sign up with</span></div>

              <div className="auth-social-btns">
                <button type="button" className="btn btn-outline auth-social-btn">
                  <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  Google
                </button>
                <button type="button" className="btn btn-outline auth-social-btn">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#0077B5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </button>
              </div>
            </form>

            <p className="auth-card__footer">
              Already have an account?{' '}
              <Link to="/login" className="auth-card__link">Sign In →</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
