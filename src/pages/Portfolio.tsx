import { Navbar } from "@/components/Navbar";
import { Gallery } from "@/components/Gallery";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const Portfolio = () => {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Page Header */}
        <section className="section-padding bg-cream min-h-[50vh] flex flex-col items-center justify-center">
        <ScrollReveal>
          <div className="container-wide mx-auto text-center">
            <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">
              Our Work
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
              Portfolio
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              A curated collection of our finest work across weddings, portraits,
              commercial projects, and special events.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <Gallery />
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default Portfolio;
