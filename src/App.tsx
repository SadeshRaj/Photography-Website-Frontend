import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SplashScreen } from "@/components/SplashScreen";
import { PageTransition } from "@/components/PageTransition";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <PageTransition key={location.pathname}>
            <Routes location={location}>
                <Route path="/" element={<Index />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </PageTransition>
    );
};

const App = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        // Only show splash on first visit
        const hasVisited = sessionStorage.getItem("hasVisited");
        if (hasVisited) {
            setShowSplash(false);
            setHasLoaded(true);
        }
    }, []);

    const handleSplashComplete = () => {
        setShowSplash(false);
        setHasLoaded(true);
        sessionStorage.setItem("hasVisited", "true");
    };

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
                <div className={hasLoaded ? "opacity-100" : "opacity-0"}>
                    <BrowserRouter>
                        <AnimatedRoutes />
                    </BrowserRouter>
                </div>
                <Analytics /> {/* <--- Added Component */}
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;