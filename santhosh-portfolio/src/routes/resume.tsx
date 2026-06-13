import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume & Skills — Santhosh Kumar" },
      { name: "description", content: "Experience, skills, and software stack of Santhosh Kumar — video editor & motion designer." },
      { property: "og:title", content: "Resume & Skills — Santhosh Kumar" },
      { property: "og:description", content: "4+ years of editing experience, software stack and capabilities." },
    ],
  }),
  component: Resume,
});

const skills = [
  { name: "Adobe Premiere Pro", level: 95 },
  { name: "After Effects", level: 92 },
  { name: "DaVinci Resolve (Color)", level: 80 },
  { name: "Motion Graphics", level: 90 },
  { name: "Sound Design", level: 75 },
  { name: "Photoshop / Illustrator", level: 78 },
];

const experience = [
  {
    role: "Freelance Video Editor & Motion Designer",
    org: "Independent",
    period: "2023 — Present",
    bullets: [
      "Cut brand films, music videos, and short-form social content for 30+ clients.",
      "Design motion-graphics systems, animated lower-thirds, and title sequences.",
      "Own end-to-end post: assembly, motion, color, sound, and final delivery.",
    ],
  },
  {
    role: "Senior Editor",
    org: "Creative Studio",
    period: "2022 — 2023",
    bullets: [
      "Led post-production on commercial campaigns across digital & broadcast.",
      "Mentored junior editors on workflow, color management, and storytelling.",
    ],
  },
  {
    role: "Video Editor",
    org: "In-house, Tech Startup",
    period: "2021 — 2022",
    bullets: [
      "Produced product launch videos, explainer animations, and event recaps.",
      "Established a repeatable motion-graphics toolkit for the brand.",
    ],
  },
];

function Resume() {
  return (
    <div className="px-5 md:px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 md:mb-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground">Resume</p>
            <h1 className="mt-3 text-4xl md:text-7xl font-semibold tracking-tight">
              Skills & <span className="text-gradient">experience</span>.
            </h1>
          </div>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 rounded-full glass text-sm font-medium hover:bg-white/15"
          >
            Download PDF
          </a>
        </header>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
          {/* SKILLS */}
          <div className="lg:col-span-2 glass rounded-3xl p-6 md:p-7">
            <h2 className="text-xl font-medium">Software & skills</h2>
            <div className="mt-6 space-y-4">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm">
                    <span>{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-aurora-1 via-aurora-2 to-aurora-3"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Also</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Storyboarding", "Sound Mixing", "Captioning", "Color Theory", "Typography", "Cinema 4D Lite"].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full glass text-xs">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-medium mb-6">Experience</h2>
            <ol className="relative space-y-5">
              {experience.map((e) => (
                <li key={e.role} className="glass rounded-3xl p-6 md:p-7">
                  <div className="flex flex-wrap justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-medium">{e.role}</h3>
                      <p className="text-sm text-muted-foreground">{e.org}</p>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-gradient font-mono self-start">
                      {e.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/80 list-disc list-inside marker:text-white/40">
                    {e.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
