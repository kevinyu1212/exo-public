import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f8f3] px-6">
      <section className="w-full max-w-lg text-center">
        <p className="text-7xl font-black text-[#75a85b]">404</p>

        <h1 className="mt-6 text-3xl font-black text-[#183322]">
          페이지를 찾을 수 없어요
        </h1>

        <p className="mt-4 leading-7 text-[#637066]">
          주소가 잘못 입력되었거나,
          <br />
          아직 준비 중인 페이지일 수 있습니다.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/"
            className="rounded-xl bg-[#2f7048] px-5 py-3 font-bold text-white transition hover:bg-[#245d3a]"
          >
            홈으로 돌아가기
          </Link>

          <Link
            href="/market"
            className="rounded-xl border border-[#d6e1d2] bg-white px-5 py-3 font-bold text-[#31583d] transition hover:bg-[#f1f6ee]"
          >
            마켓 둘러보기
          </Link>
        </div>
      </section>
    </main>
  );
}
