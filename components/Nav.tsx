"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#event", label: "The Evening" },
  { href: "/#venue", label: "Venue" },
  { href: "/#eighteens", label: "The 18s" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/find-table", label: "Find Your Table" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background var(--dur-normal) var(--ease-out-expo), border-color var(--dur-normal) var(--ease-out-expo)",
        background: scrolled
          ? "color-mix(in oklch, var(--navy-900) 85%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "var(--hairline)" : "1px solid transparent",
      }}
    >
      <nav
        className="shell"
        aria-label="Primary"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBlock: "1rem",
          gap: "1.5rem",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "1.65rem",
            color: "var(--champagne)",
            lineHeight: 1,
          }}
        >
          Precious
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-sans)",
              fontSize: "0.6rem",
              letterSpacing: "0.42em",
              color: "var(--silver)",
              marginLeft: "0.5rem",
              verticalAlign: "middle",
              textTransform: "uppercase",
            }}
          >
            · 18
          </span>
        </Link>

        <ul
          style={{
            display: "flex",
            gap: "clamp(1rem, 2.5vw, 2rem)",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontFamily: "var(--font-sans)",
            fontSize: "0.74rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                style={{
                  color: "var(--ink-muted-on-navy)",
                  transition: "color var(--dur-fast) var(--ease-out-expo)",
                  textDecoration: "none",
                  borderBottom: "1px solid transparent",
                  paddingBottom: "2px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--champagne)";
                  e.currentTarget.style.borderBottomColor = "var(--champagne)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--ink-muted-on-navy)";
                  e.currentTarget.style.borderBottomColor = "transparent";
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
