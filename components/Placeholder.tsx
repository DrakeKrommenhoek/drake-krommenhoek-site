interface PlaceholderProps {
  /** What belongs here, e.g. "SCREENSHOT: Ascend dashboard v1" */
  label: string;
  /** CSS aspect ratio, e.g. "16 / 10" */
  ratio?: string;
  className?: string;
}

/** A clearly marked slot for an asset or fact Drake still needs to supply. */
export default function Placeholder({ label, ratio = '16 / 10', className = '' }: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      style={{ aspectRatio: ratio }}
      className={`flex items-center justify-center border border-dashed border-rust/60 bg-[#EFEBE2] p-6 text-center ${className}`}
    >
      <span className="font-mono text-[0.8rem] leading-relaxed text-rust">[{label}]</span>
    </div>
  );
}

/** Inline marker for an unconfirmed fact inside running text. */
export function Pending({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-[0.85em] text-rust">[{children}]</span>;
}
