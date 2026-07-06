import Link from "next/link";
import { FloralDivider } from "./Ornament";

export default function PhotosPending() {
  return (
    <section className="section" aria-labelledby="photos-heading">
      <div className="shell">
        <div
          className="surface"
          style={{
            textAlign: "center",
            padding: "clamp(2rem, 1rem + 4vw, 3.5rem)",
          }}
        >
          <p className="eyebrow" style={{ color: "var(--rose-dust)" }}>
            Coming Soon
          </p>
          <h2
            id="photos-heading"
            className="display text-balance"
            style={{
              fontSize: "var(--text-h2)",
              color: "var(--ivory)",
              margin: "1rem auto 0",
              maxWidth: "18ch",
            }}
          >
            The full gallery
          </h2>
          <FloralDivider />
          <p
            className="lede"
            style={{ maxWidth: "46ch", marginInline: "auto" }}
          >
            We're collecting photographs from our hosts, guests, and suppliers.
            A link to the complete gallery will be shared here soon — please
            check back, or message the family if you'd like to share your own
            snaps from the evening.
          </p>
          <div
            style={{
              marginTop: "clamp(1.5rem, 1rem + 2vw, 2.25rem)",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            <Link href="/invitation" className="btn">
              ← Back to the invitation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
