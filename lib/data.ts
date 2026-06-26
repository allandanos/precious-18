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
  debutanteScript: "",
  age: 18,
  title: "A Decade and Eight",
  dateISO: "2026-07-04T16:00:00+08:00",
  endDateISO: "2026-07-04T21:00:00+08:00",
  dateLong: "Saturday, the Fourth of July",
  dateYear: "Two Thousand Twenty-Six",
  time: "4:00 in the afternoon — until 9:00 in the evening",
  timeShort: "4:00 PM — 9:00 PM",
  venue: {
    name: "L'Aquinum Garden",
    line2: "Bianco Hall · Antipolo Events Venue",
    city: "Antipolo, Rizal",
    /** Generic query embed — refine with an exact address if known. */
    mapsQuery: "L'Aquinum Garden, Antipolo, Rizal",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=L%27Aquinum%20Garden%20Antipolo",
  },
  dressCode: "Powder Blue, Soft Grey, Off-White",
  hostLine: "With love from Mommy & Daddy, Ace & Aldrich, and the entire Daños family & all our friends",
} as const;

export const eighteens = {
  roses: [
    "Crispin Daños",
    "Adam Sanqui",
    "JR Daños",
    "Derek Baguion",
    "Ryan Cortez",
    "John Paul Gemoto",
    "Ashley Constantino",
    "Charles Deliña",
    "Yeohan Blaise Pontillas",
    "Joshua Miguel Manguera",
    "Juhn Michael B. Caidoc",
    "Allen Miel Diamante",
    "Ken Aldric Pascual",
    "Kelvin Salazar",
    "John Cedrick Galvan",
    "Pierre Aldrich Daños",
    "Prince Ace Daños",
    "Allan Daños",
  ],
  candles: [
    "Angela Venancio",
    "Angeline Aquino",
    "Arriana Illang",
    "Brithany Padilla",
    "Chrystelle Sarabia",
    "Nicole Ugaban",
    "Angelyka Zarate",
    "Angela Joy C. Moises",
    "Christine Joy Daños",
    "Katelyn Daños",
    "Charmaine Jade Daños",
    "Christen Jiecy J. Ciriaco",
    "Audrey Kathleen M. Monsod",
    "Yleina Fernandez",
    "Maika Marcelo",
    "Mira Angel H. Maquirang",
    "Irene Grace Daños",
    "Felicia Abrio",
  ],
  treasures: [
    "Carhen Daños",
    "Creaza Daños",
    "Zairah Daños",
    "Jan Bernadette A. Caidoc",
    "Buena Montalbo",
    "Antonette Malibiran",
    "Sheeley Gem Torres",
    "Christine Ebalang",
    "Alj Dagala",
    "Gladys Gamis",
    "Louiela Salvino",
    "Dianne Asiao-Peralta",
    "Gemma Jalgalado",
    "Jonellen Araneta",
    "Ranyl Ong Eng",
    "Arlene Aquino",
    "Eugenia Daños",
    "Brian Tan Seng",
  ],
  bills: [
    "Maureen Eva Venancio",
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
    "Maria Dores Pagal",
    "Aireen Agnes-Constantino",
    "Karen Mayordomo",
    "Hans Christian Torres",
    "Chin Daños",
    "Josie Daños",
    "Karen Tagalog",
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
  { name: "Prince Ace Daños", table: "VIP 2", role: "Roses" },
  { name: "Pierre Aldrich Daños", table: "VIP 2", role: "Roses" },
  { name: "Eugenia Daños", table: "VIP 2", role: "Treasures" },
  { name: "Crispin Daños", table: "VIP 2", role: "Roses" },
  { name: "Irene Grace Daños", table: "VIP 2", role: "Candles" },
  { name: "Adam Sanqui", table: "VIP 2", role: "Roses" },
  { name: "Christian Daños", table: "VIP 2", role: null },
  { name: "Josie Daños", table: "VIP 2", role: "Bills" },

  // VIP 1
  { name: "Rodel Girard Formaran", table: "VIP 1", role: null },
  { name: "Marimar Lirio-Formaran", table: "VIP 1", role: null },
  { name: "Brian Tan Seng", table: "VIP 1", role: "Treasures" },
  { name: "Leonor Tan Seng", table: "VIP 1", role: null },
  { name: "Kuya Miguel", table: "VIP 1", role: null },
  { name: "Christine Ebalang", table: "VIP 1", role: "Treasures" },
  { name: "Hans Christian Torres", table: "VIP 1", role: "Bills" },
  { name: "Sheeley Gem Torres", table: "VIP 1", role: "Treasures" },
  { name: "Seth Torres", table: "VIP 1", role: null },
  { name: "Haeley Torres", table: "VIP 1", role: null },

  // Table 1
  { name: "Carhen Daños", table: "Table 1", role: "Treasures" },
  { name: "Jeypril De Guzman", table: "Table 1", role: null },
  { name: "Creaza Daños", table: "Table 1", role: "Treasures" },
  { name: "Kalel Daños", table: "Table 1", role: null },
  { name: "Chin Daños", table: "Table 1", role: "Bills" },
  { name: "Katherine Kaye Guiang", table: "Table 1", role: null },
  { name: "Zairah Daños", table: "Table 1", role: "Treasures" },
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
  { name: "Maria Jennilyn Vergara", table: "Table 3", role: null },
  { name: "Jovern Marie Vergara", table: "Table 3", role: null },

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
  { name: "Juhn Michael B. Caidoc", table: "Table 5", role: "Roses" },
  { name: "Jan Bernadette A. Caidoc", table: "Table 5", role: "Treasures" },
  { name: "Chelly Caidoc Reptin", table: "Table 5", role: "Bills" },
  { name: "Crystal Blessie Mae C. Reptin", table: "Table 5", role: null },
  { name: "Ashley Reigne C. Reptin", table: "Table 5", role: null },
  { name: "John Cedrick Galvan", table: "Table 5", role: "Roses" },
  { name: "Kelvin Salazar", table: "Table 5", role: "Roses" },

  // Table 6 — Family elders
  { name: "Almario Basa Jr.", table: "Table 6", role: null },
  { name: "Rose Basa", table: "Table 6", role: null },
  { name: "Lolo Tony Daños", table: "Table 6", role: null },
  { name: "Lola Benny Daños", table: "Table 6", role: null },
  { name: "Allana Daños", table: "Table 6", role: null },
  { name: "Lola Minda Cortez", table: "Table 6", role: null },
  { name: "Lola Lorna Basa", table: "Table 6", role: null },
  { name: "Laiza Basa", table: "Table 6", role: "Bills" },

  // Table 7
  { name: "Christine Joy Daños", table: "Table 7", role: "Candles" },
  { name: "Charmaine Jade Daños", table: "Table 7", role: "Candles" },
  { name: "Katelyn Daños", table: "Table 7", role: "Candles" },
  { name: "JR Daños", table: "Table 7", role: "Roses" },
  { name: "Ryan Cortez", table: "Table 7", role: "Roses" },
  { name: "Vincent Cortez", table: "Table 7", role: null },
  { name: "John Paul Gemoto", table: "Table 7", role: "Roses" },
  { name: "Andrei Gemoto", table: "Table 7", role: null },

  // Table 8
  { name: "Joshua Miguel Manguera", table: "Table 8", role: "Roses" },
  { name: "Andrei Pelaco", table: "Table 8", role: null },
  { name: "Milly Cristan M. de Leon", table: "Table 8", role: null },
  { name: "Yeohan Blaise Pontillas", table: "Table 8", role: "Roses" },
  { name: "Natalie Sapalo", table: "Table 8", role: null },
  { name: "Angelyka Zarate", table: "Table 8", role: "Candles" },
  { name: "Hillary Mae Pagal", table: "Table 8", role: null },
  { name: "Charles Deliña", table: "Table 8", role: "Roses" },

  // Table 9 — 18 Treasures cluster
  { name: "Alj Dagala", table: "Table 9", role: "Treasures" },
  { name: "Jonellen Araneta", table: "Table 9", role: "Treasures" },
  { name: "Franklin Lalangan", table: "Table 9", role: null },
  { name: "Gemma Jalgalado", table: "Table 9", role: "Treasures" },
  { name: "Dianne Asiao-Peralta", table: "Table 9", role: "Treasures" },
  { name: "Ranyl Ong Eng", table: "Table 9", role: "Treasures" },
  { name: "Gladys Gamis", table: "Table 9", role: "Treasures" },
  { name: "Karen Mayordomo", table: "Table 9", role: "Bills" },

  // Table 10
  { name: "Maria Dores Pagal", table: "Table 10", role: "Bills" },
  { name: "Bryan Niel Pagal", table: "Table 10", role: null },
  { name: "Ernea Pagal", table: "Table 10", role: null },
  { name: "Bernea Pagal", table: "Table 10", role: null },
  { name: "Aireen Agnes-Constantino", table: "Table 10", role: "Bills" },
  { name: "Rodney Constantino", table: "Table 10", role: null },
  { name: "Ashley Constantino", table: "Table 10", role: "Roses" },
  { name: "Audrix Constantino", table: "Table 10", role: null },

  // Table 11 — 18 Candles cluster
  { name: "Felicia Abrio", table: "Table 11", role: "Candles" },
  { name: "Allyza Torres", table: "Table 11", role: null },
  { name: "Angela Joy C. Moises", table: "Table 11", role: "Candles" },
  { name: "Mira Angel H. Maquirang", table: "Table 11", role: "Candles" },
  { name: "Maika Marcelo", table: "Table 11", role: "Candles" },
  { name: "Yleina Fernandez", table: "Table 11", role: "Candles" },
  { name: "Christen Jiecy J. Ciriaco", table: "Table 11", role: "Candles" },
  { name: "Audrey Kathleen M. Monsod", table: "Table 11", role: "Candles" },

  // Table 12 — 18 Bills cluster
  { name: "Jack Sarabia", table: "Table 12", role: "Bills" },
  { name: "Luz Ugaban", table: "Table 12", role: "Bills" },
  { name: "Sheryl Pascual", table: "Table 12", role: "Bills" },
  { name: "Vanesa Diamante", table: "Table 12", role: "Bills" },
  { name: "Avah Pascual", table: "Table 12", role: null },
  { name: "Amarah Diamante", table: "Table 12", role: null },
  { name: "Allen Miel Diamante", table: "Table 12", role: "Roses" },
  { name: "Ken Aldric Pascual", table: "Table 12", role: "Roses" },

  // Table 13 — 18 Bills cluster
  { name: "Maureen Eva Venancio", table: "Table 13", role: "Bills" },
  { name: "Rico Venancio", table: "Table 13", role: null },
  { name: "Sonia Aquino", table: "Table 13", role: "Bills" },
  { name: "Diane Gojar", table: "Table 13", role: "Bills" },
  { name: "Analyn Padilla", table: "Table 13", role: "Bills" },
  { name: "Rico Nathaniel Venancio", table: "Table 13", role: null },
];

export interface Supplier {
  name: string;
  /** Roles this supplier handled (some suppliers cover multiple). */
  roles: string[];
  contact?: string;
  facebook?: string;
  logo?: string;
  note?: string;
}

/**
 * Suppliers behind the evening, deduplicated by supplier.
 * Logos live in /public/suppliers/. Source: suppliers.csv.
 */
export const suppliers: Supplier[] = [
  {
    name: "L'Aquinum Garden",
    roles: [
      "Preparation Venue · Casa Luna",
      "Reception Venue · Bianco Hall",
      "Florist",
      "Venue Styling",
    ],
    contact: "Ms. Meg",
    facebook: "https://www.facebook.com/LAquinumGardenAntipolo",
    logo: "/suppliers/l-aquinum-garden-antipolo.jpg",
  },
  {
    name: "Abram's Events Catering Services",
    roles: ["Caterer", "Grazing Table", "Cake"],
    contact: "Ms. Hazel",
    facebook: "https://www.facebook.com/abramseventscatering",
    logo: "/suppliers/abrams-event-catering-services.jpg",
  },
  {
    name: "A and Z Events Management",
    roles: ["Coordinator", "Host"],
    contact: "Ms. Zet Cabuniag",
    facebook: "https://www.facebook.com/aandzeventsteamph",
    logo: "/suppliers/a-and-z-events-management.jpg",
  },
  {
    name: "Arabela Gown Rental Antipolo",
    roles: ["Debutant's Gown"],
    facebook: "https://www.facebook.com/17162828262l161",
    logo: "/suppliers/arabella-gown-rental-antipolo.jpg",
  },
  {
    name: "Joana D. Make-up Artistry",
    roles: ["Hair & Make-up"],
    contact: "Ms. Joana De Leon",
    facebook: "https://www.facebook.com/joanadeleon.hmua",
    logo: "/suppliers/joana-de-leon-makeup-artistry.jpg",
  },
  {
    name: "Jath & Yhen Photo Art Works",
    roles: ["Photo & Video Coverage"],
    contact: "Ms. Yhen",
    facebook: "https://www.facebook.com/jathandyhen",
    logo: "/suppliers/jath-and-yhen-photo-art-wroks.jpg",
  },
  {
    name: "Anyayahan Lights and Sounds",
    roles: ["Lights & Sounds", "LED Wall"],
    facebook: "https://www.facebook.com/anyayahanLandS",
    logo: "/suppliers/anyayahan-lights-and-sounds.jpg",
  },
  {
    name: "MC PrintCrafts",
    roles: ["DIY Guest Souvenirs", "Mirror Selfie", "Welcome Standee"],
    contact: "Ms. Mary Ann Joy Aday",
    facebook: "https://www.facebook.com/mcprintcraftsph",
    logo: "/suppliers/mc-print-crafts.jpg",
  },
  {
    name: "CAM Photobooth & Services",
    roles: ["Photobooth"],
    contact: "Sir Ian Neil A.",
    facebook: "https://www.facebook.com/camphotoboothservices",
    logo: "/suppliers/cam-photobooth-services.jpg",
  },
  {
    name: "Lovie Pascual's Flower Shop",
    roles: ["18 Roses & Bouquet"],
    contact: "Sir Mark Angelo B.",
    facebook: "https://www.facebook.com/loviepascualsflowershop",
    logo: "/suppliers/lovie-pascuals-flower-shop.png",
  },
  
];

export interface SpecialThanksPerson {
  /** Display name (form of address included). */
  name: string;
  /** Short label describing their gift or contribution. */
  gift: string;
  /** Relationship to the debutante / family. */
  relation: string;
  /** Portrait photo in /public/special-thanks/. Omit to render a script monogram. */
  photo?: string;
  /** Facebook page */
  facebook?: string;
  /** Optional short dedication line. */
  note?: string;
}

/**
 * Family and friends whose contributions were gifts of the heart,
 * not vendor engagements. Displayed separately from the supplier grid.
 */
export const specialThanks: SpecialThanksPerson[] = [
  {
    name: "Tita Cai Daños",
    gift: "Prizes for Games",
    relation: "Family",
    photo: "/special-thanks/tita-cai-danos.jpg",
    note: "With love and thanks",
    facebook: "https://www.facebook.com/caizher",
  },
  {
    name: "Tita Arlene Aquino",
    gift: "Guest Souvenir",
    relation: "Family Friend",
    photo: "/special-thanks/tita-arlene-aquino.jpg",
    note: "Warmest regards and sincere thanks",
    facebook: "https://www.facebook.com/arlene0725",
  },
  {
    name: "Tito Ranyl One Eng",
    gift: "Guest Souvenir Preparations",
    relation: "Family Friend",
    photo: "/special-thanks/tito-ranyl-ong-eng.jpg",
    note: "With heartfelt thanks",
    facebook: "https://www.facebook.com/lynar.ongeng",
  },
  {
    name: "Tita Tine Ebalang",
    gift: "Guest Souvenir Preparations",
    relation: "Family Friend",
    photo: "/special-thanks/tita-tine-ebalang.jpg",
    note: "With gratitude for your hands",
    facebook: "https://www.facebook.com/xuebrey20",
  },
  {
    name: "Tita Lhen Araneta",
    gift: "Guest Souvenir Preparations",
    relation: "Family Friend",
    photo: "/special-thanks/tita-lhen-araneta.jpg",
    note: "With deepest appreciation",
    facebook: "https://www.facebook.com/LHENSDIVI.ITEMS",
  },
  {
    name: "Tito Rodel Girard Formaran",
    gift: "18 Dance Serenade",
    relation: "Family Friend",
    photo: "/special-thanks/tito-rodel-formaran.jpg",
    note: "For the serenade, our warmest thanks",
    facebook: "https://www.facebook.com/rodel.girard.formaran.2024",
  },
  {
    name: "Tita Irene Grace Daños",
    gift: "Photobooth Sponsor",
    relation: "Family",
    photo: "/special-thanks/tita-irene-grace-danos.jpg",
    note: "With cheerful thanks",
    facebook: "https://www.facebook.com/igdanos",
  },
];
