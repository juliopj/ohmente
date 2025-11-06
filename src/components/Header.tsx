import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo2.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg py-3" : "py-4"
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`rounded-2xl p-3 transition-all duration-300 ${
            isScrolled ? "scale-90" : "scale-100"
          }`}>
            <img src={logo} alt="OH Mente Logo" className="h-20 w-auto" />
          </div>
        </div>
        
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Servicios
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("citas")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Agendar Cita
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("ubicacion")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Ubicación
            </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="glass-effect p-2 rounded-lg">
              <Menu className="h-6 w-6 text-foreground" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <nav className="flex flex-col gap-6 mt-8">
              <button
                onClick={() => {
                  scrollToSection("servicios");
                  setIsOpen(false);
                }}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => {
                  scrollToSection("citas");
                  setIsOpen(false);
                }}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Agendar Cita
              </button>
              <button
                onClick={() => {
                  scrollToSection("ubicacion");
                  setIsOpen(false);
                }}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Ubicación
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
