'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const links = [
  { name: 'Work', href: '/#work' },
  { name: 'Lab', href: '/lab' },
  { name: 'Writing', href: '/writing' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

/**
 * The old navbar switched every colour through onMouseEnter/onMouseLeave and
 * needed a forceScrolled prop because the homepage hero was a navy field while
 * the writing pages were white. The hero is paper now, so the nav has one
 * appearance everywhere and all state lives in CSS. See docs/design-system.md § 9.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur-sm transition-colors duration-200 ${
        isScrolled ? 'border-b border-rule' : 'border-b border-transparent'
      }`}
    >
      <nav className="shell flex items-center justify-between py-4" aria-label="Main">
        <Link href="/" className="font-serif text-lg text-ink link-underline">
          Drake Krommenhoek
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="meta link-underline hover:text-ink"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/Krommenhoek_Resume_Feb.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="meta link-underline text-clay-deep"
          >
            Résumé ↓
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center text-ink md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-rule bg-paper md:hidden">
          <div className="shell flex flex-col gap-5 py-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="meta hover:text-ink"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/Krommenhoek_Resume_Feb.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="meta text-clay-deep"
            >
              Résumé ↓
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
