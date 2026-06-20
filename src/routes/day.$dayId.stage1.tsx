import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { makeBlankPattern } from "@/lib/words";
import { WorksheetHeader } from "@/components/WorksheetHeader";
import { useCurrentDay, DaySubNav } from "./day.$dayId";
import { downloadElementAsHtml } from "@/lib/exportHtml";

export const Route = createFileRoute("/day/$dayId/stage1")({
  component: Stage1,
});

type SpellingMode = "blank" | "full" | "hidden";

function Stage1() {
  const { dayId, day, hydrated } = useCurrentDay();
  const [showEmoji, setShowEmoji] = useState(false);
  const [showMeaning, setShowMeaning] = useState(true);
  const [spellingMode, setSpellingMode] = useState<SpellingMode>("blank");
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
      <main className="mx-auto max-w-4xl px-6 py-8">
        <DaySubNav dayId={dayId} dayName={day?.name ?? ""} />

        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-bold">🔤 {day?.name} · 1단계</h1>
            <p className="mt-1 text-sm text-muted-foreground">출력할 항목을 선택해서 워크지를 만들어요.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => window.print()} className="rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground shadow-[0_3px_0_oklch(0.28_0.04_280/0.2)] hover:-translate-y-0.5">
              🖨️ 인쇄
            </button>
            <button
              onClick={() => printRef.current && downloadElementAsHtml(`${day?.name ?? "day"}-1단계`, printRef.current, `${day?.name} 1단계`)}
              className="rounded-full border-2 border-foreground/15 bg-card px-4 py-2 text-sm font-semibold hover:bg-muted"
            >
              ⬇️ HTML 저장
            </button>
          </div>
        </div>

        {/* 출력 옵션 */}
        <div className="no-print mb-6 rounded-2xl border-2 border-foreground/10 bg-card p-4">
          <div className="mb-2 text-sm font-semibold text-foreground/70">출력 항목 선택</div>
          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={showEmoji} onChange={(e) => setShowEmoji(e.target.checked)} />
              🖼️ 그림
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={showMeaning} onChange={(e) => setShowMeaning(e.target.checked)} />
              📖 뜻
            </label>
            <div className="flex items-center gap-2 text-sm">
              <span>🔤 알파벳:</span>
              <select
                value={spellingMode}
                onChange={(e) => setSpellingMode(e.target.value as SpellingMode)}
                className="rounded-lg border border-input bg-background px-2 py-1"
              >
                <option value="blank">빈칸</option>
                <option value="full">전체 표시 (정답)</option>
                <option value="hidden">숨김</option>
              </select>
            </div>
          </div>
        </div>

        <div ref={printRef}>
          <article className="worksheet-paper print-page p-8">
            <WorksheetHeader stage={`STAGE 1 · ${day?.name ?? ""}`} title="빈칸을 채워보세요 ✏️" />
            <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {words.map((w) => (
                <li key={w.id} className="rounded-2xl border border-foreground/10 bg-white/70 p-4">
                  <div className="flex items-start gap-3">
                    <span className="sticker bg-lilac">{w.id}</span>
                    {showEmoji && (
                      <div className="illustration-tile h-14 w-14 shrink-0 text-2xl">{w.emoji}</div>
                    )}
                    <div className="flex-1">
                      {showMeaning && (
                        <div className="text-sm leading-snug text-foreground/80">
                          <span className="mr-1 font-semibold">[{shortPos(w.pos)}]</span>
                          {w.meaning}
                        </div>
                      )}
                      {spellingMode !== "hidden" && (
                        <div className="mt-3">
                          {spellingMode === "full" ? (
                            <FitRow length={w.spelling.length}>
                              <span className="spell-cell" style={{ color: "var(--primary)" }}>{w.spelling}</span>
                            </FitRow>
                          ) : (
                            <BlankSpelling spelling={w.spelling} />
                          )}
                        </div>
                      )}
                      {spellingMode === "hidden" && (
                        <div className="mt-3 h-8 border-b-2 border-dashed border-foreground/20" />
                      )}
                    </div>
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

function fitScale(len: number, threshold = 8) {
  if (len <= threshold) return 1;
  return Math.max(0.45, threshold / len);
}

function FitRow({ length, children }: { length: number; children: React.ReactNode }) {
  const scale = fitScale(length);
  return (
    <div className="whitespace-nowrap overflow-hidden" style={{ fontSize: `${scale}em` }}>
      {children}
    </div>
  );
}

function BlankSpelling({ spelling }: { spelling: string }) {
  const pattern = makeBlankPattern(spelling);
  const scale = fitScale(spelling.length);
  return (
    <div
      className="flex flex-nowrap items-end gap-0.5 whitespace-nowrap overflow-hidden"
      style={{ fontSize: `${scale}em` }}
    >
      {pattern.map((ch, i) => {
        if (ch === " ") return <span key={i} className="w-3" />;
        const isBlank = ch === "_";
        return (
          <span key={i} className={`spell-cell ${isBlank ? "spell-blank" : ""}`}>
            {isBlank ? "\u00a0" : ch}
          </span>
        );
      })}
    </div>
  );
}

function shortPos(pos: string) {
  return pos
    .replace("동사", "동").replace("명사", "명").replace("형용사", "형")
    .replace("부사", "부").replace("전치사", "전")
    .replace("숙어(부사구)", "숙").replace("숙어(동사구)", "숙");
}
