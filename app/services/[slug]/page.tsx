
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { services } from "@/data/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <Container>
      <article className="max-w-3xl py-16 sm:py-24">
        <Link
          href="/services"
          className="font-semibold text-blue-700 hover:underline"
        >
          ← Kembali ke Layanan
        </Link>

        <p className="mt-8 font-bold tracking-widest text-blue-700">
          SERVICE DETAIL
        </p>

        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
          {service.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {service.detail}
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
        >
          Konsultasi Sekarang
        </Link>
      </article>
    </Container>
  );
}
