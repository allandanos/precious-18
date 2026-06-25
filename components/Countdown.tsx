"use client";

import { useEffect, useMemo, useState } from "react";
import { event } from "@/lib/data";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function diff(target: number): Remaining {
  const now = Date.now();
  const ms = target - now;
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1_000);
  return { days, hours, minutes, seconds, done: false };
}

const labels: Record<keyof Omit<Remaining, "done">, string> = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
};

export default function Countdown() {
  const target = useMemo(() => new Date(event.dateISO).getTime(), []);
  const [t, setT] = useState<Remaining | null>(null);

  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section
      id="countdown"
      className="section"
      aria-label="Countdown to the celebration"
      style={{ textAlign: "center" }}
    >
      <div className="shell">
        <p className="eyebrow">The Evening Begins In</p>

        {t?.done ? (
          <p
            className="display text-balance"
            style={{
              fontSize: "var(--text-display)",
              color: "var(--champagne)",
              marginTop: "1rem",
            }}
          >
            Tonight, we celebrate.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "clamp(0.5rem, 2vw, 1.5rem)",
              marginTop: "2rem",
              maxWidth: "880px",
              marginInline: "auto",
            }}
          >
            {(["days", "hours", "minutes", "seconds"] as const).map((k) => (
              <div
                key={k}
                className="surface"
                style={{
                  paddingBlock: "clamp(1.4rem, 3vw, 2.4rem)",
                  paddingInline: "0.5rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "clamp(2.4rem, 1.2rem + 4vw, 4.5rem)",
                    color: "var(--ivory)",
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                  }}
                  aria-live="polite"
                >
                  {t ? String(t[k]).padStart(2, "0") : "--"}
                </div>
                <div
                  style={{
                    marginTop: "0.6rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "var(--silver-dim)",
                  }}
                >
                  {labels[k]}
                </div>
              </div>
            ))}
          </div>
        )}

        <p
          className="lede"
          style={{ marginTop: "2rem", maxWidth: "44ch", marginInline: "auto" }}
        >
          {event.dateLong}, {event.dateYear} · {event.timeShort}
        </p>
      </div>
    </section>
  );
}
