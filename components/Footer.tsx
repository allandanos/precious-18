import { event } from "@/lib/data";
import { Flourish } from "./Ornament";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        borderTop: "var(--hairline)",
        paddingBlock: "clamp(3rem, 6vw, 5rem) 2rem",
        textAlign: "center",
      }}
    >
      <div className="shell" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.2rem" }}>
        <Flourish style={{ color: "var(--champagne)", width: "60px", height: "24px" }} />
        <p className="script" style={{ fontSize: "clamp(2.2rem, 1.5rem + 3vw, 3.4rem)", color: "var(--champagne)" }}>
          Precious
        </p>
        <p
          className="lede"
          style={{
            maxWidth: "32ch",
            margin: 0,
            color: "var(--ink-muted-on-navy)",
          }}
        >
          {event.hostLine}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem 1.4rem" }}>
          <Link href="/find-table" className="btn" style={{ padding: "0.7rem 1.2rem", fontSize: "0.72rem" }}>
            Find Your Table
          </Link>
          <a
            href={event.venue.mapsLink}
            target="_blank"
            rel="noreferrer noopener"
            className="btn"
            style={{ padding: "0.7rem 1.2rem", fontSize: "0.72rem" }}
          >
            Venue Map
          </a>
        </div>
        <p
          style={{
            marginTop: "1.5rem",
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--silver-dim)",
          }}
        >
          {event.dateLong} · {event.dateYear} · {event.venue.name}
        </p>
      </div>
    </footer>
  );
}
