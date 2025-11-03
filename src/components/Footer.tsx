import logo from "@/assets/logo.png";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="glass-effect rounded-2xl p-3">
            <img src={logo} alt="OH Mente Logo" className="h-16 w-auto" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">OH Mente</h3>
            <p className="text-muted-foreground max-w-md">
              Psicólogo Oliver Hernández | Maestría en Orientación de la Conducta
            </p>
          </div>
          
          <div className="pt-6 border-t border-border w-full">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Hecho con <Heart className="w-4 h-4 text-accent fill-accent" /> para tu bienestar
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()}{" "}
              <a
                href="https://jpsolutions.online"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary transition-colors"
              >
                JPSolutions
              </a>
              . Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
