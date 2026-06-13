import { createFileRoute } from "@tanstack/react-router";
import { Film, Sparkles, Wand2, Layers, Music2, Type } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Santhosh Kumar" },
      { name: "description", content: "Video editing, motion graphics, color grading, sound design, and short-form content services." },
      { property: "og:title", content: "Services — Santhosh Kumar" },
      { property: "og:description", content: "What I offer: editing, motion graphics, color, sound and more." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Film, title: "Video Editing", desc: "Long-form storytelling, brand films, documentaries, music videos. Sharp pacing, considered cuts." },
  { icon: Sparkles, title: "Motion Graphics", desc: "Title sequences, animated explainers, logo reveals, and kinetic UI built in After Effects." },
  { icon: Wand2, title: "VFX & Compositing", desc: "Clean-up, screen replacements, tracking, particles, and tasteful CG integrations." },
  { icon: Layers, title: "Color Grading", desc: "Cinematic looks that hold emotion. Skin tones first, mood second, gimmicks never." },
  { icon: Music2, title: "Sound Design", desc: "Music selection, layered SFX, dialogue cleanup, and final mixdowns that breathe." },
  { icon: Type, title: "Short-form Reels", desc: "9:16 cuts engineered for retention — hooks, captions, motion, and a feel that travels." },
];

function Services() {
  return (
    <div className="px-5 md:px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 md:mb-14">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground">What I offer</p>
          <h1 className="mt-3 text-4xl md:text-7xl font-semibold tracking-tight">
            Built for <span className="text-gradient">moving</span> pictures.
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-muted-foreground">
            A full post-production toolkit — from the first cut to the final grade.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s) => (
            <div key={s.title} className="glass rounded-3xl p-6 md:p-7 hover:bg-white/10 transition group">
              <div className="h-11 w-11 md:h-12 md:w-12 rounded-2xl bg-gradient-to-br from-aurora-1 via-aurora-2 to-aurora-3 grid place-items-center shadow-[0_0_30px_oklch(0.7_0.2_320/0.4)] group-hover:scale-110 transition">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 text-lg md:text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* PROCESS */}
        <section className="mt-16 md:mt-24">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">How we'll work.</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { n: "01", t: "Brief", d: "We align on story, audience, deliverables, and deadlines." },
              { n: "02", t: "Assembly", d: "First cut to lock the narrative spine and rhythm." },
              { n: "03", t: "Polish", d: "Motion, sound, color — every frame considered." },
              { n: "04", t: "Deliver", d: "Master files, social cuts, captions, and revisions." },
            ].map((p) => (
              <div key={p.n} className="glass rounded-3xl p-6">
                <div className="text-sm text-gradient font-mono">{p.n}</div>
                <h3 className="mt-3 text-lg font-medium">{p.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
