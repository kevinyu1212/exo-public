import Link from 'next/link';

const listings = [
  {
    id: 'demo',
    category: '타란툴라',
    species: 'Brachypelma hamorii',
    title: '멕시칸 레드니 유체 분양',
    price: '50,000원',
    seller: '테라리움생활',
    location: '서울',
    emoji: '🕷️',
  },
  {
    id: 'demo',
    category: '파충류',
    species: 'Eublepharis macularius',
    title: '블리자드 레오파드게코',
    price: '120,000원',
    seller: '스케일하우스',
    location: '경기',
    emoji: '🦎',
  },
  {
    id: 'demo',
    category: '전갈',
    species: 'Pandinus imperator',
    title: '황제전갈 성체 분양',
    price: '80,000원',
    seller: '엑조틱룸',
    location: '부산',
    emoji: '🦂',
  },
];

export default function MarketPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f3] text-[#183322]">
      <header className="border-b border-[#e2e8df] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black text-[#193c2a]">
            Exo<span className="text-[#75a85b]">:</span>Public
          </Link>
          <Link href="/register" className="rounded-full bg-[#2f7048] px-4 py-2 text-sm font-bold text-white">
            사육자 시작하기
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <p className="text-sm font-bold tracking-[0.2em] text-[#6a9d55]">
          MARKETPLACE
        </p>
        <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h1 className="text-4xl font-black">입·분양 마켓</h1>
            <p className="mt-3 text-[#637066]">
              개체 정보와 사육자 이력을 확인하고 신뢰할 수 있는 거래를 시작하세요.
            </p>
          </div>
          <button className="rounded-xl border border-[#d6e1d2] bg-white px-5 py-3 text-sm font-bold text-[#31583d]">
            + 분양글 등록
          </button>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {['전체', '타란툴라', '전갈', '파충류', '희귀 곤충'].map((category) => (
            <button
              key={category}
              className={`rounded-full px-4 py-2 text-sm font-bold ${
                category === '전체'
                  ? 'bg-[#2f7048] text-white'
                  : 'border border-[#dce7d8] bg-white text-[#637066]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <Link
              href={`/market/${listing.id}`}
              key={listing.title}
              className="overflow-hidden rounded-2xl border border-[#e0e8dd] bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-52 items-center justify-center bg-[#edf4e9] text-7xl">
                {listing.emoji}
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-[#6a9d55]">{listing.category}</p>
                <p className="mt-2 text-xs italic text-[#829087]">{listing.species}</p>
                <h2 className="mt-2 text-lg font-black">{listing.title}</h2>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-black text-[#2f7048]">{listing.price}</span>
                  <span className="text-sm text-[#718076]">{listing.seller}</span>
                </div>
                <p className="mt-2 text-xs text-[#8a968d]">{listing.location} · 직거래/배송</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}