import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
            ¿Listo para <span className="text-accent">Postular?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Aumenta tus posibilidades con asesoría profesional.
            <span className="block mt-2">
              Te guiamos desde el inicio hasta la defensa final.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="group text-lg"
            >
              POSTULAR ASESORÍA
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline-gold" 
              size="xl"
              onClick={() => window.open("https://wa.me/56912345678?text=Hola%2C%20quiero%20información%20sobre%20sus%20servicios", "_blank")}
              className="text-lg"
            >
              <MessageCircle className="mr-2" />
              ESCRIBIR POR WHATSAPP
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              "35+ Proyectos ganadores",
              "92% Tasa de éxito",
              "Atención personalizada",
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-secondary/40 backdrop-blur-sm py-4 px-6 rounded-lg"
              >
                <span className="text-accent font-semibold text-lg">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-primary-foreground/70 pt-8">
            No esperes más. Las convocatorias tienen cupos limitados y fechas de cierre estrictas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;