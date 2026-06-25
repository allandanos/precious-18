import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import VenueMap from "@/components/VenueMap";
import Eighteens from "@/components/Eighteens";
import Gallery from "@/components/Gallery";
import Suppliers from "@/components/Suppliers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Countdown />
        <EventDetails />
        <VenueMap />
        <Eighteens />
        <Gallery />
        <Suppliers />
      </main>
      <Footer />
    </>
  );
}
