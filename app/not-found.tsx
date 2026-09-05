import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Page not found</p>
      <h1 className="text-3xl font-semibold text-foreground">This page does not exist.</h1>
      <p className="mt-4 text-base text-muted-foreground">
        The page you requested may have moved or may not be available yet.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Return home
      </Link>
    </div>
  );
}
