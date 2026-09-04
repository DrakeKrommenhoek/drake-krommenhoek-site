'use client';

import { useState } from 'react';
import Reveal from './Reveal';

/**
 * The old Contact section put the form inside a bordered white rectangle and
 * drove every field border through onFocus/onBlur handlers. It is now two
 * ledger blocks on the paper ground — channels first, then the note form —
 * with all state in CSS. See docs/design-system.md §§ 5, 9.
 *
 * 'use client' is genuinely needed: the form composes a mailto: from local state.
 */

const emails = ['drake.krommenhoek@gmail.com', 'dkrommenhoek@mail.wlu.edu'];

const fieldClass =
  'mt-2 w-full border-b border-rule bg-transparent py-2 text-ink transition-colors duration-200 hover:border-rule-strong focus:border-ink';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${emails[0]}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-y border-t border-rule">
      <div className="shell">
        <Reveal>
          <p className="meta">Let&apos;s connect</p>
        </Reveal>

        <Reveal delay={70}>
          <h2 className="h2 mt-4">Contact</h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="lede mt-6">
            Open to discussing opportunities, collaborations, or just connecting. Reach out
            through any of the channels below.
          </p>
        </Reveal>

        <Reveal delay={210} className="ledger mt-16 gap-y-6 border-t border-ink-3 pt-7 lg:mt-20 lg:gap-y-0">
          <p className="meta text-ink">Direct</p>

          <dl className="space-y-8">
            <div>
              <dt className="meta">Email</dt>
              <dd className="mt-3 space-y-2">
                {emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="link-underline block w-fit text-ink transition-colors duration-200 hover:text-clay-deep"
                  >
                    {email}
                  </a>
                ))}
              </dd>
            </div>

            <div>
              <dt className="meta">LinkedIn</dt>
              <dd className="mt-3">
                <a
                  href="https://www.linkedin.com/in/drakekrommenhoek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex w-fit items-center gap-2 text-ink transition-colors duration-200 hover:text-clay-deep"
                >
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  linkedin.com/in/drakekrommenhoek
                </a>
              </dd>
            </div>

            <div>
              <dt className="meta">Résumé</dt>
              <dd className="mt-3">
                <a
                  href="/Krommenhoek_Resume_Feb.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline block w-fit text-ink transition-colors duration-200 hover:text-clay-deep"
                >
                  Download PDF ↓
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={280} className="ledger mt-14 gap-y-6 border-t border-ink-3 pt-7 lg:gap-y-0">
          <p className="meta text-ink">Send a note</p>

          <form onSubmit={handleSubmit} className="max-w-xl">
            <div className="space-y-7">
              <div>
                <label htmlFor="name" className="meta block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="meta block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="meta block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${fieldClass} resize-none`}
                />
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
              <p className="meta">Opens your default email client</p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
