export type Status = 'built' | 'prototype' | 'planned';

const tone: Record<Status, string> = {
  built: 'bg-navy',
  prototype: 'bg-ink',
  planned: 'bg-rust',
};

const word: Record<Status, string> = {
  built: 'Built',
  prototype: 'Prototype',
  planned: 'Planned',
};

/** Marks whether something exists in working code, as a mockup, or only on the roadmap. */
export default function StatusTag({ status, children }: { status: Status; children?: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-2 text-[0.85rem] ${status === 'planned' ? 'text-rust' : 'text-muted'}`}>
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${tone[status]}`} />
      <span>
        {word[status]}
        {children && <span className="text-muted">, {children}</span>}
      </span>
    </span>
  );
}
