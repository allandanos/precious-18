import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ThankYouHero from "@/components/ThankYouHero";
import Suppliers from "@/components/Suppliers";
import PhotosPending from "@/components/PhotosPending";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://precious-18.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "With Gratitude — Precious Allena · A Decade and Eight",
  description:
    "A heartfelt thank you to everyone who joined us on 4 July 2026 at L'Aquinum Garden, Antipolo — family, friends, and the makers behind every detail.",
  openGraph: {
    title: "With Gratitude — Precious Allena · A Decade and Eight",
    description:
      "A heartfelt thank you to everyone who joined us on 4 July 2026 at L'Aquinum Garden, Antipolo.",
    type: "website",
    siteName: "Precious Allena · A Decade and Eight",
    images: [
      {
        url: "/meta-preview.jpg",
        width: 1731,
        height: 909,
        alt: "Precious Allena's debut — 4 July 2026 · L'Aquinum Garden, Antipolo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "With Gratitude — Precious Allena · A Decade and Eight",
    description:
      "A heartfelt thank you to everyone who joined us on 4 July 2026 at L'Aquinum Garden, Antipolo.",
    images: [
      {
        url: "/meta-preview.jpg",
        width: 1731,
        height: 909,
        alt: "Precious Allena's debut — 4 July 2026 · L'Aquinum Garden, Antipolo",
      },
    ],
  },
};

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>
        <ThankYouHero />
        <Suppliers />
        <PhotosPending />
      </main>
      <Footer />
    </>
  );
}
