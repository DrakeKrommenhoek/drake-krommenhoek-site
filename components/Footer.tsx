import Link from 'next/link';
import Reveal from './Reveal';

/**
 * Dark punctuation, not a theme. The old footer hard-coded the university navy,
 * the crest gold and a dozen rgba() text tints, and swapped every link colour
 * through onMouseEnter/onMouseLeave. It is now a token-only night ground with
 * `on-night` so the overrides in globals.css take over, and every state change
 * is CSS. See docs/design-system.md §§ 3, 9.
 *
 * Server component: the copyright year is resolved when the page is built,
 * which is what the rest of the static site already assumes.
 */

const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'Lab', href: '/lab' },
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

const connectLinks = [
  { label: 'drake.krommenhoek@gmail.com', href: 'mailto:drake.krommenhoek@gmail.com' },
  { label: 'dkrommenhoek@mail.wlu.edu', href: 'mailto:dkrommenhoek@mail.wlu.edu' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/drakekrommenhoek' },
  { label: 'Resume PDF', href: '/Krommenhoek_Resume_Feb.pdf' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="on-night bg-night">
      <div className="shell pb-12 pt-20 sm:pt-24">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-10">
            <div>
              <p className="font-serif text-xl text-night-ink">Drake Krommenhoek</p>
              <p className="mt-3 max-w-[26ch] text-sm text-night-ink-2">
                Economics at Washington and Lee. Currently working out which half of the
                job a machine can be trusted with.
              </p>
            </div>

            <nav aria-labelledby="footer-nav-heading">
              <h2 id="footer-nav-heading" className="meta text-clay-lift">
                Navigation
              </h2>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="link-underline text-sm text-night-ink-2 transition-colors duration-200 hover:text-night-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 id="footer-connect-heading" className="meta text-clay-lift">
                Connect
              </h2>
              <ul className="mt-4 space-y-2.5" aria-labelledby="footer-connect-heading">
                {connectLinks.map((link) => {
                  const isExternal = link.href.startsWith('http');
                  const opensNewTab = isExternal || link.href.endsWith('.pdf');
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={opensNewTab ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        className="link-underline break-words text-sm text-night-ink-2 transition-colors duration-200 hover:text-night-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>

        <hr className="rule-line mt-16" />

        <p className="meta mt-6">&copy; {currentYear} Drake Krommenhoek</p>
      </div>
    </footer>
  );
}
