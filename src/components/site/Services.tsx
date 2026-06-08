const services = [
  { n: "01", t: "Content Creation", d: "Cinematic short-form content designed to convert and elevate." },
  { n: "02", t: "Product Photography", d: "Editorial-grade stills with soft luxury lighting and composition." },
  { n: "03", t: "Brand Storytelling", d: "Narrative-led content that builds emotional brand equity." },
  { n: "04", t: "Creative Strategy", d: "Concept, mood, and campaign architecture from end to end." },
  { n: "05", t: "Editing", d: "Color, rhythm, and pacing tuned for premium social platforms." },
  { n: "06", t: "Luxury Lifestyle", d: "Aspirational moments for high-end lifestyle and wellness brands." },
  { n: "07", t: "Beauty Campaigns", d: "Clean girl, skincare, and beauty content with editorial polish." },
  { n: "08", t: "Travel & Hotels", d: "Slow, cinematic destination storytelling for hospitality brands." },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/50 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-luxe text-accent">✦ Services</p>
            <h2 className="font-serif text-4xl text-foreground md:text-6xl">
              Crafted for premium <em className="italic">brands</em>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            A curated suite of services for brands that value taste, restraint, and the
            quiet confidence of a well-told story.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.n}
              className="group relative flex flex-col bg-background p-8 transition-colors duration-500 hover:bg-cream md:p-10"
            >
              <span className="font-serif text-xs text-accent">{s.n}</span>
              <h3 className="mt-8 font-serif text-2xl text-foreground md:text-3xl">{s.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <div className="mt-10 h-px w-8 bg-accent transition-all duration-500 group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
