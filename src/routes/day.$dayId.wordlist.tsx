import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { useCurrentDay, DaySubNav } from "./day.$dayId";
import { downloadElementAsHtml } from "@/lib/exportHtml";

export const Route = createFileRoute("/day/$dayId/wordlist")({
  component: WordListPage,
});

function WordListPage() {
  const { dayId, day, hydrated } = useCurrentDay();
  const [showEmoji, setShowEmoji] = useState(true);
  const [showSpelling, setShowSpelling] = useState(true);
  const [showMeaning, setShowMeaning] = useState(true);
  const [showPos, setShowPos] = useState(true);
  const printRef = useRef<HTMLDivElement>(null);

  const words = day?.words ?? [];

  if (hydrated && !day) {
    return (
      <div className="min-h-screen">
        <AppHeader />
        <main className="mx-auto max-w-3xl px-6 py-16 text-center">DAY를 찾을 수 없어요.</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <AppHeader />
      <main className="mx-auto max-w-6xl px-6 py-8">
        <DaySubNav dayId={dayId} dayName={day?.name ?? ""} />

        <div className="no-print flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-bold">📚 {day?.name} · 워드리스트</h1>
            <p className="mt-1 text-sm text-muted-foreground">A4 한 장에 출력돼요</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => window.print()} className="rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground shadow-[0_3px_0_oklch(0.28_0.04_280/0.2)] hover:-translate-y-0.5">
              🖨️ 인쇄
            </button>
            <button
              onClick={() => printRef.current && downloadElementAsHtml(`${day?.name ?? "day"}-워드리스트`, printRef.current, `${day?.name} 워드리스트`)}
              className="rounded-full border-2 border-foreground/15 bg-card px-4 py-2 text-sm font-semibold hover:bg-muted"
            >
              ⬇️ HTML 저장
            </button>
          </div>
        </div>

        {/* 출력 옵션 */}
        <div className="no-print mt-6 rounded-2xl border-2 border-foreground/10 bg-card p-4">
          <div className="mb-2 text-sm font-semibold text-foreground/70">출력 항목 선택</div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <label className="flex items-center gap-2"><input type="checkbox" checked={showEmoji} onChange={(e) => setShowEmoji(e.target.checked)} />🖼️ 그림</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={showSpelling} onChange={(e) => setShowSpelling(e.target.checked)} />🔤 알파벳</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={showPos} onChange={(e) => setShowPos(e.target.checked)} />🏷️ 품사</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={showMeaning} onChange={(e) => setShowMeaning(e.target.checked)} />📖 뜻</label>
          </div>
        </div>

        <div ref={printRef} className="mt-8">
          <article className="worksheet-paper print-page print-fit-1 p-8">
            <header className="flex items-end justify-between gap-3 border-b-2 border-dashed border-foreground/15 pb-4">
              <div>
                <div className="font-mono text-xs tracking-widest text-primary">WORD LIST</div>
                <h2 className="font-display text-2xl font-bold">{day?.name} · 워드리스트 📚</h2>
              </div>
              <div className="text-right text-xs text-muted-foreground">총 {words.length}개</div>
            </header>
            <ol className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {words.map((w) => (
                <li key={w.id} className="flex gap-3 rounded-2xl border border-foreground/10 bg-white/70 p-3">
                  {showEmoji && (
                    <div className="illustration-tile h-16 w-16 shrink-0 text-3xl">{w.emoji}</div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="sticker bg-lilac">{w.id}</span>
                      {showSpelling && (
                        <span className="font-mono text-lg font-bold text-primary truncate">{w.spelling}</span>
                      )}
                      {showPos && (
                        <span className="text-xs text-foreground/60">[{w.pos}]</span>
                      )}
                    </div>
                    {showMeaning && (
                      <p className="mt-1 text-sm leading-snug text-foreground/80">{w.meaning}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </main>
    </div>
  );
}
