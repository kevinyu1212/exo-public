'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Exo:Public global error:', error);
  }, [error]);

  return (
    <html lang="ko">
      <body className="bg-[#f6f8f3]">
        <main className="flex min-h-screen items-center justify-center px-6">
          <section className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-lg">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6a9d55]">
              Exo:Public
            </p>

            <h1 className="mt-5 text-2xl font-black text-[#183322]">
              서비스를 불러오지 못했어요
            </h1>

            <p className="mt-3 text-[#637066]">
              페이지를 새로고침하거나 잠시 후 다시 시도해주세요.
            </p>

            <button
              type="button"
              onClick={() => reset()}
              className="mt-8 rounded-xl bg-[#2f7048] px-5 py-3 font-bold text-white transition hover:bg-[#245d3a]"
            >
              다시 시도
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
