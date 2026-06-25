import Link from "next/link";
import Nav from "@/components/Nav";
import TableChecker from "@/components/TableChecker";
import Footer from "@/components/Footer";
import { FloralDivider } from "@/components/Ornament";

export default function FindTablePage() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1, paddingTop: "8rem", paddingBottom: "4rem" }}>
        <section
          className="section"
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
          aria-labelledby="find-heading"
        >
          <div className="shell">
            <div style={{ textAlign: "center" }}>
              <p className="eyebrow">A small courtesy</p>
              <h1
                id="find-heading"
                className="display"
                style={{
                  fontSize: "var(--text-display)",
                  color: "var(--ivory)",
                  marginTop: "1rem",
                }}
              >
                Find your table
              </h1>
              <p
                className="lede"
                style={{
                  maxWidth: "46ch",
                  margin: "1rem auto 0",
                }}
              >
                Tell us your name and we'll point you to your seat — and to
                your role in the evening, if you have one.
              </p>
              <FloralDivider />
            </div>

            <TableChecker />

            <div style={{ marginTop: "3rem", textAlign: "center" }}>
              <Link href="/" className="btn">
                ← Back to the invitation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
