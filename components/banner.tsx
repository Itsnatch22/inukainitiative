import { ArrowDown, Heart } from "lucide-react";

export function Banner() {
  return (
    <aside className="mt-10 flex flex-col gap-4 rounded-2xl border border-accent/30 bg-accent/10 px-5 py-4 text-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
        </span>
        <p className="text-sm leading-6">
          Feel free to support us using our KCB account:
          <strong className="mx-1 font-semibold text-primary">8058957</strong>
          under the business name
          <strong className="ml-1 font-semibold text-primary">Inuka 034 Initiative</strong>.
        </p>
      </div>
      <a
        href="#donate"
        className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/75"
      >
        View payment options
        <ArrowDown className="h-4 w-4" aria-hidden="true" />
      </a>
    </aside>
  );
}
