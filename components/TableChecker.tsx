"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { findGuests } from "@/lib/search";

const roleLabel: Record<string, string> = {
  Roses: "an Eighteen Rose",
  Candles: "an Eighteen Candle",
  Bills: "an Eighteen Bill",
  Treasures: "an Eighteen Treasure",
};

export default function TableChecker() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const results = useMemo(() => (submitted ? findGuests(query, 6) : []), [query, submitted]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const clear = () => {
    setQuery("");
    setSubmitted(false);
  };

  return (
    <section
      id="checker"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr)",
        gap: "clamp(2rem, 4vw, 3rem)",
        maxWidth: "1100px",
        marginInline: "auto",
      }}
    >
      <div>
        <form role="search" onSubmit={onSubmit} style={{ position: "relative" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: "var(--silver-dim)",
              marginBottom: "0.75rem",
            }}
          >
            Your name as it appears on the invitation
          </label>
          <div style={{ position: "relative" }}>
            <input
              id="name"
              type="search"
              autoComplete="off"
              spellCheck={false}
              placeholder="e.g. Irene Grace Daños"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (submitted) setSubmitted(false);
              }}
              aria-label="Search by name"
              style={{
                width: "100%",
                background: "color-mix(in oklch, var(--navy-800) 80%, transparent)",
                color: "var(--ivory)",
                border: "var(--hairline-strong)",
                borderRadius: "1px",
                padding: "1.1rem 3rem 1.1rem 1.2rem",
                fontFamily: "var(--font-serif)",
                fontSize: "1.15rem",
                outline: "none",
                transition: "border-color var(--dur-fast) var(--ease-out-expo), box-shadow var(--dur-fast) var(--ease-out-expo)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--champagne)";
                e.currentTarget.style.boxShadow = "0 0 0 1px var(--champagne)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
            />
            {query && (
              <button
                type="button"
                aria-label="Clear"
                onClick={clear}
                style={{
                  position: "absolute",
                  right: "0.9rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "1.6rem",
                  height: "1.6rem",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--silver-dim)",
                  borderRadius: "999px",
                  transition: "color var(--dur-fast) var(--ease-out-expo), background var(--dur-fast) var(--ease-out-expo)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--champagne)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--silver-dim)";
                }}
              >
                ✕
              </button>
            )}
          </div>

          <div
            style={{
              marginTop: "1.25rem",
              display: "flex",
              gap: "0.8rem",
              flexWrap: "wrap",
            }}
          >
            <button type="submit" className="btn btn--solid">
              Find my table
            </button>
            {submitted && (
              <span
                style={{
                  alignSelf: "center",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  color: "var(--silver-dim)",
                  textTransform: "uppercase",
                }}
              >
                {results.length} match{results.length === 1 ? "" : "es"}
              </span>
            )}
          </div>
        </form>

        <div style={{ marginTop: "2rem" }} aria-live="polite">
          {!submitted && (
            <p
              style={{
                fontStyle: "italic",
                color: "var(--ink-muted-on-navy)",
                fontSize: "1rem",
              }}
            >
              Type your name above to find your table — spelling need not be exact.
            </p>
          )}

          {submitted && results.length === 0 && (
            <div
              className="surface"
              style={{
                borderColor: "color-mix(in oklch, var(--rose-dust) 50%, transparent)",
              }}
            >
              <p
                style={{
                  color: "var(--ivory)",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  margin: 0,
                }}
              >
                We couldn't find that name on the list.
              </p>
              <p
                style={{
                  marginTop: "0.5rem",
                  color: "var(--ink-muted-on-navy)",
                  fontStyle: "italic",
                  marginBlock: "0.5rem 0",
                }}
              >
                Try a surname only (e.g. <em>Daños</em>), or check your
                invitation for the exact spelling. If you're still stuck,
                message the host family on the day.
              </p>
            </div>
          )}

          {results.length > 0 && (
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem" }}>
              {results.map((m, idx) => {
                const isTop = idx === 0 && m.score >= 0.6;
                return (
                  <li key={m.guest.name}>
                    <div
                      className="surface"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "auto 1fr auto",
                        gap: "1.2rem",
                        alignItems: "center",
                        padding: "1.2rem 1.4rem",
                        borderColor: isTop
                          ? "color-mix(in oklch, var(--champagne) 75%, transparent)"
                          : undefined,
                        background: isTop
                          ? "linear-gradient(160deg, color-mix(in oklch, var(--champagne) 12%, transparent), color-mix(in oklch, var(--navy-700) 60%, transparent))"
                          : undefined,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "2rem",
                          color: isTop ? "var(--champagne)" : "var(--silver-dim)",
                          fontVariantNumeric: "tabular-nums",
                          fontStyle: "italic",
                          minWidth: "2.5rem",
                        }}
                      >
                        ❶
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.5rem",
                            color: "var(--ivory)",
                            lineHeight: 1.1,
                          }}
                        >
                          {m.guest.name}
                        </div>
                        <div
                          style={{
                            marginTop: "0.35rem",
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.72rem",
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "var(--silver-dim)",
                          }}
                        >
                          {m.guest.role ? roleLabel[m.guest.role] : "Guest of the debutant"}
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.62rem",
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            color: "var(--silver-dim)",
                          }}
                        >
                          Table
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(1.6rem, 1.2rem + 1.5vw, 2.2rem)",
                            color: "var(--champagne)",
                            lineHeight: 1,
                          }}
                        >
                          {m.guest.table}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
              {results.length > 1 && (
                <li>
                  <p
                    style={{
                      textAlign: "center",
                      fontStyle: "italic",
                      color: "var(--silver-dim)",
                      fontSize: "0.95rem",
                      margin: 0,
                    }}
                  >
                    Several guests share that name — pick the one that's yours.
                  </p>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>

      {/* Seat plan reference image */}
      <figure
        className="surface"
        style={{
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
          <Image
            src="/seat-plan.jpg"
            alt="Floor plan showing the arrangement of VIP 1, VIP 2, and Tables 1 through 13"
            fill
            priority
            sizes="(max-width: 1100px) 100vw, 600px"
            style={{ objectFit: "contain", background: "var(--ivory)" }}
          />
        </div>
        <figcaption
          style={{
            padding: "0.6rem 0.8rem 0.2rem",
            textAlign: "center",
            fontFamily: "var(--font-sans)",
            fontSize: "0.66rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--silver-dim)",
          }}
        >
          L'Aquinum Garden — Floor Plan
        </figcaption>
      </figure>
    </section>
  );
}
