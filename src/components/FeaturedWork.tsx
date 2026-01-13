import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import portfolioWedding from "@/assets/Wedding-Photo.jpg";
import portfolioPortrait from "@/assets/M-Portrait (1).jpg";
import portfolioEvent from "@/assets/portfolio-event.jpg";

const featuredImages = [
  {
    src: portfolioWedding,
    alt: "Wedding photography",
    category: "Wedding",
    delay: 0.1,
  },
  {
    src: portfolioPortrait,
    alt: "Portrait photography",
    category: "Portrait",
    delay: 0.2,
  },
  {
    src: portfolioEvent,
    alt: "Event photography",
    category: "Events",
    delay: 0.3,
  },
];

export const FeaturedWork = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
            <div>
              <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">
                Portfolio
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium">
                Featured Work
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 font-body text-sm group"
            >
              View All Work
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredImages.map((image, index) => (
            <ScrollReveal key={index} delay={image.delay} className="h-full">
              <Link
                to="/portfolio"
                className="group relative block aspect-[4/5] bg-muted overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-body tracking-widest uppercase text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 block">
                    {image.category}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
