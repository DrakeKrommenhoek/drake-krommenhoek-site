'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Upcoming', href: '#upcoming' },
    { name: 'Who Am I', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        backgroundColor: isScrolled ? '#FFFFFF' : 'transparent',
        borderBottom: isScrolled ? '1px solid #EBEBEB' : '1px solid transparent',
        padding: isScrolled ? '1rem 0' : '1.5rem 0',
      }}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#home"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '1.25rem',
            fontWeight: 600,
            fontStyle: 'italic',
            letterSpacing: '0.01em',
            color: isScrolled ? '#002147' : '#FFFFFF',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
        >
          Drake Krommenhoek
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center" style={{ gap: '2.5rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: isScrolled ? '#374151' : 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                transition: 'color 0.25s',
                position: 'relative',
              }}
              onMouseEnter={e => {
                (e.currentTarget.style.color = isScrolled ? '#002147' : '#FFFFFF');
              }}
              onMouseLeave={e => {
                (e.currentTarget.style.color = isScrolled ? '#374151' : 'rgba(255,255,255,0.85)');
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Krommenhoek_Resume_Feb.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: isScrolled ? '#002147' : 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              borderBottom: '1px solid',
              borderColor: isScrolled ? 'rgba(155,139,94,0.6)' : 'rgba(196,174,120,0.5)',
              paddingBottom: '1px',
              transition: 'all 0.25s',
            }}
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          style={{ color: isScrolled ? '#002147' : '#FFFFFF', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #EBEBEB' }}>
          <div className="container-custom py-4 flex flex-col" style={{ gap: '1.25rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#374151',
                  textDecoration: 'none',
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Krommenhoek_Resume_Feb.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.78rem',
                fontWeight: 500,
                color: '#9B8B5E',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Resume ↓
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
