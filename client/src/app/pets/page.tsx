import Link from 'next/link';

const pets = [
  { name: '멕시칸 레드니', species: 'Brachypelma hamorii', status: '성장 중', emoji: '🕷️' },
  { name: '황제전갈', species: 'Pandinus imperator', status: '번식 개체', emoji: '🦂' },
  { name: '레오파드게코', species: 'Eublepharis macularius', status: '성장 중', emoji: '🦎' },
];

export default function PetsPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f3] text-[#183322]">
      <header className="border-b border-[#e2e8df] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black text-[#193c2a]">
            Exo<span className="text-[#75a85b]">:</span>Public
          </Link>
          <button className="rounded-xl bg-[#2f7048] px-4 py-3 text-sm font-bold text-white">
            + 개체 등록
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-sm font-bold tracking-[0.2em] text-[#6a9d55]">MY COLLECTION</p>
        <h1 className="mt-3 text-4xl font-black">보유 개체</h1>
        <p className="mt-3 text-[#637066]">나의 개체와 사육 이력을 한곳에서 관리하세요.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pets.map((pet) => (
            <article key={pet.name} className="rounded-2xl border border-[#e0e8dd] bg-white p-5">
              <div className="flex h-40 items-center justify-center rounded-xl bg-[#edf4e9] text-7xl">
                {pet.emoji}
              </div>
              <h2 className="mt-5 text-xl font-black">{pet.name}</h2>
              <p className="mt-2 text-sm italic text-[#829087]">{pet.species}</p>
              <span className="mt-5 inline-block rounded-full bg-[#edf4e9] px-3 py-1 text-xs font-bold text-[#477750]">
                {pet.status}
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}