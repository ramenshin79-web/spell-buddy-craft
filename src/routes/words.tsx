import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { DEFAULT_WORDS, loadWords, resetWords, saveWords, type Word } from "@/lib/words";

export const Route = createFileRoute("/words")({
  head: () => ({
    meta: [
      { title: "단어 관리 — 스펠링 놀이터" },
      { name: "description", content: "외울 단어 리스트를 추가, 수정, 삭제하세요" },
    ],
  }),
  component: WordsPage,
});

const EMOJI_SUGGESTIONS = ["🔧","🌳","⚰️","🕳️","🛠️","🔴","📄","🚪","🔥","🤝","⏱️","🪽","🏘️","🧩","⏳","👯","💧","🎭","🥇","👕","🐶","🍎","⭐","🎈","📚","✏️","🌈","🦋"];

function WordsPage() {
  const [words, setWords] = useState<Word[]>(DEFAULT_WORDS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setWords(loadWords());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveWords(words);
  }, [words, hydrated]);

  const update = (id: string, patch: Partial<Word>) =>
    setWords((ws) => ws.map((w) => (w.id === id ? { ...w, ...patch } : w)));

  const remove = (id: string) =>
    setWords((ws) => ws.filter((w) => w.id !== id));

  const add = () => {
    const nextId = String(
      Math.max(0, ...words.map((w) => Number(w.id) || 0)) + 1,
    ).padStart(4, "0");
    setWords((ws) => [
      ...ws,
      { id: nextId, spelling: "", pos: "명사", meaning: "", emoji: "✨" },
    ]);
  };

  return (
    <div className="min-h-screen">
      <AppHeader />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-bold">📝 단어 관리</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              총 <b>{words.length}</b>개 단어 · 변경 사항은 자동 저장돼요
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={add}
              className="rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground shadow-[0_3px_0_oklch(0.28_0.04_280/0.2)] transition hover:-translate-y-0.5"
            >
              + 단어 추가
            </button>
            <button
              onClick={() => {
                if (confirm("기본 20개 단어로 초기화할까요?")) {
                  resetWords();
                  setWords(DEFAULT_WORDS);
                }
              }}
              className="rounded-full border-2 border-foreground/15 bg-card px-5 py-2 font-semibold transition hover:bg-muted"
            >
              초기화
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border-2 border-border bg-card">
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
                    <input
                      value={w.spelling}
                      onChange={(e) => update(w.id, { spelling: e.target.value })}
                      className="w-32 rounded-lg border border-input bg-background px-2 py-1 font-mono"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      value={w.pos}
                      onChange={(e) => update(w.id, { pos: e.target.value })}
                      className="w-24 rounded-lg border border-input bg-background px-2 py-1"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <textarea
                      value={w.meaning}
                      onChange={(e) => update(w.id, { meaning: e.target.value })}
                      rows={2}
                      className="w-full rounded-lg border border-input bg-background px-2 py-1"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <button
                      onClick={() => remove(w.id)}
                      className="rounded-full px-3 py-1 text-xs text-destructive hover:bg-destructive/10"
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
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
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-foreground/10 bg-lemon text-2xl hover:bg-peach"
      >
        {value || "✨"}
      </button>
      {open && (
        <div className="absolute z-20 mt-1 grid w-56 grid-cols-7 gap-1 rounded-xl border border-border bg-popover p-2 shadow-lg">
          {EMOJI_SUGGESTIONS.map((e) => (
            <button
              key={e}
              onClick={() => { onChange(e); setOpen(false); }}
              className="rounded-md p-1 text-lg hover:bg-accent"
            >
              {e}
            </button>
          ))}
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="col-span-7 mt-1 rounded-md border border-input bg-background px-2 py-1 text-sm"
            placeholder="직접 입력"
          />
        </div>
      )}
    </div>
  );
}
