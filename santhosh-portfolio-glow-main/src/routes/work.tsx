import { createFileRoute } from "@tanstack/react-router";
import { longForm, reels } from "@/lib/work-data";
import { Play } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Santhosh Kumar" },
      { name: "description", content: "A selection of brand films, music videos, documentaries, and short-form reels." },
      { property: "og:title", content: "Work — Santhosh Kumar" },
      { property: "og:description", content: "Selected editing & motion design projects." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="px-5 md:px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 md:mb-14">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground">Portfolio</p>
          <h1 className="mt-3 text-4xl md:text-7xl font-semibold tracking-tight">
            The <span className="text-gradient">work</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-muted-foreground">
            Twelve recent pieces — six long-form edits and six short-form reels. Every frame considered.
          </p>
        </header>

        {/* LONG FORM */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">Long format</h2>
            <span className="text-sm text-muted-foreground">06 projects</span>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {longForm.map((p) => (
              <article key={p.id} className="group glass rounded-3xl overflow-hidden hover:bg-white/10 transition cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                  <img src={p.thumb} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                  <div className="absolute bottom-4 right-4 h-12 w-12 grid place-items-center rounded-full glass-strong opacity-0 group-hover:opacity-100 transition">
                    <Play className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <div className="p-5 flex justify-between items-end">
                  <div>
                    <h3 className="text-lg font-medium">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.client} · {p.category}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{p.year}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* REELS */}
        <section className="mt-16 md:mt-24">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">Short-form / Reels</h2>
            <span className="text-sm text-muted-foreground">06 reels</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {reels.map((p) => (
              <article key={p.id} className="group glass rounded-2xl overflow-hidden hover:bg-white/10 transition cursor-pointer">
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img src={p.thumb} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-sm font-medium leading-tight">{p.title}</h3>
                    <p className="text-[11px] text-white/70">{p.client}</p>
                  </div>
                  <div className="absolute top-3 right-3 h-8 w-8 grid place-items-center rounded-full glass-strong">
                    <Play className="h-3 w-3 fill-current" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
