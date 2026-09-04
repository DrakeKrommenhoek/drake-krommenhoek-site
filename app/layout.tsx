import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drake Krommenhoek",
  description:
    "Economics at Washington and Lee. I build software with AI, spent a summer inside a private equity firm figuring out where it actually helps, and write about what I find.",
  keywords: [
    "Drake Krommenhoek",
    "Washington and Lee",
    "Economics",
    "Philosophy",
    "Entrepreneurship",
    "Private equity",
    "Applied AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/newsreader-latin-wght-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter-latin-wght-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Runs before first paint so [data-reveal] elements are hidden from the
            very first frame instead of flashing in and then out. If JS is off,
            the attribute is never set and everything stays visible.

            The timeout is the important half. Setting the flag here hides the
            whole page and hands responsibility for revealing it to React. If
            hydration never happens — a failed chunk, a parse error, a browser we
            did not anticipate — that would leave the site permanently blank below
            the fold. So if no <Reveal> has mounted within three seconds, we drop
            the flag and everything becomes visible again. Losing the animation is
            an acceptable failure; losing the content is not. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              `(function(){var d=document.documentElement;` +
              `d.setAttribute('data-reveal-ready','true');` +
              `setTimeout(function(){if(!window.__revealActive)` +
              `d.removeAttribute('data-reveal-ready');},3000);})()`,
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
