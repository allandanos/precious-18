import { FloralDivider } from "./Ornament";

export default function ThankYouHero() {
  return (
    <section
      className="section"
      aria-labelledby="thanks-heading"
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div className="shell" style={{ textAlign: "center" }}>
        <p
          className="eyebrow"
          style={{ animation: "fadeUp 800ms var(--ease-out-expo) both" }}
        >
          4 July 2026 · L'Aquinum Garden, Antipolo
        </p>
        <h1
          id="thanks-heading"
          className="display text-balance"
          style={{
            fontSize: "var(--text-hero)",
            color: "var(--ivory)",
            margin: "1.2rem auto 0.4rem",
            maxWidth: "14ch",
            textShadow: "0 30px 60px -30px rgba(0,0,0,0.8)",
            animation: "fadeUp 1100ms var(--ease-out-expo) 120ms both",
          }}
        >
          With gratitude
        </h1>
        <p
          className="script"
          style={{
            fontSize: "clamp(3rem, 2rem + 4vw, 5rem)",
            color: "var(--champagne)",
            lineHeight: 1,
            marginTop: "0.5rem",
            animation: "fadeUp 1000ms var(--ease-out-expo) 220ms both",
          }}
        >
          Thank you
        </p>
        <div style={{ animation: "fadeUp 900ms var(--ease-out-expo) 320ms both" }}>
          <FloralDivider />
        </div>
        <p
          className="lede text-pretty"
          style={{
            maxWidth: "52ch",
            marginInline: "auto",
            animation: "fadeUp 900ms var(--ease-out-expo) 420ms both",
          }}
        >
          To everyone who gathered at L'Aquinum Garden — family and friends
          near and far, the gentlemen and ladies of the eighteen, and the
          artisans behind every detail — thank you. Precious Allena's debut
          became an evening we will carry with us for years to come.
        </p>
      </div>
    </section>
  );
}
