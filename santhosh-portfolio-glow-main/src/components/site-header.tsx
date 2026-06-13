import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/", label: "About me" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1100px)]">
        <nav className="glass-strong rounded-full px-3 py-2 md:px-4 md:py-2.5 flex items-center justify-between gap-2">
          <Link to="/" className="flex items-center gap-2 pl-1 min-w-0">
            <span className="h-6 w-6 md:h-7 md:w-7 shrink-0 rounded-full bg-gradient-to-br from-aurora-1 via-aurora-2 to-aurora-3 shadow-[0_0_20px_oklch(0.7_0.2_320/0.6)]" />
            <span className="font-semibold tracking-tight text-sm md:text-base truncate">Santhosh Kumar</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`px-3.5 py-1.5 rounded-full text-sm transition-colors ${
                      active
                        ? "bg-white/30 text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/15 bg-white/10"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center text-sm font-medium px-4 py-1.5 rounded-full bg-foreground text-background hover:opacity-90 transition"
          >
            Let's talk
          </Link>
        </nav>
      </header>

      {/* Mobile bottom nav */}
      <nav
        className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[min(96%,520px)] glass-strong rounded-full px-2 py-2 flex items-center justify-between gap-1"
        aria-label="Primary mobile"
      >
        {links.map((l) => {
          const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
          return (
            <Link
              key={l.to}
              to={l.to}
              className={`flex-1 text-center px-2 py-1.5 rounded-full text-[11px] font-medium transition-colors ${
                active
                  ? "bg-white/30 text-foreground"
                  : "text-muted-foreground hover:text-foreground bg-white/10"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
