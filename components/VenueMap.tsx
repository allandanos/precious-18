import { event } from "@/lib/data";
import { FloralDivider } from "./Ornament";

export default function VenueMap() {
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    event.venue.mapsQuery
  )}&output=embed`;

  return (
    <section id="venue" className="section" aria-labelledby="venue-heading">
      <div className="shell">
        <div style={{ textAlign: "center" }}>
          <p className="eyebrow">The Place</p>
          <h2
            id="venue-heading"
            className="display"
            style={{
              fontSize: "var(--text-h2)",
              color: "var(--ivory)",
              marginTop: "1rem",
            }}
          >
            {event.venue.name}
          </h2>
          <p
            className="lede"
            style={{ marginTop: "0.5rem", color: "var(--ink-muted-on-navy)" }}
          >
            {event.venue.line2} · {event.venue.city}
          </p>
          <FloralDivider />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)",
            gap: "clamp(1.25rem, 2.5vw, 2rem)",
            alignItems: "stretch",
          }}
        >
          <div
            className="surface"
            style={{
              padding: "0.5rem",
              minHeight: "340px",
              overflow: "hidden",
            }}
          >
            <iframe
              title={`Map of ${event.venue.name}`}
              src={embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
                minHeight: "320px",
                border: "0",
                filter: "saturate(0.85) contrast(1.05)",
                borderRadius: "1px",
              }}
            />
          </div>

          <aside
            className="surface"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "var(--silver-dim)",
                  marginBottom: "0.75rem",
                }}
              >
                Address
              </div>
              <p
                className="display"
                style={{
                  fontSize: "1.4rem",
                  color: "var(--ivory)",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {event.venue.name}
                <br />
                <span style={{ fontSize: "1.05rem", color: "var(--ink-muted-on-navy)" }}>
                  {event.venue.line2}
                  <br />
                  {event.venue.city}
                </span>
              </p>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "var(--silver-dim)",
                  marginBottom: "0.75rem",
                }}
              >
                Arrival
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  color: "var(--ink-muted-on-navy)",
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                Please arrive by 3:30 in the afternoon so we may welcome you
                with a glass of something cold before the programme begins.
              </p>
            </div>

            <a
              className="btn btn--solid"
              href={event.venue.mapsLink}
              target="_blank"
              rel="noreferrer noopener"
            >
              Open in Google Maps
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
