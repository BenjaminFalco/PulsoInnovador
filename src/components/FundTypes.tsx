import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Rocket } from "lucide-react";

const FundTypes = () => {
  const sercotecFunds = [
    "Capital Semilla",
    "Capital Abeja",
    "CRECE",
    "PAR",
    "Fomento Productivo",
    "Programas regionales",
  ];

  const corfoFunds = [
    "Viraliza",
    "Semilla Inicia",
    "Semilla Expande",
    "Innovación Empresarial",
    "FIC-R Regionales",
    "Nodos de Innovación",
  ];

  return (
    <section id="fondos" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Fondos que <span className="text-accent">Trabajamos</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Especializados en los principales instrumentos de financiamiento público para emprendedores y pymes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SERCOTEC Card */}
            <Card className="p-8 bg-secondary border-accent/20 hover:shadow-gold transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-accent">SERCOTEC</h3>
                </div>
                
                <ul className="space-y-3">
                  {sercotecFunds.map((fund, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-3 text-secondary-foreground"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-lg">{fund}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="gold" 
                  className="w-full"
                  onClick={() => document.getElementById('convocatorias')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver convocatorias SERCOTEC
                </Button>
              </div>
            </Card>

            {/* CORFO Card */}
            <Card className="p-8 bg-secondary border-accent/20 hover:shadow-gold transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-accent">CORFO</h3>
                </div>
                
                <ul className="space-y-3">
                  {corfoFunds.map((fund, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-3 text-secondary-foreground"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-lg">{fund}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="gold" 
                  className="w-full"
                  onClick={() => document.getElementById('convocatorias')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver convocatorias CORFO
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundTypes;