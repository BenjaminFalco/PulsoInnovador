import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Video, 
  Layout, 
  FileCheck, 
  MessageSquare, 
  Target 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Asesoría Fondo Completa",
      description: "Evaluación, selección del fondo más adecuado y formulación estratégica del proyecto desde cero.",
    },
    {
      icon: Layout,
      title: "Diseño Modelo Canvas",
      description: "Desarrollo completo de tu modelo de negocio con Canvas estratégico y validado.",
    },
    {
      icon: Video,
      title: "Guión y edición de video pitch",
      description: "Creación profesional de tu video pitch: guión, grabación, edición y postproducción.",
    },
    {
      icon: FileCheck,
      title: "Revisión documental y requisitos",
      description: "Verificación exhaustiva de documentos y cumplimiento de requisitos administrativos.",
    },
    {
      icon: MessageSquare,
      title: "Preparación para defensa ante comité",
      description: "Entrenamiento completo para defender tu proyecto frente al comité evaluador.",
    },
    {
      icon: Target,
      title: "Mock entrevista + visita a terreno",
      description: "Simulación de entrevista y acompañamiento en visita técnica a terreno.",
    },
  ];

  const handleServiceRequest = (service: string) => {
    window.open(
      `https://wa.me/56912345678?text=Hola%2C%20quiero%20solicitar%20${encodeURIComponent(service)}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Nuestros <span className="text-accent">Servicios</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Asesoría integral para maximizar tus posibilidades de éxito en la postulación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-secondary border-accent/20 hover:shadow-gold transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="space-y-4">
                    <div className="p-4 bg-accent rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-foreground">
                      {service.title}
                    </h3>
                    <p className="text-secondary-foreground/80 leading-relaxed">
                      {service.description}
                    </p>
                    <Button 
                      variant="outline-gold" 
                      className="w-full"
                      onClick={() => handleServiceRequest(service.title)}
                    >
                      Solicitar asesoría
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <Card className="p-8 bg-gradient-gold text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="text-3xl font-bold text-primary">
                ¿Necesitas un paquete personalizado?
              </h3>
              <p className="text-lg text-primary/80">
                Podemos armar un plan de asesoría ajustado a tus necesidades específicas y presupuesto.
              </p>
              <Button 
                variant="default" 
                size="lg"
                onClick={() => window.open("https://wa.me/56912345678?text=Hola%2C%20quiero%20cotizar%20un%20paquete%20personalizado", "_blank")}
              >
                Cotizar ahora
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;