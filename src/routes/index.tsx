import { createFileRoute, Link } from "@tanstack/react-router";
import { AppHeader } from "@/components/AppHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "스펠링 놀이터 — 단계별 단어 워크지 생성기" },
      { name: "description", content: "아이의 영어 단어 스펠링 연습을 도와주는 귀여운 워크지 생성기" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <AppHeader />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <section className="text-center">
          <div className="mb-3 text-5xl">🌈✨📚</div>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            스펠링 놀이터
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
            우리 아이의 단어 외우기, 단계별 워크지로 즐겁게! 단어 리스트를 등록하고
            1단계 빈칸 채우기, 2단계 그림 보고 철자 고치기 워크지를 만들어 보세요.
          </p>
        </section>

        <section className="mt-12 grid gap-5 sm:grid-cols-3">
          <Card to="/words" emoji="📝" title="단어 관리" desc="단어 추가·수정·삭제, 이모지 일러스트 지정" tone="sky" />
          <Card to="/stage1" emoji="🔤" title="1단계 워크지" desc="단어 보고 빈칸 채우기 (글자 힌트)" tone="mint" />
          <Card to="/stage2" emoji="🖼️" title="2단계 워크지" desc="그림 보고 섞인 철자 바로 쓰기" tone="peach" />
        </section>

        <section className="mt-12 worksheet-paper p-8">
          <h2 className="font-display text-2xl font-semibold">사용법</h2>
          <ol className="mt-4 space-y-2 text-foreground/80">
            <li>1. <b>단어 관리</b>에서 외울 단어를 확인하고 필요한 만큼 추가/수정합니다.</li>
            <li>2. <b>1단계</b> 워크지를 인쇄해 단어를 보지 않고도 빈칸을 채우는 연습.</li>
            <li>3. <b>2단계</b> 워크지로 그림을 보고 스크럼블된 철자를 바로잡는 연습.</li>
            <li>4. 각 워크지 우측 상단의 <b>인쇄하기</b>로 깔끔하게 출력!</li>
          </ol>
        </section>
      </main>
    </div>
  );
}

function Card({
  to, emoji, title, desc, tone,
}: { to: string; emoji: string; title: string; desc: string; tone: "sky" | "mint" | "peach" }) {
  const bg =
    tone === "sky" ? "bg-sky" : tone === "mint" ? "bg-mint" : "bg-peach";
  return (
    <Link
      to={to}
      className={`group relative block rounded-3xl border-2 border-foreground/10 ${bg} p-6 shadow-[0_6px_0_oklch(0.28_0.04_280/0.15)] transition hover:-translate-y-1 hover:shadow-[0_10px_0_oklch(0.28_0.04_280/0.18)]`}
    >
      <div className="text-4xl">{emoji}</div>
      <h3 className="mt-3 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-foreground/70">{desc}</p>
      <span className="absolute right-5 top-5 text-foreground/40 transition group-hover:translate-x-1">→</span>
    </Link>
  );
}
