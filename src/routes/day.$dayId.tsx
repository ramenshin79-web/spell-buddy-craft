import { createFileRoute, Link, Outlet, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { type Day, loadDays } from "@/lib/words";

export const Route = createFileRoute("/day/$dayId")({
  component: DayLayout,
});

function DayLayout() {
  return <Outlet />;
}

// 자식 라우트에서 공통으로 쓰는 훅
export function useCurrentDay() {
  const { dayId } = useParams({ from: "/day/$dayId" }) as { dayId: string };
  const [day, setDay] = useState<Day | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const days = loadDays();
    setDay(days.find((d) => d.id === dayId) ?? null);
    setHydrated(true);
  }, [dayId]);

  return { dayId, day, setDay, hydrated };
}

type SubPath =
  | "/day/$dayId/words"
  | "/day/$dayId/wordlist"
  | "/day/$dayId/stage1"
  | "/day/$dayId/stage2";

export function DaySubNav({ dayId, dayName }: { dayId: string; dayName: string }) {
  return (
    <div className="no-print mb-4 flex flex-wrap items-center gap-2 text-sm">
      <Link to="/" className="text-foreground/60 hover:underline">🏠</Link>
      <span className="text-foreground/40">/</span>
      <Link
        to="/day/$dayId"
        params={{ dayId }}
        className="font-semibold text-foreground/80 hover:underline"
      >
        {dayName}
      </Link>
      <span className="text-foreground/40">/</span>
      <nav className="flex flex-wrap gap-1">
        <SubLink to="/day/$dayId/words" dayId={dayId} label="단어목록" />
        <SubLink to="/day/$dayId/wordlist" dayId={dayId} label="워드리스트" />
        <SubLink to="/day/$dayId/stage1" dayId={dayId} label="1단계" />
        <SubLink to="/day/$dayId/stage2" dayId={dayId} label="2단계" />
      </nav>
    </div>
  );
}

function SubLink({ to, dayId, label }: { to: SubPath; dayId: string; label: string }) {
  return (
    <Link
      to={to}
      params={{ dayId }}
      className="rounded-full px-3 py-1 text-foreground/70 hover:bg-accent hover:text-accent-foreground"
      activeProps={{ className: "rounded-full px-3 py-1 bg-primary text-primary-foreground font-semibold" }}
    >
      {label}
    </Link>
  );
}
