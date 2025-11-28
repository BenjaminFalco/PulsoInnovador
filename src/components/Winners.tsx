import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

const Winners = () => {
  const winners = [
    {
      name: "María González",
      business: "EcoPackaging Chile",
      fund: "Capital Semilla SERCOTEC",
      region: "Región del Bío Bío",
      year: "2024",
    },
    {
      name: "Roberto Silva",
      business: "TechSolutions SpA",
      fund: "Semilla Inicia CORFO",
      region: "Región Metropolitana",
      year: "2024",
    },
    {
      name: "Camila Fernández",
      business: "Artesanías del Sur",
      fund: "Capital Abeja",
      region: "Región de Los Lagos",
      year: "2023",
    },
    {
      name: "Jorge Muñoz",
      business: "Innovación Agrícola",
      fund: "CRECE SERCOTEC",
      region: "Región de La Araucanía",
      year: "2024",
    },
    {
      name: "Daniela Rojas",
      business: "HealthTech Solutions",
      fund: "Semilla Expande CORFO",
      region: "Región de Valparaíso",
      year: "2023",
    },
    {
      name: "Andrés Pinto",
      business: "GreenEnergy Chile",
      fund: "Innovación Empresarial",
      region: "Región de Antofagasta",
      year: "2024",
    },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="h-12 w-12 text-accent" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                +35 <span className="text-accent">Ganadores</span>
              </h2>
            </div>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Emprendedores y pymes que lograron sus fondos con nuestra asesoría profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {winners.map((winner, index) => (
              <Card 
                key={index}
                className="p-6 bg-secondary border-accent/20 hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-accent mb-1">
                        {winner.name}
                      </h3>
                      <p className="text-secondary-foreground font-medium">
                        {winner.business}
                      </p>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      {winner.year}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 pt-2 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-secondary-foreground/70">Fondo:</span>
                      <span className="text-secondary-foreground font-medium">
                        {winner.fund}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-secondary-foreground/70">Región:</span>
                      <span className="text-secondary-foreground font-medium">
                        {winner.region}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <Card className="p-6 bg-gradient-gold text-center">
              <div className="text-4xl font-bold text-primary mb-2">35+</div>
              <div className="text-primary/80 font-medium">Proyectos Ganadores</div>
            </Card>
            <Card className="p-6 bg-gradient-gold text-center">
              <div className="text-4xl font-bold text-primary mb-2">92%</div>
              <div className="text-primary/80 font-medium">Tasa de Éxito</div>
            </Card>
            <Card className="p-6 bg-gradient-gold text-center">
              <div className="text-4xl font-bold text-primary mb-2">$800M+</div>
              <div className="text-primary/80 font-medium">En Fondos Obtenidos</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Winners;