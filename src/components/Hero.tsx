import { useEffect, useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const words = ["personales", "familiares", "de pareja"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  type Phase = "typing" | "pause" | "erasing";
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    const typingDuration = 1600;
    const pauseDuration = 900;
    const erasingDuration = 700;

    let timer: number;

    if (phase === "typing") {
      timer = window.setTimeout(() => setPhase("pause"), typingDuration);
    } else if (phase === "pause") {
      timer = window.setTimeout(() => setPhase("erasing"), pauseDuration);
    } else if (phase === "erasing") {
      timer = window.setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setPhase("typing");
      }, erasingDuration);
    }

    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(250, 245, 240, 0.65), rgba(250, 245, 240, 0.65)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto text-center max-w-4xl animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight text-balance">
          <span>Te ayudamos a mejorar y superar situaciones</span>
          <br />
          <span className="relative inline-block min-h-[1.2em] min-w-[280px] md:min-w-[420px]">
            <span
              className="absolute inset-0 flex items-center justify-center overflow-hidden whitespace-nowrap border-r-4 border-primary transition-all duration-1000"
              style={{
                maxWidth: phase === "erasing" ? "0" : "100%",
              }}
            >
              <span className="text-primary">{words[currentWordIndex]}</span>
            </span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Acompañamiento profesional para construir relaciones más operativas y alcanzar tu mejor versión
        </p>
      </div>
    </section>
  );
};

export default Hero;
