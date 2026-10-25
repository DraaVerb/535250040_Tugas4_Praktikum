
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <p className="font-bold tracking-widest text-blue-700">
          OUR SERVICES
        </p>

        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
          Layanan Kami
        </h1>

        <p className="mt-5 max-w-2xl leading-8 text-slate-600">
          Temukan solusi digital yang sesuai dengan kebutuhan
          perusahaan Anda melalui layanan kami.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
