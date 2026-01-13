import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<"loading" | "reveal" | "exit">("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Transition phases
    const revealTimer = setTimeout(() => setPhase("reveal"), 1500);
    const exitTimer = setTimeout(() => setPhase("exit"), 2500);
    const completeTimer = setTimeout(() => onComplete(), 3200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-foreground transition-all duration-700 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo / Brand */}
      <div
        className={`text-center transition-all duration-700 ${
          phase === "loading" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}
      >
        <h1 className="font-display text-4xl md:text-6xl text-background font-medium tracking-wide mb-4">
          Lumière
        </h1>
        <p className="text-background/60 font-body text-sm tracking-[0.3em] uppercase">
          Photography Studio
        </p>
      </div>

      {/* Loading Bar */}
      <div
        className={`mt-12 w-48 transition-all duration-500 ${
          phase === "loading" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-[1px] bg-background/20 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>

      {/* Reveal Animation - Center Circle */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
          phase === "reveal" ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
      </div>

      {/* Split Curtain Effect */}
      <div
        className={`absolute inset-0 flex transition-transform duration-700 ease-in-out ${
          phase === "exit" ? "" : ""
        }`}
      >
        <div
          className={`w-1/2 h-full bg-foreground transition-transform duration-700 ease-in-out origin-left ${
            phase === "exit" ? "-translate-x-full" : "translate-x-0"
          }`}
        />
        <div
          className={`w-1/2 h-full bg-foreground transition-transform duration-700 ease-in-out origin-right ${
            phase === "exit" ? "translate-x-full" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
};
