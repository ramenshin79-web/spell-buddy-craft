import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DEFAULT_WORDS, loadWords, scramble, type Word } from "@/lib/words";
import { WorksheetHeader } from "@/components/WorksheetHeader";

export const Route = createFileRoute("/stage2")({
  head: () => ({
    meta: [
      { title: "2단계 워크지 — 그림 보고 철자 고치기" },
      { name: "description", content: "그림과 뜻을 보고 섞인 철자를 바로잡아 보세요" },
    ],
  }),
  component: Stage2,
});

function Stage2() {
  const [words, setWords] = useState<Word[]>(DEFAULT_WORDS);
  const [showAnswers, setShowAnswers] = useState(false);
  const [seed, setSeed] = useState(1);

  useEffect(() => { setWords(loadWords()); }, []);

  return (
    <div className="min-h-screen">
      <AppHeader />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-bold">🖼️ 2단계 — 그림 보고 철자 고치기</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              그림과 뜻을 보고 섞여 있는 철자를 올바르게 다시 써요.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSeed((s) => s + 1)}
              className="rounded-full border-2 border-foreground/15 bg-card px-4 py-2 text-sm font-semibold hover:bg-muted"
            >
              🎲 다시 섞기
            </button>
            <label className="flex items-center gap-2 rounded-full border-2 border-foreground/15 bg-card px-4 py-2 text-sm">
              <input
                type="checkbox"
                checked={showAnswers}
                onChange={(e) => setShowAnswers(e.target.checked)}
              />
              정답 보기
            </label>
            <button
              onClick={() => window.print()}
              className="rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground shadow-[0_3px_0_oklch(0.28_0.04_280/0.2)] hover:-translate-y-0.5"
            >
              🖨️ 인쇄하기
            </button>
          </div>
        </div>

        <article className="worksheet-paper print-page p-8">
          <WorksheetHeader stage="STAGE 2" title="그림 보고 철자를 바로 써요 🎨" />
          <ol className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {words.map((w) => (
              <li
                key={w.id}
                className="flex gap-4 rounded-2xl border border-foreground/10 bg-white/70 p-4"
              >
                <div className="illustration-tile h-24 w-24 shrink-0 text-4xl">
                  {w.emoji}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="sticker bg-mint">{w.id}</span>
                    <span className="text-xs font-semibold text-foreground/60">
                      [{w.pos}]
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-snug text-foreground/80">
                    {w.meaning}
                  </p>
                  <div className="mt-2 inline-block rounded-lg bg-lemon px-2 py-1 font-mono text-sm tracking-widest text-foreground/70">
                    {scramble(w.spelling, seed)}
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-xs text-muted-foreground">→</span>
                    {showAnswers ? (
                      <span className="font-mono text-lg font-bold text-primary">
                        {w.spelling}
                      </span>
                    ) : (
                      <span className="block h-7 flex-1 border-b-2 border-foreground/30" />
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </article>
      </main>
    </div>
  );
}
