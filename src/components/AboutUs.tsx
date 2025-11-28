import { Card } from "@/components/ui/card";
import { Award, Users, MapPin } from "lucide-react";

const AboutUs = () => {
  const stats = [
    {
      icon: Award,
      title: "Más de 35 ganadores",
      description: "Emprendedores y pymes que lograron sus fondos",
    },
    {
      icon: Users,
      title: "Equipo profesional formalizado",
      description: "Consultores especializados certificados",
    },
    {
      icon: MapPin,
      title: "Atención a todo Chile",
      description: "Asesoría remota y presencial disponible",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Quiénes <span className="text-accent">Somos</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Somos una consultora especialista en formulación de proyectos para emprendedores, 
            mujeres, pymes y empresas formales. Nuestro enfoque es estratégico: estudiamos fondo 
            por fondo, diseñamos tu modelo de negocio y te preparamos para defenderlo con éxito.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-gold transition-all duration-300 hover:-translate-y-2 bg-card border-border"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-gradient-gold rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {stat.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;