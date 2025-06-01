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
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

export default function ContactoPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      await fetch("https://formsubmit.co/jlofredo@muvinai.com", {
        method: "POST",
        body: formData,
      });

      window.location.href = "/gracias.html";
    } catch (error) {
      alert("Error al enviar el mensaje. Por favor intenta de nuevo.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#0a2d8f] mb-4">Contacto</h1>
          <p className="text-xl text-gray-600">
            Estamos a tu disposición para responder tus consultas y brindarte
            toda la información que necesites
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#0a2d8f]">
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
                    value="Nueva consulta desde sitio web - Colegio Corazon de Jesus"
                  />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_autoresponse"
                    value="Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos pronto."
                  />

                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium">
                      Nombre <span className="text-[#0a2d8f]">*</span>
                    </label>
                    <Input
                      id="nombre"
                      name="Nombre"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-[#0a2d8f]">*</span>
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
                      Teléfono
                    </label>
                    <Input
                      id="telefono"
                      name="Telefono"
                      placeholder="Tu número de teléfono"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="nivel" className="text-sm font-medium">
                      Nivel <span className="text-[#0a2d8f]">*</span>
                    </label>
                    <select
                      name="Nivel"
                      required
                      className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    >
                      <option value="">Selecciona un nivel</option>
                      <option value="Jardin">Jardín</option>
                      <option value="Primaria">Primaria</option>
                      <option value="Secundaria">Secundaria</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-sm font-medium">
                      Mensaje <span className="text-[#0a2d8f]">*</span>
                    </label>
                    <Textarea
                      id="mensaje"
                      name="Mensaje"
                      placeholder="Escribe tu mensaje aquí"
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="politica"
                      className="mt-1"
                      required
                    />
                    <label htmlFor="politica" className="text-sm text-gray-600">
                      He leído y acepto la{" "}
                      <a
                        href="/politica-privacidad"
                        className="text-[#0a2d8f] hover:underline"
                      >
                        política de privacidad
                      </a>
                      <span className="text-[#0a2d8f]"> *</span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#0a2d8f] hover:bg-[#081d5e]"
                  >
                    Enviar mensaje
                  </Button>

                  <p className="text-xs text-gray-500 mt-2">
                    Los campos marcados con{" "}
                    <span className="text-[#0a2d8f]">*</span> son obligatorios
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 bg-[#0a2d8f]/5 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#0a2d8f] mb-4">
                Preguntas frecuentes
              </h3>
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>¿Cómo puedo inscribir a mi hijo/a?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Para inscribir a tu hijo/a, debes completar el formulario de
                    pre-inscripción en nuestra sección de Inscripciones, luego
                    te contactaremos para coordinar una entrevista y continuar
                    con el proceso.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>¿Cuáles son los horarios de clases?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Todos nuestros niveles (Inicial, Primario y Secundario)
                    funcionan en jornada completa, de 8:00 a 16:30 hs.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>¿Ofrecen servicio de comedor?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Sí, contamos con servicio de comedor escolar con menú
                    nutritivo y balanceado para todos los niveles. También
                    existe la opción de traer vianda desde casa.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>¿Qué actividades extracurriculares ofrecen?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Ofrecemos diversas actividades extracurriculares como
                    deportes, arte, música, pastoral y apoyo escolar. Estas
                    actividades varían según el nivel educativo.
                  </p>
                </details>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#0a2d8f] mb-6">
                Información de contacto
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#0a2d8f]/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#0a2d8f]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Dirección</h3>
                    <p className="text-gray-600">
                      Ayacucho 474, Balvanera
                      <br />
                      Ciudad Autónoma de Buenos Aires
                      <br />
                      C1025AAD
                    </p>
                    <p className="mt-2">
                      <a
                        href="https://maps.google.com/?q=Ayacucho+474,+C1025AAD+CABA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0a2d8f] hover:underline text-sm"
                      >
                        Ver en Google Maps
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#0a2d8f]/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#0a2d8f]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Teléfono</h3>
                    <p className="text-gray-600">(011) 4951-5123</p>
                    <p className="mt-2">
                      <a
                        href="tel:+541149515123"
                        className="text-[#0a2d8f] hover:underline text-sm"
                      >
                        Llamar ahora
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#0a2d8f]/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#0a2d8f]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@colegiocorazondejesus.edu.ar
                    </p>
                    <p className="mt-2">
                      <a
                        href="mailto:info@colegiocorazondejesus.edu.ar"
                        className="text-[#0a2d8f] hover:underline text-sm"
                      >
                        Enviar email
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#0a2d8f]/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-[#0a2d8f]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Horarios de atención
                    </h3>
                    <div className="text-gray-600">
                      <p>
                        <strong>Secretaría:</strong>
                      </p>
                      <p>Lunes a Viernes: 8:00 a 16:30 hs.</p>
                      <p className="mt-2">
                        <strong>Administración:</strong>
                      </p>
                      <p>Lunes a Viernes: 8:00 a 15:00 hs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9916101053257!2d-58.39721492425536!3d-34.60442005749049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac32291c5c5%3A0x5d7cfc5d310b3d3d!2sAyacucho%20474%2C%20C1025AAD%20CABA!5e0!3m2!1ses!2sar!4v1716414772000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Colegio Corazón de Jesús"
                aria-label="Mapa mostrando la ubicación del Colegio Corazón de Jesús en Ayacucho 474, Balvanera, Buenos Aires"
              ></iframe>
            </div>

            <div className="bg-[#0a2d8f]/5 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#0a2d8f] mb-4">
                Cómo llegar
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#0a2d8f] mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Subte</p>
                    <p className="text-sm text-gray-600">
                      Línea B (Estación Callao) - 5 minutos caminando
                      <br />
                      Línea D (Estación Callao) - 7 minutos caminando
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#0a2d8f] mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Colectivos</p>
                    <p className="text-sm text-gray-600">
                      Líneas 12, 37, 39, 60, 101, 124, 132, 150 y 180 tienen
                      paradas cercanas al colegio.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#0a2d8f] mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Estacionamiento</p>
                    <p className="text-sm text-gray-600">
                      Hay varios estacionamientos pagos en la zona para quienes
                      vienen en auto particular.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
