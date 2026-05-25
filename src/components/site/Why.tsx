const points = [
  { t: "Authentic Storytelling", d: "Content that feels real, never staged — engineered to convert." },
  { t: "Premium Visual Quality", d: "Editorial composition, soft lighting, refined color grading." },
  { t: "Luxury Brand Alignment", d: "An aesthetic vocabulary built for high-end positioning." },
  { t: "Clean Feminine Codes", d: "Restraint, softness, and quiet sophistication." },
  { t: "Social-First Craft", d: "Built for the feed, paced for the algorithm." },
  { t: "Modern Beauty Branding", d: "Fluent in the visual language of today's beauty leaders." },
];

export function Why() {
  return (
    <section className="bg-foreground py-28 text-background md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-[11px] uppercase tracking-luxe text-accent">✦ Why Brands Choose Monica</p>
          <h2 className="font-serif text-4xl leading-[1.1] text-background md:text-6xl">
            A creator built for <em className="italic text-accent">brand equity</em>,
            not just impressions.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-background/10 md:grid-cols-3">
          {points.map((p, i) => (
            <div key={i} className="bg-foreground p-8 md:p-10">
              <span className="font-serif text-sm text-accent">0{i + 1}</span>
              <h3 className="mt-6 font-serif text-2xl text-background md:text-3xl">{p.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-background/60">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
