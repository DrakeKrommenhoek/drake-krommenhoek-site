'use client';

import { useEffect, useRef, useState } from 'react';
import type React from 'react';

export interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView<T extends Element = Element>(
  options: UseInViewOptions = {}
) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    triggerOnce = true,
  } = options;

  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView] as const;
}

export function fadeInStyle(isInView: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
  };
}
