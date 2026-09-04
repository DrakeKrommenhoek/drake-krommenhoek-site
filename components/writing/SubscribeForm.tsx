'use client';

import { useId, useState } from 'react';

const CONTACT_EMAIL = 'drake.krommenhoek@gmail.com';

type Status = 'idle' | 'loading' | 'success' | 'error' | 'unavailable';

/**
 * The one component in the writing section that genuinely needs to be a client
 * component: it holds form state. Everything visual is token classes — the focus
 * ring comes from the sitewide :focus-visible rule rather than onFocus/onBlur
 * handlers, and the palette has no red, so failures speak in clay.
 *
 * /api/subscribe answers 503 when RESEND_API_KEY is absent, which is the normal
 * state of a preview deploy. That is a configuration gap, not the reader's
 * mistake, so it gets its own state and offers a working alternative.
 */
export default function SubscribeForm() {
  const inputId = useId();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus('success');
        setMessage("You're in. I'll reach out when a new piece drops.");
        setEmail('');
      } else if (res.status === 503) {
        setStatus('unavailable');
        setMessage("Subscriptions aren't set up yet. Email me instead and I'll add you by hand.");
      } else {
        setStatus('error');
        setMessage(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const isSuccess = status === 'success';

  return (
    // The live region is mounted before anything is submitted and stays mounted
    // through the success swap. A role="status" node that only appears with its
    // text already in it is frequently missed by screen readers.
    <div className="w-full max-w-[36rem]">
      {!isSuccess && (
        <form onSubmit={handleSubmit} className="flex flex-wrap items-start gap-3">
          <div className="min-w-[16rem] flex-1">
            <label htmlFor={inputId} className="sr-only">
              Email address
            </label>
            <input
              id={inputId}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              autoComplete="email"
              required
              disabled={status === 'loading'}
              className="w-full border border-rule-strong bg-paper px-4 py-3 text-sm text-ink transition-colors duration-200 placeholder:text-ink-3 hover:border-ink focus:border-ink disabled:opacity-70"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn btn-primary whitespace-nowrap disabled:opacity-70"
          >
            {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
      )}

      <p
        role="status"
        aria-live="polite"
        className={
          isSuccess
            ? 'font-serif text-[1.0625rem] text-clay-deep'
            : 'mt-3 text-sm text-clay-deep empty:mt-0'
        }
      >
        {status === 'unavailable' ? (
          <>
            {message}{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="link-underline">
              {CONTACT_EMAIL}
            </a>
          </>
        ) : (
          message
        )}
      </p>
    </div>
  );
}
