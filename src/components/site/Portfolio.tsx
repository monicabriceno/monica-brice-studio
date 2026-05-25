import beauty from "@/assets/beauty-2.jpg";
import skincare from "@/assets/portfolio-skincare.jpg";
import travel from "@/assets/luxury-travel.jpg";
import hotel from "@/assets/portfolio-hotel.jpg";
import lifestyle from "@/assets/lifestyle-2.jpg";
import fashion from "@/assets/fashion-2.jpg";

const items = [
  { src: beauty, cat: "Beauty", title: "Glow Edit", span: "md:col-span-4 md:row-span-2", h: "h-[520px] md:h-[760px]" },
  { src: skincare, cat: "Skincare", title: "Cream Ritual", span: "md:col-span-3", h: "h-[360px] md:h-[370px]" },
  { src: travel, cat: "Luxury Travel", title: "Toronto Skyline", span: "md:col-span-3", h: "h-[360px] md:h-[370px]" },
  { src: lifestyle, cat: "Lifestyle", title: "Golden Hour", span: "md:col-span-3", h: "h-[360px] md:h-[480px]" },
  { src: hotel, cat: "Hotels", title: "Sunday Suite", span: "md:col-span-4", h: "h-[360px] md:h-[480px]" },
  { src: fashion, cat: "Fashion", title: "Camel Study", span: "md:col-span-7", h: "h-[420px] md:h-[600px]" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-luxe text-accent">✦ Selected Work</p>
            <h2 className="font-serif text-4xl text-foreground md:text-6xl">
              An editorial <em className="italic">portfolio</em>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            A living archive of beauty, lifestyle, and travel stories built for the most
            discerning brands.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-7 md:gap-6">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`img-zoom group relative cursor-pointer overflow-hidden bg-muted ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className={`w-full ${it.h} object-cover`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-6 text-background opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 md:p-8">
                <p className="text-[10px] uppercase tracking-luxe text-accent">{it.cat}</p>
                <p className="mt-2 font-serif text-2xl md:text-3xl">{it.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
