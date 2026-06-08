import u1 from "@/assets/centelle.mp4";
import u2 from "@/assets/kerastasee.mp4";
import u3 from "@/assets/ordinaryy.mp4";
import u4 from "@/assets/maquillee.mp4";

const clips = [
  { src: u1, label: "Unboxing Edit", brand: "BEAUTY CAMPAIGN" },
{ src: u2, label: "Product Drop", brand: "SKINCARE" },
{ src: u3, label: "Ad Campaign", brand: "BEAUTY" },
{ src: u4, label: "Glow Unboxing", brand: "BEAUTY CAMPAIGN" },
];

export function UGC() {
  return (
    <section id="content" className="gradient-cream py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
        <p className="mb-4 text-[11px] uppercase tracking-luxe text-accent">✦ Content Creation</p>
          <h2 className="font-serif text-4xl text-foreground md:text-6xl">
          Premium content for brands that mean it.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          From skincare campaigns to personal brands — content that elevates, connects,converts and grows.
         </p>
        </div>

        <div className="-mx-6 overflow-x-auto pb-4 md:mx-0">
          <div className="flex gap-5 px-6 md:gap-8 md:px-0">
            {clips.map((c, i) => (
              <div key={i} className="group flex-shrink-0 cursor-pointer">
                <div className="relative w-[220px] overflow-hidden rounded-[2.2rem] border-[8px] border-foreground/90 bg-foreground shadow-luxe transition-transform duration-700 hover:-translate-y-2 md:w-[260px]">
                  <div className="absolute left-1/2 top-2 z-10 h-1 w-16 -translate-x-1/2 rounded-full bg-background/30" />
                  <div className="aspect-[9/19] overflow-hidden bg-muted">
                       {c.src.toString().endsWith(".mp4") ? (
                       <video
                       src={c.src}
                         autoPlay
                         loop
                         muted
                         playsInline
                        
                         className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                          ) : (
                       <img
                         src={c.src}
                          alt={c.label}
                          loading="lazy"
                         className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                         />
                          )}
                         </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 pt-12">
                    <p className="text-[9px] uppercase tracking-luxe text-accent">{c.brand}</p>
                    <p className="mt-1 font-serif text-lg text-background">{c.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
