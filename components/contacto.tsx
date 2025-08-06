"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contacto() {
  const getEmailByLevel = (level: string) => {
    const emailMapping: { [key: string]: string } = {
      Administracion: "administracion@corazondejesus.edu.ar",
      "Nivel Inicial": "secretariainicial@corazondejesus.edu.ar",
      "Nivel Primario": "secretariaprimaria@corazondejesus.edu.ar",
      "Nivel Secundario": "secretariasecundaria@corazondejesus.edu.ar",
    };
    return emailMapping[level] || "info@colegiocorazondejesus.edu.ar";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const selectedLevel = formData.get("Nivel") as string;
    const targetEmail = getEmailByLevel(selectedLevel);

    try {
      await fetch(`https://formsubmit.co/${targetEmail}`, {
        method: "POST",
        body: formData,
      });

      window.location.href = "/gracias.html";
    } catch (error) {
      alert("Error al enviar el mensaje. Por favor intenta de nuevo.");
    }
  };

  return (
    <section className="py-16" id="contacto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a2d8f] mb-2">Contacto</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos a tu disposición para responder tus consultas y brindarte
            toda la información que necesites.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#0a2d8f]">
                  Formulario de contacto
                </CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo a
                  la brevedad.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nueva consulta desde sitio web - Instituto Corazon de Jesus"
                  />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_autoresponse"
                    value="Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos pronto."
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-medium">
                        Nombre
                      </label>
                      <Input
                        id="nombre"
                        name="Nombre"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="apellido" className="text-sm font-medium">
                        Apellido
                      </label>
                      <Input
                        id="apellido"
                        name="Apellido"
                        placeholder="Tu apellido"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="Email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium">
                      Teléfono (opcional)
                    </label>
                    <Input
                      id="telefono"
                      name="Telefono"
                      placeholder="Tu número de teléfono"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="departamento"
                      className="text-sm font-medium"
                    >
                      Departamento
                    </label>
                    <select
                      name="Nivel"
                      required
                      className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    >
                      <option value="">Selecciona un departamento</option>
                      <option value="Administracion">Administración</option>
                      <option value="Nivel Inicial">Nivel Inicial</option>
                      <option value="Nivel Primario">Nivel Primario</option>
                      <option value="Nivel Secundario">Nivel Secundario</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <Textarea
                      id="mensaje"
                      name="Mensaje"
                      placeholder="Escribe tu mensaje aquí"
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#d91c1c] hover:bg-[#b01616]"
                  >
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0a2d8f] mb-4">
                Información de contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#d91c1c] mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Dirección</h4>
                    <p className="text-gray-600">
                      Ayacucho 474, Balvanera
                      <br />
                      Ciudad Autónoma de Buenos Aires
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#d91c1c] mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Teléfono</h4>
                    <p className="text-gray-600">(011) 4951-5123</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-[#d91c1c] mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">
                      info@colegiocorazondejesus.edu.ar
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-[#d91c1c] mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Horarios de atención</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 8:00 a 16:30
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-80 rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9916101053257!2d-58.39721492425536!3d-34.60442005749049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac32291c5c5%3A0x5d7cfc5d310b3d3d!2sAyacucho%20474%2C%20C1025AAD%20CABA!5e0!3m2!1ses!2sar!4v1716414772000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Instituto Corazón de Jesús"
                aria-label="Mapa mostrando la ubicación del Instituto Corazón de Jesús en Ayacucho 474, Balvanera, Buenos Aires"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
