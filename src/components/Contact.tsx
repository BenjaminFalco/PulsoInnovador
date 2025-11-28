import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "+56 9 5203 9060",
      action: () => window.open("tel:+56952039060"),
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+56 9 5203 9060",
      action: () => window.open("https://wa.me/56912345678?text=Hola%2C%20quiero%20información", "_blank"),
    },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Contáctanos <span className="text-accent">Hoy</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Estamos disponibles para responder tus consultas y comenzar tu proceso de postulación
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-secondary border-accent/20 hover:shadow-gold transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  onClick={info.action}
                >
                  <div className="space-y-3 text-center">
                    <div className="p-3 bg-accent rounded-lg w-fit mx-auto">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary-foreground/70 mb-1">
                        {info.title}
                      </p>
                      <p className="font-semibold text-secondary-foreground">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Schedule Card */}
          <Card className="p-8 bg-secondary border-accent/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-accent rounded-lg">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-foreground mb-1">
                    Horario de atención
                  </h3>
                  <p className="text-secondary-foreground/80">
                    Lunes a Viernes: 9:00 - 18:00
                  </p>
                  <p className="text-secondary-foreground/80">
                    Sábados: 10:00 - 14:00
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero"
                  onClick={() => window.open("https://wa.me/56952039060?text=Hola%2C%20quiero%20agendar%20una%20reunión", "_blank")}
                >
                  Agendar reunión
                </Button>
                <Button 
                  variant="outline-gold"
                  onClick={() => window.open("tel:+56952039060")}
                >
                  Llamar ahora
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;