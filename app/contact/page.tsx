
import Link from "next/link";
import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <p className="font-bold tracking-widest text-blue-700">
          GET IN TOUCH
        </p>

        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
          Hubungi Kami
        </h1>

        <p className="mt-5 max-w-2xl leading-8 text-slate-600">
          Punya ide atau membutuhkan solusi digital?
          Hubungi kami untuk mendiskusikan kebutuhan bisnis Anda.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border p-7">
            <h2 className="text-xl font-bold">Email</h2>
            <p className="mt-3 break-words text-slate-600">
              hello@nexadigital.example
            </p>
          </article>

          <article className="rounded-2xl border p-7">
            <h2 className="text-xl font-bold">Lokasi</h2>
            <p className="mt-3 text-slate-600">
              Tangerang, Indonesia
            </p>
          </article>
        </div>

        <Link
          href="/services"
          className="mt-8 inline-block rounded-xl bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800"
        >
          Lihat Layanan
        </Link>
      </section>
    </Container>
  );
}
