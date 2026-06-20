import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { loadDays, saveDays, type Word } from "@/lib/words";
import { useCurrentDay, DaySubNav } from "./day.$dayId";
import { downloadElementAsHtml } from "@/lib/exportHtml";

export const Route = createFileRoute("/day/$dayId/words")({
  component: WordsPage,
});

const EMOJI_SUGGESTIONS = ["🔧","🌳","⚰️","🕳️","🛠️","🔴","📄","🚪","🔥","🤝","⏱️","🪽","🏘️","🧩","⏳","👯","💧","🎭","🥇","👕","🐶","🍎","⭐","🎈","📚","✏️","🌈","🦋"];

function WordsPage() {
  const { dayId, day, hydrated } = useCurrentDay();
  const [words, setWords] = useState<Word[]>([]);
  const [showEmoji, setShowEmoji] = useState(true);
  const [showSpelling, setShowSpelling] = useState(true);
  const [showMeaning, setShowMeaning] = useState(true);
  const [showPos, setShowPos] = useState(true);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (day) setWords(day.words);
  }, [day]);

  // 자동 저장
  useEffect(() => {
    if (!hydrated || !day) return;
    const days = loadDays();
    const next = days.map((d) => (d.id === dayId ? { ...d, words } : d));
    saveDays(next);
  }, [words, hydrated, day, dayId]);

  const update = (id: string, patch: Partial<Word>) =>
    setWords((ws) => ws.map((w) => (w.id === id ? { ...w, ...patch } : w)));
  const remove = (id: string) => setWords((ws) => ws.filter((w) => w.id !== id));
  const add = () => {
    const nextId = String(
      Math.max(0, ...words.map((w) => Number(w.id) || 0)) + 1,
    ).padStart(4, "0");
    setWords((ws) => [...ws, { id: nextId, spelling: "", pos: "명사", meaning: "", emoji: "✨" }]);
  };

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
            <h1 className="font-display text-3xl font-bold">📝 {day?.name} · 단어 관리</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              총 <b>{words.length}</b>개 · 변경 사항은 자동 저장돼요
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={add} className="rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground shadow-[0_3px_0_oklch(0.28_0.04_280/0.2)] transition hover:-translate-y-0.5">
              + 단어 추가
            </button>
            <button onClick={() => window.print()} className="rounded-full border-2 border-foreground/15 bg-card px-4 py-2 text-sm font-semibold hover:bg-muted">
              🖨️ 인쇄
            </button>
            <button
              onClick={() => printRef.current && downloadElementAsHtml(`${day?.name ?? "day"}-단어목록`, printRef.current, `${day?.name} 단어 목록`)}
              className="rounded-full border-2 border-foreground/15 bg-card px-4 py-2 text-sm font-semibold hover:bg-muted"
            >
              ⬇️ HTML 저장
            </button>
          </div>
        </div>

        {/* 편집 테이블 (인쇄 시 숨김) */}
        <div className="no-print mt-6 overflow-hidden rounded-2xl border-2 border-border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-secondary text-secondary-foreground">
              <tr className="text-left">
                <Th>번호</Th><Th>그림</Th><Th>스펠링</Th><Th>품사</Th><Th>뜻</Th><Th></Th>
              </tr>
            </thead>
            <tbody>
              {words.map((w) => (
                <tr key={w.id} className="border-t border-border/70 align-top">
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{w.id}</td>
                  <td className="px-3 py-2">
                    <EmojiPicker value={w.emoji} onChange={(v) => update(w.id, { emoji: v })} />
                  </td>
                  <td className="px-3 py-2">
                    <input value={w.spelling} onChange={(e) => update(w.id, { spelling: e.target.value })} className="w-32 rounded-lg border border-input bg-background px-2 py-1 font-mono" />
                  </td>
                  <td className="px-3 py-2">
                    <input value={w.pos} onChange={(e) => update(w.id, { pos: e.target.value })} className="w-24 rounded-lg border border-input bg-background px-2 py-1" />
                  </td>
                  <td className="px-3 py-2">
                    <textarea value={w.meaning} onChange={(e) => update(w.id, { meaning: e.target.value })} rows={2} className="w-full rounded-lg border border-input bg-background px-2 py-1" />
                  </td>
                  <td className="px-3 py-2">
                    <button onClick={() => remove(w.id)} className="rounded-full px-3 py-1 text-xs text-destructive hover:bg-destructive/10">삭제</button>
                  </td>
                </tr>
              ))}
              {!words.length && (
                <tr><td colSpan={6} className="px-6 py-8 text-center text-sm text-muted-foreground">단어가 없어요. + 단어 추가를 눌러 시작하세요.</td></tr>
              )}
            </tbody>
          </table>
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

        {/* 인쇄/저장용 예쁜 단어 목록 */}
        <div ref={printRef} className="mt-8">
          <article className="worksheet-paper print-page p-8">
            <header className="flex items-end justify-between gap-3 border-b-2 border-dashed border-foreground/15 pb-4">
              <div>
                <div className="font-mono text-xs tracking-widest text-primary">WORD LIST</div>
                <h2 className="font-display text-2xl font-bold">{day?.name} · 단어 목록 📚</h2>
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

function Th({ children }: { children?: React.ReactNode }) {
  return <th className="px-3 py-2 font-semibold">{children}</th>;
}

function EmojiPicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen((o) => !o)} className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-foreground/10 bg-lemon text-2xl hover:bg-peach">
        {value || "✨"}
      </button>
      {open && (
        <div className="absolute z-20 mt-1 grid w-56 grid-cols-7 gap-1 rounded-xl border border-border bg-popover p-2 shadow-lg">
          {EMOJI_SUGGESTIONS.map((e) => (
            <button key={e} onClick={() => { onChange(e); setOpen(false); }} className="rounded-md p-1 text-lg hover:bg-accent">{e}</button>
          ))}
          <input value={value} onChange={(e) => onChange(e.target.value)} className="col-span-7 mt-1 rounded-md border border-input bg-background px-2 py-1 text-sm" placeholder="직접 입력" />
        </div>
      )}
    </div>
  );
}
