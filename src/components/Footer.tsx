import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">
              PULSO INNOVADOR
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Consultora especializada en postulaciones a fondos SERCOTEC y CORFO. 
              Tu éxito es nuestro compromiso.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-accent">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById('fondos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Fondos Disponibles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('convocatorias')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Convocatorias Activas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Postular Ahora
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-accent">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="tel:+56912345678" className="hover:text-accent transition-colors">
                  +56 9 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="mailto:contacto@pulsoinnovador.com" className="hover:text-accent transition-colors">
                  contacto@pulsoinnovador.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Concepción, Región del Bío Bío</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-accent">Síguenos</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 bg-secondary rounded-lg hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-secondary rounded-lg hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-secondary rounded-lg hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-primary-foreground/60 pt-4">
              Horario: Lunes a Viernes 9:00-18:00<br />
              Sábados 10:00-14:00
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>
            © {currentYear} Pulso Innovador Consultores. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <button className="hover:text-accent transition-colors">
              Términos y Condiciones
            </button>
            <button className="hover:text-accent transition-colors">
              Política de Privacidad
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;