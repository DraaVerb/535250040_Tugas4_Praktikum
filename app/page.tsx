
import Link from "next/link";
import Container from "@/components/Container";

const features = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Website modern, profesional, dan responsif untuk bisnis.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Desain digital yang menarik dan mudah digunakan.",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Strategi digital untuk membantu bisnis berkembang.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-24 text-white sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="font-bold tracking-[0.2em] text-blue-300">
              WELCOME TO NEXA DIGITAL
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">
              Solusi Digital untuk Masa Depan Bisnis Anda
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
              Kami membantu bisnis berkembang melalui website,
              desain kreatif, dan teknologi digital yang inovatif.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-xl bg-white px-6 py-3 font-bold text-blue-950 transition hover:bg-blue-100"
              >
                Lihat Layanan →
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-white/50 px-6 py-3 font-bold hover:bg-white/10"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <p className="font-bold tracking-widest text-blue-700">
            LAYANAN KAMI
          </p>

          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold sm:text-4xl">
            Teknologi yang Membantu Bisnis Bertumbuh
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            Kami menggabungkan kreativitas dan teknologi untuk
            membangun kehadiran digital yang profesional.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="font-extrabold text-blue-700">
                  {feature.number}
                </p>
                <h3 className="mt-4 text-xl font-bold">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-blue-50 p-8 sm:p-12">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Siap Mengembangkan Bisnis Anda?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Mari diskusikan kebutuhan digital perusahaan Anda.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800"
            >
              Hubungi Kami
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
