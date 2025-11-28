import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    region: "",
    fundType: "",
    formalized: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*Nueva Postulación*%0A%0A*Nombre:* ${formData.name}%0A*WhatsApp:* ${formData.whatsapp}%0A*Email:* ${formData.email}%0A*Región:* ${formData.region}%0A*Tipo de fondo:* ${formData.fundType}%0A*Formalizado:* ${formData.formalized}%0A*Descripción:* ${formData.description}`;
    
    window.open(`https://wa.me/56912345678?text=${message}`, "_blank");
    
    toast({
      title: "¡Solicitud enviada!",
      description: "Te contactaremos pronto para agendar tu asesoría inicial.",
    });
    
    // Reset form
    setFormData({
      name: "",
      whatsapp: "",
      email: "",
      region: "",
      fundType: "",
      formalized: "",
      description: "",
    });
  };

  return (
    <section id="contacto" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Postula <span className="text-accent">con Nosotros</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Completa el formulario y nos contactaremos contigo para iniciar tu proceso de postulación
            </p>
          </div>

          <Card className="p-8 shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Juan Pérez"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    required
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="+56 9 5203 9060"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region">Región *</Label>
                  <Select 
                    required 
                    value={formData.region} 
                    onValueChange={(value) => setFormData({ ...formData, region: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu región" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="arica-parinacota">Región de Arica y Parinacota</SelectItem>
                      <SelectItem value="tarapaca">Región de Tarapacá</SelectItem>
                      <SelectItem value="antofagasta">Región de Antofagasta</SelectItem>
                      <SelectItem value="atacama">Región de Atacama</SelectItem>
                      <SelectItem value="coquimbo">Región de Coquimbo</SelectItem>
                      <SelectItem value="valparaiso">Región de Valparaíso</SelectItem>
                      <SelectItem value="metropolitana">Región Metropolitana de Santiago</SelectItem>
                      <SelectItem value="ohiggins">
                        Región del Libertador General Bernardo O’Higgins
                      </SelectItem>
                      <SelectItem value="maule">Región del Maule</SelectItem>
                      <SelectItem value="nuble">Región de Ñuble</SelectItem>
                      <SelectItem value="biobio">Región del Biobío</SelectItem>
                      <SelectItem value="araucania">Región de La Araucanía</SelectItem>
                      <SelectItem value="los-rios">Región de Los Ríos</SelectItem>
                      <SelectItem value="los-lagos">Región de Los Lagos</SelectItem>
                      <SelectItem value="aysen">
                        Región de Aysén del General Carlos Ibáñez del Campo
                      </SelectItem>
                      <SelectItem value="magallanes-antartica">
                        Región de Magallanes y de la Antártica Chilena
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fundType">Tipo de fondo de interés *</Label>
                  <Select 
                    required 
                    value={formData.fundType} 
                    onValueChange={(value) => setFormData({ ...formData, fundType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un fondo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="capital-semilla">Capital Semilla SERCOTEC</SelectItem>
                      <SelectItem value="capital-abeja">Capital Abeja</SelectItem>
                      <SelectItem value="semilla-inicia">Semilla Inicia CORFO</SelectItem>
                      <SelectItem value="semilla-expande">Semilla Expande CORFO</SelectItem>
                      <SelectItem value="otro">Otro fondo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="formalized">¿Estás formalizado? *</Label>
                  <Select 
                    required 
                    value={formData.formalized} 
                    onValueChange={(value) => setFormData({ ...formData, formalized: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="si">Sí, tengo iniciación de actividades</SelectItem>
                      <SelectItem value="no">No, aún no me formalizo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Describe tu idea o proyecto *</Label>
                <Textarea
                  id="description"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Cuéntanos brevemente sobre tu proyecto, qué problema resuelve y a quién está dirigido..."
                  rows={6}
                />
              </div>

              <div className="space-y-4 pt-4">
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full"
                >
                  <CheckCircle2 className="mr-2" />
                  QUIERO POSTULAR AHORA
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Al enviar, recibirás confirmación por WhatsApp y email. Nos contactaremos contigo en menos de 24 horas.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;