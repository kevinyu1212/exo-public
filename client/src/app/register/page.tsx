'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { register } from '@/lib/auth-api';
import { useAuthStore } from '@/stores/auth-store';

export default function RegisterPage() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const [form, setForm] = useState({
    email: '',
    password: '',
    nickname: '',
    region: '',
    bio: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await register({
        email: form.email,
        password: form.password,
        nickname: form.nickname,
        region: form.region || undefined,
        bio: form.bio || undefined,
      });

      setAuth(result.user, result.accessToken);
      router.push('/');
    } catch (error) {
      setError(error instanceof Error ? error.message : '회원가입에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f8f3] px-4 py-10">
      <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <Link href="/" className="font-bold text-emerald-800">Exo:Public</Link>
        <h1 className="mt-6 text-3xl font-black text-zinc-900">사육자 계정 만들기</h1>
        <p className="mt-2 text-sm text-zinc-500">나의 사육 경험을 기록해보세요.</p>

        <form onSubmit={submit} className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="이메일"
            value={form.email}
            onChange={(event) => update('email', event.target.value)}
            required
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-emerald-500"
          />
          <input
            type="password"
            placeholder="비밀번호 8자 이상"
            value={form.password}
            onChange={(event) => update('password', event.target.value)}
            minLength={8}
            required
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-emerald-500"
          />
          <input
            type="text"
            placeholder="닉네임"
            value={form.nickname}
            onChange={(event) => update('nickname', event.target.value)}
            minLength={2}
            maxLength={30}
            required
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-emerald-500"
          />
          <input
            type="text"
            placeholder="활동 지역 예: 서울"
            value={form.region}
            onChange={(event) => update('region', event.target.value)}
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-emerald-500"
          />
          <textarea
            placeholder="간단한 사육자 소개"
            value={form.bio}
            onChange={(event) => update('bio', event.target.value)}
            rows={4}
            className="w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-emerald-500"
          />

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-emerald-700 px-4 py-3 font-bold text-white disabled:opacity-50"
          >
            {loading ? '가입 처리 중...' : '회원가입'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          이미 계정이 있나요?{' '}
          <Link href="/login" className="font-bold text-emerald-700">
            로그인
          </Link>
        </p>
      </section>
    </main>
  );
}


