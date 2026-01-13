import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ServicesPreview } from "@/components/ServicesPreview";
import { Testimonial } from "@/components/Testimonial";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedWork />
      <ScrollReveal width="100%">
        <ServicesPreview />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Testimonial />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <ContactCTA />
      </ScrollReveal>
      <Footer />
    </main>
  );
};

export default Index;
