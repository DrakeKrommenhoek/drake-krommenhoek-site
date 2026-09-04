'use client';

import { createElement, useEffect, type ElementType, type ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

declare global {
  interface Window {
    /** Set on first <Reveal> mount; read by the failsafe in app/layout.tsx. */
    __revealActive?: boolean;
  }
}

interface RevealProps {
  children: ReactNode;
  /** Stagger offset in ms, applied via the --reveal-delay custom property. */
  delay?: number;
  /** Element to render. Defaults to a div so it stays layout-neutral. */
  as?: ElementType;
  className?: string;
  id?: string;
}

/**
 * Scroll entrance, driven by the [data-reveal] rules in globals.css rather than
 * inline styles. The CSS only hides an element once <html data-reveal-ready="true">
 * is set (see app/layout.tsx), so with JS disabled every [data-reveal] element
 * stays visible and the page reads normally. prefers-reduced-motion is handled
 * in CSS too, which keeps the motion policy in one place.
 */
export default function Reveal({
  children,
  delay = 0,
  as = 'div',
  className,
  id,
}: RevealProps) {
  const [ref, isInView] = useInView<HTMLElement>();

  // Tells the failsafe in app/layout.tsx that React is alive and will take care
  // of revealing things, so it should leave the hiding flag in place.
  useEffect(() => {
    window.__revealActive = true;
  }, []);

  return createElement(
    as,
    {
      ref,
      id,
      className: [className, isInView ? 'is-revealed' : undefined]
        .filter(Boolean)
        .join(' ') || undefined,
      'data-reveal': '',
      style: delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined,
    },
    children
  );
}
