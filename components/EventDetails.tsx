import { event } from "@/lib/data";
import { FloralDivider } from "./Ornament";
import AddToCalendar from "./AddToCalendar";

export default function EventDetails() {
  return (
    <section
      id="event"
      className="section"
      aria-labelledby="event-heading"
    >
      <div className="shell">
        <div style={{ textAlign: "center" }}>
          <p className="eyebrow">The Celebration</p>
          <h2
            id="event-heading"
            className="display text-balance"
            style={{
              fontSize: "var(--text-h2)",
              color: "var(--ivory)",
              marginInline: "auto",
              maxWidth: "20ch",
              marginTop: "1rem",
            }}
          >
            An evening written in navy, silver &amp; roses
          </h2>
          <FloralDivider />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: "clamp(1rem, 2.5vw, 1.75rem)",
          }}
        >
          {[
            {
              k: "The Date",
              v: event.dateLong,
              v2: event.dateYear,
              glyph: "IV · VII",
            },
            {
              k: "The Hour",
              v: event.timeShort,
              v2: "Programme to follow dinner",
              glyph: "✦",
            },
            {
              k: "The Venue",
              v: event.venue.name,
              v2: `${event.venue.line2} · ${event.venue.city}`,
              glyph: "❧",
            },
            {
              k: "The Attire",
              v: event.dressCode,
              v2: "Evening Attire",
              glyph: "❀",
            },
          ].map((c) => (
            <article key={c.k} className="surface">
              <div
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: "1.4rem",
                  color: "var(--champagne)",
                  marginBottom: "0.5rem",
                  letterSpacing: "0.05em",
                }}
              >
                {c.glyph}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "var(--silver-dim)",
                  marginBottom: "0.85rem",
                }}
              >
                {c.k}
              </div>
              <div
                className="display"
                style={{
                  fontSize: "1.65rem",
                  color: "var(--ivory)",
                  lineHeight: 1.15,
                }}
              >
                {c.v}
              </div>
              <div
                style={{
                  marginTop: "0.4rem",
                  fontStyle: "italic",
                  color: "var(--ink-muted-on-navy)",
                  fontSize: "0.95rem",
                }}
              >
                {c.v2}
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: "2.5rem",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <AddToCalendar />
        </div>
      </div>
    </section>
  );
}
