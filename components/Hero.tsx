'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [hasHeadshot, setHasHeadshot] = useState(true);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-wl-blue via-wl-blue-light to-wl-blue-lighter overflow-hidden"
    >
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Drake Krommenhoek
            </h1>
            <p className="text-xl md:text-2xl text-wl-blue-lightest">
              Washington & Lee University Student
            </p>
            <p className="text-lg md:text-xl text-wl-blue-lightest">
              Economics, Accounting, and Philosophy
            </p>

            <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-xl">
              Driven by curiosity and competition, I bring a disciplined approach to finance,
              entrepreneurship, and leadership. Currently pursuing my passion for understanding
              markets, building value, and making an impact through meaningful work.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#experience"
                className="bg-white text-wl-blue px-8 py-3 rounded-lg font-medium hover:bg-wl-blue-lightest transition-colors duration-300 text-center"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-wl-blue transition-all duration-300 text-center"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Headshot Image */}
          <div className="flex justify-center md:justify-end">
            {hasHeadshot ? (
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl" />
                <Image
                  src="/images/headshot/headshot.jpg.jpeg"
                  alt="Drake Krommenhoek"
                  width={400}
                  height={400}
                  className="relative rounded-full object-cover border-4 border-white/20 shadow-2xl"
                  onError={() => setHasHeadshot(false)}
                  priority
                />
              </div>
            ) : (
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center">
                <span className="text-6xl text-white/50">DK</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#experience" className="text-white/70 hover:text-white transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
