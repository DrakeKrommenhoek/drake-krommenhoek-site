'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { site } from '@/lib/site';

const links = [
  { name: 'Experience', href: '/#experience' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

const external = [
  { name: 'GitHub', href: site.github },
  { name: 'LinkedIn', href: site.linkedin },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const solid = isScrolled || isOpen;
  const linkClass = `text-[0.78rem] font-medium uppercase tracking-[0.06em] transition-colors ${
    solid ? 'text-gray-700 hover:text-wl-blue' : 'text-white/85 hover:text-white'
  }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        solid ? 'bg-white border-[#EBEBEB] py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <nav aria-label="Main" className="container-custom flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`font-display text-xl font-semibold italic ${solid ? 'text-wl-blue' : 'text-white'}`}
        >
          {site.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className={linkClass}>
                {link.name}
              </Link>
            </li>
          ))}
          {external.map((link) => (
            <li key={link.name}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href={site.resume.href} download={site.resume.filename} className={`${linkClass} border-b border-gold/60 pb-px`}>
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className={`md:hidden ${solid ? 'text-wl-blue' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <ul id="mobile-menu" className="container-custom flex flex-col gap-5 border-t border-[#EBEBEB] bg-white px-4 py-5 sm:px-6 md:hidden">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} onClick={() => setIsOpen(false)} className={linkClass}>
                {link.name}
              </Link>
            </li>
          ))}
          {external.map((link) => (
            <li key={link.name}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href={site.resume.href} download={site.resume.filename} className={linkClass}>
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
