import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drake Krommenhoek | Washington & Lee University Student",
  description: "Personal website of Drake Krommenhoek - Economics, Accounting and Philosophy student at Washington and Lee University with experience in investment banking, entrepreneurship, and leadership.",
  keywords: ["Drake Krommenhoek", "Washington and Lee", "Economics", "Philosophy", "Investment Banking", "Student Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
