"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { guests } from "@/lib/data";
import { findGuests } from "@/lib/search";

const roleLabel: Record<string, string> = {
  Roses: "an Eighteen Rose",
  Candles: "an Eighteen Candle",
  Bills: "an Eighteen Bill",
  Treasures: "an Eighteen Treasure",
};

const rolePillLabel: Record<string, string> = {
  Roses: "Rose",
  Candles: "Candle",
  Bills: "Bill",
  Treasures: "Treasure",
};

export default function TableChecker() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);
  /** Name of the match whose tablemates are currently revealed. */
  const [expandedName, setExpandedName] = useState<string | null>(null);
  /** Floor-plan lightbox open state. */
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const results = useMemo(() => (submitted ? findGuests(query, 6) : []), [query, submitted]);

  /** ESC to close, lock body scroll, and move focus to the close button while open. */
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen]);

  /** Full roster of the expanded match's table, in source order. */
  const tableRoster = useMemo(() => {
    if (!expandedName) return [];
    const match = results.find((m) => m.guest.name === expandedName);
    if (!match) return [];
    return guests.filter((g) => g.table === match.guest.table);
  }, [expandedName, results]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const clear = () => {
    setQuery("");
    setSubmitted(false);
    setExpandedName(null);
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
                const isExpanded = expandedName === m.guest.name;
                const roster = isExpanded ? tableRoster : [];
                return (
                  <li key={m.guest.name}>
                    <div
                      className="surface"
                      style={{
                        padding: 0,
                        overflow: "hidden",
                        borderColor: isExpanded || isTop
                          ? "color-mix(in oklch, var(--champagne) 75%, transparent)"
                          : undefined,
                        background: isExpanded
                          ? "linear-gradient(160deg, color-mix(in oklch, var(--champagne) 14%, transparent), color-mix(in oklch, var(--navy-700) 60%, transparent))"
                          : isTop
                            ? "linear-gradient(160deg, color-mix(in oklch, var(--champagne) 12%, transparent), color-mix(in oklch, var(--navy-700) 60%, transparent))"
                            : undefined,
                      }}
                    >
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "auto 1fr auto",
                          gap: "1.2rem",
                          alignItems: "center",
                          padding: "1.2rem 1.4rem",
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

                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={`tablemates-${idx}`}
                        onClick={() =>
                          setExpandedName(isExpanded ? null : m.guest.name)
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          padding: "0.85rem 1.4rem",
                          borderTop:
                            "1px solid color-mix(in oklch, var(--champagne) 18%, transparent)",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.66rem",
                          letterSpacing: "0.28em",
                          textTransform: "uppercase",
                          color: isExpanded
                            ? "var(--champagne)"
                            : "var(--ink-muted-on-navy)",
                          background: "transparent",
                          transition:
                            "color var(--dur-fast) var(--ease-out-expo), background var(--dur-fast) var(--ease-out-expo)",
                        }}
                      >
                        <span>
                          {isExpanded
                            ? "Hide tablemates"
                            : `See everyone at ${m.guest.table}`}
                        </span>
                        <span
                          aria-hidden
                          style={{
                            display: "inline-block",
                            transform: isExpanded ? "rotate(180deg)" : "none",
                            transition:
                              "transform var(--dur-fast) var(--ease-out-expo)",
                            fontSize: "0.7rem",
                            letterSpacing: 0,
                          }}
                        >
                          ▾
                        </span>
                      </button>

                      {isExpanded && (
                        <div
                          id={`tablemates-${idx}`}
                          style={{
                            padding: "0.5rem 1.4rem 1.3rem",
                            background:
                              "color-mix(in oklch, var(--navy-900) 50%, transparent)",
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.6rem",
                              letterSpacing: "0.34em",
                              textTransform: "uppercase",
                              color: "var(--silver-dim)",
                              paddingBlock: "0.55rem 0.8rem",
                              borderBottom:
                                "1px solid color-mix(in oklch, var(--champagne) 12%, transparent)",
                              marginBottom: "0.4rem",
                            }}
                          >
                            Also at {m.guest.table} · {roster.length} guests in total
                          </div>
                          <ul
                            style={{
                              listStyle: "none",
                              padding: 0,
                              margin: 0,
                            }}
                          >
                            {roster.map((tm, i) => {
                              const isYou = tm.name === m.guest.name;
                              return (
                                <li
                                  key={tm.name}
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: "1.4rem 1fr auto",
                                    gap: "0.5rem",
                                    alignItems: "baseline",
                                    padding: "0.5rem 0",
                                    borderTop:
                                      i === 0
                                        ? "none"
                                        : "1px solid color-mix(in oklch, var(--champagne) 8%, transparent)",
                                  }}
                                >
                                  <span
                                    aria-hidden
                                    style={{
                                      fontFamily: "var(--font-display)",
                                      color: "var(--silver-dim)",
                                      fontSize: "0.75rem",
                                      fontVariantNumeric: "tabular-nums",
                                      fontStyle: "italic",
                                    }}
                                  >
                                    {String(i + 1).padStart(2, "0")}
                                  </span>
                                  <span
                                    style={{
                                      fontFamily: "var(--font-serif)",
                                      color: isYou
                                        ? "var(--champagne)"
                                        : "var(--ivory)",
                                      fontSize: "0.98rem",
                                      fontWeight: isYou ? 600 : 400,
                                    }}
                                  >
                                    {tm.name}
                                    {isYou && (
                                      <span
                                        style={{
                                          marginLeft: "0.5rem",
                                          fontFamily: "var(--font-sans)",
                                          fontSize: "0.55rem",
                                          letterSpacing: "0.28em",
                                          textTransform: "uppercase",
                                          color: "var(--champagne)",
                                          verticalAlign: "middle",
                                        }}
                                      >
                                        you
                                      </span>
                                    )}
                                  </span>
                                  {tm.role ? (
                                    <span
                                      style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.55rem",
                                        letterSpacing: "0.18em",
                                        textTransform: "uppercase",
                                        color: "var(--champagne)",
                                        border:
                                          "1px solid color-mix(in oklch, var(--champagne) 35%, transparent)",
                                        padding: "0.25rem 0.45rem",
                                        borderRadius: "999px",
                                        lineHeight: 1,
                                      }}
                                    >
                                      {rolePillLabel[tm.role]}
                                    </span>
                                  ) : (
                                    <span aria-hidden />
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
              {results.length > 1 && !expandedName && (
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
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 3",
            background: "var(--ivory)",
          }}
        >
          <Image
            src="/seat-plan.jpg"
            alt="Floor plan showing the arrangement of VIP 1, VIP 2, and Tables 1 through 13"
            fill
            priority
            sizes="(max-width: 1100px) 100vw, 600px"
            style={{ objectFit: "contain" }}
          />
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label="View larger floor plan"
            style={{
              position: "absolute",
              inset: 0,
              padding: 0,
              border: "none",
              background: "transparent",
              cursor: "zoom-in",
              color: "var(--ivory)",
            }}
          >
            <span
              style={{
                position: "absolute",
                bottom: "0.6rem",
                right: "0.6rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.4rem 0.65rem",
                background: "color-mix(in oklch, var(--navy-900) 72%, transparent)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                border: "var(--hairline)",
                borderRadius: "1px",
                fontFamily: "var(--font-sans)",
                fontSize: "0.6rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--ivory)",
                pointerEvents: "none",
              }}
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d="M1 5V1h4M15 5V1h-4M1 11v4h4M15 11v4h-4" />
              </svg>
              Tap to enlarge
            </span>
          </button>
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

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Floor plan, enlarged"
          onClick={() => setLightboxOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "grid",
            placeItems: "center",
            padding: "clamp(1rem, 4vw, 2rem)",
            background: "color-mix(in oklch, var(--navy-900) 95%, transparent)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            cursor: "zoom-out",
            animation: "seat-plan-fade-in 200ms var(--ease-out-expo)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "min(95vw, 1100px)",
              aspectRatio: "4 / 3",
              maxHeight: "85vh",
              background: "var(--ivory)",
              border: "var(--hairline-strong)",
              boxShadow: "0 60px 120px -40px rgba(0, 0, 0, 0.9)",
              cursor: "default",
              animation: "seat-plan-pop-in 240ms var(--ease-out-expo)",
            }}
          >
            <Image
              src="/seat-plan.jpg"
              alt="Floor plan showing the arrangement of VIP 1, VIP 2, and Tables 1 through 13"
              fill
              sizes="95vw"
              style={{ objectFit: "contain" }}
            />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
              aria-label="Close floor plan"
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
                zIndex: 2,
                width: "44px",
                height: "44px",
                display: "grid",
                placeItems: "center",
                color: "var(--ivory)",
                background:
                  "color-mix(in oklch, var(--navy-900) 82%, transparent)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "var(--hairline-strong)",
                borderRadius: "999px",
                cursor: "pointer",
                fontSize: "1.1rem",
                lineHeight: 1,
                transition:
                  "color var(--dur-fast) var(--ease-out-expo), background var(--dur-fast) var(--ease-out-expo), border-color var(--dur-fast) var(--ease-out-expo)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--navy-900)";
                e.currentTarget.style.background = "var(--champagne)";
                e.currentTarget.style.borderColor = "var(--champagne)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--ivory)";
                e.currentTarget.style.background =
                  "color-mix(in oklch, var(--navy-900) 82%, transparent)";
                e.currentTarget.style.borderColor =
                  "color-mix(in oklch, var(--champagne) 75%, transparent)";
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
