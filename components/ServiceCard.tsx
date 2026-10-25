
import Link from "next/link";

type ServiceCardProps = {
  slug: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  slug,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex size-12 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-700">
        N
      </div>

      <h2 className="mt-5 text-xl font-bold">{title}</h2>

      <p className="mt-3 flex-1 leading-7 text-slate-600">
        {description}
      </p>

      <Link
        href={`/services/${slug}`}
        className="mt-6 font-bold text-blue-700 hover:underline"
      >
        Pelajari Lebih Lanjut →
      </Link>
    </article>
  );
}
