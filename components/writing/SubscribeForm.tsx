'use client';

import { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('You\'re in. I\'ll reach out when a new piece drops.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <p
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.9rem',
          color: '#9B8B5E',
          letterSpacing: '0.01em',
        }}
      >
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div style={{ flex: 1, minWidth: '220px' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          style={{
            width: '100%',
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.875rem',
            color: '#374151',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E8E8E4',
            padding: '0.7rem 1rem',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = '#9B8B5E')}
          onBlur={(e) => (e.currentTarget.style.borderColor = '#E8E8E4')}
        />
        {status === 'error' && (
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.75rem',
              color: '#DC2626',
              marginTop: '0.4rem',
            }}
          >
            {message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary"
        style={{ whiteSpace: 'nowrap', opacity: status === 'loading' ? 0.7 : 1 }}
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
};

export default SubscribeForm;
