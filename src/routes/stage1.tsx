import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DEFAULT_WORDS, loadWords, makeBlankPattern, type Word } from "@/lib/words";

export const Route = createFileRoute("/stage1")({
  head: () => ({
    meta: [
      { title: "1단계 워크지 — 빈칸 채우기" },
      { name: "description", content: "뜻과 힌트를 보고 단어의 빈칸을 채워보세요" },
    ],
  }),
  component: Stage1,
});

function Stage1() {
  const [words, setWords] = useState<Word[]>(DEFAULT_WORDS);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => { setWords(loadWords()); }, []);

  return (
    <div className="min-h-screen">
      <AppHeader />
      <main className="mx-auto max-w-4xl px-6 py-8">
        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-bold">🔤 1단계 — 빈칸 채우기</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              뜻을 보고 비어 있는 글자를 채워서 단어를 완성해요.
            </p>
          </div>
          <div className="flex gap-2">
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
          <WorksheetHeader stage="STAGE 1" title="빈칸을 채워보세요 ✏️" />
          <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {words.map((w) => (
              <li
                key={w.id}
                className="rounded-2xl border border-foreground/10 bg-white/70 p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="sticker bg-lilac">{w.id}</span>
                  <div className="flex-1">
                    <div className="text-sm leading-snug text-foreground/80">
                      <span className="mr-1 font-semibold">[{shortPos(w.pos)}]</span>
                      {w.meaning}
                    </div>
                    <div className="mt-3">
                      {showAnswers ? (
                        <span className="spell-cell" style={{ color: "var(--primary)" }}>
                          {w.spelling}
                        </span>
                      ) : (
                        <BlankSpelling spelling={w.spelling} />
                      )}
                    </div>
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

function BlankSpelling({ spelling }: { spelling: string }) {
  const pattern = makeBlankPattern(spelling);
  return (
    <div className="flex flex-wrap items-end gap-0.5">
      {pattern.map((ch, i) => {
        if (ch === " ") return <span key={i} className="w-3" />;
        const isBlank = ch === "_";
        return (
          <span
            key={i}
            className={`spell-cell ${isBlank ? "spell-blank" : ""}`}
          >
            {isBlank ? "\u00a0" : ch}
          </span>
        );
      })}
    </div>
  );
}

function shortPos(pos: string) {
  return pos
    .replace("동사", "동")
    .replace("명사", "명")
    .replace("형용사", "형")
    .replace("부사", "부")
    .replace("전치사", "전")
    .replace("숙어(부사구)", "숙")
    .replace("숙어(동사구)", "숙");
}

export function WorksheetHeader({ stage, title }: { stage: string; title: string }) {
  return (
    <header className="flex items-end justify-between gap-3 border-b-2 border-dashed border-foreground/15 pb-4">
      <div>
        <div className="font-mono text-xs tracking-widest text-primary">{stage}</div>
        <h2 className="font-display text-2xl font-bold">{title}</h2>
      </div>
      <div className="text-right text-xs text-muted-foreground">
        이름: <span className="inline-block w-24 border-b border-foreground/30">&nbsp;</span>
        <span className="mx-2">날짜:</span>
        <span className="inline-block w-20 border-b border-foreground/30">&nbsp;</span>
      </div>
    </header>
  );
}
