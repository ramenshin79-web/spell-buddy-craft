import { createFileRoute, Link } from "@tanstack/react-router";
import { AppHeader } from "@/components/AppHeader";
import { useCurrentDay } from "./day.$dayId";

export const Route = createFileRoute("/day/$dayId/")({
  component: DayHome,
});

function DayHome() {
  const { dayId, day, hydrated } = useCurrentDay();

  if (hydrated && !day) {
    return (
      <div className="min-h-screen">
        <AppHeader />
        <main className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-lg">😢 해당 DAY를 찾을 수 없어요.</p>
          <Link to="/" className="mt-4 inline-block rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground">홈으로</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <AppHeader />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="text-center">
          <div className="text-5xl">📒</div>
          <h1 className="mt-2 font-display text-4xl font-bold">{day?.name ?? ""}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            단어 <b>{day?.words.length ?? 0}</b>개
          </p>
        </div>

        <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card to="/day/$dayId/words" dayId={dayId} emoji="📝" title="단어목록" desc="단어 보기 · 비밀번호로 수정" tone="sky" />
          <Card to="/day/$dayId/wordlist" dayId={dayId} emoji="📚" title="워드리스트" desc="A4 한 장 인쇄용 목록" tone="lilac" />
          <Card to="/day/$dayId/stage1" dayId={dayId} emoji="🔤" title="1단계 워크지" desc="단어 보고 빈칸 채우기" tone="mint" />
          <Card to="/day/$dayId/stage2" dayId={dayId} emoji="🖼️" title="2단계 워크지" desc="그림 보고 섞인 철자 바로잡기" tone="peach" />
        </section>
      </main>
    </div>
  );
}

function Card({
  to, dayId, emoji, title, desc, tone,
}: { to: "/day/$dayId/words" | "/day/$dayId/wordlist" | "/day/$dayId/stage1" | "/day/$dayId/stage2"; dayId: string; emoji: string; title: string; desc: string; tone: "sky" | "mint" | "peach" | "lilac" }) {
  const bg = tone === "sky" ? "bg-sky" : tone === "mint" ? "bg-mint" : tone === "lilac" ? "bg-lilac" : "bg-peach";
  return (
    <Link
      to={to}
      params={{ dayId }}
      className={`group relative block rounded-3xl border-2 border-foreground/10 ${bg} p-6 shadow-[0_6px_0_oklch(0.28_0.04_280/0.15)] transition hover:-translate-y-1`}
    >
      <div className="text-4xl">{emoji}</div>
      <h3 className="mt-3 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-foreground/70">{desc}</p>
      <span className="absolute right-5 top-5 text-foreground/40 transition group-hover:translate-x-1">→</span>
    </Link>
  );
}
