'use client';

import { useState } from 'react';
import { useInView, fadeInStyle } from '@/hooks/useInView';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [ref, isInView] = useInView<HTMLElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:drake.krommenhoek@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.6rem 0.75rem',
    border: '1px solid #D1D5DB',
    borderRadius: 0,
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '0.88rem',
    color: '#111827',
    outline: 'none',
    backgroundColor: '#FAFAFA',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '0.7rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: '#6B7280',
    display: 'block',
    marginBottom: '0.4rem',
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ backgroundColor: '#F7F5F0', ...fadeInStyle(isInView) }}
    >
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="section-label">Let&apos;s connect</p>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Contact</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 max-w-4xl mx-auto">
          {/* Left — Info */}
          <div className="space-y-10">
            <div>
              <h3 style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '1.6rem',
                fontWeight: 600,
                color: '#002147',
                marginBottom: '0.75rem',
              }}>Get In Touch</h3>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.7, fontWeight: 300 }}>
                Open to discussing opportunities, collaborations, or just connecting.
                Reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div>
                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9B8B5E', marginBottom: '0.6rem' }}>
                  Email
                </p>
                <div className="space-y-2">
                  {['drake.krommenhoek@gmail.com', 'dkrommenhoek@mail.wlu.edu'].map(email => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="link-hover"
                      style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.88rem', color: '#374151', display: 'block', fontWeight: 400 }}
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              {/* LinkedIn */}
              <div>
                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9B8B5E', marginBottom: '0.6rem' }}>
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/drakekrommenhoek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover"
                  style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.88rem', color: '#374151', fontWeight: 400, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#9B8B5E' }}>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  linkedin.com/in/drakekrommenhoek
                </a>
              </div>

              {/* Resume */}
              <div>
                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9B8B5E', marginBottom: '0.6rem' }}>
                  Resume
                </p>
                <a
                  href="/Krommenhoek_Resume_Feb.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover"
                  style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.88rem', color: '#374151', fontWeight: 400 }}
                >
                  Download PDF ↓
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', border: '1px solid #E8E8E4' }}>
            <h3 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '1.35rem',
              fontWeight: 600,
              color: '#002147',
              marginBottom: '1.5rem',
            }}>Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" style={labelStyle}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#9B8B5E')}
                  onBlur={e => (e.target.style.borderColor = '#D1D5DB')}
                />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#9B8B5E')}
                  onBlur={e => (e.target.style.borderColor = '#D1D5DB')}
                />
              </div>
              <div>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => (e.target.style.borderColor = '#9B8B5E')}
                  onBlur={e => (e.target.style.borderColor = '#D1D5DB')}
                />
              </div>
              <button type="submit" className="btn-primary w-full" style={{ textAlign: 'center' }}>
                Send Message
              </button>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.72rem', color: '#9CA3AF', textAlign: 'center' }}>
                Opens your default email client
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
