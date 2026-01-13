import { Navbar } from "@/components/Navbar";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, MapPin } from "lucide-react";

const Booking = () => {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Page Header */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto text-center">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">
            Book Now
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
            Schedule Your Session
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Ready to create something beautiful together? 
            Fill out the form below and we'll be in touch within 24-48 hours.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-cream p-6 border border-border">
                <Calendar className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-medium mb-2">Flexible Scheduling</h3>
                <p className="text-muted-foreground font-body text-sm">
                  We accommodate both weekday and weekend sessions. Evening golden hour slots available.
                </p>
              </div>
              <div className="bg-cream p-6 border border-border">
                <Clock className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-medium mb-2">Quick Response</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Expect a response within 24-48 hours. We'll discuss details and confirm your booking.
                </p>
              </div>
              <div className="bg-cream p-6 border border-border">
                <MapPin className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-medium mb-2">Serving Colombo & Beyond</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Based in Colombo, available for travel worldwide. Destination sessions welcome.
                </p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2 bg-card border border-border p-8 md:p-10">
              <h2 className="font-display text-2xl font-medium mb-6">Request a Booking</h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Booking;
