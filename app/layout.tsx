import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
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
