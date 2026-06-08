export function Contact() {
  return (
    <section id="contact" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <p className="mb-6 text-[11px] uppercase tracking-luxe text-accent">✦ Get in Touch</p>
        <h2 className="text-balance font-serif text-4xl leading-[1.05] text-foreground md:text-7xl">
        Let's bring your brand's vision to life!  
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          For collaborations, campaign briefs, and long-term partnerships — I'd love to
          hear about your brand.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="https://wa.me/14372637161?text=Hi%20Monica!%20I%20found%20your%20portfolio%20and%20I%27m%20interested%20in%20content%20creation%20for%20my%20brand.%20I%27d%20love%20to%20discuss%20a%20potential%20collaboration."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-[11px] uppercase tracking-luxe text-background transition-all hover:bg-foreground/90"
          >
            WhatsApp Monica
          </a>
          <a
            href="mailto:monicabcugc@gmail.com?subject=Content%20Creation%20Collaboration&body=Hi%20Monica!%20I%20found%20your%20portfolio%20and%20I%27m%20interested%20in%20content%20creation%20for%20my%20brand.%20I%27d%20love%20to%20discuss%20a%20potential%20collaboration."
            className="inline-flex items-center justify-center rounded-full border border-foreground/40 px-8 py-4 text-[11px] uppercase tracking-luxe text-foreground transition-all hover:bg-foreground/5"
          >
            Email
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-border pt-12 text-left sm:grid-cols-3">
          <div>
            <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">WhatsApp</p>
            <a href="https://wa.me/14372637161?text=Hi%20Monica!%20I%20found%20your%20portfolio%20and%20I%27m%20interested%20in%20content%20creation%20for%20my%20brand.%20I%27d%20love%20to%20discuss%20a%20potential%20collaboration." className="mt-2 block font-serif text-xl text-foreground">
              +1 437 263 7161
            </a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">Instagram</p>
            <a
              href="https://instagram.com/_monicabc_"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block font-serif text-xl text-foreground"
            >
              @_monicabc_
            </a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-luxe text-muted-foreground">TikTok</p>
            <a
              href="https://tiktok.com/@_monicabc_"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block font-serif text-xl text-foreground"
            >
              @_monicabc_
            </a>
          </div>
        </div>

        <p className="mt-24 font-serif text-lg italic text-muted-foreground">
          "Every brand has a story. Mine is to tell it beautifully."
        </p>
        <p className="mt-2 text-[10px] uppercase tracking-luxe text-muted-foreground">
          — Monica Briceño
        </p>
      </div>

      <footer className="mt-24 border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-[10px] uppercase tracking-luxe text-muted-foreground md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Monica Briceño</p>
          <p>Luxury UGC · Beauty · Lifestyle · Travel</p>
        </div>
      </footer>
    </section>
  );
}
