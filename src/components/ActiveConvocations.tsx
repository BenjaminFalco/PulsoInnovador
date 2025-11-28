import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, DollarSign, CheckCircle2, AlertCircle, Clock } from "lucide-react";

const ActiveConvocations = () => {
  const convocations = [
    {
      fund: "Capital Semilla SERCOTEC",
      region: "Región del Bío Bío",
      amount: "$3.500.000",
      requirements: ["Iniciación de actividades", "Proyecto innovador", "Residencia en la región"],
      openDate: "15 Enero 2025",
      closeDate: "28 Febrero 2025",
      daysLeft: 45,
      status: "open",
    },
    {
      fund: "Semilla Inicia CORFO",
      region: "Nacional",
      amount: "$20.000.000",
      requirements: ["Constitución legal", "Equipo multidisciplinario", "Modelo escalable"],
      openDate: "01 Febrero 2025",
      closeDate: "30 Marzo 2025",
      daysLeft: 60,
      status: "upcoming",
    },
    {
      fund: "Capital Abeja",
      region: "Múltiples regiones",
      amount: "$2.000.000",
      requirements: ["Emprendedora mujer", "Iniciación de actividades", "Propuesta de negocio"],
      openDate: "20 Enero 2025",
      closeDate: "15 Febrero 2025",
      daysLeft: 30,
      status: "urgent",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent":
        return "bg-warning text-warning-foreground";
      case "open":
        return "bg-success text-success-foreground";
      case "upcoming":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const handleWhatsAppConvocation = (fund: string) => {
    window.open(
      `https://wa.me/56912345678?text=Hola%2C%20quiero%20postular%20al%20fondo%20${encodeURIComponent(fund)}`,
      "_blank"
    );
  };

  return (
    <section id="convocatorias" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Convocatorias <span className="text-accent">Activas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Revisa las convocatorias disponibles y postula con nuestra asesoría profesional
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {convocations.map((conv, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-gold transition-all duration-300 border-2 border-border hover:border-accent"
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {conv.fund}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getStatusColor(conv.status)}>
                          {conv.status === "urgent" && "⚠️ Cierre próximo"}
                          {conv.status === "open" && "✓ Abierta"}
                          {conv.status === "upcoming" && "Próximamente"}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-accent">
                        {conv.amount}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Monto máximo
                      </div>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span>{conv.region}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-5 w-5 text-accent" />
                        <span>Apertura: {conv.openDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-5 w-5 text-accent" />
                        <span>Cierre: {conv.closeDate}</span>
                      </div>
                      <div className="flex items-center gap-2 font-semibold">
                        <Clock className="h-5 w-5 text-warning" />
                        <span className="text-warning">
                          {conv.daysLeft} días restantes
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-foreground mb-3">Requisitos:</p>
                      {conv.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="hero" 
                      className="flex-1"
                      onClick={() => handleWhatsAppConvocation(conv.fund)}
                    >
                      Postular con nosotros
                    </Button>
                    <Button 
                      variant="outline-gold" 
                      className="flex-1"
                    >
                      Descargar bases
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Alert Box */}
          <Card className="p-6 bg-warning/10 border-warning">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  ¿No encuentras el fondo que buscas?
                </h4>
                <p className="text-muted-foreground mb-4">
                  Contáctanos para recibir información sobre próximas convocatorias y el fondo más adecuado para tu proyecto.
                </p>
                <Button 
                  variant="outline-gold"
                  onClick={() => window.open("https://wa.me/56912345678?text=Hola%2C%20quiero%20información%20sobre%20convocatorias", "_blank")}
                >
                  Consultar por WhatsApp
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ActiveConvocations;