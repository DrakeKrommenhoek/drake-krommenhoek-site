import RichText from '@/components/RichText';
import { isBlank } from '@/lib/placeholders';
import { now } from '@/lib/personal';
import { showPlaceholders } from '@/lib/site';

/** A dated note on what Drake is doing this month (the /now page idea, as a homepage section). */
export default function NowSection() {
  const items = showPlaceholders ? now.items : now.items.filter((i) => !isBlank(i));

  return (
    <section aria-labelledby="now-heading" className="page mt-24 lg:mt-32">
      <div className="grid-page gap-y-6">
        <div className="col-span-4 lg:col-span-4">
          <h2 id="now-heading" className="font-display text-[1.6rem] tracking-[-0.01em]">
            Now
          </h2>
          <p className="mt-1 text-[0.95rem] text-muted">Updated {now.updated}</p>
        </div>
        <ul className="prose-case col-span-4 max-w-prose text-[1.08rem] leading-relaxed lg:col-span-7 lg:col-start-6 [&>li+li]:mt-3">
          {items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
