import { Flourish, FloralDivider } from "./Ornament";

interface PhotoAlbum {
  title: string;
  description: string;
  url: string;
}

/**
 * Public Google Photos albums from the evening. Photos stay hosted on
 * Google Photos; each card links out to the album there.
 */
const albums: PhotoAlbum[] = [
  {
    title: "Highlights",
    description: "The moments that defined the evening, from grand entrance to last dance.",
    url: "https://photos.app.goo.gl/mTBoPPMtm4FA65Dn8",
  },
  {
    title: "Cocktails at Flora Pavilion",
    description: "Welcome drinks and grazing in the garden before the programme.",
    url: "https://photos.app.goo.gl/yiPJij4nCtJKZ82J9",
  },
  {
    title: "Grand Entrance",
    description: "Precious Allena's first steps into Bianco Hall as the debutante.",
    url: "https://photos.app.goo.gl/f3pX5qFhJxRizZrM6",
  },
  {
    title: "Roses",
    description: "The eighteen roses and the waltz that opened the night.",
    url: "https://photos.app.goo.gl/QBMCupn4kbatptng9",
  },
  {
    title: "Treasures",
    description: "Eighteen keepsakes, bestowed one by one.",
    url: "https://photos.app.goo.gl/2di2ezdF5y86FNfM6",
  },
  {
    title: "Message from Ninong & Ninang",
    description: "Words of wisdom and blessing from the godparents.",
    url: "https://photos.app.goo.gl/WvE7VgksLtHV7m719",
  },
  {
    title: "Candles",
    description: "Eighteen candles lit to warm her path ahead.",
    url: "https://photos.app.goo.gl/88ZNrHxpgZLwWGi76",
  },
  {
    title: "Blowing Out the Candles",
    description: "The wish, the breath, and the cheer that followed.",
    url: "https://photos.app.goo.gl/x2riejLPHYPeZ8c76",
  },
  {
    title: "Table Photo Session",
    description: "Group portraits from every table of the evening.",
    url: "https://photos.app.goo.gl/XcZoCi1aLgvTmxodA",
  },
  {
    title: "Intermission Numbers",
    description: "Song, dance, and surprise performances between courses.",
    url: "https://photos.app.goo.gl/17zSmyZowRykQMjR8",
  },
  {
    title: "Blue Bills",
    description: "The eighteen sponsors whose generosity made the night possible.",
    url: "https://photos.app.goo.gl/jaqXpHdoXXVsaU9V7",
  },
  {
    title: "Shots",
    description: "Candid laughter and stolen moments throughout the celebration.",
    url: "https://photos.app.goo.gl/4diXAHM2ZBNrqwQQ6",
  },
  {
    title: "After Party",
    description: "The dancing and celebration that carried us into the night.",
    url: "https://photos.app.goo.gl/aumV2fjmJKpyHZvb8",
  },
];

export default function PhotoAlbums() {
  return (
    <section className="section" aria-labelledby="gallery-heading">
      <div className="shell">
        <div style={{ textAlign: "center" }}>
          <p className="eyebrow">Moments in Frame</p>
          <h2
            id="gallery-heading"
            className="display text-balance"
            style={{
              fontSize: "var(--text-h2)",
              color: "var(--ivory)",
              marginTop: "1rem",
              marginInline: "auto",
              maxWidth: "18ch",
            }}
          >
            The Gallery
          </h2>
          <FloralDivider />
          <p
            className="lede"
            style={{ maxWidth: "48ch", marginInline: "auto" }}
          >
            Thirteen albums from the evening — each opens the full collection
            on Google Photos. Relive the debut, moment by moment.
          </p>
        </div>

        <ul
          className="photo-albums-grid"
          style={{ listStyle: "none", margin: "3rem 0 0", padding: 0 }}
        >
          {albums.map((a) => (
            <li key={a.title}>
              <a
                href={a.url}
                target="_blank"
                rel="noreferrer noopener"
                className="photo-album-card"
              >
                <span className="photo-album-card__ornament" aria-hidden>
                  <Flourish />
                </span>
                <h3 className="photo-album-card__title">{a.title}</h3>
                <p className="photo-album-card__desc">{a.description}</p>
                <span className="photo-album-card__cta">
                  View album
                  <span aria-hidden style={{ marginLeft: "0.4rem" }}>↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
