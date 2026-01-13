import { Navbar } from "@/components/Navbar";
import { PricingCards } from "@/components/PricingCards";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

const Pricing = () => {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Page Header */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto text-center">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">
            Investment
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
            Pricing & Packages
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Transparent pricing for exceptional photography. 
            Every package includes our signature attention to detail and artistry.
          </p>
        </div>
      </section>

      <PricingCards />

      {/* FAQ Section */}
      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "How far in advance should I book?",
                a: "We recommend booking 3-6 months in advance for weddings and 2-4 weeks for portrait sessions. Popular dates fill quickly, especially during peak wedding season.",
              },
              {
                q: "What's included in the digital images?",
                a: "All digital images are professionally edited, color-corrected, and delivered in high resolution. You receive a print release allowing you to make prints anywhere.",
              },
              {
                q: "Do you travel for destination events?",
                a: "Absolutely! We love destination weddings and events. Travel fees apply based on location, and we're happy to provide a custom quote.",
              },
              {
                q: "When will I receive my photos?",
                a: "Portrait sessions are delivered within 1 week. Wedding galleries are ready within 3-4 weeks, with sneak peeks provided within 24 hours.",
              },
              {
                q: "Can I customize a package?",
                a: "Yes! We understand every project is unique. Contact us to discuss your specific needs and we'll create a custom package for you.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-border pb-6">
                <h3 className="font-display text-lg font-medium mb-2">{faq.q}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
};

export default Pricing;
