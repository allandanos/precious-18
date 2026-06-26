"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#event", label: "The Evening" },
  { href: "/#venue", label: "Venue" },
  { href: "/#eighteens", label: "The 18s" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#acknowledgments", label: "Acknowledgments" },
  { href: "/find-table", label: "Find Your Table" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className="site-header"
      data-scrolled={scrolled}
      data-open={open}
    >
      <nav className="shell site-header__nav" aria-label="Primary">
        <Link
          href="/"
          className="site-header__brand"
          onClick={() => setOpen(false)}
        >
          Precious @ 18
        </Link>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="site-header__bars" aria-hidden />
        </button>

        <ul
          id="primary-menu"
          className="site-header__menu"
          data-open={open}
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
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
