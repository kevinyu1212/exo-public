export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f8f3]">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#dcebd4] border-t-[#2f7048]" />
        <p className="mt-5 text-sm font-semibold text-[#637066]">
          Exo:Public을 준비하고 있어요...
        </p>
      </div>
    </main>
  );
}
