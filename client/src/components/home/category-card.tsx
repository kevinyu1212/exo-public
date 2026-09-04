import Link from 'next/link';

type CategoryCardProps = {
  name: string;
  emoji: string;
  description: string;
  slug: string;
};

export default function CategoryCard({
  name,
  emoji,
  description,
  slug,
}: CategoryCardProps) {
  return (
    <Link
      href={`/community?category=${slug}`}
      className="group rounded-2xl border border-[#e0e8dd] bg-white p-6 transition hover:-translate-y-1 hover:border-[#b7d39f] hover:shadow-lg"
    >
      <span className="text-4xl transition-transform group-hover:scale-110">
        {emoji}
      </span>

      <h3 className="mt-5 text-xl font-black text-[#183322]">
        {name}
      </h3>

      <p className="mt-2 text-sm text-[#718076]">
        {description}
      </p>

      <span className="mt-5 inline-block text-sm font-bold text-[#477750] opacity-0 transition-opacity group-hover:opacity-100">
        라운지 둘러보기 →
      </span>
    </Link>
  );
}
