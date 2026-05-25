import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
//import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { UGC } from "@/components/site/UGC";
import { UGC2 } from "@/components/site/UGC2";
//import { Why } from "@/components/site/Why";
import { Contact } from "@/components/site/Contact";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monica Briceño — Luxury UGC Creator · Beauty · Lifestyle" },
      {
        name: "description",
        content:
          "Luxury UGC creator and content storyteller for premium beauty, skincare, fashion, travel and lifestyle brands. Editorial, feminine, cinematic.",
      },
      { property: "og:title", content: "Monica Briceño — Luxury UGC Creator" },
      {
        property: "og:description",
        content:
          "Elegant content designed to elevate beauty, skincare, and luxury lifestyle brands.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      {/* <About /> */}
      <Services />
      <Portfolio />
      <UGC />
      <UGC2 />
      {/* <Why /> */}
      <Contact />
      <WhatsAppFab />
    </main>
  );
}
