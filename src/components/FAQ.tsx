import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Puedo postular sin iniciación de actividades?",
      answer: "Sí, dependiendo del fondo. Algunos como Capital Semilla permiten postular sin formalización, mientras que otros como Semilla Inicia requieren constitución legal. Evaluamos tu caso y te orientamos al fondo más adecuado.",
    },
    {
      question: "¿Qué pasa si no gano el fondo?",
      answer: "Te entregamos un informe detallado de retroalimentación y te ayudamos a mejorar tu proyecto para la siguiente convocatoria. Nuestro compromiso es acompañarte hasta lograr tu objetivo.",
    },
    {
      question: "¿En cuánto tiempo me responden después de postular?",
      answer: "Los tiempos varían según el fondo, pero generalmente oscilan entre 45 y 90 días desde el cierre de la convocatoria. Te mantenemos informado durante todo el proceso de evaluación.",
    },
    {
      question: "¿Qué incluye la asesoría completa?",
      answer: "Incluye: diagnóstico inicial, selección del fondo, diseño del Canvas, formulación del proyecto, guión y edición del pitch, revisión documental, preparación para defensa y acompañamiento en visita a terreno.",
    },
    {
      question: "¿Puedo postular desde cualquier región de Chile?",
      answer: "Sí, atendemos a emprendedores de todo Chile. Ofrecemos asesoría remota y, cuando es necesario, coordinamos visitas presenciales o nos conectamos con consultores locales de nuestra red.",
    },
    {
      question: "¿Necesito experiencia previa en emprendimiento?",
      answer: "No es necesario. Trabajamos con emprendedores de todos los niveles, desde ideas iniciales hasta empresas en funcionamiento que buscan escalar. Adaptamos nuestra metodología a tu realidad.",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Preguntas <span className="text-accent">Frecuentes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Resolvemos las dudas más comunes sobre nuestros servicios y el proceso de postulación
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-gold transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;