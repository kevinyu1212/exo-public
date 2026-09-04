'use client';

import { useEffect } from 'react';
import Link from 'next/link';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('Exo:Public application error:', error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f8f3] px-6">
      <section className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff1ed] text-3xl">
          !
        </div>

        <h1 className="mt-6 text-2xl font-black text-[#183322]">
          잠시 문제가 발생했어요
        </h1>

        <p className="mt-3 leading-7 text-[#637066]">
          일시적인 오류일 수 있습니다.
          <br />
          다시 시도하거나 홈으로 이동해주세요.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-xl bg-[#2f7048] px-5 py-3 font-bold text-white transition hover:bg-[#245d3a]"
          >
            다시 시도
          </button>

          <Link
            href="/"
            className="rounded-xl border border-[#d6e1d2] px-5 py-3 font-bold text-[#31583d] transition hover:bg-[#f1f6ee]"
          >
            홈으로 이동
          </Link>
        </div>
      </section>
    </main>
  );
}
