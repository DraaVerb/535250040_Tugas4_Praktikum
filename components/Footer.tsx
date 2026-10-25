
import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-950 py-10 text-white">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="text-xl font-extrabold">
              NexaDigital.
            </Link>

            <p className="mt-2 text-sm text-slate-400">
              Solusi digital untuk masa depan bisnis.
            </p>
          </div>

          <Link
            href="/contact"
            className="text-sm font-semibold text-blue-300 hover:text-white"
          >
            Hubungi Kami →
          </Link>

          <p className="text-sm text-slate-400">
            © 2026 Nexa Digital.
          </p>
        </div>
      </Container>
    </footer>
  );
}
