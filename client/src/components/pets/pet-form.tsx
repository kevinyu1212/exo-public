'use client';

import { FormEvent, useState } from 'react';

export type PetFormValues = {
  speciesName: string;
  morphOrVariant: string;
  birthOrHatchDate: string;
  gender: 'UNKNOWN' | 'MALE' | 'FEMALE';
  status: 'GROWING' | 'BREEDING' | 'ADOPTION_READY';
};

type PetFormProps = {
  onSubmit: (values: PetFormValues) => void | Promise<void>;
  isSubmitting?: boolean;
  error?: string;
};

export default function PetForm({
  onSubmit,
  isSubmitting = false,
  error = '',
}: PetFormProps) {
  const [form, setForm] = useState<PetFormValues>({
    speciesName: '',
    morphOrVariant: '',
    birthOrHatchDate: '',
    gender: 'UNKNOWN',
    status: 'GROWING',
  });

  function updateField<K extends keyof PetFormValues>(
    field: K,
    value: PetFormValues[K],
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await onSubmit({
      speciesName: form.speciesName.trim(),
      morphOrVariant: form.morphOrVariant.trim(),
      birthOrHatchDate: form.birthOrHatchDate,
      gender: form.gender,
      status: form.status,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-[#e0e8dd] bg-white p-8 shadow-sm"
    >
      <div>
        <h2 className="text-xl font-black text-[#183322]">
          개체 기본 정보
        </h2>
        <p className="mt-2 text-sm text-[#718076]">
          등록할 개체의 정보를 입력해주세요.
        </p>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-bold text-[#31583d]">
          종 이름 <span className="text-red-500">*</span>
        </span>
        <input
          type="text"
          value={form.speciesName}
          onChange={(event) =>
            updateField('speciesName', event.target.value)
          }
          placeholder="예: Brachypelma hamorii"
          required
          maxLength={100}
          className="w-full rounded-xl border border-[#dce7d8] px-4 py-3 outline-none transition focus:border-[#2f7048] focus:ring-2 focus:ring-[#dcebd4]"
        />
        <p className="mt-2 text-xs text-[#8a968d]">
          학명 또는 통칭을 입력할 수 있어요.
        </p>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-bold text-[#31583d]">
          모프·품종·특이사항
        </span>
        <input
          type="text"
          value={form.morphOrVariant}
          onChange={(event) =>
            updateField('morphOrVariant', event.target.value)
          }
          placeholder="예: 멕시칸 레드니, 블리자드"
          maxLength={100}
          className="w-full rounded-xl border border-[#dce7d8] px-4 py-3 outline-none transition focus:border-[#2f7048] focus:ring-2 focus:ring-[#dcebd4]"
        />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-[#31583d]">
            생일·부화일
          </span>
          <input
            type="date"
            value={form.birthOrHatchDate}
            onChange={(event) =>
              updateField('birthOrHatchDate', event.target.value)
            }
            className="w-full rounded-xl border border-[#dce7d8] px-4 py-3 outline-none transition focus:border-[#2f7048] focus:ring-2 focus:ring-[#dcebd4]"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-[#31583d]">
            성별
          </span>
          <select
            value={form.gender}
            onChange={(event) =>
              updateField(
                'gender',
                event.target.value as PetFormValues['gender'],
              )
            }
            className="w-full rounded-xl border border-[#dce7d8] bg-white px-4 py-3 outline-none transition focus:border-[#2f7048] focus:ring-2 focus:ring-[#dcebd4]"
          >
            <option value="UNKNOWN">미구분</option>
            <option value="MALE">수컷</option>
            <option value="FEMALE">암컷</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-bold text-[#31583d]">
          사육 상태
        </span>
        <select
          value={form.status}
          onChange={(event) =>
            updateField(
              'status',
              event.target.value as PetFormValues['status'],
            )
          }
          className="w-full rounded-xl border border-[#dce7d8] bg-white px-4 py-3 outline-none transition focus:border-[#2f7048] focus:ring-2 focus:ring-[#dcebd4]"
        >
          <option value="GROWING">성장 중</option>
          <option value="BREEDING">번식 개체</option>
          <option value="ADOPTION_READY">입양 가능</option>
        </select>
      </label>

      {error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-[#2f7048] px-5 py-3 font-bold text-white transition hover:bg-[#245d3a] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? '등록 준비 중...' : '개체 등록하기'}
      </button>
    </form>
  );
}