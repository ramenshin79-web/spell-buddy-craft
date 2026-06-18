import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { type Day, loadDays, saveDays, nextDayId, DEFAULT_WORDS } from "@/lib/words";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "스펠링 놀이터 — DAY별 단어 워크지 생성기" },
      { name: "description", content: "DAY별로 단어를 정리하고 단계별 워크지를 만들어보세요" },
    ],
  }),
  component: Index,
});

function Index() {
  const [days, setDays] = useState<Day[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setDays(loadDays());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveDays(days);
  }, [days, hydrated]);

  const addDay = () => {
    const id = nextDayId(days);
    const name = `DAY ${id.replace(/^day-/, "")}`;
    // 새 DAY는 빈 단어로 시작 (사용자가 단어 관리에서 추가)
    const isFirst = days.length === 0;
    setDays((ds) => [
      ...ds,
      { id, name, words: isFirst ? DEFAULT_WORDS : [] },
    ]);
  };

  const renameDay = (id: string) => {
    const cur = days.find((d) => d.id === id);
    if (!cur) return;
    const name = prompt("DAY 이름을 입력하세요", cur.name);
    if (!name) return;
    setDays((ds) => ds.map((d) => (d.id === id ? { ...d, name } : d)));
  };

  const removeDay = (id: string) => {
    const cur = days.find((d) => d.id === id);
    if (!cur) return;
    if (!confirm(`'${cur.name}'을(를) 삭제할까요? 단어도 함께 삭제돼요.`)) return;
    setDays((ds) => ds.filter((d) => d.id !== id));
  };

  return (
    <div className="min-h-screen">
      <AppHeader />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <section className="text-center">
          <div className="mb-3 text-5xl">🌈✨📚</div>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">스펠링 놀이터</h1>
          <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
            DAY별로 단어 묶음을 만들고, 각 DAY마다 단어 관리 · 1단계 · 2단계 워크지를 사용할 수 있어요.
          </p>
          <button
            onClick={addDay}
            className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[0_4px_0_oklch(0.28_0.04_280/0.2)] transition hover:-translate-y-0.5"
          >
            ➕ DAY 추가하기
          </button>
        </section>

        <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {days.map((d, i) => (
            <DayCard
              key={d.id}
              day={d}
              tone={TONES[i % TONES.length]}
              onRename={() => renameDay(d.id)}
              onRemove={() => removeDay(d.id)}
            />
          ))}
          {!days.length && hydrated && (
            <p className="text-sm text-muted-foreground">아직 DAY가 없어요. 위의 'DAY 추가하기'를 눌러 시작하세요.</p>
          )}
        </section>

        <section className="mt-12 worksheet-paper p-8">
          <h2 className="font-display text-2xl font-semibold">사용법</h2>
          <ol className="mt-4 space-y-2 text-foreground/80">
            <li>1. <b>DAY 추가하기</b>로 새로운 단어 묶음을 만들어요.</li>
            <li>2. DAY 카드를 눌러 들어가서 <b>단어 관리</b>에서 단어를 추가/수정.</li>
            <li>3. <b>1단계</b>: 단어 보고 빈칸 채우기 · <b>2단계</b>: 그림 보고 철자 바로잡기.</li>
            <li>4. 모든 페이지에서 <b>🖨️ 인쇄</b> 또는 <b>⬇️ HTML 저장</b> 가능!</li>
          </ol>
        </section>
      </main>
    </div>
  );
}

const TONES = ["sky", "mint", "peach", "lemon", "lilac"] as const;
type Tone = (typeof TONES)[number];

function DayCard({
  day, tone, onRename, onRemove,
}: { day: Day; tone: Tone; onRename: () => void; onRemove: () => void }) {
  const bg =
    tone === "sky" ? "bg-sky" :
    tone === "mint" ? "bg-mint" :
    tone === "peach" ? "bg-peach" :
    tone === "lemon" ? "bg-lemon" : "bg-lilac";
  return (
    <div
      className={`group relative rounded-3xl border-2 border-foreground/10 ${bg} p-6 shadow-[0_6px_0_oklch(0.28_0.04_280/0.15)]`}
    >
      <Link to="/day/$dayId" params={{ dayId: day.id }} className="block">
        <div className="text-4xl">📒</div>
        <h3 className="mt-3 font-display text-2xl font-bold">{day.name}</h3>
        <p className="mt-1 text-sm text-foreground/70">
          단어 <b>{day.words.length}</b>개
        </p>
        <span className="mt-4 inline-block text-sm font-semibold text-foreground/70">
          열기 →
        </span>
      </Link>
      <div className="no-print absolute right-3 top-3 flex gap-1 opacity-0 transition group-hover:opacity-100">
        <button
          onClick={onRename}
          className="rounded-full bg-white/80 px-2 py-1 text-xs hover:bg-white"
          title="이름 바꾸기"
        >✏️</button>
        <button
          onClick={onRemove}
          className="rounded-full bg-white/80 px-2 py-1 text-xs text-destructive hover:bg-white"
          title="삭제"
        >🗑️</button>
      </div>
    </div>
  );
}
