'use client';

import Link from 'next/link';
import { useAuthStore } from '@/stores/auth-store';

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.isLoading);
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className="border-b border-[#e2e8df] bg-white/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-[#193c2a]"
        >
          Exo<span className="text-[#75a85b]">:</span>Public
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#637066] md:flex">
          <Link href="/market" className="transition hover:text-[#34734b]">
            입·분양
          </Link>
          <Link
            href="/community"
            className="transition hover:text-[#34734b]"
          >
            커뮤니티
          </Link>
          <Link
            href="/breeders"
            className="transition hover:text-[#34734b]"
          >
            사육자
          </Link>
        </nav>

        {isLoading ? (
          <div className="h-9 w-24 animate-pulse rounded-full bg-[#edf2ea]" />
        ) : user ? (
          <div className="flex items-center gap-3">
            <Link
              href={`/profile/${user.id}`}
              className="hidden text-sm font-semibold text-[#637066] transition hover:text-[#34734b] sm:inline"
            >
              {user.nickname}님
            </Link>
            <button
              type="button"
              onClick={logout}
              className="rounded-full border border-[#d9e2d6] px-4 py-2 text-sm font-semibold text-[#526457] transition hover:bg-[#f1f6ee]"
            >
              로그아웃
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="rounded-full px-4 py-2 text-sm font-semibold text-[#637066] transition hover:bg-[#f1f6ee]"
            >
              로그인
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-[#2f7048] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#245d3a]"
            >
              시작하기
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
