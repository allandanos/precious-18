import Image from "next/image";
import { suppliers, specialThanks } from "@/lib/data";
import { FloralDivider } from "./Ornament";

export default function Suppliers() {
  return (
    <section id="credits" className="section" aria-labelledby="suppliers-heading">
      <div className="shell">
        <div style={{ textAlign: "center" }}>
          <p className="eyebrow">With Gratitude</p>
          <h2
            id="suppliers-heading"
            className="display text-balance"
            style={{
              fontSize: "var(--text-h2)",
              color: "var(--ivory)",
              marginTop: "1rem",
              marginInline: "auto",
              maxWidth: "22ch",
            }}
          >
            The hands behind the evening
          </h2>
          <FloralDivider />
          <p
            className="lede"
            style={{
              maxWidth: "48ch",
              margin: "0 auto",
            }}
          >
            The makers, hosts, and artisans who turned a garden in Antipolo
            into a celebration.
          </p>
        </div>

        <ul
          className="suppliers-grid"
          style={{
            listStyle: "none",
            margin: "3rem 0 0",
            padding: 0,
            display: "grid",
            gap: "clamp(1rem, 2vw, 1.5rem)",
          }}
        >
          {suppliers.map((s) => (
            <li key={s.name}>
              <article className="surface supplier-card">
                <div className="supplier-card__logo">
                  {s.logo ? (
                    <Image
                      src={s.logo}
                      alt={`${s.name} logo`}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                      style={{ objectFit: "contain" }}
                    />
                  ) : (
                    <span
                      aria-hidden
                      style={{
                        fontFamily: "var(--font-script)",
                        fontSize: "clamp(2.6rem, 6vw, 3.6rem)",
                        color: "var(--champagne)",
                        lineHeight: 1,
                      }}
                    >
                      {s.name.charAt(0)}
                    </span>
                  )}
                </div>

                <div className="supplier-card__roles">
                  {s.roles.map((r) => (
                    <span key={r}>{r}</span>
                  ))}
                </div>

                <h3
                  className="display"
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--ivory)",
                    margin: "0.4rem 0 0",
                    lineHeight: 1.2,
                  }}
                >
                  {s.name}
                </h3>

                {s.contact && (
                  <p
                    style={{
                      margin: "0.4rem 0 0",
                      fontStyle: "italic",
                      color: "var(--ink-muted-on-navy)",
                      fontSize: "0.95rem",
                    }}
                  >
                    {s.contact}
                  </p>
                )}

                {s.note && (
                  <p
                    style={{
                      margin: "0.4rem 0 0",
                      fontStyle: "italic",
                      color: "var(--silver-dim)",
                      fontSize: "0.88rem",
                    }}
                  >
                    {s.note}
                  </p>
                )}

                {s.facebook && (
                  <a
                    href={s.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="supplier-card__fb"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                    </svg>
                    View page
                  </a>
                )}
              </article>
            </li>
          ))}
        </ul>

        {/* Family & friends — gifts from the heart, not vendor engagements */}
        <div className="special-thanks">
          <div style={{ textAlign: "center" }}>
            <p
              className="eyebrow"
              style={{ color: "var(--rose-dust)" }}
            >
              With Love
            </p>
            <h3
              className="display"
              style={{
                fontSize: "var(--text-h3)",
                color: "var(--ivory)",
                marginTop: "0.8rem",
                marginInline: "auto",
                maxWidth: "20ch",
              }}
            >
              Family &amp; Friends
            </h3>
            <p
              className="lede"
              style={{
                maxWidth: "42ch",
                margin: "0.5rem auto 0",
              }}
            >
              For the gifts given from the heart — beyond the count of any
              ledger.
            </p>
            <FloralDivider />
          </div>

          <ul
            className="special-thanks-grid"
            style={{ listStyle: "none", margin: "2.5rem 0 0", padding: 0 }}
          >
            {specialThanks.map((p) => (
              <li key={p.name}>
                <article className="special-thanks-card">
                  <div className="special-thanks-card__portrait">
                    <Image
                      src={p.photo}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      aria-hidden
                      className="special-thanks-card__veil"
                    />
                  </div>

                  <div className="special-thanks-card__body">
                    <span className="special-thanks-card__relation">
                      {p.relation}
                    </span>
                    <h4
                      className="script"
                      style={{
                        fontSize: "clamp(2.2rem, 1.5rem + 2vw, 3rem)",
                        color: "var(--champagne)",
                        margin: "0.2rem 0 0",
                        lineHeight: 1,
                      }}
                    >
                      {p.name}
                    </h4>
                    <p className="special-thanks-card__gift">{p.gift}</p>
                    {p.note && (
                      <p className="special-thanks-card__note">{p.note}</p>
                    )}
                    {p.facebook && (
                      <a
                        href={p.facebook}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="special-thanks-card__fb"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                        </svg>
                        On Facebook
                      </a>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .suppliers-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 600px) {
          .suppliers-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1000px) {
          .suppliers-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        .supplier-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 0 0 1.4rem;
          overflow: hidden;
        }
        .supplier-card__logo {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: var(--ivory);
          display: grid;
          place-items: center;
          padding: clamp(0.8rem, 2vw, 1.4rem);
          border-bottom: var(--hairline);
        }
        .supplier-card__roles {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          padding: 1.1rem 1.4rem 0;
        }
        .supplier-card__roles span {
          font-family: var(--font-sans);
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--champagne);
          border: 1px solid color-mix(in oklch, var(--champagne) 35%, transparent);
          padding: 0.35rem 0.6rem;
          border-radius: 999px;
          line-height: 1;
        }
        .supplier-card h3,
        .supplier-card p {
          padding-inline: 1.4rem;
        }
        .supplier-card__fb {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin: 1rem 1.4rem 0;
          padding-top: 0.85rem;
          border-top: 1px solid color-mix(in oklch, var(--champagne) 16%, transparent);
          font-family: var(--font-sans);
          font-size: 0.66rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--ink-muted-on-navy);
          text-decoration: none;
          transition: color var(--dur-fast) var(--ease-out-expo);
        }
        .supplier-card__fb:hover {
          color: var(--champagne);
        }

        .special-thanks {
          margin-top: clamp(4rem, 3rem + 4vw, 6.5rem);
          padding-top: clamp(3rem, 2rem + 3vw, 5rem);
          border-top: var(--hairline);
        }
        .special-thanks-grid {
          display: grid;
          gap: clamp(1rem, 2vw, 1.5rem);
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .special-thanks-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .special-thanks-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .special-thanks-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 0;
          overflow: hidden;
          background: linear-gradient(
            180deg,
            color-mix(in oklch, var(--rose-dust) 14%, transparent),
            color-mix(in oklch, var(--navy-800) 78%, transparent)
          );
          border: 1px solid color-mix(in oklch, var(--rose-dust) 38%, transparent);
          border-radius: var(--radius-card);
          transition: transform var(--dur-normal) var(--ease-out-expo),
                      border-color var(--dur-normal) var(--ease-out-expo),
                      box-shadow var(--dur-normal) var(--ease-out-expo);
        }
        .special-thanks-card:hover {
          transform: translateY(-3px);
          border-color: color-mix(in oklch, var(--rose-dust) 70%, transparent);
          box-shadow: 0 40px 80px -50px rgba(0, 0, 0, 0.7);
        }
        .special-thanks-card__portrait {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-bottom: 1px solid color-mix(in oklch, var(--rose-dust) 28%, transparent);
        }
        .special-thanks-card__veil {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 55%,
            color-mix(in oklch, var(--navy-900) 55%, transparent) 100%
          );
          pointer-events: none;
        }
        .special-thanks-card__body {
          padding: 1.3rem 1.4rem 1.6rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
        }
        .special-thanks-card__relation {
          font-family: var(--font-sans);
          font-size: 0.6rem;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: var(--rose-dust);
        }
        .special-thanks-card__gift {
          margin: 0.4rem 0 0;
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 0.95rem;
          color: var(--ink-muted-on-navy);
        }
        .special-thanks-card__note {
          margin: 0.4rem 0 0;
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 0.85rem;
          color: var(--silver-dim);
        }
        .special-thanks-card__fb {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.85rem;
          padding-top: 0.85rem;
          border-top: 1px solid color-mix(in oklch, var(--rose-dust) 22%, transparent);
          font-family: var(--font-sans);
          font-size: 0.6rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--ink-muted-on-navy);
          text-decoration: none;
          transition: color var(--dur-fast) var(--ease-out-expo),
                      border-color var(--dur-fast) var(--ease-out-expo);
        }
        .special-thanks-card__fb:hover {
          color: var(--rose-dust);
          border-top-color: color-mix(in oklch, var(--rose-dust) 55%, transparent);
        }
      `}</style>
    </section>
  );
}
