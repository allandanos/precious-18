import { guests, Guest } from "./data";

/** Normalize a name for fuzzy matching: lowercase, strip accents, punctuation, extra spaces. */
export function normalize(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Sort tokens so order doesn't matter ("daños allan" matches "Allan Daños"). */
function tokenize(normalized: string): string[] {
  return normalized.split(" ").filter(Boolean);
}

export interface Match {
  guest: Guest;
  /** 0..1 confidence, higher is better. */
  score: number;
}

/**
 * Search guests by name. Returns matches scored by token overlap, with a
 * bonus for last-name token hits (many guests share surnames, so a single
 * token hit may be ambiguous — the caller can show alternatives).
 */
export function findGuests(query: string, limit = 6): Match[] {
  const q = normalize(query);
  if (q.length < 2) return [];

  const qTokens = new Set(tokenize(q));
  if (qTokens.size === 0) return [];

  const scored: Match[] = [];
  for (const guest of guests) {
    const gTokens = new Set(tokenize(normalize(guest.name)));
    if (gTokens.size === 0) continue;

    let hits = 0;
    for (const t of qTokens) {
      if (gTokens.has(t)) {
        hits++;
        continue;
      }
      // Prefix match — "all" matches "allan".
      for (const gt of gTokens) {
        if (gt.startsWith(t) || t.startsWith(gt)) {
          hits += 0.85;
          break;
        }
      }
    }

    if (hits === 0) continue;
    const score = hits / Math.max(qTokens.size, gTokens.size);
    scored.push({ guest, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit);
}
