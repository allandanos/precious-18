/**
 * Single source of truth for the invitation site.
 * Event details, the 18s, and the full guest→table map.
 */

export type Role = "Roses" | "Candles" | "Bills" | "Treasures" | null;

export interface Guest {
  /** Canonical display name. */
  name: string;
  /** Table label as printed on the seat plan (e.g. "VIP 1", "Table 4"). */
  table: string;
  role: Role;
}

export const event = {
  debutante: "Precious Allena",
  debutanteScript: "Precious",
  age: 18,
  title: "An Eighteenth Celebration",
  dateISO: "2026-07-04T16:00:00+08:00",
  endDateISO: "2026-07-04T21:00:00+08:00",
  dateLong: "Saturday, the Fourth of July",
  dateYear: "Two Thousand Twenty-Six",
  time: "4:00 in the afternoon — until 9:00 in the evening",
  timeShort: "4:00 PM — 9:00 PM",
  venue: {
    name: "L'Aquinum Garden",
    line2: "Antipolo Event Venue",
    city: "Antipolo, Rizal",
    /** Generic query embed — refine with an exact address if known. */
    mapsQuery: "L'Aquinum Garden, Antipolo, Rizal",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=L%27Aquinum%20Garden%20Antipolo",
  },
  dressCode: "Garden formal · Navy, silver, ivory",
  hostLine: "With love from Allan, Annabel & the Daños–Formaran families",
} as const;

export const eighteens = {
  roses: [
    "Adam Sanqui",
    "Junior Daños",
    "Derek Baguion",
    "Ryan Cortez",
    "John Paul Gemoto",
    "Ashley Constantino",
    "Charles Deliña",
    "Yeohan Pontillas",
    "Joshua Manguera",
    "Juhn Michael Caidoc",
    "Allen Diamante",
    "Ken Pascual",
    "Kelvin Salazar",
    "Cedrick Galvan",
    "Aldrich Daños",
    "Ace Daños",
    "Crispin Daños",
    "Allan Daños",
  ],
  candles: [
    "Katelyn Daños",
    "Jade Daños",
    "Joy Daños",
    "Angela Venancio",
    "Angeline Aquino",
    "Arriana Illang",
    "Brithany Padilla",
    "Chrystelle Sarabia",
    "Nicole Ugaban",
    "Angelyka Zarate",
    "Angela Moises",
    "Jiecy Ciriaco",
    "Audrey Monsod",
    "Yleina Fernandez",
    "Maika Marcelo",
    "Mira Maquirang",
    "Irene Grace Daños",
    "Felicia Abrio",
  ],
  bills: [
    "Eva Venancio",
    "Sonia Aquino",
    "Diane Gojar",
    "Analyn Padilla",
    "Jack Sarabia",
    "Luz Ugaban",
    "Sheryl Pascual",
    "Vanesa Diamante",
    "Laiza Basa",
    "Cecille Lasang",
    "Chelly Caidoc",
    "Doris Pagal",
    "Aireen Constantino",
    "Karen Mayordomo",
    "Hans Christian Torres",
    "Josie Daños",
    "Chin Daños",
    "Karen Tagalog",
  ],
  treasures: [
    "Eugenia Daños",
    "Brian Tan Seng",
    "Christine Ebalang",
    "Sheelygem Torres",
    "Carhen Daños",
    "Creaza Daños",
    "Zaira Daños",
    "Antonette Malibiran",
    "Buena Montalbo",
    "Louiela Salvino",
    "Arlene Aquino",
    "Bernadette Caidoc",
    "Alj Dagala",
    "Jonellen Araneta",
    "Gemma Jalgalado",
    "Dianne Peralta",
    "Ranyl Ong Eng",
    "Gladys Gamis",
  ],
} as const;

export const eighteensMeta = [
  {
    key: "roses" as const,
    title: "The Eighteen Roses",
    blurb:
      "Eighteen gentlemen to walk her through the first waltz of the evening — a tradition of the debut.",
    accent: "rose",
  },
  {
    key: "candles" as const,
    title: "The Eighteen Candles",
    blurb:
      "Eighteen women to light the candles that warm her path into adulthood.",
    accent: "gold",
  },
  {
    key: "bills" as const,
    title: "The Eighteen Bills",
    blurb:
      "Eighteen sponsors whose generosity helps make this evening possible.",
    accent: "navy",
  },
  {
    key: "treasures" as const,
    title: "The Eighteen Treasures",
    blurb:
      "Eighteen keepsakes — and the loved ones who bestow them — to carry into her next chapter.",
    accent: "ivory",
  },
];

/** All 120 guests parsed from guest-list.csv. */
export const guests: Guest[] = [
  // VIP 2
  { name: "Allan Daños", table: "VIP 2", role: "Roses" },
  { name: "Annabel Daños", table: "VIP 2", role: null },
  { name: "Ace Daños", table: "VIP 2", role: "Roses" },
  { name: "Aldrich Daños", table: "VIP 2", role: "Roses" },
  { name: "Eugenia Daños", table: "VIP 2", role: "Treasures" },
  { name: "Crispin Daños", table: "VIP 2", role: "Roses" },
  { name: "Irene Grace Daños", table: "VIP 2", role: "Candles" },
  { name: "Adam Sanqui", table: "VIP 2", role: "Roses" },
  { name: "Christian Daños", table: "VIP 2", role: "Bills" },
  { name: "Josie Daños", table: "VIP 2", role: "Bills" },

  // VIP 1
  { name: "Rodel Formaran", table: "VIP 1", role: null },
  { name: "Marimar Formaran", table: "VIP 1", role: null },
  { name: "Brian Tan Seng", table: "VIP 1", role: "Treasures" },
  { name: "Leonor Tan Seng", table: "VIP 1", role: null },
  { name: "Kuya Miguel", table: "VIP 1", role: null },
  { name: "Christine Ebalang", table: "VIP 1", role: "Treasures" },
  { name: "Hans Christian Torres", table: "VIP 1", role: "Bills" },
  { name: "Sheelygem Torres", table: "VIP 1", role: "Treasures" },
  { name: "Seth Torres", table: "VIP 1", role: null },
  { name: "Haeley Torres", table: "VIP 1", role: null },

  // Table 1
  { name: "Carhen Daños", table: "Table 1", role: "Treasures" },
  { name: "Jeypril De Guzman", table: "Table 1", role: null },
  { name: "Creaza Daños", table: "Table 1", role: "Treasures" },
  { name: "Kalel Daños", table: "Table 1", role: null },
  { name: "Chin Daños", table: "Table 1", role: "Bills" },
  { name: "Kaye", table: "Table 1", role: null },
  { name: "Zaira Daños", table: "Table 1", role: "Treasures" },
  { name: "Karah Daños", table: "Table 1", role: null },

  // Table 2
  { name: "Errol Encarnacion", table: "Table 2", role: null },
  { name: "Richard Malibiran", table: "Table 2", role: null },
  { name: "Antonette Malibiran", table: "Table 2", role: "Treasures" },
  { name: "Erickson Leynes", table: "Table 2", role: null },
  { name: "Buena Montalbo", table: "Table 2", role: "Treasures" },
  { name: "Louiela Salvino", table: "Table 2", role: "Treasures" },
  { name: "Rey Camarquiz", table: "Table 2", role: null },
  { name: "Arlene Aquino", table: "Table 2", role: "Treasures" },

  // Table 3
  { name: "Rowel Baguion", table: "Table 3", role: null },
  { name: "Cecille Lasang", table: "Table 3", role: "Bills" },
  { name: "Derek Baguion", table: "Table 3", role: "Roses" },
  { name: "Duane Baguion", table: "Table 3", role: null },
  { name: "Karen Tagalog", table: "Table 3", role: "Bills" },
  { name: "Judith", table: "Table 3", role: null },
  { name: "Judith Daughter", table: "Table 3", role: null },

  // Table 4 — 18 Candles
  { name: "Angela Venancio", table: "Table 4", role: "Candles" },
  { name: "Angeline Aquino", table: "Table 4", role: "Candles" },
  { name: "Arriana Illang", table: "Table 4", role: "Candles" },
  { name: "Brithany Padilla", table: "Table 4", role: "Candles" },
  { name: "Chrystelle Sarabia", table: "Table 4", role: "Candles" },
  { name: "Nicole Ugaban", table: "Table 4", role: "Candles" },
  { name: "Toni Molintas", table: "Table 4", role: null },
  { name: "Karlos Faustino", table: "Table 4", role: null },

  // Table 5
  { name: "Juhn Michael Caidoc", table: "Table 5", role: "Roses" },
  { name: "Bernadette Caidoc", table: "Table 5", role: "Treasures" },
  { name: "Chelly Caidoc Reptin", table: "Table 5", role: "Bills" },
  { name: "Crystal Blessie Mae C. Reptin", table: "Table 5", role: null },
  { name: "Ashley Reigne C. Reptin", table: "Table 5", role: null },
  { name: "Cedrick Galvan", table: "Table 5", role: "Roses" },
  { name: "Kelvin Salazar", table: "Table 5", role: "Roses" },

  // Table 6 — Family elders
  { name: "Almario Basa Jr.", table: "Table 6", role: null },
  { name: "Greg's Wife", table: "Table 6", role: null },
  { name: "Lolo Tony Daños", table: "Table 6", role: null },
  { name: "Lola Benny Daños", table: "Table 6", role: null },
  { name: "Allana Daños", table: "Table 6", role: null },
  { name: "Lola Minda Cortez", table: "Table 6", role: null },
  { name: "Lola Lorna Basa", table: "Table 6", role: null },
  { name: "Laiza Basa", table: "Table 6", role: "Bills" },

  // Table 7
  { name: "Joy Daños", table: "Table 7", role: "Candles" },
  { name: "Jade Daños", table: "Table 7", role: "Candles" },
  { name: "Katelyn Daños", table: "Table 7", role: "Candles" },
  { name: "Junior Daños", table: "Table 7", role: "Roses" },
  { name: "Ryan Cortez", table: "Table 7", role: "Roses" },
  { name: "Vincent Cortez", table: "Table 7", role: null },
  { name: "John Paul Gemoto", table: "Table 7", role: "Roses" },
  { name: "Andrei Gemoto", table: "Table 7", role: null },

  // Table 8
  { name: "Joshua Manguera", table: "Table 8", role: "Roses" },
  { name: "Andrei Pelaco", table: "Table 8", role: null },
  { name: "Milly De Leon", table: "Table 8", role: null },
  { name: "Yeohan Pontillas", table: "Table 8", role: "Roses" },
  { name: "Natalie Sapalo", table: "Table 8", role: null },
  { name: "Angelyka Zarate", table: "Table 8", role: "Candles" },
  { name: "Hillary Pagal", table: "Table 8", role: null },
  { name: "Charles Deliña", table: "Table 8", role: "Roses" },

  // Table 9 — 18 Treasures cluster
  { name: "Alj Dagala", table: "Table 9", role: "Treasures" },
  { name: "Jonellen Araneta", table: "Table 9", role: "Treasures" },
  { name: "Frank Lalangan", table: "Table 9", role: null },
  { name: "Gemma Jalgalado", table: "Table 9", role: "Treasures" },
  { name: "Dianne Peralta", table: "Table 9", role: "Treasures" },
  { name: "Ranyl Ong Eng", table: "Table 9", role: "Treasures" },
  { name: "Gladys Gamis", table: "Table 9", role: "Treasures" },
  { name: "Karen Mayordomo", table: "Table 9", role: "Bills" },

  // Table 10
  { name: "Doris Pagal", table: "Table 10", role: "Bills" },
  { name: "Mr Pagal", table: "Table 10", role: null },
  { name: "Ernea Pagal", table: "Table 10", role: null },
  { name: "Bernea Pagal", table: "Table 10", role: null },
  { name: "Aireen Constantino", table: "Table 10", role: "Bills" },
  { name: "Rodney Constantino", table: "Table 10", role: null },
  { name: "Ashley Constantino", table: "Table 10", role: "Roses" },
  { name: "Audrix Constantino", table: "Table 10", role: null },

  // Table 11 — 18 Candles cluster
  { name: "Felicia Abrio", table: "Table 11", role: "Candles" },
  { name: "Allyza Torres", table: "Table 11", role: null },
  { name: "Angela Moises", table: "Table 11", role: "Candles" },
  { name: "Mira Maquirang", table: "Table 11", role: "Candles" },
  { name: "Maika Marcelo", table: "Table 11", role: "Candles" },
  { name: "Yleina Fernandez", table: "Table 11", role: "Candles" },
  { name: "Jiecy Ciriaco", table: "Table 11", role: "Candles" },
  { name: "Audrey Monsod", table: "Table 11", role: "Candles" },

  // Table 12 — 18 Bills cluster
  { name: "Jack Sarabia", table: "Table 12", role: "Bills" },
  { name: "Luz Ugaban", table: "Table 12", role: "Bills" },
  { name: "Sheryl Pascual", table: "Table 12", role: "Bills" },
  { name: "Vanesa Diamante", table: "Table 12", role: "Bills" },
  { name: "Avah Pascual", table: "Table 12", role: null },
  { name: "Amarah Diamante", table: "Table 12", role: null },
  { name: "Allen Diamante", table: "Table 12", role: "Roses" },
  { name: "Ken Pascual", table: "Table 12", role: "Roses" },

  // Table 13 — 18 Bills cluster
  { name: "Eva Venancio", table: "Table 13", role: "Bills" },
  { name: "Rico Venancio", table: "Table 13", role: null },
  { name: "Sonia Aquino", table: "Table 13", role: "Bills" },
  { name: "Diane Gojar", table: "Table 13", role: "Bills" },
  { name: "Analyn Padilla", table: "Table 13", role: "Bills" },
  { name: "Rico Nathaniel Venancio", table: "Table 13", role: null },
];
