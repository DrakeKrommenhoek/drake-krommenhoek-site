'use client';

import Image from 'next/image';
import { useState } from 'react';

const Hero = () => {
  const [hasHeadshot, setHasHeadshot] = useState(true);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#002147' }}
    >
      {/* Subtle diagonal line texture */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.035,
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #ffffff 0px,
            #ffffff 1px,
            transparent 1px,
            transparent 44px
          )`,
        }}
      />

      <div className="container-custom relative z-10 w-full py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div className="text-white space-y-7">

            {/* Overline */}
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#C4AE78',
            }}>
              Washington &amp; Lee University
            </p>

            {/* Name */}
            <h1 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(2.8rem, 5.5vw, 5.2rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              lineHeight: 1.05,
              margin: 0,
            }}>
              Drake<br />Krommenhoek
            </h1>

            {/* Gold rule */}
            <div style={{ width: '2.5rem', height: '1px', backgroundColor: '#9B8B5E' }} />

            {/* Descriptor */}
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75,
              maxWidth: '38ch',
              letterSpacing: '0.005em',
            }}>
              Economics, Accounting &amp; Philosophy — driven by curiosity, competition,
              and a long-term growth mindset across finance, entrepreneurship, and leadership.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a href="#experience" className="btn-primary">
                View Experience
              </a>
              <a href="#contact" className="btn-secondary">
                Contact
              </a>
              <a
                href="/Krommenhoek_Resume_Feb.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.55)',
                  transition: 'color 0.25s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(196,174,120,1)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Resume
              </a>
            </div>
          </div>

          {/* Right — Headshot with offset gold frame */}
          <div className="flex justify-center md:justify-end">
            {hasHeadshot ? (
              <div className="relative" style={{ width: '300px', height: '380px' }}>
                {/* Offset gold border */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  right: '-14px',
                  bottom: '-14px',
                  border: '1px solid rgba(155,139,94,0.45)',
                }} />
                {/* Photo */}
                <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', zIndex: 1 }}>
                  <Image
                    src="/images/personal/headshot.jpg"
                    alt="Drake Krommenhoek"
                    fill
                    className="object-cover object-top"
                    onError={() => setHasHeadshot(false)}
                    priority
                  />
                </div>
              </div>
            ) : (
              <div style={{
                width: '300px',
                height: '380px',
                border: '1px solid rgba(155,139,94,0.35)',
                backgroundColor: 'rgba(255,255,255,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '4rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.25)',
                  letterSpacing: '0.1em',
                }}>DK</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <a
          href="#experience"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.25s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
        >
          <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            scroll
          </span>
          <svg className="animate-bounce" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
