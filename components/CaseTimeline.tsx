'use client';

import { useEffect, useRef, useState } from 'react';
import Placeholder from '@/components/Placeholder';
import RichText from '@/components/RichText';
import type { Milestone } from '@/lib/case-studies';

/** Vertical project timeline. The line fills as the reader scrolls through it. */
export default function CaseTimeline({ milestones }: { milestones: Milestone[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const reached = window.innerHeight * 0.6 - rect.top;
      setProgress(Math.min(1, Math.max(0, reached / rect.height)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <ol ref={ref} className="relative mt-10 space-y-12 pl-8 sm:pl-10">
      <span aria-hidden="true" className="absolute bottom-2 left-[5px] top-2 w-px bg-rule" />
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-[5px] top-2 w-px origin-top bg-navy"
        style={{ transform: `scaleY(${progress})` }}
      />
      {milestones.map((m, i) => (
        <li key={m.title} className="relative">
          <span aria-hidden="true" className="absolute -left-8 top-1.5 h-[11px] w-[11px] rounded-full border border-navy bg-paper sm:-left-10" />
          <div className={`grid gap-5 ${m.shot ? 'sm:grid-cols-[1fr_14rem]' : ''}`}>
            <div>
              <p className="font-mono text-[0.8rem] text-muted">
                {String(i + 1).padStart(2, '0')}
                <span className="mx-2 text-rule">/</span>
                <RichText text={m.date} />
              </p>
              <h3 className="mt-1.5 font-display text-[1.35rem] leading-snug">{m.title}</h3>
              <p className="mt-1.5 max-w-prose text-muted">
                <RichText text={m.detail} />
              </p>
            </div>
            {m.shot && <Placeholder label={m.shot} ratio="4 / 3" className="!p-3" />}
          </div>
        </li>
      ))}
    </ol>
  );
}
