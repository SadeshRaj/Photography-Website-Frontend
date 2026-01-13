import { Link } from "react-router-dom";
import { Camera, Heart, Building2, PartyPopper, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import weddingImg from "@/assets/Wedding-beach.jpg";
import portraitImg from "@/assets/Portrait.jpg";
import commercialImg from "@/assets/portfolio-commercial.jpg";
import eventImg from "@/assets/Event3.png";
import familyImg from "@/assets/Family Session.jpg";
import editorialImg from "@/assets/Fashion2.jpeg";

const services = [
  {
    icon: Heart,
    title: "Wedding",
    description: "Capturing the magic of your special day with timeless elegance.",
    image: weddingImg,
  },
  {
    icon: Camera,
    title: "Portrait",
    description: "Professional headshots and personal portraits that tell your story.",
    image: portraitImg,
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "High-quality imagery for brands, products, and marketing campaigns.",
    image: commercialImg,
  },
  {
    icon: PartyPopper,
    title: "Events",
    description: "Corporate gatherings, galas, and celebrations captured beautifully.",
    image: eventImg,
  },
  {
    icon: Users,
    title: "Family",
    description: "Cherish family moments with natural, heartwarming photographs.",
    image: familyImg,
  },
  {
    icon: Sparkles,
    title: "Editorial",
    description: "Fashion-forward photography for magazines and creative projects.",
    image: editorialImg,
  },
];

export const ServicesPreview = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            From intimate sessions to grand celebrations, we offer a comprehensive
            range of photography services tailored to your unique vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <service.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="elegant" size="lg" asChild>
            <Link to="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
