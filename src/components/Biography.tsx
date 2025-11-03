import oliverPhoto from "@/assets/oliver.png";

const Biography = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img 
              src={oliverPhoto} 
              alt="Oliver Hernández - Psicólogo" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="animate-fade-in space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Oliver Hernández
            </h2>
            <p className="text-xl text-primary font-semibold">
              Psicólogo con Maestría en Orientación de la Conducta
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Profesional dedicado al bienestar emocional y al desarrollo de habilidades operativas 
              para enfrentar los desafíos de la vida moderna. Mi enfoque se centra en proporcionar 
              herramientas prácticas y efectivas para mejorar la calidad de vida de mis pacientes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Con experiencia en terapia individual, de pareja y familiar, trabajo para ayudar a 
              las personas a construir relaciones más saludables y a desarrollar su máximo potencial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
