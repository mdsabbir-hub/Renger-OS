import Link from "next/link";

// Root route. Phase 1: just points to the dashboard.
// Once auth exists (Phase 3), this becomes the sign-in gate.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-mono text-text-primary">RANGER&apos;S OS</h1>
      <p className="text-text-secondary text-sm">
        Foundation is running. Head to the dashboard.
      </p>
      <Link
        href="/dashboard"
        className="mt-2 rounded border border-base-border bg-base-panel px-4 py-2 text-sm text-text-primary hover:border-accent"
      >
        Enter Dashboard →
      </Link>
    </main>
  );
}
