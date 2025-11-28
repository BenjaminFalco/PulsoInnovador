import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      business: "EcoPackaging Chile",
      fund: "Capital Semilla SERCOTEC",
      comment: "El equipo de Pulso Innovador fue fundamental para ganar mi Capital Semilla. Su experiencia y profesionalismo marcaron la diferencia. Totalmente recomendados.",
    },
    {
      name: "Roberto Silva",
      business: "TechSolutions SpA",
      fund: "Semilla Inicia CORFO",
      comment: "Gracias a la asesoría estratégica logramos estructurar un proyecto sólido que convenció al comité evaluador. El acompañamiento fue completo, desde el Canvas hasta la defensa final.",
    },
    {
      name: "Camila Fernández",
      business: "Artesanías del Sur",
      fund: "Capital Abeja",
      comment: "Como mujer emprendedora, encontré en Pulso Innovador el apoyo que necesitaba. Me guiaron paso a paso y hoy tengo mi negocio en marcha gracias al Capital Abeja que ganamos juntas.",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Lo que dicen nuestros <span className="text-accent">Clientes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Testimonios reales de emprendedores que lograron sus fondos con nuestra asesoría
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-gold transition-all duration-300 hover:-translate-y-2 relative"
              >
                <Quote className="absolute top-4 right-4 h-12 w-12 text-accent/20" />
                <div className="space-y-4 relative z-10">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-accent font-medium">
                      {testimonial.business}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Fondo: {testimonial.fund}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;