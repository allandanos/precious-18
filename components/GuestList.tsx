import { guests, Guest } from "@/lib/data";
import { FloralDivider } from "./Ornament";

const roleTag: Record<NonNullable<Guest["role"]>, string> = {
  Roses: "Rose",
  Candles: "Candle",
  Bills: "Bill",
  Treasures: "Treasure",
};

/** Group guests by table, preserving the source order (VIP first, then 1..13). */
function groupByTable(): { table: string; guests: Guest[]; vip: boolean }[] {
  const map = new Map<string, Guest[]>();
  for (const g of guests) {
    const list = map.get(g.table);
    if (list) list.push(g);
    else map.set(g.table, [g]);
  }
  return Array.from(map.entries()).map(([table, list]) => ({
    table,
    guests: list,
    vip: table.startsWith("VIP"),
  }));
}

export default function GuestList() {
  const tables = groupByTable();
  const total = guests.length;

  return (
    <section
      id="seating"
      className="section"
      aria-labelledby="seating-heading"
      style={{ paddingTop: "2rem" }}
    >
      <div className="shell">
        <div style={{ textAlign: "center" }}>
          <p className="eyebrow">All Tables</p>
          <h2
            id="seating-heading"
            className="display"
            style={{
              fontSize: "var(--text-h2)",
              color: "var(--ivory)",
              marginTop: "1rem",
            }}
          >
            The Seating Plan
          </h2>
          <p
            className="lede"
            style={{ maxWidth: "44ch", margin: "0.5rem auto 0" }}
          >
            {total} guests across {tables.length} tables. Browse to find your
            company for the evening.
          </p>
          <FloralDivider />
        </div>

        <ul
          className="seating-grid"
          style={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          {tables.map(({ table, guests: list, vip }) => (
            <li key={table}>
              <article
                className="surface seating-card"
                data-vip={vip ? "true" : "false"}
              >
                <header className="seating-card__head">
                  <span
                    className="seating-card__tag"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.34em",
                      textTransform: "uppercase",
                      color: vip ? "var(--champagne)" : "var(--silver-dim)",
                    }}
                  >
                    {vip ? "VIP" : "Table"}
                  </span>
                  <h3
                    className="display"
                    style={{
                      margin: "0.2rem 0 0",
                      fontSize: "2rem",
                      color: "var(--ivory)",
                      lineHeight: 1,
                    }}
                  >
                    {table.replace(/^Table\s+/, "").replace(/^VIP\s+/, "VIP ")}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--silver-dim)",
                      marginTop: "0.4rem",
                    }}
                  >
                    {list.length} {list.length === 1 ? "guest" : "guests"}
                  </span>
                </header>

                <ol
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: "0.5rem 0",
                  }}
                >
                  {list.map((g, i) => (
                    <li
                      key={g.name}
                      className="seating-card__row"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1.6rem 1fr auto",
                        gap: "0.6rem",
                        alignItems: "baseline",
                        padding: "0.5rem 0",
                        borderTop:
                          i === 0
                            ? "none"
                            : "1px solid color-mix(in oklch, var(--champagne) 12%, transparent)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "var(--silver-dim)",
                          fontSize: "0.85rem",
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
                          fontSize: "1rem",
                        }}
                      >
                        {g.name}
                      </span>
                      {g.role ? (
                        <span
                          className="role-pill"
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
                          {roleTag[g.role]}
                        </span>
                      ) : (
                        <span aria-hidden />
                      )}
                    </li>
                  ))}
                </ol>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
