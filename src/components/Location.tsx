import { MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import oficinaPhoto from "@/assets/oficina.png";

const Location = () => {
  const address = "Torre Valoralta II, Piso 8 Ofic. 8-03. Av. Rómulo Gallegos, Sebucán. Caracas.";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Torre+Valoralta+II,+Piso+8+Ofic.+8-03,+Av.+Romulo+Gallegos,+Sebucan,+Caracas";
  const instagramUrl = "https://www.instagram.com/psicologo.oliverhc/";

  return (
    <section id="ubicacion" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nuestra Ubicación
          </h2>
          <p className="text-xl text-muted-foreground">
            Visítanos en nuestro consultorio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img 
              src={oficinaPhoto} 
              alt="Oficina OH Mente" 
              className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Dirección</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={() => window.open(googleMapsUrl, "_blank")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Ubícanos en Google Maps
            </Button>
            
            <div className="pt-6 border-t border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground text-center">
                Síguenos en Redes Sociales
              </h3>
              <Button
                onClick={() => window.open(instagramUrl, "_blank")}
                variant="outline"
                className="w-full border-primary/20 hover:bg-primary/10"
                size="lg"
              >
                <Instagram className="mr-2 h-5 w-5 text-primary" />
                <span className="text-primary">@oh_mente</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
