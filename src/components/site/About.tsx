export function About() {
  return (
    <section id="about" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <p className="mb-10 text-[11px] uppercase tracking-luxe text-accent">
          ✦ The Creator
        </p>
        <h2 className="text-balance font-serif text-3xl leading-[1.15] text-foreground md:text-5xl lg:text-6xl">
          I create elevated content that blends
          <em className="font-serif italic text-foreground/70"> luxury aesthetics</em>,
          storytelling, and modern beauty branding — helping brands connect emotionally
          and convert authentically.
        </h2>
        <div className="mt-14 grid gap-10 border-t border-border pt-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-4xl text-foreground">5+</p>
            <p className="mt-2 text-[11px] uppercase tracking-luxe text-muted-foreground">
              Years of Editorial Work
            </p>
          </div>
          <div>
            <p className="font-serif text-4xl text-foreground">80+</p>
            <p className="mt-2 text-[11px] uppercase tracking-luxe text-muted-foreground">
              Brand Collaborations
            </p>
          </div>
          <div>
            <p className="font-serif text-4xl text-foreground">∞</p>
            <p className="mt-2 text-[11px] uppercase tracking-luxe text-muted-foreground">
              Stories Worth Telling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}