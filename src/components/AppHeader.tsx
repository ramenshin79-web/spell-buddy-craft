import { Link } from "@tanstack/react-router";

export function AppHeader() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">✏️</span>
          <span className="font-display text-xl font-semibold">스펠링 놀이터</span>
        </Link>
        <Link
          to="/"
          className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-accent hover:text-accent-foreground"
        >
          🏠 전체 DAY
        </Link>
      </div>
    </header>
  );
}
