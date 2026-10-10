/** Reserved third project slot until the analytical work is ready to publish. */
export default function AnalyticalWorkSlot({ headingLevel: H = 'h3' }: { headingLevel?: 'h2' | 'h3' }) {
  return (
    <article className="grid-page gap-y-3 border-y border-rule py-10">
      <H className="col-span-4 font-display text-[1.6rem] leading-tight text-muted lg:col-span-5">
        Selected Analytical Work
      </H>
      <p className="col-span-4 max-w-prose text-muted lg:col-span-7">
        Coming soon. Applied economics projects using regression and statistical analysis, written up with the
        data and code.
      </p>
    </article>
  );
}
