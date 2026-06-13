import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 md:mt-32 pb-8 md:pb-10 px-5 md:px-6">
      <div className="max-w-6xl mx-auto glass rounded-3xl p-6 md:p-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Got a story to <span className="text-gradient">cut?</span>
            </h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Open for freelance & full-time motion + editing work.
            </p>
            <Link
              to="/contact"
              className="inline-flex mt-5 items-center text-sm font-medium px-5 py-2.5 rounded-full bg-foreground text-background hover:opacity-90 transition"
            >
              Start a project →
            </Link>
          </div>

          <div className="text-sm space-y-2">
            <p className="text-muted-foreground uppercase tracking-widest text-xs">Pages</p>
            <Link to="/work" className="block hover:text-gradient">Work</Link>
            <Link to="/services" className="block hover:text-gradient">Services</Link>
            
            <Link to="/resume" className="block hover:text-gradient">Resume</Link>
          </div>

          <div className="text-sm space-y-2">
            <p className="text-muted-foreground uppercase tracking-widest text-xs">Elsewhere</p>
            <div className="flex gap-3 pt-1">
              {[Instagram, Youtube, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-white/15 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Santhosh Kumar. Crafted with care.</p>
          <p>Video Editor · Motion Designer · Storyteller</p>
        </div>
      </div>
    </footer>
  );
}
