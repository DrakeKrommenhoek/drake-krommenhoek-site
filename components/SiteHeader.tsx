'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav, site } from '@/lib/site';

const external = [
  { name: 'GitHub', href: site.github },
  { name: 'LinkedIn', href: site.linkedin },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur-sm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <div className="page flex h-16 items-center justify-between">
        <Link href="/" className="font-script text-[1.9rem] leading-none">
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[0.78rem] font-medium uppercase tracking-[0.14em]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link"
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li aria-hidden="true" className="h-4 w-px bg-rule" />
            {external.map((item) => (
              <li key={item.name}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="link text-muted hover:text-ink">
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a href={site.resume.href} download={site.resume.filename} className="link text-muted hover:text-ink">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 px-2 py-1 text-[0.78rem] font-medium uppercase tracking-[0.14em] md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-rule md:hidden">
          <ul className="page flex flex-col py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-[0.95rem] font-medium uppercase tracking-[0.14em]"
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="mt-3 flex gap-6 border-t border-rule pt-4 text-[0.78rem] uppercase tracking-[0.14em] text-muted">
              {external.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="py-1">
                  {item.name}
                </a>
              ))}
              <a href={site.resume.href} download={site.resume.filename} className="py-1">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
