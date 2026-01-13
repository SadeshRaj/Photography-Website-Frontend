import { Link } from "react-router-dom";
import { Camera, Heart, Building2, PartyPopper, Users, Sparkles, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactBox } from "@/components/ContactBox";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

import weddingImg from "@/assets/Wedding Phhoto (2).jpg";
import portraitImg from "@/assets/M-Portrait3 (1).jpg";
import commercialImg from "@/assets/portfolio-commercial.jpg";
import eventImg from "@/assets/Event2.jpg";
import familyImg from "@/assets/Family Session.jpg";
import editorialImg from "@/assets/Fashion2.jpeg";

const services = [
    {
        icon: Heart,
        title: "Wedding Photography",
        description: "Your love story deserves to be told beautifully. From the getting-ready moments to the last dance, we capture every emotion, glance, and detail that makes your day uniquely yours.",
        features: ["Full day coverage", "Second photographer available", "Engagement session", "Custom wedding album", "Online gallery"],
        image: weddingImg,
    },
    {
        icon: Camera,
        title: "Portrait Sessions",
        description: "Whether it's professional headshots, personal branding, or creative portraits, we create images that capture your authentic self with elegance and style.",
        features: ["Studio or location", "Wardrobe consultation", "Hair & makeup coordination", "Digital images", "Print options"],
        image: portraitImg,
    },
    {
        icon: Building2,
        title: "Commercial Photography",
        description: "Elevate your brand with compelling imagery. From product photography to corporate campaigns, we deliver visuals that resonate with your audience.",
        features: ["Product photography", "Lifestyle imagery", "Brand storytelling", "High-resolution files", "Commercial licensing"],
        image: commercialImg,
    },
    {
        icon: PartyPopper,
        title: "Event Coverage",
        description: "Corporate galas, conferences, celebrations—we document your events with discretion and artistry, creating a visual narrative of the occasion.",
        features: ["Corporate events", "Galas & awards", "Conferences", "Same-day previews", "Quick turnaround"],
        image: eventImg,
    },
    {
        icon: Users,
        title: "Family Sessions",
        description: "Cherish the moments that matter most. Our family sessions are relaxed, fun, and designed to capture genuine connections between loved ones.",
        features: ["Outdoor or studio", "Extended family welcome", "Generational portraits", "Holiday mini sessions", "Annual packages"],
        image: familyImg,
    },
    {
        icon: Sparkles,
        title: "Editorial & Fashion",
        description: "For magazines, lookbooks, and creative campaigns, we bring fashion-forward vision and technical excellence to every editorial project.",
        features: ["Editorial spreads", "Lookbooks", "Campaign shoots", "Creative direction", "Post-production"],
        image: editorialImg,
    },
];

const Services = () => {
    return (
        <main className="min-h-screen pt-20">
            <Navbar />

            {/* Page Header - Centered Vertically and Horizontally */}
            <section className="section-padding bg-cream min-h-[50vh] flex flex-col items-center justify-center">
                <ScrollReveal>
                    <div className="container-wide mx-auto text-center">
                        <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">
                            What We Do
                        </p>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
                            Our Services
                        </h1>
                        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                            Comprehensive photography services tailored to capture your most
                            important moments with artistry and care.
                        </p>
                    </div>
                </ScrollReveal>
            </section>

            {/* Services List */}
            <section className="section-padding bg-background">
                <div className="container-wide mx-auto">
                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <ScrollReveal key={index} width="100%">
                                <div
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                                >
                                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                        <service.icon className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                                        <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
                                            {service.title}
                                        </h2>
                                        <p className="text-muted-foreground font-body leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <ul className="grid grid-cols-2 gap-2 mb-8">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm font-body">
                                                    <ArrowRight className="w-4 h-4 text-primary" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button variant="elegant" asChild>
                                            <Link to="/booking">Book This Service</Link>
                                        </Button>
                                    </div>
                                    <div className={`relative overflow-hidden aspect-[4/3] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Box */}
            <section className="section-padding bg-cream">
                <ScrollReveal width="100%">
                    <div className="container-narrow mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
                                Have Questions?
                            </h2>
                            <p className="text-muted-foreground font-body leading-relaxed">
                                Every project is unique. Reach out to discuss your vision,
                                and we'll create a custom approach that's perfect for you.
                            </p>
                        </div>
                        <ContactBox />
                    </div>
                </ScrollReveal>
            </section>

            <Footer />
        </main>
    );
};

export default Services;