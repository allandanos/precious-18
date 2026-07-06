import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import DressCodeLandscape from "@/components/DressCodeLandscape";
import VenueMap from "@/components/VenueMap";
import Eighteens from "@/components/Eighteens";
import Gallery from "@/components/Gallery";
import Suppliers from "@/components/Suppliers";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://precious-18.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Precious Allena — A Decade and Eight · 4 July 2026",
  description:
    "You are cordially invited to the debut of Precious Allena on the fourth of July, two thousand twenty-six, at L'Aquinum Garden, Antipolo.",
  openGraph: {
    title: "Precious Allena — A Decade and Eight",
    description:
      "4 July 2026 · 4:00 PM · L'Aquinum Garden, Antipolo. Find your table, count down the evening, and join us.",
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
    title: "Precious Allena — A Decade and Eight",
    description:
      "4 July 2026 · 4:00 PM · L'Aquinum Garden, Antipolo. Find your table, count down the evening, and join us.",
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
};

export default function InvitationPage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Countdown />
        <EventDetails />
        <DressCodeLandscape />
        <VenueMap />
        <Eighteens />
        <Gallery />
        <Suppliers />
      </main>
      <Footer />
    </>
  );
}
