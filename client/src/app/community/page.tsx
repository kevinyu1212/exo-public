import Link from 'next/link';

const posts = [
  {
    tag: '#타란툴라탈피',
    title: '첫 탈피를 앞둔 유체, 어떤 환경을 준비해야 할까요?',
    author: '초보브리더',
    time: '10분 전',
    comments: 12,
  },
  {
    tag: '#온습도세팅',
    title: '겨울철 사육장 온도 유지 방법을 공유합니다',
    author: '테라리움생활',
    time: '1시간 전',
    comments: 8,
  },
  {
    tag: '#피딩거부',
    title: '피딩을 거부할 때 먼저 확인하는 것들',
    author: '엑조틱룸',
    time: '3시간 전',
    comments: 21,
  },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f3] text-[#183322]">
      <header className="border-b border-[#e2e8df] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black text-[#193c2a]">
            Exo<span className="text-[#75a85b]">:</span>Public
          </Link>
          <Link href="/community/write" className="rounded-xl bg-[#2f7048] px-4 py-3 text-sm font-bold text-white">
            글쓰기
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <p className="text-sm font-bold tracking-[0.2em] text-[#6a9d55]">COMMUNITY</p>
        <h1 className="mt-3 text-4xl font-black">종별 라운지</h1>
        <p className="mt-3 text-[#637066]">사육 경험과 지식을 나누는 Exo:Public 커뮤니티입니다.</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {['전체', '타란툴라', '전갈', '파충류', '절지류·곤충', '물생활'].map((category) => (
            <button
              key={category}
              className={`rounded-full px-4 py-2 text-sm font-bold ${
                category === '전체'
                  ? 'bg-[#2f7048] text-white'
                  : 'border border-[#dce7d8] bg-white text-[#637066]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[#e0e8dd] bg-white">
          {posts.map((post) => (
            <article key={post.title} className="border-b border-[#edf1eb] p-6 last:border-b-0">
              <p className="text-sm font-bold text-[#6a9d55]">{post.tag}</p>
              <h2 className="mt-2 text-lg font-black">{post.title}</h2>
              <div className="mt-4 flex gap-3 text-sm text-[#8a968d]">
                <span>{post.author}</span>
                <span>·</span>
                <span>{post.time}</span>
                <span>·</span>
                <span>댓글 {post.comments}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}