import Link from 'next/link';
import ContactActions from '@/components/ContactActions';
import { nav, site } from '@/lib/site';

export default function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-rule">
      <div className="page grid-page gap-y-10 py-14">
        <div className="col-span-4 lg:col-span-6">
          <p className="max-w-[22ch] font-display text-[1.75rem] leading-tight">
            Working on a hard problem? I would like to hear about it.
          </p>
          <ContactActions className="mt-6" />
        </div>

        <nav aria-label="Footer" className="col-span-2 lg:col-span-3">
          <ul className="space-y-2 text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link hover:text-ink">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="col-span-2 space-y-2 text-muted lg:col-span-3">
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="link hover:text-ink">
              GitHub
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link hover:text-ink">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={site.resume.href} download={site.resume.filename} className="link hover:text-ink">
              Resume (PDF)
            </a>
          </li>
        </ul>
      </div>
      <div className="page pb-10 text-sm text-muted">
        {site.name}, {new Date().getFullYear()}
      </div>
    </footer>
  );
}
