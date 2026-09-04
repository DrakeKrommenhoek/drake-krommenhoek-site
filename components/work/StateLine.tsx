import type { RoadmapItem, Stage } from '@/content/projects';
import Reveal from '../Reveal';

/**
 * The most important convention on a project page: a literal line between what
 * exists and what does not. Roadmaps overclaim by default — this one is built so
 * that overclaiming requires editing the parenthetical.
 *
 * Emphasis descends by stage (Now 100%, Next 70%, Later 55%) and `Later` items
 * are set in italic and written as questions. See design-system § 7.
 */

const stageClass: Record<Stage, string> = {
  Now: 'text-ink-2',
  Next: 'text-ink-3',
  Later: 'text-ink-3/80 italic',
};

export default function StateLine({ roadmap }: { roadmap: RoadmapItem[] }) {
  const now = roadmap.filter((r) => r.stage === 'Now');
  const ahead = roadmap.filter((r) => r.stage !== 'Now');

  return (
    <section aria-labelledby="state-heading">
      <h2 id="state-heading" className="h3">
        Where this is
      </h2>

      <ul className="mt-6 space-y-3">
        {now.map((item, i) => (
          <Reveal as="li" key={item.text} delay={i * 60} className="ledger gap-y-1 lg:gap-y-0">
            <p className="meta text-ink">Now</p>
            <p className={`max-w-measure ${stageClass.Now}`}>{item.text}</p>
          </Reveal>
        ))}
      </ul>

      {ahead.length > 0 && (
        <>
          <hr className="rule-line mt-14" />

          <h3 className="h3 mt-8">
            Where this could go{' '}
            <span className="meta ml-1 align-middle normal-case tracking-normal">
              (nothing below this line is built)
            </span>
          </h3>

          <ul className="mt-6 space-y-3">
            {ahead.map((item, i) => (
              <Reveal
                as="li"
                key={item.text}
                delay={i * 60}
                className="ledger gap-y-1 lg:gap-y-0"
              >
                <p className="meta">{item.stage}</p>
                <p className={`max-w-measure ${stageClass[item.stage]}`}>{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
