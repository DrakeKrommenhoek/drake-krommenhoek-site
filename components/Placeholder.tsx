import { showPlaceholders } from '@/lib/site';

interface PlaceholderProps {
  /** What belongs here, e.g. "SCREENSHOT: Ascend dashboard v1" */
  label: string;
  /** CSS aspect ratio, e.g. "16 / 10" */
  ratio?: string;
  className?: string;
  /** Rendered instead when placeholders are hidden (production). Defaults to nothing. */
  fallback?: React.ReactNode;
}

/** A clearly marked slot for an asset or fact Drake still needs to supply. */
export default function Placeholder({ label, ratio = '16 / 10', className = '', fallback = null }: PlaceholderProps) {
  if (!showPlaceholders) return <>{fallback}</>;
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      style={{ aspectRatio: ratio }}
      className={`flex items-center justify-center border border-dashed border-rust/60 bg-wash p-6 text-center ${className}`}
    >
      <span className="text-[0.85rem] leading-relaxed text-rust">[{label}]</span>
    </div>
  );
}

/** Inline marker for an unconfirmed fact inside running text. */
export function Pending({ children }: { children: React.ReactNode }) {
  if (!showPlaceholders) return null;
  return <span className="text-[0.9em] text-rust">[{children}]</span>;
}
