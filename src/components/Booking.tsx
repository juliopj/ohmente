import { useState, useEffect } from "react";
import { Calendar, Video, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import confetti from "canvas-confetti";

const calendarUrls = {
  presencial: "https://cal.com/oh-mente-5orhhh/consulta-presencial",
  online: "https://cal.com/oh-mente-5orhhh/consulta-online"
};

const Booking = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingUrl, setBookingUrl] = useState("");
  const [bookingTitle, setBookingTitle] = useState("");

  useEffect(() => {
    const handleBookingSuccess = (event: MessageEvent) => {
      // Escuchamos solo los mensajes de cal.com por seguridad
      if (event.origin !== "https://cal.com") return;

      if (event.data.type === 'bookingSuccessful') {
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 },
          zIndex: 10000 // Asegura que el confeti aparezca sobre el panel
        });
        // Opcional: cerrar el panel después de unos segundos
        setTimeout(() => setIsOpen(false), 3000);
      }
    };

    window.addEventListener('message', handleBookingSuccess);
    return () => window.removeEventListener('message', handleBookingSuccess);
  }, []);

  const handleBookingClick = (type: "presencial" | "online") => {
    setBookingUrl(calendarUrls[type]);
    setBookingTitle(type === "presencial" ? "Agendar Cita Presencial" : "Agendar Cita Online");
    setIsOpen(true);
  };

  return (
    <section id="citas" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Agenda tu Consulta
          </h2>
          <p className="text-xl text-muted-foreground">
            Elige la modalidad que mejor se adapte a tus necesidades
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border border-border">
            <div className="mb-6">
              <div className="inline-block p-4 bg-primary/10 rounded-xl mb-4">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Consulta Presencial</h3>
              <p className="text-muted-foreground mb-4">
                Atención personalizada en nuestro consultorio en Caracas
              </p>
              <div className="text-4xl font-bold text-primary mb-6">$50</div>
            </div>
            <Button 
              onClick={() => handleBookingClick("presencial")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Cita Presencial
            </Button>
          </div>
          
          <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border border-border" style={{ animationDelay: "100ms" }}>
            <div className="mb-6">
              <div className="inline-block p-4 bg-accent/10 rounded-xl mb-4">
                <Video className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Consulta Online</h3>
              <p className="text-muted-foreground mb-4">
                Atención profesional desde la comodidad de tu hogar
              </p>
              <div className="text-4xl font-bold text-accent mb-6">$40</div>
            </div>
            <Button 
              onClick={() => handleBookingClick("online")}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              size="lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Cita Online
            </Button>
          </div>
        </div>
      </div>

      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        {/* 
          En escritorio (md), movemos el diálogo a la derecha.
          `md:left-auto md:right-8 md:translate-x-0` anula el centrado y lo posiciona a la derecha.
        */}
        <DrawerContent className="h-[85vh] md:max-w-2xl md:left-auto md:right-8 md:translate-x-0">
          <DrawerHeader className="text-left">
            <DrawerTitle>{bookingTitle}</DrawerTitle>
            <DrawerDescription>
              Selecciona la fecha y hora que mejor te convenga.
            </DrawerDescription>
          </DrawerHeader>
          {/* Contenedor para escalar el iframe */}
          <div className="flex-1 px-4 pb-4 overflow-hidden">
            {bookingUrl && (
              /* Escalamos el iframe y ajustamos sus dimensiones para que llene el contenedor */
              <iframe src={bookingUrl} className="w-[111.11%] h-[111.11%] border-0 rounded-lg scale-[0.9] origin-top-left" title={bookingTitle}></iframe>
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default Booking;
