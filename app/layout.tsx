import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drake Krommenhoek | Washington & Lee University",
  description: "Personal website of Drake Krommenhoek — Economics, Accounting and Philosophy student at Washington and Lee University with experience in investment banking, entrepreneurship, and leadership.",
  keywords: ["Drake Krommenhoek", "Washington and Lee", "Economics", "Accounting", "Philosophy", "Investment Banking", "Student Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
