import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const ContactCTA = () => {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-narrow mx-auto text-center">
        <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-4">
          Let's Create Together
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
          Ready to Tell Your Story?
        </h2>
        <p className="text-background/70 font-body text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Every great photograph begins with a conversation. 
          Let's discuss how we can bring your vision to life.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="xl" asChild>
            <Link to="/booking">Book a Session</Link>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
