'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { login } from '@/lib/auth-api';
import { useAuthStore } from '@/stores/auth-store';

export default function LoginPage() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await login(email, password);
      setAuth(result.user, result.accessToken);
      router.push('/');
    } catch (error) {
      setError(error instanceof Error ? error.message : '로그인에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f8f3] px-4">
      <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <Link href="/" className="font-bold text-emerald-800">Exo:Public</Link>
        <h1 className="mt-6 text-3xl font-black text-zinc-900">로그인</h1>
        <p className="mt-2 text-sm text-zinc-500">사육자 커뮤니티에 다시 접속하세요.</p>

        <form onSubmit={submit} className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-emerald-500"
          />
          <input
            type="password"
            placeholder="비밀번호 8자 이상"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={8}
            required
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-emerald-500"
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
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          계정이 없나요?{' '}
          <Link href="/register" className="font-bold text-emerald-700">
            회원가입
          </Link>
        </p>
      </section>
    </main>
  );
}


