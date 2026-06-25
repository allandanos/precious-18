import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Precious Allena — A Decade and Eight · 4 July 2026",
  description:
    "You are cordially invited to the debut of Precious Allena on the fourth of July, two thousand twenty-six, at L'Aquinum Garden, Antipolo.",
  openGraph: {
    title: "Precious Allena — A Decade and Eight",
    description:
      "4 July 2026 · 4:00 PM · L'Aquinum Garden, Antipolo. Find your table, count down the evening, and join us.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1838",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Tangerine:wght@400;700&family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <div className="atmosphere" aria-hidden />
        {children}
      </body>
    </html>
  );
}
