import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico inicial",
      description: "Reunión para conocer tu proyecto, objetivos y necesidades específicas.",
    },
    {
      number: "02",
      title: "Evaluación del fondo más adecuado",
      description: "Análisis de convocatorias disponibles y selección estratégica del fondo ideal.",
    },
    {
      number: "03",
      title: "Recolección de antecedentes",
      description: "Levantamiento de toda la información y documentación necesaria.",
    },
    {
      number: "04",
      title: "Diseño estratégico del modelo de negocio",
      description: "Desarrollo del Canvas y estructura de valor de tu emprendimiento.",
    },
    {
      number: "05",
      title: "Formulación técnica del proyecto",
      description: "Redacción profesional del proyecto completo según bases del fondo.",
    },
    {
      number: "06",
      title: "Guión + video pitch",
      description: "Creación y producción del video pitch con estándares profesionales.",
    },
    {
      number: "07",
      title: "Preparación para defensa",
      description: "Entrenamiento y simulación de entrevista ante comité evaluador.",
    },
    {
      number: "08",
      title: "Acompañamiento hasta el cierre",
      description: "Seguimiento completo del proceso, visita a terreno y cierre exitoso.",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Nuestra <span className="text-accent">Metodología</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un proceso estructurado, probado y diseñado para maximizar tus posibilidades de éxito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-gold transition-all duration-300 border-l-4 border-l-accent group hover:-translate-y-1"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center font-bold text-primary text-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Timeline Visual */}
          <div className="relative pt-8">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;