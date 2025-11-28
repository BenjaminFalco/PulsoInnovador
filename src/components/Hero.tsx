import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/56912345678?text=Hola%2C%20quiero%20postular%20a%20fondos%20SERCOTEC%20o%20CORFO", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight">
            PULSO INNOVADOR
            <span className="block text-accent mt-2">CONSULTORES</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Expertos en postulaciones a fondos SERCOTEC y CORFO.
            <span className="block mt-2 text-accent font-semibold">Más de 35 emprendedores y pymes ganadores.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="xl"
              onClick={handleWhatsApp}
              className="group"
            >
              Postular ahora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline-gold" 
              size="xl"
              onClick={() => document.getElementById('fondos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Revisar fondos disponibles
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              "Proyecto completo",
              "Video pitch profesional",
              "Modelo Canvas estratégico",
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-center gap-2 text-primary-foreground/90 bg-primary/40 backdrop-blur-sm py-3 px-4 rounded-lg"
              >
                <CheckCircle2 className="text-success h-5 w-5 flex-shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-base text-primary-foreground/80 pt-4">
            Acompañamiento completo: proyecto, pitch, Canvas, visita a terreno y defensa.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;