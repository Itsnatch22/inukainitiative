'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Something went wrong</p>
      <h1 className="text-3xl font-semibold text-foreground">We could not load this page.</h1>
      <p className="mt-4 text-base text-muted-foreground">
        Please try again in a moment or return to the homepage.
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Try again
      </button>
    </div>
  );
}
