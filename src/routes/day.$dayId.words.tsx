import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { loadDays, saveDays, type Word } from "@/lib/words";
import { useCurrentDay, DaySubNav } from "./day.$dayId";

export const Route = createFileRoute("/day/$dayId/words")({
  component: WordsPage,
});

const EMOJI_SUGGESTIONS = ["🔧","🌳","⚰️","🕳️","🛠️","🔴","📄","🚪","🔥","🤝","⏱️","🪽","🏘️","🧩","⏳","👯","💧","🎭","🥇","👕","🐶","🍎","⭐","🎈","📚","✏️","🌈","🦋"];

const EDIT_PASSWORD = "0216";

function WordsPage() {
  const { dayId, day, hydrated } = useCurrentDay();
  const [words, setWords] = useState<Word[]>([]);
  const [unlocked, setUnlocked] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState("");

  useEffect(() => {
    if (day) setWords(day.words);
  }, [day]);

  // 자동 저장 (잠금 해제 상태에서만)
  useEffect(() => {
    if (!hydrated || !day || !unlocked) return;
    const days = loadDays();
    const next = days.map((d) => (d.id === dayId ? { ...d, words } : d));
    saveDays(next);
  }, [words, hydrated, day, dayId, unlocked]);

  const update = (id: string, patch: Partial<Word>) =>
    setWords((ws) => ws.map((w) => (w.id === id ? { ...w, ...patch } : w)));
  const remove = (id: string) => setWords((ws) => ws.filter((w) => w.id !== id));
  const add = () => {
    const nextId = String(
      Math.max(0, ...words.map((w) => Number(w.id) || 0)) + 1,
    ).padStart(4, "0");
    setWords((ws) => [...ws, { id: nextId, spelling: "", pos: "명사", meaning: "", emoji: "✨" }]);
  };

  const tryUnlock = () => {
    if (pw === EDIT_PASSWORD) {
      setUnlocked(true);
      setPwError("");
    } else {
      setPwError("비밀번호가 올바르지 않아요.");
    }
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

        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-bold">📝 {day?.name} · 단어목록</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              총 <b>{words.length}</b>개 {unlocked ? "· 변경 사항은 자동 저장돼요" : "· 🔒 수정하려면 비밀번호가 필요해요"}
            </p>
          </div>
          {unlocked && (
            <div className="flex flex-wrap gap-2">
              <button onClick={add} className="rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground shadow-[0_3px_0_oklch(0.28_0.04_280/0.2)] transition hover:-translate-y-0.5">
                + 단어 추가
              </button>
              <button onClick={() => setUnlocked(false)} className="rounded-full border-2 border-foreground/15 bg-card px-4 py-2 text-sm font-semibold hover:bg-muted">
                🔒 잠그기
              </button>
            </div>
          )}
        </div>

        {!unlocked && (
          <div className="mt-6 rounded-2xl border-2 border-foreground/10 bg-card p-5">
            <div className="flex flex-wrap items-end gap-3">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-foreground/70">🔑 수정 비밀번호</label>
                <input
                  type="password"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && tryUnlock()}
                  className="mt-1 w-48 rounded-lg border border-input bg-background px-3 py-2"
                  placeholder="비밀번호 입력"
                />
              </div>
              <button onClick={tryUnlock} className="rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground shadow-[0_3px_0_oklch(0.28_0.04_280/0.2)] hover:-translate-y-0.5">
                잠금 해제
              </button>
              {pwError && <span className="text-sm text-destructive">{pwError}</span>}
            </div>
          </div>
        )}

        {/* 목록 테이블 */}
        <div className="mt-6 overflow-hidden rounded-2xl border-2 border-border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-secondary text-secondary-foreground">
              <tr className="text-left">
                <Th>번호</Th><Th>그림</Th><Th>스펠링</Th><Th>품사</Th><Th>뜻</Th>{unlocked && <Th></Th>}
              </tr>
            </thead>
            <tbody>
              {words.map((w) => (
                <tr key={w.id} className="border-t border-border/70 align-top">
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{w.id}</td>
                  <td className="px-3 py-2">
                    {unlocked ? (
                      <EmojiPicker value={w.emoji} onChange={(v) => update(w.id, { emoji: v })} />
                    ) : (
                      <span className="text-2xl">{w.emoji}</span>
                    )}
                  </td>
                  <td className="px-3 py-2">
                    {unlocked ? (
                      <input value={w.spelling} onChange={(e) => update(w.id, { spelling: e.target.value })} className="w-32 rounded-lg border border-input bg-background px-2 py-1 font-mono" />
                    ) : (
                      <span className="font-mono font-semibold text-primary">{w.spelling}</span>
                    )}
                  </td>
                  <td className="px-3 py-2">
                    {unlocked ? (
                      <input value={w.pos} onChange={(e) => update(w.id, { pos: e.target.value })} className="w-24 rounded-lg border border-input bg-background px-2 py-1" />
                    ) : (
                      <span className="text-foreground/70">{w.pos}</span>
                    )}
                  </td>
                  <td className="px-3 py-2">
                    {unlocked ? (
                      <textarea value={w.meaning} onChange={(e) => update(w.id, { meaning: e.target.value })} rows={2} className="w-full rounded-lg border border-input bg-background px-2 py-1" />
                    ) : (
                      <span className="text-foreground/80">{w.meaning}</span>
                    )}
                  </td>
                  {unlocked && (
                    <td className="px-3 py-2">
                      <button onClick={() => remove(w.id)} className="rounded-full px-3 py-1 text-xs text-destructive hover:bg-destructive/10">삭제</button>
                    </td>
                  )}
                </tr>
              ))}
              {!words.length && (
                <tr><td colSpan={unlocked ? 6 : 5} className="px-6 py-8 text-center text-sm text-muted-foreground">단어가 없어요.</td></tr>
              )}
            </tbody>
          </table>
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
