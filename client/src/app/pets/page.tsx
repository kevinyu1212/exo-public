'use client';

import Link from 'next/link';

const pets = [
  {
    name: '\uBA4D\uC2DC\uCE78 \uB808\uB4DC\uB2C8',
    species: 'Brachypelma hamorii',
    status: '\uC131\uC7A5 \uC911',
    symbol: 'T',
  },
  {
    name: '\uD669\uC81C\uC804\uAC08',
    species: 'Pandinus imperator',
    status: '\uBC88\uC2DD \uAC1C\uCCB4',
    symbol: 'S',
  },
  {
    name: '\uB808\uC624\uD30C\uB4DC\uAC8C\uCF54',
    species: 'Eublepharis macularius',
    status: '\uC131\uC7A5 \uC911',
    symbol: 'R',
  },
];

export default function PetsPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f3] text-[#183322]">
      <header className="border-b border-[#e2e8df] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-black text-[#193c2a]"
          >
            Exo<span className="text-[#75a85b]">:</span>Public
          </Link>

          <Link
            href="/pets/new"
            className="rounded-xl bg-[#2f7048] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#245d3a]"
          >
            + {'\uAC1C\uCCB4 \uB4F1\uB85D'}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-sm font-bold tracking-[0.2em] text-[#6a9d55]">
          MY COLLECTION
        </p>

        <h1 className="mt-3 text-4xl font-black">
          {'\uBCF4\uC720 \uAC1C\uCCB4'}
        </h1>

        <p className="mt-3 text-[#637066]">
          {'\uB098\uC758 \uAC1C\uCCB4\uC640 \uC0AC\uC721 \uC774\uB825\uC744 \uD55C\uACF3\uC5D0\uC11C \uAD00\uB9AC\uD558\uC138\uC694.'}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pets.map((pet) => (
            <article
              key={pet.species}
              className="rounded-2xl border border-[#e0e8dd] bg-white p-5"
            >
              <div className="flex h-40 items-center justify-center rounded-xl bg-[#edf4e9] text-6xl font-black text-[#6a9d55]">
                {pet.symbol}
              </div>

              <h2 className="mt-5 text-xl font-black">
                {pet.name}
              </h2>

              <p className="mt-2 text-sm italic text-[#829087]">
                {pet.species}
              </p>

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