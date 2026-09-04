import Link from 'next/link';

export default function CommunityWritePage() {
  return (
    <main className="min-h-screen bg-[#f6f8f3] text-[#183322]">
      <section className="mx-auto max-w-3xl px-6 py-14">
        <Link href="/community" className="text-sm font-bold text-[#477750]">
          ← 커뮤니티로 돌아가기
        </Link>

        <h1 className="mt-8 text-3xl font-black">새 글 작성</h1>

        <form className="mt-8 space-y-5 rounded-3xl border border-[#e0e8dd] bg-white p-8">
          <label className="block">
            <span className="mb-2 block text-sm font-bold">라운지 선택</span>
            <select className="w-full rounded-xl border border-[#dce7d8] px-4 py-3">
              <option>타란툴라</option>
              <option>전갈</option>
              <option>파충류</option>
              <option>희귀 곤충</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold">제목</span>
            <input
              type="text"
              placeholder="게시글 제목을 입력하세요"
              className="w-full rounded-xl border border-[#dce7d8] px-4 py-3"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold">내용</span>
            <textarea
              rows={10}
              placeholder="사육 경험과 지식을 공유해주세요."
              className="w-full resize-none rounded-xl border border-[#dce7d8] px-4 py-3"
            />
          </label>

          <div className="flex justify-end gap-3">
            <Link href="/community" className="rounded-xl border border-[#d6e1d2] px-5 py-3 font-bold text-[#31583d]">
              취소
            </Link>
            <button type="button" className="rounded-xl bg-[#2f7048] px-5 py-3 font-bold text-white">
              등록하기
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}