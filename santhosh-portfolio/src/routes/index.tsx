import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-reel.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santhosh Kumar — Video Editor & Motion Designer" },
      { name: "description", content: "4+ years editing brand films, music videos, documentaries and short-form motion. Watch the reel." },
      { property: "og:title", content: "Santhosh Kumar — Reel 2025" },
      { property: "og:description", content: "Cinematic editing & motion design portfolio." },
    ],
  }),
  component: Home,
});

function Home() {


  return (
    <>
      {/* HERO */}
      <section className="px-3 md:px-6">
        <div className="max-w-7xl mx-auto relative rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden glass-strong aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9]">
          {/* Hero "video" — using cinematic still as background. Replace src with your real reel mp4 when ready. */}
          <img
            src={heroImg}
            alt="Showreel"
            className="absolute inset-0 w-full h-full object-cover scale-105"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-background/40" />

          <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-12">
            <p className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-white/70">Showreel · 2025</p>
            <h1 className="mt-3 text-[2.25rem] leading-[1.02] sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight max-w-4xl">
              I cut <span className="text-gradient">stories</span> that<br className="hidden sm:block" /> move people.
            </h1>
            <p className="mt-4 max-w-xl text-sm md:text-lg text-white/80">
              Santhosh Kumar — video editor & motion graphics designer with 4+ years shaping brand films, music videos and short-form motion.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <button className="group inline-flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-full bg-white text-background text-sm font-medium hover:opacity-90 transition">
                <Play className="h-4 w-4 fill-current" /> Play reel
              </button>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-full glass text-sm font-medium hover:bg-white/15 transition"
              >
                See the work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* floating stats */}
          <div className="hidden md:flex absolute top-6 right-6 gap-2">
            {[
              { k: "4+", v: "Years" },
              { k: "120+", v: "Projects" },
              { k: "30+", v: "Brands" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl px-4 py-3 text-center">
                <div className="text-2xl font-semibold tracking-tight">{s.k}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE / TOOLS */}
      <section className="mt-12 md:mt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Crafted in</p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {["After Effects", "Premiere Pro", "DaVinci Resolve", "Photoshop", "Illustrator", "Audition"].map((t) => (
              <span key={t} className="glass rounded-full px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
