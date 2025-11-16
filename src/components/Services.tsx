import { Heart, Users, User, TrendingUp, GraduationCap, ClipboardList } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: User,
    title: "Orientación Individual para Solteros",
    description: "Apoyo para adultos con deseos de establecer relaciones saludables. Trabajamos en el manejo de la ansiedad, la comunicación operativa y la construcción de un perfil de pareja atractivo y auténtico."
  },
  {
    icon: Heart,
    title: "Terapia de Pareja",
    description: "Acompañamiento profesional para parejas que enfrentan conflictos, problemas de comunicación, infidelidad o estancamiento. El objetivo es restablecer la conexión, redefinir acuerdos y construir una dinámica más operativa."
  },
  {
    icon: Users,
    title: "Orientación Familiar",
    description: "Asesoría enfocada en mejorar la dinámica familiar, establecer límites claros, gestionar conflictos generacionales y fomentar una comunicación abierta y respetuosa entre sus miembros."
  },
  {
    icon: TrendingUp,
    title: "Desarrollo del Adulto Operativo",
    description: "Un enfoque intensivo para el manejo de la libertad y el incremento de la tolerancia a la frustración, habilidades esenciales para el éxito personal y profesional en el mundo moderno."
  },
  {
    icon: GraduationCap,
    title: "Talleres en Orientación de la Conducta",
    description: "Programas educativos grupales diseñados para desarrollar habilidades específicas y promover el crecimiento personal en un ambiente de aprendizaje colaborativo."
  },
  {
    icon: ClipboardList,
    title: "Evaluaciones Psicológicas",
    description: "Evaluaciones especializadas para identificar fortalezas y áreas de mejora cognitiva, proporcionando una base sólida para intervenciones personalizadas."
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Servicios Profesionales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios especializados para tu bienestar emocional
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-xl">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2 text-card-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
