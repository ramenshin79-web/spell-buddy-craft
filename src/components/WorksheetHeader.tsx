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
