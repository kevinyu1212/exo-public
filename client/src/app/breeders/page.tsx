import Link from 'next/link';

const breeders = [
  { id: 'demo', name: '테라리움생활', region: '서울', years: '8년', score: '4.9', species: '타란툴라 · 전갈' },
  { id: 'demo', name: '스케일하우스', region: '경기', years: '5년', score: '4.8', species: '파충류 · 도마뱀' },
  { id: 'demo', name: '엑조틱룸', region: '부산', years: '6년', score: '4.9', species: '전갈 · 희귀 곤충' },
];

export default function BreedersPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f3] text-[#183322]">
      <header className="border-b border-[#e2e8df] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link href="/" className="text-2xl font-black text-[#193c2a]">
            Exo<span className="text-[#75a85b]">:</span>Public
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-sm font-bold tracking-[0.2em] text-[#6a9d55]">NETWORK</p>
        <h1 className="mt-3 text-4xl font-black">추천 사육자</h1>
        <p className="mt-3 text-[#637066]">관심 종과 사육 철학이 맞는 사육자를 찾아보세요.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {breeders.map((breeder) => (
            <Link
              href={`/profile/${breeder.id}`}
              key={breeder.name}
              className="rounded-2xl border border-[#e0e8dd] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#dcebd4] text-3xl">
                🌿
              </div>
              <h2 className="mt-5 text-xl font-black">{breeder.name}</h2>
              <p className="mt-2 text-sm text-[#718076]">{breeder.region} · 사육 경력 {breeder.years}</p>
              <p className="mt-4 text-sm text-[#56815c]">{breeder.species}</p>
              <p className="mt-5 font-bold text-[#477750]">★ {breeder.score}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}