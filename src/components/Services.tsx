import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Video,
  Layout,
  FileCheck,
  MessageSquare,
  Target,
  Search,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const WHATSAPP_NUMBER = "56952039060";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  tag: "CORFO" | "SERCOTEC" | "Complementario";
};

const services: Service[] = [
  {
    icon: FileText,
    title: "Asesoría Fondo Completa",
    description:
      "Evaluación de tu proyecto, selección del fondo ideal y formulación estratégica desde cero.",
    tag: "CORFO",
  },
  {
    icon: Layout,
    title: "Diseño Modelo Canvas",
    description:
      "Construcción de tu modelo de negocio con un Canvas claro, defendible y alineado al fondo.",
    tag: "SERCOTEC",
  },
  {
    icon: Video,
    title: "Guión y edición de video pitch",
    description:
      "Video pitch profesional: guión, pauta de grabación, edición y cierre orientado a puntaje.",
    tag: "Complementario",
  },
  {
    icon: FileCheck,
    title: "Revisión documental y requisitos",
    description:
      "Chequeo exhaustivo de bases, anexos y documentos para evitar rechazos por forma.",
    tag: "CORFO",
  },
  {
    icon: MessageSquare,
    title: "Preparación para defensa ante comité",
    description:
      "Role play, preguntas difíciles, storytelling y entrenamiento para entrevista con comité.",
    tag: "CORFO",
  },
  {
    icon: Target,
    title: "Mock entrevista + visita a terreno",
    description:
      "Simulación de visita, observaciones clave y preparación de respuestas in situ.",
    tag: "Complementario",
  },
];

const tags: { label: string; value: Service["tag"] | "ALL" }[] = [
  { label: "Todos", value: "ALL" },
  { label: "CORFO", value: "CORFO" },
  { label: "SERCOTEC", value: "SERCOTEC" },
  { label: "Complementarios", value: "Complementario" },
];

const Services = () => {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<Service["tag"] | "ALL">("ALL");

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesTag =
        activeTag === "ALL" ? true : service.tag === activeTag;

      const q = search.toLowerCase();
      const matchesSearch =
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q);

      return matchesTag && matchesSearch;
    });
  }, [search, activeTag]);

  const handleServiceRequest = (service: string) => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hola, me interesa la "${service}" y quiero más información.`
      )}`,
      "_blank"
    );
  };

  const handleCustomPackage = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hola, quiero cotizar un paquete de asesoría personalizado para fondos CORFO / SERCOTEC."
      )}`,
      "_blank"
    );
  };

  return (
    <section id="servicios" className="py-20 bg-primary relative overflow-hidden">
      {/* glow de fondo */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* título + buscador */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-1 text-xs uppercase tracking-[0.2em] text-accent">
              <Sparkles className="h-3 w-3" />
              Servicios especializados en fondos
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
                  Nuestros{" "}
                  <span className="text-accent drop-shadow-[0_0_16px_rgba(255,215,0,0.4)]">
                    Servicios
                  </span>
                </h2>
                <p className="text-lg text-primary-foreground/80 max-w-xl">
                  Elige en qué etapa necesitas apoyo o combínalos en un
                  acompañamiento completo para CORFO, SERCOTEC y otros fondos.
                </p>
              </div>

              {/* search pill estilo historia IG */}
              <Card className="md:w-[360px] bg-gradient-to-r from-secondary/90 to-secondary/60 border border-accent/20 shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
                <div className="flex items-center gap-2 px-4 py-3">
                  <Search className="h-5 w-5 text-accent shrink-0" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="¿En qué fondo podemos ayudarte?"
                    className="w-full bg-transparent text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none"
                  />
                </div>
              </Card>
            </div>

            {/* filtros por tipo de servicio */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {tags.map((tag) => (
                <button
                  key={tag.value}
                  onClick={() =>
                    setActiveTag(tag.value as Service["tag"] | "ALL")
                  }
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                    activeTag === tag.value
                      ? "bg-accent text-black border-accent shadow-[0_0_20px_rgba(255,215,0,0.35)]"
                      : "bg-black/40 text-primary-foreground/70 border-white/10 hover:border-accent/50"
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* lista de servicios: cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="relative p-6 bg-secondary/90 border border-accent/10 hover:border-accent/60 hover:shadow-[0_18px_40px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-2 group"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  {/* punto lateral tipo lista IG */}
                  <span className="absolute left-3 top-6 h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,215,0,0.9)]" />

                  <div className="ml-4 space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="p-3 rounded-xl bg-black/50 group-hover:bg-accent/15 transition-colors">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <span className="px-2 py-1 rounded-full text-[11px] uppercase tracking-wide bg-black/40 text-primary-foreground/70 border border-white/10">
                        {service.tag}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-secondary-foreground">
                        {service.title}
                      </h3>
                      <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <Button
                      variant="outline-gold"
                      className="w-full flex items-center justify-between gap-2 group-hover:bg-accent group-hover:text-black"
                      onClick={() => handleServiceRequest(service.title)}
                    >
                      <span>Solicitar asesoría</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <Card className="relative mt-4 overflow-hidden border border-accent/40 bg-gradient-to-r from-amber-200 via-amber-100 to-emerald-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.08),_transparent_55%)]" />
            <div className="relative max-w-3xl mx-auto px-6 py-10 text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                ¿No sabes por dónde partir?
              </h3>
              <p className="text-primary/80 text-base md:text-lg">
                Con una sola llamada revisamos tu idea, te decimos a qué fondo
                puedes postular y qué servicios necesitas realmente. Sin
                compromiso.
              </p>
              <Button
                variant="default"
                size="lg"
                onClick={handleCustomPackage}
                className="mt-2 shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
              >
                Hablar ahora por WhatsApp
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
