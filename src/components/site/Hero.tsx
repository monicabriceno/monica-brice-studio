import hero from "@/assets/hero-portrait.jpg";



export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Monica Briceño — luxury beauty editorial portrait"
          width={1086}
          height={1448}
          className="h-full w-full object-cover object-[60%_top] animate-fade md:object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/10 to-transparent md:from-background/50" />

      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-40 md:px-10 md:pb-28">
        <p className="mb-6 text-[11px] uppercase tracking-luxe text-foreground/70 animate-reveal">
          Luxury UGC Creator · Beauty · Lifestyle
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-5xl leading-[1.02] text-foreground animate-reveal delay-100 md:text-7xl lg:text-[88px]">
        Luxury storytelling for modern beauty brands.

        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground animate-reveal delay-300 md:text-lg">
          UGC <span className="mx-2 text-accent">·</span> Beauty
          <span className="mx-2 text-accent">·</span> Skincare
          <span className="mx-2 text-accent">·</span> Luxury Lifestyle
          <span className="mx-2 text-accent">·</span> Travel
        </p>
        <div className="mt-10 flex flex-col gap-3 animate-reveal delay-500 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-[11px] uppercase tracking-luxe text-background transition-all hover:bg-foreground/90"
          >
            Let's Work Together
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-foreground/40 px-8 py-4 text-[11px] uppercase tracking-luxe text-foreground transition-all hover:border-foreground hover:bg-foreground/5"
          >
            View Portfolio
          </a>
        </div>

        <div className="mt-20 hidden items-center gap-3 animate-fade delay-700 md:flex">
          <div className="h-px w-12 bg-foreground/40" />
          <span className="text-[10px] uppercase tracking-luxe text-foreground/60">Scroll</span>
        </div>
      </div>
    </section>
  );
}
