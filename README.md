# Precious Allena — A Decade and Eight

Interactive invitation site for Precious Allena's debut on **4 July 2026, 4:00 PM**, at **L'Aquinum Garden, Antipolo**.

## What's inside

- **Hero** — name, date, time, venue, with layered serif + script typography and rose-spray ornament.
- **Live countdown** — counts down to the event; switches to "Tonight, we celebrate." on the day.
- **Event details** — date / hour / venue / attire cards with add-to-calendar dropdown (Google / Yahoo / `.ics`).
- **Venue map** — Google Maps embed, arrival notes, "Open in Google Maps" link.
- **The Eighteens** — all four traditions (Roses, Candles, Bills, Treasures), each name with their table number.
- **Gallery** — bento grid of the printed invitation cards.
- **Find Your Table** (`/find-table`) — type a name; the fuzzy matcher returns the guest's table (and role). Spelling need not be exact.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**.
- Static-prerendered routes, ~104 kB first-load JS on each page.
- Zero runtime deps beyond React/Next — fonts via Google Fonts CDN.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build → .next/
npm start        # serve the production build
```

## Project layout

```
app/
  layout.tsx              Root layout, fonts, viewport, atmosphere backdrop
  globals.css             Design tokens (navy / silver / ivory, motion, type)
  page.tsx                Home — Hero → Countdown → Details → Map → 18s → Gallery
  find-table/page.tsx     Standalone "Find your table" route
components/
  Hero, Countdown, EventDetails, VenueMap, AddToCalendar,
  Eighteens, Gallery, Nav, Footer, Ornament, TableChecker
lib/
  data.ts                 Single source: event info, four 18s lists, all 120 guests
  search.ts               Accent/punctuation-insensitive name matcher
public/
  seat-plan.jpg           Floor plan referenced by the table checker
  invites/                Renamed copies of the printed invitation JPGs
```

## Customising

- **Event details / 18s / guests** — edit `lib/data.ts`. The guest list is the source of truth for table assignments.
- **Venue address / map pin** — update `event.venue.mapsQuery` in `lib/data.ts`. The embed uses a query search; swap in a `place_id` for a precise pin.
- **Theme** — design tokens live at the top of `app/globals.css` (navy / ivory / champagne / silver, type sizes, motion curves).
- **Gallery images** — drop new files into `public/invites/` and update the `shots` array in `components/Gallery.tsx`.

## Notes

- "Blue Bills" on the original spreadsheet is presented here as **"The Eighteen Bills"** per tradition.
- Table labels match the floor plan (`VIP 1`, `VIP 2`, `Table 1` … `Table 13`).
- The search box is forgiving: type `danos` to see every Daños on the list, or a single token like `irene` for a quick lookup.
