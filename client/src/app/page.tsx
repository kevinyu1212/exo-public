'use client';

import Link from 'next/link';
import CategoryCard from '@/components/home/category-card';
import { useEffect, useState } from 'react';

const categories = [
  {
    name: '타란툴라',
    emoji: '🕷️',
    description: '탈피와 사육 노하우',
    slug: 'tarantula',
  },
  {
    name: '전갈',
    emoji: '🦂',
    description: '종별 정보와 커넥션',
    slug: 'scorpion',
  },
  {
    name: '파충류',
    emoji: '🦎',
    description: '건강한 입양과 기록',
    slug: 'reptile',
  },
  {
    name: '희귀 곤충',
    emoji: '🪲',
    description: '브리더와 개체 정보',
    slug: 'insect',
  },
];

const listings = [
  {
    species: 'Brachypelma hamorii',
    title: '멕시칸 레드니 유체 분양',
    price: '50,000원',
    seller: '테라리움생활',
    category: '타란툴라',
  },
  {
    species: 'Eublepharis macularius',
    title: '블리자드 레오파드게코',
    price: '120,000원',
    seller: '스케일하우스',
    category: '파충류',
  },
  {
    species: 'Pandinus imperator',
    title: '황제전갈 성체 분양',
    price: '80,000원',
    seller: '엑조틱룸',
    category: '전갈',
  },
];

const breeders = [
  { name: '테라리움생활', region: '서울', years: '8년', score: '4.9' },
  { name: '스케일하우스', region: '경기', years: '5년', score: '4.8' },
  { name: '엑조틱룸', region: '부산', years: '6년', score: '4.9' },
];

export default function Home() {
  const [user, setUser] = useState<{ nickname: string } | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');

    if (savedUser) {
      try {
        // 로그인 상태는 AuthInitializer와 전역 스토어에서 관리합니다.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem('user');
      }
    }
  }, []);

  function logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    setUser(null);
  }

  return (
    <main className="min-h-screen bg-[#f6f8f3] text-[#18231d]">
      <header className="border-b border-[#e2e8df] bg-white/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black tracking-tight text-[#193c2a]">
            Exo<span className="text-[#75a85b]">:</span>Public
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#637066] md:flex">
            <Link href="/market" className="hover:text-[#34734b]">입·분양</Link>
            <Link href="/community" className="hover:text-[#34734b]">커뮤니티</Link>
            <Link href="/breeders" className="hover:text-[#34734b]">사육자</Link>
          </nav>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="hidden text-sm text-[#637066] sm:inline">
                {user.nickname}님
              </span>
              <button
                onClick={logout}
                className="rounded-full border border-[#d9e2d6] px-4 py-2 text-sm font-semibold hover:bg-[#f1f6ee]"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="rounded-full px-4 py-2 text-sm font-semibold text-[#637066] hover:bg-[#f1f6ee]">
                로그인
              </Link>
              <Link href="/register" className="rounded-full bg-[#2f7048] px-4 py-2 text-sm font-semibold text-white hover:bg-[#245d3a]">
                시작하기
              </Link>
            </div>
          )}
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#6a9d55]">
            Keeper connection platform
          </p>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.12] tracking-tight text-[#183322] md:text-7xl">
            사육자의 신뢰와
            <br />
            개체의 이야기를
            <br />
            연결합니다.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#637066]">
            Exo:Public은 희귀애완동물 사육자와 입문자를 위한
            입·분양, 개체 기록, 커뮤니티 플랫폼입니다.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/register" className="rounded-2xl bg-[#2f7048] px-6 py-4 font-bold text-white shadow-lg shadow-[#2f7048]/20 hover:bg-[#245d3a]">
              사육자 프로필 만들기
            </Link>
            <Link href="/market" className="rounded-2xl border border-[#d6e1d2] bg-white px-6 py-4 font-bold text-[#31583d] hover:bg-[#f1f6ee]">
              마켓 둘러보기
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[#dcebd4] p-8 shadow-xl shadow-[#274934]/10">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#b7d39f]" />
          <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-[#c5dfb4]" />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-[#477750]">
                THIS MONTH
              </span>
              <span className="text-3xl">🕷️</span>
            </div>
            <p className="text-sm font-semibold text-[#5d8060]">이달의 주목 개체</p>
            <h2 className="mt-3 text-3xl font-black text-[#1d432a]">
              건강한 기록이
              <br />
              신뢰가 됩니다.
            </h2>
            <div className="mt-8 rounded-2xl bg-white/75 p-5 backdrop-blur">
              <p className="text-xs font-bold text-[#6a876e]">FEATURED BREEDER</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-bold text-[#244a30]">테라리움생활</span>
                <span className="text-sm font-semibold text-[#6a876e]">신뢰도 4.9 ★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold text-[#6a9d55]">EXPLORE LOUNGES</p>
            <h2 className="mt-2 text-3xl font-black text-[#183322]">종별 라운지</h2>
          </div>
          <Link href="/community" className="text-sm font-bold text-[#477750] hover:underline">
            전체 보기 →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </section>

      <section className="border-y border-[#e2e8df] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold text-[#6a9d55]">MARKETPLACE</p>
              <h2 className="mt-2 text-3xl font-black">실시간 입·분양</h2>
            </div>
            <Link href="/market" className="text-sm font-bold text-[#477750] hover:underline">
              마켓 전체 보기 →
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {listings.map((listing) => (
              <article key={listing.title} className="rounded-2xl border border-[#e3e9e1] p-5 hover:shadow-lg">
                <div className="flex h-36 items-center justify-center rounded-xl bg-[#edf4e9] text-6xl">
                  {listing.category === '타란툴라' ? '🕷️' : listing.category === '전갈' ? '🦂' : '🦎'}
                </div>
                <p className="mt-5 text-xs font-bold text-[#6a9d55]">{listing.species}</p>
                <h3 className="mt-2 text-lg font-black">{listing.title}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-black text-[#2f7048]">{listing.price}</span>
                  <span className="text-sm text-[#718076]">{listing.seller}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold text-[#6a9d55]">TRUSTED KEEPERS</p>
        <h2 className="mt-2 text-3xl font-black">추천 사육자</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {breeders.map((breeder) => (
            <article key={breeder.name} className="flex items-center gap-4 rounded-2xl border border-[#e0e8dd] bg-white p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dcebd4] text-xl">🌿</div>
              <div className="flex-1">
                <h3 className="font-black">{breeder.name}</h3>
                <p className="mt-1 text-sm text-[#718076]">{breeder.region} · 사육 경력 {breeder.years}</p>
              </div>
              <span className="text-sm font-bold text-[#56815c]">★ {breeder.score}</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#e2e8df] bg-[#183322] px-6 py-8 text-sm text-[#c5d9c5]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row">
          <span className="font-bold text-white">Exo:Public</span>
          <span>사육자의 신뢰와 개체의 이야기를 연결합니다.</span>
        </div>
      </footer>
    </main>
  );
}







