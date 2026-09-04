import Link from 'next/link';

export default async function MarketDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-[#f6f8f3] text-[#183322]">
      <header className="border-b border-[#e2e8df] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black text-[#193c2a]">
            Exo<span className="text-[#75a85b]">:</span>Public
          </Link>
          <Link href="/market" className="text-sm font-bold text-[#477750]">
            ← 마켓으로 돌아가기
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-2">
        <div className="flex min-h-[420px] items-center justify-center rounded-3xl bg-[#dcebd4] text-9xl">
          🕷️
        </div>

        <div className="rounded-3xl border border-[#e0e8dd] bg-white p-8">
          <p className="text-sm font-bold text-[#6a9d55]">타란툴라 · 개체 인증 준비</p>
          <h1 className="mt-3 text-3xl font-black">멕시칸 레드니 유체 분양</h1>
          <p className="mt-3 text-sm italic text-[#829087]">
            Brachypelma hamorii
          </p>

          <div className="mt-8 border-y border-[#edf1eb] py-6">
            <p className="text-sm text-[#718076]">분양가</p>
            <p className="mt-2 text-3xl font-black text-[#2f7048]">50,000원</p>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-[#8a968d]">성별</dt>
              <dd className="mt-1 font-bold">미구분</dd>
            </div>
            <div>
              <dt className="text-[#8a968d]">거래 방식</dt>
              <dd className="mt-1 font-bold">직거래 · 배송</dd>
            </div>
            <div>
              <dt className="text-[#8a968d]">판매자</dt>
              <dd className="mt-1 font-bold">테라리움생활</dd>
            </div>
            <div>
              <dt className="text-[#8a968d]">지역</dt>
              <dd className="mt-1 font-bold">서울</dd>
            </div>
          </dl>

          <div className="mt-8 flex gap-3">
            <button className="flex-1 rounded-xl border border-[#d6e1d2] py-3 font-bold text-[#31583d]">
              ♡ 찜하기
            </button>
            <button className="flex-1 rounded-xl bg-[#2f7048] py-3 font-bold text-white">
              채팅 문의
            </button>
          </div>

          <p className="mt-5 text-xs text-[#8a968d]">상세 페이지 ID: {id}</p>
        </div>
      </section>
    </main>
  );
}