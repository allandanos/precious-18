"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FloralDivider } from "./Ornament";

type Card = {
  src: string;
  alt: string;
  title: string;
  sub: string;
};

const cards: Card[] = [
  {
    src: "/invites/main.jpg",
    alt: "Precious Allena's debut invitation in navy and silver",
    title: "The Invitation",
    sub: "Navy & silver · the announcement card",
  },
  {
    src: "/invites/roses.jpg",
    alt: "The eighteen roses card",
    title: "The Eighteen Roses",
    sub: "Eighteen gentlemen · the first waltz",
  },
  {
    src: "/invites/candles.jpg",
    alt: "The eighteen candles card",
    title: "The Eighteen Candles",
    sub: "Eighteen women · the lighting of the way",
  },
  {
    src: "/invites/bills.jpg",
    alt: "The eighteen bills card",
    title: "The Eighteen Bills",
    sub: "Eighteen sponsors of the evening",
  },
  {
    src: "/invites/treasures.jpg",
    alt: "The eighteen treasures card",
    title: "The Eighteen Treasures",
    sub: "Eighteen keepsakes for her next chapter",
  },
  {
    src: "/invites/dress.jpg",
    alt: "Dress and attire card",
    title: "Dress & Attire",
    sub: "Garden formal · navy, silver, ivory",
  },
  {
    src: "/invites/map.jpg",
    alt: "Map of the event venue",
    title: "The Venue",
    sub: "The map of the event venue",
  },
];

const FLIP_MS = 900;

export default function Gallery() {
  /** Currently visible card. */
  const [index, setIndex] = useState(0);
  /** Unbounded rotation accumulator (always ±180 steps). */
  const [rotation, setRotation] = useState(0);
  const [frontContent, setFrontContent] = useState(0);
  const [backContent, setBackContent] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<number | null>(null);

  const advance = useCallback(
    (dir: 1 | -1, target?: number) => {
      setIndex((currentIndex) => {
        if (transitioning) return currentIndex;
        const newIndex =
          target !== undefined
            ? target
            : (currentIndex + dir + cards.length) % cards.length;
        if (newIndex === currentIndex) return currentIndex;

        // Use the *current* rotation (closure-safe via the state setter pattern
        // below) to figure out which face is visible at the start of the flip.
        setRotation((currentRotation) => {
          const isFlippedAtStart = (Math.round(currentRotation / 180) % 2) !== 0;
          const isFlippedAtEnd = !isFlippedAtStart;

          // Stage the upcoming card on whichever face is currently hidden.
          if (!isFlippedAtStart) {
            setBackContent(newIndex);
          } else {
            setFrontContent(newIndex);
          }

          // After the flip, pre-stage the *next* card on the new hidden face.
          if (timerRef.current) window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            const newNext = (newIndex + dir + cards.length) % cards.length;
            if (!isFlippedAtEnd) {
              setBackContent(newNext);
            } else {
              setFrontContent(newNext);
            }
            setIndex(newIndex);
            setTransitioning(false);
          }, FLIP_MS + 50);

          setTransitioning(true);
          return currentRotation + dir * 180;
        });

        return currentIndex; // index updates inside the timeout
      });
    },
    [transitioning]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && /^(INPUT|TEXTAREA|SELECT)$/i.test(t.tagName)) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        advance(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        advance(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance]);

  const goTo = (target: number) => {
    if (transitioning || target === index) return;
    const forward = (target - index + cards.length) % cards.length;
    const backward = (index - target + cards.length) % cards.length;
    const dir: 1 | -1 = forward <= backward ? 1 : -1;
    advance(dir, target);
  };

  const current = cards[index];

  return (
    <section id="gallery" className="section" aria-labelledby="gallery-heading">
      <div className="shell">
        <div style={{ textAlign: "center" }}>
          <p className="eyebrow">The Cards</p>
          <h2
            id="gallery-heading"
            className="display text-balance"
            style={{
              fontSize: "var(--text-h2)",
              color: "var(--ivory)",
              marginTop: "1rem",
              marginInline: "auto",
              maxWidth: "22ch",
            }}
          >
            A glimpse of the printed invitation
          </h2>
          <FloralDivider />
          <p
            className="lede"
            style={{
              maxWidth: "44ch",
              margin: "0 auto",
            }}
          >
            Turn the pages with the arrows, your keyboard, or the dots below.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto minmax(0, 1fr) auto",
            gap: "clamp(0.75rem, 2vw, 1.75rem)",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2.5rem",
          }}
        >
          <NavArrow
            direction="prev"
            disabled={transitioning}
            onClick={() => advance(-1)}
          />

          {/* Stage */}
          <div
            style={{
              perspective: "2400px",
              width: "min(100%, 480px)",
              justifySelf: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "3 / 4",
                transformStyle: "preserve-3d",
                transform: `rotateY(${rotation}deg)`,
                transition: transitioning
                  ? `transform ${FLIP_MS}ms cubic-bezier(0.77, 0, 0.175, 1)`
                  : "none",
                willChange: "transform",
              }}
            >
              <Face card={cards[frontContent]} face="front" />
              <Face card={cards[backContent]} face="back" />
            </div>
          </div>

          <NavArrow
            direction="next"
            disabled={transitioning}
            onClick={() => advance(1)}
          />
        </div>

        {/* Counter + dots */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            aria-live="polite"
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "0.4rem",
              fontFamily: "var(--font-display)",
              color: "var(--ivory)",
            }}
          >
            <span
              style={{
                fontSize: "2rem",
                color: "var(--champagne)",
                fontVariantNumeric: "tabular-nums",
                fontStyle: "italic",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span style={{ color: "var(--silver-dim)" }}>/</span>
            <span style={{ color: "var(--silver-dim)", fontSize: "1.1rem" }}>
              {String(cards.length).padStart(2, "0")}
            </span>
          </div>

          <div
            role="tablist"
            aria-label="Choose a card"
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {cards.map((c, i) => {
              const active = i === index;
              return (
                <button
                  key={c.src}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  aria-label={`Card ${i + 1}: ${c.title}`}
                  disabled={transitioning}
                  onClick={() => goTo(i)}
                  style={{
                    width: active ? "1.8rem" : "0.5rem",
                    height: "0.5rem",
                    borderRadius: "999px",
                    padding: 0,
                    background: active
                      ? "var(--champagne)"
                      : "color-mix(in oklch, var(--silver-dim) 50%, transparent)",
                    border: "none",
                    cursor: transitioning ? "not-allowed" : "pointer",
                    transition:
                      "width var(--dur-normal) var(--ease-out-expo), background var(--dur-fast) var(--ease-out-expo)",
                  }}
                />
              );
            })}
          </div>

          <div
            style={{
              marginTop: "0.5rem",
              textAlign: "center",
            }}
          >
            <div
              className="script"
              style={{
                fontSize: "clamp(2.2rem, 1.5rem + 3vw, 3.4rem)",
                color: "var(--champagne)",
                lineHeight: 1,
              }}
            >
              {current.title}
            </div>
            <p
              style={{
                fontStyle: "italic",
                color: "var(--ink-muted-on-navy)",
                fontSize: "1rem",
                marginTop: "0.4rem",
              }}
            >
              {current.sub}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .gallery-stage { transition: none !important; }
        }
      `}</style>
    </section>
  );
}

function Face({ card, face }: { card: Card; face: "front" | "back" }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: face === "back" ? "rotateY(180deg)" : "none",
        overflow: "hidden",
        borderRadius: "1px",
        border: "var(--hairline-strong)",
        background: "var(--navy-800)",
        boxShadow:
          "0 50px 100px -40px rgba(0, 0, 0, 0.85), 0 0 0 1px color-mix(in oklch, var(--champagne) 18%, transparent) inset",
      }}
    >
      <Image
        src={card.src}
        alt={card.alt}
        fill
        sizes="(max-width: 768px) 90vw, 480px"
        style={{ objectFit: "cover" }}
        priority={face === "front"}
      />
      {/* Spine shadow suggesting the inner edge of a page */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            face === "front"
              ? "linear-gradient(90deg, rgba(0,0,0,0.35) 0%, transparent 8%, transparent 100%), linear-gradient(180deg, transparent 55%, rgba(13,24,56,0.78) 100%)"
              : "linear-gradient(270deg, rgba(0,0,0,0.35) 0%, transparent 8%, transparent 100%), linear-gradient(180deg, transparent 55%, rgba(13,24,56,0.78) 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Corner curl hint */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "0.6rem",
          right: "0.6rem",
          width: "1.2rem",
          height: "1.2rem",
          background:
            face === "front"
              ? "linear-gradient(225deg, transparent 50%, color-mix(in oklch, var(--champagne) 35%, transparent) 50%)"
              : "linear-gradient(135deg, transparent 50%, color-mix(in oklch, var(--champagne) 35%, transparent) 50%)",
          opacity: 0.7,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function NavArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      className="btn"
      aria-label={direction === "next" ? "Next card" : "Previous card"}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: 0,
        width: "clamp(2.2rem, 5vw, 3rem)",
        height: "clamp(2.2rem, 5vw, 3rem)",
        opacity: disabled ? 0.35 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        borderColor: "var(--hairline-strong)",
        background: "color-mix(in oklch, var(--navy-700) 60%, transparent)",
        justifyContent: "center",
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden
        style={{
          transform: direction === "prev" ? "rotate(180deg)" : "none",
        }}
      >
        <path d="M6 3l5 5-5 5" />
      </svg>
    </button>
  );
}
