"use client";

import { useEffect, useRef, useState } from "react";
import { event } from "@/lib/data";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** Build an ICS timestamp: 20260704T080000Z (UTC) */
function toICS(d: Date): string {
  return (
    d.getUTCFullYear().toString() +
    pad(d.getUTCMonth() + 1) +
    pad(d.getUTCDate()) +
    "T" +
    pad(d.getUTCHours()) +
    pad(d.getUTCMinutes()) +
    pad(d.getUTCSeconds()) +
    "Z"
  );
}

function buildICS(): string {
  const start = new Date(event.dateISO);
  const end = new Date(event.endDateISO);
  const uid = `precious-18-${Date.now()}@precious.debut`;
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Precious Allena//Debut//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${toICS(new Date())}`,
    `DTSTART:${toICS(start)}`,
    `DTEND:${toICS(end)}`,
    `SUMMARY:Precious Allena — A Decade and Eight`,
    `DESCRIPTION:The debut of Precious Allena. Evening Attire · Powder Blue, Soft Grey, Off-White.`,
    `LOCATION:${event.venue.name}, ${event.venue.line2}, ${event.venue.city}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.join("\r\n");
}

function googleUrl(): string {
  const start = new Date(event.dateISO);
  const end = new Date(event.endDateISO);
  const fmt = (d: Date) =>
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(
      d.getUTCHours()
    )}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Precious Allena — A Decade and Eight",
    dates: `${fmt(start)}/${fmt(end)}`,
    details:
      "The debut of Precious Allena. Evening Attire · Powder Blue, Soft Grey, Off-White.",
    location: `${event.venue.name}, ${event.venue.line2}, ${event.venue.city}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export default function AddToCalendar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const downloadICS = () => {
    const blob = new Blob([buildICS()], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "precious-allena-debut.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setOpen(false);
  };

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button
        type="button"
        className="btn"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <rect x="3" y="5" width="18" height="16" rx="1" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>
        Add to Calendar
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
          style={{
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform var(--dur-fast) var(--ease-out-expo)",
          }}
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          style={{
            position: "absolute",
            top: "calc(100% + 0.5rem)",
            left: "50%",
            transform: "translateX(-50%)",
            minWidth: "220px",
            background: "var(--navy-800)",
            border: "var(--hairline-strong)",
            borderRadius: "1px",
            padding: "0.4rem",
            boxShadow: "0 30px 60px -30px rgba(0,0,0,0.9)",
            zIndex: 20,
          }}
        >
          <a
            role="menuitem"
            href={googleUrl()}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setOpen(false)}
            style={menuItemStyle}
          >
            Google Calendar
          </a>
          <button
            role="menuitem"
            type="button"
            onClick={downloadICS}
            style={{ ...menuItemStyle, width: "100%", textAlign: "left" }}
          >
            Apple / Outlook (.ics)
          </button>
          <a
            role="menuitem"
            href={`https://calendar.yahoo.com/?title=${encodeURIComponent(
              "Precious Allena — A Decade and Eight"
            )}&st=${new Date(event.dateISO)
              .toISOString()
              .replace(/[-:]/g, "")
              .replace(/\.\d{3}/, "")}&et=${new Date(event.endDateISO)
              .toISOString()
              .replace(/[-:]/g, "")
              .replace(/\.\d{3}/, "")}&in_loc=${encodeURIComponent(
              `${event.venue.name}, ${event.venue.city}`
            )}`}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setOpen(false)}
            style={menuItemStyle}
          >
            Yahoo Calendar
          </a>
        </div>
      )}
    </div>
  );
}

const menuItemStyle: React.CSSProperties = {
  display: "block",
  padding: "0.75rem 0.9rem",
  fontFamily: "var(--font-sans)",
  fontSize: "0.78rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--ink-on-navy)",
  textDecoration: "none",
  borderRadius: "1px",
  transition: "background var(--dur-fast) var(--ease-out-expo), color var(--dur-fast) var(--ease-out-expo)",
};
