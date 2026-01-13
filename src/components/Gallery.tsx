import { useState, useMemo } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import portfolioWedding from "@/assets/Wedding-Photo.jpg";
import portfolioPortrait from "@/assets/Portrait.jpg";
import portfolioMPortrait from "@/assets/M-Portrait (1).jpg";
import portfolioEvent from "@/assets/portfolio-event.jpg";
import portfolioEvent1 from "@/assets/Event1.png";
import portfolioEvent2 from "@/assets/Event2.jpg";
import portfolioEvent3 from "@/assets/Event3.png";
import portfolioCommercial from "@/assets/portfolio-commercial.jpg";
import portfolioCommercial1 from "@/assets/Commercial1.jpeg";
import portfolioCommercial2 from "@/assets/Commercial2.jpeg";
import portfolioCommercial3 from "@/assets/Commercial3.jpeg";
import portfolioCommercial4 from "@/assets/Commercial4.jpeg";
import portfolioFamily from "@/assets/portfolio-family.jpg";
import portfolioFamily1 from "@/assets/Family1.png";
import heroWedding from "@/assets/hero-wedding.jpg";

const images = [
  { src: heroWedding, alt: "Wedding Couple", category: "Wedding" },
  { src: portfolioPortrait, alt: "Portrait session", category: "Portrait" },
  { src: portfolioMPortrait, alt: "Portrait session", category: "Portrait" },
  { src: portfolioWedding, alt: "Wedding couple", category: "Wedding" },
  { src: portfolioCommercial, alt: "Product photography", category: "Commercial" },
  { src: portfolioCommercial1, alt: "Product photography", category: "Commercial" },
  { src: portfolioCommercial2, alt: "Product photography", category: "Commercial" },
  { src: portfolioCommercial3, alt: "Product photography", category: "Commercial" },
  { src: portfolioCommercial4, alt: "Product photography", category: "Commercial" },
  { src: portfolioEvent2, alt: "Gala event", category: "Events" },
  { src: portfolioEvent, alt: "Gala event", category: "Events" },
  { src: portfolioEvent3, alt: "Gala event", category: "Events" },
  { src: portfolioEvent1, alt: "Gala event", category: "Events" },
  { src: portfolioFamily1, alt: "Family portrait", category: "Family" },
  { src: portfolioFamily, alt: "Family portrait", category: "Family" },
];

const categories = ["All", "Wedding", "Portrait", "Commercial", "Events", "Family"];

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() =>
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory),
    [selectedCategory]
  );

  // Split images into 3 columns for masonry effect
  const columns = useMemo(() => {
    const cols: typeof images[] = [[], [], []];
    filteredImages.forEach((img, i) => {
      cols[i % 3].push(img);
    });
    return cols;
  }, [filteredImages]);

  const openLightbox = (imgSrc: string) => {
    const index = images.findIndex((img) => img.src === imgSrc);
    setLightboxIndex(index);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 font-body text-sm tracking-wide transition-all duration-300 rounded-full ${selectedCategory === category
                ? "bg-foreground text-background scale-105 shadow-md"
                : "bg-transparent text-muted-foreground hover:text-foreground border border-border hover:border-foreground hover:bg-muted/50"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {col.map((image, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={image.src}
                  className="group cursor-pointer relative overflow-hidden rounded-sm"
                  onClick={() => openLightbox(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-body tracking-widest uppercase text-xs border border-white px-4 py-2 bg-black/20 backdrop-blur-sm">
                      View
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 bg-black/20 p-2 rounded-full hover:bg-black/40"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full hidden md:block"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={40} />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full hidden md:block"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={40} />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={images[lightboxIndex].src}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 font-body tracking-wide text-sm bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
              {images[lightboxIndex].category} • {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
