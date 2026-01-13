import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide mx-auto px-6 md:px-12 lg:px-20 pt-20">
        <div className="max-w-2xl">
          <p className="text-background/80 font-body tracking-[0.3em] uppercase text-sm mb-6 opacity-0 animate-fade-up">
            Award-Winning Photography
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-background font-medium leading-tight mb-6 opacity-0 animate-fade-up animation-delay-200">
            Capturing Moments That Last Forever
          </h1>
          <p className="text-background/80 font-body text-lg md:text-xl leading-relaxed mb-10 opacity-0 animate-fade-up animation-delay-400">
            We believe in the power of photography to tell your unique story. 
            From intimate portraits to grand celebrations, every frame is crafted with intention.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up animation-delay-600">
            <Button variant="hero" size="xl" asChild>
              <Link to="/booking">Book Your Session</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-16 bg-background/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-background animate-[scroll_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};
