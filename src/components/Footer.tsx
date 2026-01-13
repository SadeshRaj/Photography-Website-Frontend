import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-semibold mb-4">TrueTóne</h3>
            <p className="text-background/70 font-body text-sm leading-relaxed">
              Capturing life's most precious moments with elegance and artistry. 
              Based in Colombo, serving clients islandwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Portfolio", "Services", "Pricing", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-background/70 hover:text-background transition-colors text-sm font-body"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-3">
              {["Wedding Photography", "Portrait Sessions", "Commercial", "Events", "Family"].map((item) => (
                <li key={item} className="text-background/70 text-sm font-body">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm font-body">
                <Mail size={16} />
                info@truetone.lk
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm font-body">
                <Phone size={16} />
                  +94 77 123-4567
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm font-body">
                <MapPin size={16} />
                Colombo, Sri Lanka
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm font-body">
            © {new Date().getFullYear()} TrueTóne Photography. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-body">
            <Link to="/privacy" className="text-background/50 hover:text-background/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/50 hover:text-background/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
