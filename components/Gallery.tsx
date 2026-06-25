import Image from "next/image";
import { FloralDivider } from "./Ornament";

const shots = [
  {
    src: "/invites/main.jpg",
    alt: "Precious Allena's debut invitation — navy and silver",
    caption: "The Invitation",
    span: "tall",
  },
  {
    src: "/invites/roses.jpg",
    alt: "The eighteen roses card",
    caption: "The Eighteen Roses",
    span: "wide",
  },
  {
    src: "/invites/candles.jpg",
    alt: "The eighteen candles card",
    caption: "The Eighteen Candles",
    span: "std",
  },
  {
    src: "/invites/bills.jpg",
    alt: "The eighteen bills card",
    caption: "The Eighteen Bills",
    span: "std",
  },
  {
    src: "/invites/treasures.jpg",
    alt: "The eighteen treasures card",
    caption: "The Eighteen Treasures",
    span: "wide",
  },
];

export default function Gallery() {
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
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gridAutoRows: "180px",
            gap: "clamp(0.6rem, 1.5vw, 1rem)",
          }}
        >
          {/* Hero card spans 2 rows + 2 cols */}
          <GalleryTile
            {...shots[0]}
            style={{
              gridColumn: "span 2",
              gridRow: "span 2",
            }}
            large
          />
          <GalleryTile
            {...shots[1]}
            style={{ gridColumn: "span 2", gridRow: "span 1" }}
          />
          <GalleryTile {...shots[2]} style={{ gridColumn: "span 1", gridRow: "span 1" }} />
          <GalleryTile {...shots[3]} style={{ gridColumn: "span 1", gridRow: "span 1" }} />
          <GalleryTile
            {...shots[4]}
            style={{ gridColumn: "span 4", gridRow: "span 1" }}
          />
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontStyle: "italic",
            color: "var(--silver-dim)",
            fontSize: "0.95rem",
          }}
        >
          Printed on ivory stock with navy lettering · shared here for those
          who could not receive one by hand.
        </p>
      </div>
    </section>
  );
}

type TileProps = {
  src: string;
  alt: string;
  caption: string;
  span: string;
  style?: React.CSSProperties;
  large?: boolean;
};

function GalleryTile({ src, alt, caption, style, large }: TileProps) {
  return (
    <figure
      className="surface"
      style={{
        position: "relative",
        padding: 0,
        overflow: "hidden",
        minHeight: "180px",
        ...style,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: "cover",
          transition: "transform var(--dur-slow) var(--ease-out-expo)",
        }}
      />
      {/* Gradient veil for legibility */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, transparent 45%, color-mix(in oklch, var(--navy-900) 75%, transparent) 100%)",
          pointerEvents: "none",
        }}
      />
      <figcaption
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: large ? "1.5rem" : "1rem",
          color: "var(--ivory)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-script)",
            fontSize: large ? "2.2rem" : "1.6rem",
            lineHeight: 0.95,
            color: "var(--champagne)",
            marginBottom: "0.25rem",
          }}
        >
          ✦
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: large ? "0.78rem" : "0.7rem",
            letterSpacing: "0.34em",
            textTransform: "uppercase",
          }}
        >
          {caption}
        </div>
      </figcaption>
    </figure>
  );
}
