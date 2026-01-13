import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactBox } from "@/components/ContactBox";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Page Header */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto text-center">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question or 
            are ready to book, reach out and let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl font-medium mb-8">
                Let's Connect
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium mb-1">Email</h3>
                    <a
                      href="mailto:info@trutone.lk"
                      className="text-muted-foreground font-body hover:text-foreground transition-colors"
                    >
                        info@trutone.lk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium mb-1">Phone</h3>
                    <a
                      href="tel:+13105550123"
                      className="text-muted-foreground font-body hover:text-foreground transition-colors"
                    >
                      +94 77 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium mb-1">Studio</h3>
                    <p className="text-muted-foreground font-body">
                      TrueTone Photography<br />
                      Colombo, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium mb-1">Hours</h3>
                    <p className="text-muted-foreground font-body">
                      Mon - Fri: 8:00 AM - 5:00 PM<br />
                      Weekends: By appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display font-medium mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-cream flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-cream flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactBox />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
