'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { contactOptions } from '@/lib/site';

/**
 * "Email me" asks one question first: is this about work or personal? Each choice opens the right inbox
 * with a subject line filled in, and offers a copy button for people without a mail app set up.
 */
export default function EmailMenu({ variant = 'solid' }: { variant?: 'solid' | 'ghost' }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onClick = (e: MouseEvent) => !root.current?.contains(e.target as Node) && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  const copy = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(email);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // Clipboard can be blocked; the address is still visible to copy by hand.
    }
  };

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        className={variant === 'solid' ? 'btn-solid' : 'btn-ghost'}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
      >
        Email me
        <svg aria-hidden="true" viewBox="0 0 12 12" className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="M2 4.5 6 8.5l4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      {open && (
        <div
          id={panelId}
          className="absolute left-0 top-full z-30 mt-2 w-[min(22rem,calc(100vw-2.5rem))] border border-ink bg-paper shadow-[0_10px_30px_-10px_rgba(22,24,29,0.25)]"
        >
          <p className="border-b border-rule px-4 py-2.5 text-[0.9rem] text-muted">What is this about?</p>
          <ul>
            {contactOptions.map((o) => (
              <li key={o.id} className="flex items-stretch border-b border-rule last:border-b-0">
                <a
                  href={`mailto:${o.email}?subject=${encodeURIComponent(o.subject)}`}
                  className="group flex-1 px-4 py-3 hover:bg-ink/[0.04]"
                >
                  <span className="block font-medium group-hover:text-navy">{o.label}</span>
                  <span className="block text-[0.9rem] text-muted">{o.hint}</span>
                  <span className="mt-1 block break-all text-[0.85rem] text-muted">{o.email}</span>
                </a>
                <button
                  type="button"
                  onClick={() => copy(o.email)}
                  className="w-[4.5rem] shrink-0 border-l border-rule text-[0.85rem] text-muted hover:bg-ink/[0.04] hover:text-ink"
                  aria-label={`Copy ${o.label.toLowerCase()} email address`}
                >
                  <span aria-live="polite">{copied === o.email ? 'Copied' : 'Copy'}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
