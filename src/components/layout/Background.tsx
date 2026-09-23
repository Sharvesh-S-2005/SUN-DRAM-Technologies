/**
 * Persistent, route-independent background (AUDIT.md Section 4). Renders
 * once in the root layout so it doesn't flash between page navigations.
 * Reuses only the black base + cyan radial-glow language already present
 * in the legacy page — no new hues, blur values, or motion are introduced.
 */
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(76,201,240,0.16),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.08),transparent_55%)]" />
    </div>
  );
}
