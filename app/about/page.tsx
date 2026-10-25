
import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <p className="font-bold tracking-widest text-blue-700">
          ABOUT US
        </p>

        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
          Mengenal Nexa Digital
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Nexa Digital adalah perusahaan fiktif yang berfokus
          pada pengembangan solusi digital bagi bisnis.
          Kami membantu perusahaan membangun identitas digital
          melalui website, desain, dan pemasaran digital.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl bg-blue-50 p-8">
            <h2 className="text-2xl font-bold">Visi</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Menjadi mitra teknologi terpercaya untuk mendukung
              pertumbuhan bisnis di Indonesia.
            </p>
          </article>

          <article className="rounded-2xl bg-slate-50 p-8">
            <h2 className="text-2xl font-bold">Misi</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Menghadirkan solusi digital yang inovatif,
              berkualitas, dan mudah digunakan.
            </p>
          </article>
        </div>

        <section className="mt-12 rounded-2xl border p-8">
          <h2 className="text-2xl font-bold">Komitmen Kami</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Kami mengutamakan kualitas, kreativitas, dan
            pengalaman pengguna dalam setiap solusi digital
            yang kami kembangkan.
          </p>
        </section>
      </section>
    </Container>
  );
}
