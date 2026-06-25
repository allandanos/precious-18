import { event } from "@/lib/data";
import { RoseSpray } from "./Ornament";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Invitation"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBlock: "8rem 4rem",
        overflow: "hidden",
      }}
    >
      {/* Decorative rose sprays in the corners */}
      <RoseSpray
        aria-hidden
        style={{
          position: "absolute",
          top: "10vh",
          left: "-3vw",
          width: "min(28vw, 320px)",
          height: "auto",
          color: "color-mix(in oklch, var(--champagne) 25%, transparent)",
          transform: "rotate(-18deg)",
          pointerEvents: "none",
        }}
      />
      <RoseSpray
        aria-hidden
        style={{
          position: "absolute",
          bottom: "5vh",
          right: "-3vw",
          width: "min(28vw, 320px)",
          height: "auto",
          color: "color-mix(in oklch, var(--champagne) 25%, transparent)",
          transform: "rotate(165deg)",
          pointerEvents: "none",
        }}
      />

      <div
        className="shell"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.4rem",
        }}
      >
        <p className="eyebrow" style={{ animation: "fadeUp 800ms var(--ease-out-expo) both" }}>
          The Daños · Formaran Families Present
        </p>

        <p
          className="script"
          style={{
            fontSize: "clamp(2.2rem, 1.5rem + 3vw, 4.2rem)",
            color: "var(--silver)",
            marginTop: "0.5rem",
            animation: "fadeUp 900ms var(--ease-out-expo) 80ms both",
          }}
        >
          {event.debutanteScript}
        </p>

        <h1
          className="display text-balance"
          style={{
            fontSize: "var(--text-hero)",
            color: "var(--ivory)",
            margin: 0,
            textShadow: "0 30px 60px -30px rgba(0,0,0,0.8)",
            animation: "fadeUp 1100ms var(--ease-out-expo) 160ms both",
          }}
        >
          {event.debutante}
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            color: "var(--champagne)",
            animation: "fadeUp 900ms var(--ease-out-expo) 240ms both",
          }}
          aria-hidden
        >
          <span style={{ height: "1px", width: "60px", background: "currentColor" }} />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.74rem",
              letterSpacing: "0.42em",
              textTransform: "uppercase",
            }}
          >
            An Eighteenth Celebration
          </span>
          <span style={{ height: "1px", width: "60px", background: "currentColor" }} />
        </div>

        <p
          className="lede text-pretty"
          style={{
            maxWidth: "44ch",
            marginInline: "auto",
            animation: "fadeUp 900ms var(--ease-out-expo) 320ms both",
          }}
        >
          We invite you to an evening of dancing, candlelight, and roses —
          to welcome our daughter into her eighteenth year.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2.5rem",
            marginTop: "1.5rem",
            animation: "fadeUp 900ms var(--ease-out-expo) 420ms both",
          }}
        >
          {[
            { k: "When", v: "04 · VII · MMXXVI" },
            { k: "Time", v: event.timeShort },
            { k: "Where", v: event.venue.name },
          ].map((item) => (
            <div key={item.k} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "var(--silver-dim)",
                  marginBottom: "0.5rem",
                }}
              >
                {item.k}
              </div>
              <div
                className="display"
                style={{
                  fontSize: "clamp(1.05rem, 0.9rem + 0.6vw, 1.4rem)",
                  color: "var(--ivory)",
                }}
              >
                {item.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
