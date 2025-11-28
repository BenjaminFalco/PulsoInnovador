import { Card } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Pablo Carvajal",
      role: "ᴀᴅᴍ ᴘúʙʟɪᴄᴀ ʏ ᴄɪᴇɴᴄɪᴀꜱ ᴘᴏʟíᴛɪᴄᴀꜱ",
      specialty: "Estrategia y formulación de proyectos",
      description: "15+ años de experiencia en evaluación de proyectos de inversión y fondos públicos.",
    },
    {
      name: "Matias Sepulveda",
      role: "ᴀᴅᴍ ᴘúʙʟɪᴄᴀ ʏ ᴄɪᴇɴᴄɪᴀꜱ ᴘᴏʟíᴛɪᴄᴀꜱ",
      specialty: "Asesoría en fondos públicos",
      description: "Experto en diseño de modelos de negocio innovadores y pitch profesional.",
    },
    {
      name: "Equipo Pulso Innovador",
      role: "Red de Consultores",
      specialty: "Cobertura regional",
      description: "Equipo multidisciplinario con presencia en Ñuble, Concepción y regiones de Chile.",
    },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Nuestro <span className="text-accent">Equipo</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Profesionales especializados comprometidos con el éxito de tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="p-8 bg-secondary border-accent/20 hover:shadow-gold transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="space-y-4">
                  {/* Avatar Placeholder */}
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-gold flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-accent">
                      {member.name}
                    </h3>
                    <p className="text-secondary-foreground font-medium mt-1">
                      {member.role}
                    </p>
                    <p className="text-accent/80 text-sm mt-2">
                      {member.specialty}
                    </p>
                  </div>

                  <p className="text-secondary-foreground/80 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4 pt-4">
                   
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;