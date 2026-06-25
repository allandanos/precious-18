import Image from "next/image";
import { suppliers } from "@/lib/data";
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
      `}</style>
    </section>
  );
}
