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
            very first frame instead of flashing in and then out. If JS is off or
            this fails, the attribute is never set and everything stays visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-reveal-ready','true')`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
