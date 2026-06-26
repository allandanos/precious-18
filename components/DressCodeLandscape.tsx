import Image from "next/image";
import { FloralDivider } from "./Ornament";

const palette = [
  { name: "Powder Blue", color: "oklch(86% 0.04 230)" },
  { name: "Soft Grey", color: "oklch(80% 0.012 280)" },
  { name: "Off-White", color: "oklch(96% 0.018 95)" },
];

export default function DressCodeLandscape() {
  return (
    <section
      id="attire"
      className="section"
      aria-labelledby="attire-heading"
    >
      <div className="shell">
        <div className="dress-code-landscape">
          <figure className="dress-code-landscape__figure">
            <Image
              src="/invites/dress-code.jpg"
              alt="An evening attire ensemble in powder blue, soft grey, and off-white"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 60vw"
              style={{ objectFit: "cover" }}
            />
          </figure>
          <div className="dress-code-landscape__body">
            <p className="eyebrow">The Attire</p>
            <h2
              id="attire-heading"
              className="display text-balance"
              style={{
                fontSize: "var(--text-h2)",
                color: "var(--ivory)",
                marginTop: "1rem",
              }}
            >
              Powder Blue, Soft Grey, Off-White
            </h2>
            <FloralDivider />
            <p className="lede" style={{ maxWidth: "42ch" }}>
              Evening attire in the debut's palette — comfortable for the
              air-conditioned programme inside Bianco Hall, with cocktails,
              a grazing table, and the photobooth spilling out into the garden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
