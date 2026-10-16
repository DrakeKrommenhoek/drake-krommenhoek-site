import EmailMenu from '@/components/EmailMenu';
import { site } from '@/lib/site';

/** The three ways to reach Drake, in priority order: email, LinkedIn, resume. */
export default function ContactActions({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <EmailMenu />
      <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
        LinkedIn
        <svg aria-hidden="true" viewBox="0 0 12 12" className="h-3 w-3">
          <path d="M3.5 2.5h6v6M9.5 2.5l-7 7" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
      <a href={site.resume.href} download={site.resume.filename} className="btn-ghost">
        Resume
        <svg aria-hidden="true" viewBox="0 0 12 12" className="h-3 w-3">
          <path d="M6 1.5v7M2.5 5 6 8.5 9.5 5M2 10.5h8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="sr-only">(PDF download)</span>
      </a>
    </div>
  );
}
