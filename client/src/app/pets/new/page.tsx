'use client';

import Link from 'next/link';
import { useState } from 'react';
import PetForm, {
  type PetFormValues,
} from '@/components/pets/pet-form';
import { useAuthStore } from '@/stores/auth-store';

const text = {
  collection: '\u004D\u0059 \u0043\u004F\u004C\u004C\u0045\u0043\u0054\u0049\u004F\u004E',
  title: '\uC0C8 \uAC1C\uCCB4 \uB4F1\uB85D',
  description: '\uAC1C\uCCB4 \uC815\uBCF4\uB97C \uAE30\uB85D\uD574 \uC0AC\uC721 \uC774\uB825\uC744 \uC2DC\uC791\uD558\uC138\uC694.',
  back: '\u2190 \uBCF4\uC720 \uAC1C\uCCB4\uB85C \uB3CC\uC544\uAC00\uAE30',
  loginRequired: '\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD574\uC694',
  loginDescription: '\uB098\uC758 \uAC1C\uCCB4\uB97C \uB4F1\uB85D\uD558\uB824\uBA74 \uB85C\uADF8\uC778\uD574\uC8FC\uC138\uC694.',
  login: '\uB85C\uADF8\uC778\uD558\uAE30',
  submitError: '\uAC1C\uCCB4\uB97C \uB4F1\uB85D\uD558\uB824\uBA74 \uBA3C\uC800 \uB85C\uADF8\uC778\uD574\uC8FC\uC138\uC694.',
  ready: '\uC785\uB825\uAC12 \uD655\uC778 \uC644\uB8CC. \uB2E4\uC74C \uB2E8\uACC4\uC5D0\uC11C \uC2E4\uC81C API \uB4F1\uB85D\uC744 \uC5F0\uACB0\uD569\uB2C8\uB2E4.',
};

export default function NewPetPage() {
  const user = useAuthStore((state) => state.user);
  const isHydrated = useAuthStore((state) => state.isHydrated);
  const [error, setError] = useState('');

  async function handleSubmit(values: PetFormValues) {
    setError('');

    if (!user) {
      setError(text.submitError);
      return;
    }

    console.log('\uAC1C\uCCB4 \uB4F1\uB85D \uC785\uB825\uAC12:', values);
    setError(text.ready);
  }

  if (!isHydrated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f6f8f3]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#dcebd4] border-t-[#2f7048]" />
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f6f8f3] px-6">
        <section className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-lg">
          <p className="text-5xl">🔐</p>

          <h1 className="mt-5 text-2xl font-black text-[#183322]">
            {text.loginRequired}
          </h1>

          <p className="mt-3 text-[#718076]">
            {text.loginDescription}
          </p>

          <Link
            href="/login"
            className="mt-7 inline-block rounded-xl bg-[#2f7048] px-5 py-3 font-bold text-white"
          >
            {text.login}
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f8f3] text-[#183322]">
      <header className="border-b border-[#e2e8df] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-black text-[#193c2a]"
          >
            Exo<span className="text-[#75a85b]">:</span>Public
          </Link>

          <Link
            href="/pets"
            className="text-sm font-bold text-[#477750]"
          >
            {text.back}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-2xl px-6 py-14">
        <p className="text-sm font-bold tracking-[0.2em] text-[#6a9d55]">
          {text.collection}
        </p>

        <h1 className="mt-3 text-4xl font-black">
          {text.title}
        </h1>

        <p className="mt-3 text-[#637066]">
          {text.description}
        </p>

        <div className="mt-10">
          <PetForm
            onSubmit={handleSubmit}
            error={error}
          />
        </div>
      </section>
    </main>
  );
}