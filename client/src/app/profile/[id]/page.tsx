import Link from 'next/link';

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-[#f6f8f3] text-[#183322]">
      <header className="border-b border-[#e2e8df] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black text-[#193c2a]">
            Exo<span className="text-[#75a85b]">:</span>Public
          </Link>
          <Link href="/breeders" className="text-sm font-bold text-[#477750]">
            ← 사육자 목록
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="rounded-3xl bg-[#dcebd4] p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl">
              🌿
            </div>
            <div>
              <p className="text-sm font-bold text-[#56815c]">VERIFIED KEEPER</p>
              <h1 className="mt-2 text-3xl font-black">테라리움생활</h1>
              <p className="mt-2 text-[#477750]">서울 · 사육 경력 8년</p>
            </div>
            <div className="sm:ml-auto">
              <p className="text-3xl font-black text-[#2f7048]">4.9 ★</p>
              <p className="text-sm text-[#56815c]">신뢰도 점수</p>
            </div>
          </div>
          <p className="mt-8 max-w-2xl leading-7 text-[#31583d]">
            건강한 사육 기록과 투명한 개체 정보를 바탕으로 신뢰할 수 있는 거래를 지향합니다.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ['보유 개체', '24'],
            ['작성한 분양글', '18'],
            ['커뮤니티 활동', '56'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-[#e0e8dd] bg-white p-6">
              <p className="text-sm text-[#8a968d]">{label}</p>
              <p className="mt-2 text-3xl font-black text-[#2f7048]">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#e0e8dd] bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black">주요 사육 종</h2>
            <span className="text-xs text-[#8a968d]">프로필 ID: {id}</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {['타란툴라', '전갈', 'Brachypelma', '사육일지'].map((tag) => (
              <span key={tag} className="rounded-full bg-[#edf4e9] px-4 py-2 text-sm font-bold text-[#477750]">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}