import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Classic",
    price: "Rs. 20,000",
    description: "Perfect for individual portraits and headshots",
    features: [
      "1-hour session",
      "1 location",
      "15 edited digital images",
      "Online gallery",
      "Print release",
    ],
    popular: false,
  },
  {
    name: "Signature",
    price: "Rs. 50,000",
    description: "Ideal for families, couples, and special occasions",
    features: [
      "2-hour session",
      "2 locations",
      "35 edited digital images",
      "Online gallery",
      "Print release",
      "10 premium prints",
      "Styling consultation",
    ],
    popular: true,
  },
  {
    name: "Heirloom",
    price: "Rs. 85,000",
    description: "Complete coverage for events and weddings",
    features: [
      "Full day coverage (8 hours)",
      "Multiple locations",
      "100+ edited digital images",
      "Online gallery",
      "Print release",
      "Luxury album",
      "Second photographer",
      "Engagement session included",
    ],
    popular: false,
  },
];

export const PricingCards = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">
            Investment
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            Photography Packages
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            Transparent pricing for exceptional photography. 
            Custom packages available for unique projects.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative p-8 border transition-all duration-300 ${
                pkg.popular
                  ? "border-primary bg-cream shadow-lg scale-105"
                  : "border-border bg-background hover:border-primary/30 hover:shadow-md"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 font-body text-xs tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-medium mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground font-body text-sm mb-4">
                  {pkg.description}
                </p>
                <div className="font-display text-4xl font-semibold">
                  {pkg.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.popular ? "elegant" : "elegantOutline"}
                size="lg"
                className="w-full"
                asChild
              >
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Custom Quote */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-body mb-4">
            Need something custom? We create bespoke packages for unique projects.
          </p>
          <Button variant="outline" asChild>
            <Link to="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
