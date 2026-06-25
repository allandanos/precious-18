import { eighteens, eighteensMeta, guests } from "@/lib/data";
import { FloralDivider } from "./Ornament";

const accentToColor: Record<string, string> = {
  rose: "var(--rose-dust)",
  gold: "var(--champagne)",
  navy: "var(--silver)",
  ivory: "var(--ivory-deep)",
};

function tableOf(name: string): string | null {
  const g = guests.find(
    (x) =>
      x.name.replace(/\./g, "").toLowerCase() === name.replace(/\./g, "").toLowerCase()
  );
  return g?.table ?? null;
}

export default function Eighteens() {
  return (
    <section id="eighteens" className="section" aria-labelledby="eighteens-heading">
      <div className="shell">
        <div style={{ textAlign: "center" }}>
          <p className="eyebrow">The Honoured Eighteens</p>
          <h2
            id="eighteens-heading"
            className="display text-balance"
            style={{
              fontSize: "var(--text-h2)",
              color: "var(--ivory)",
              marginTop: "1rem",
              marginInline: "auto",
              maxWidth: "20ch",
            }}
          >
            Four traditions. Seventy-two names.
          </h2>
          <FloralDivider />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(1rem, 2.5vw, 2rem)",
            alignItems: "start",
          }}
        >
          {eighteensMeta.map((meta) => {
            const list = eighteens[meta.key];
            const accent = accentToColor[meta.accent];
            return (
              <article
                key={meta.key}
                className="surface"
                style={{ padding: 0 }}
              >
                <header
                  style={{
                    padding: "1.6rem 1.6rem 1.2rem",
                    borderBottom: "var(--hairline)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-script)",
                      fontSize: "2rem",
                      color: accent,
                      lineHeight: 1,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {meta.title.replace("The ", "")}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.66rem",
                      letterSpacing: "0.34em",
                      textTransform: "uppercase",
                      color: "var(--silver-dim)",
                    }}
                  >
                    The Eighteen · {meta.accent}
                  </div>
                  <p
                    style={{
                      marginTop: "0.9rem",
                      fontStyle: "italic",
                      fontSize: "0.92rem",
                      color: "var(--ink-muted-on-navy)",
                      lineHeight: 1.55,
                      marginBlock: "0.9rem 0",
                    }}
                  >
                    {meta.blurb}
                  </p>
                </header>

                <ol
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: "0.5rem 0",
                  }}
                >
                  {list.map((name, i) => {
                    const t = tableOf(name);
                    return (
                      <li
                        key={name}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1.6rem 1fr auto",
                          gap: "0.6rem",
                          alignItems: "baseline",
                          padding: "0.55rem 1.6rem",
                          borderTop:
                            i === 0 ? "none" : "1px solid color-mix(in oklch, var(--champagne) 14%, transparent)",
                          transition: "background var(--dur-fast) var(--ease-out-expo)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            color: accent,
                            fontSize: "0.9rem",
                            fontVariantNumeric: "tabular-nums",
                            fontStyle: "italic",
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-serif)",
                            color: "var(--ivory)",
                            fontSize: "1.02rem",
                          }}
                        >
                          {name}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.6rem",
                            letterSpacing: "0.2em",
                            color: "var(--silver-dim)",
                            textTransform: "uppercase",
                          }}
                          title={`${name} · ${t ?? "—"}`}
                        >
                          {t ?? ""}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
