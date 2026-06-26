import Image from "next/image";
import { suppliers, specialThanks } from "@/lib/data";
import { FloralDivider } from "./Ornament";

export default function Suppliers() {
  return (
    <section id="acknowledgments" className="section" aria-labelledby="suppliers-heading">
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
                    {p.photo ? (
                      <Image
                        src={p.photo}
                        alt={p.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="special-thanks-card__monogram"
                      >
                        {p.name.split(" ")[1]?.charAt(0) ?? p.name.charAt(0)}
                      </span>
                    )}
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
    </section>
  );
}
