import type { ProjectStatus } from '@/content/projects';

/**
 * Four words, mono, 1px border, no colour fill. A green pill reads as marketing;
 * the point of a status is that it can say "Archived" without flinching.
 *
 * The `anchor` is not optional by accident. A badge on its own is a claim — with
 * a date and a number beside it, it is evidence. See design-system § 6.
 */
export default function StatusBadge({
  status,
  anchor,
}: {
  status: ProjectStatus;
  anchor: string;
}) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="meta border border-current px-2 py-1 text-ink">{status}</span>
      <span className="meta">{anchor}</span>
    </p>
  );
}
