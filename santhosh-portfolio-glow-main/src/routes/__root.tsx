import { Outlet, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass max-w-md text-center rounded-3xl p-10">
        <h1 className="text-7xl font-bold tracking-tight text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Lost in the timeline</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That cut doesn't exist. Let's get you back to the reel.
        </p>
        <a href="/" className="inline-flex mt-6 items-center px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition">
          Back home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass max-w-md text-center rounded-3xl p-10">
        <h1 className="text-xl font-semibold">Something glitched in the render</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90"
          >
            Try again
          </button>
          <a href="/" className="px-5 py-2.5 rounded-full glass text-sm font-medium hover:bg-white/10">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Santhosh Kumar — Video Editor & Motion Designer" },
      { name: "description", content: "Portfolio of Santhosh Kumar — video editor & motion graphics designer with 4+ years of experience crafting brand films, music videos, and short-form reels." },
      { name: "author", content: "Santhosh Kumar" },
      { property: "og:title", content: "Santhosh Kumar — Video Editor & Motion Designer" },
      { property: "og:description", content: "Portfolio of Santhosh Kumar — video editor & motion graphics designer with 4+ years of experience crafting brand films, music videos, and short-form reels." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Santhosh Kumar — Video Editor & Motion Designer" },
      { name: "twitter:description", content: "Portfolio of Santhosh Kumar — video editor & motion graphics designer with 4+ years of experience crafting brand films, music videos, and short-form reels." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/10b606fa-bf7a-4fe5-9caa-e123acced718/id-preview-1b8c9c69--43518a5c-da43-406e-9da7-1bdbd0114995.lovable.app-1780581634501.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/10b606fa-bf7a-4fe5-9caa-e123acced718/id-preview-1b8c9c69--43518a5c-da43-406e-9da7-1bdbd0114995.lovable.app-1780581634501.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="pt-24 md:pt-28 pb-24 md:pb-0">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
