import { Quote } from "lucide-react";

export const Testimonial = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto text-center">
        <Quote className="w-12 h-12 text-primary/30 mx-auto mb-8" strokeWidth={1} />
        <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8 italic">
          "Working with TrueTóne was an absolute dream. They captured not just photos,
          but the emotions and essence of our wedding day. Every image tells a story."
        </blockquote>
        <div>
          <p className="font-display text-lg font-medium">Amali & Kasun</p>
          <p className="text-muted-foreground font-body text-sm mt-1">Wedding, Gampaha 2024</p>
        </div>
      </div>
    </section>
  );
};
