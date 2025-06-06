import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Globe, Heart, Music, Brain, Lightbulb } from "lucide-react";

export const metadata = {
  title: "Propuesta Educativa Complementaria | Instituto Corazón de Jesús",
  description:
    "Conoce nuestra propuesta educativa complementaria: formación religiosa, talleres, inglés y gabinete psicopedagógico.",
  keywords:
    "formación religiosa, talleres escolares, inglés escolar, gabinete psicopedagógico, educación integral, actividades extracurriculares",
};

export default function PropuestaComplementariaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#0a2d8f] mb-4">
            Propuesta Educativa Complementaria
          </h1>
          <p className="text-xl text-gray-600">
            Formación integral que complementa el desarrollo académico,
            espiritual y personal de nuestros alumnos
          </p>
        </div>

        {/* Formación Religiosa */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0a2d8f]/10 rounded-full flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-[#0a2d8f]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0a2d8f]">
                  Formación Religiosa
                </h2>
              </div>
              <p className="text-gray-700 mb-4">
                La formación religiosa es un pilar fundamental de nuestra
                propuesta educativa. Buscamos que nuestros alumnos desarrollen
                una fe viva, comprometida y transformadora, basada en los
                valores del Evangelio y en la espiritualidad Vedruna.
              </p>
              <p className="text-gray-700 mb-4">
                A través de diversas experiencias y espacios formativos,
                acompañamos a los niños y jóvenes en su crecimiento espiritual,
                ayudándoles a descubrir el amor de Dios en sus vidas y a vivir
                los valores cristianos en su cotidianidad.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#d91c1c] mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Catequesis:</strong> Adaptada a cada nivel
                    educativo, con preparación para los sacramentos.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d91c1c] mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Celebraciones litúrgicas:</strong> Eucaristías,
                    oraciones comunitarias y celebraciones en tiempos litúrgicos
                    fuertes.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d91c1c] mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Convivencias y retiros:</strong> Espacios de
                    encuentro, reflexión y crecimiento espiritual.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d91c1c] mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Proyectos solidarios:</strong> Acciones concretas de
                    servicio a la comunidad.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/capilla.webp"
                alt="Formación Religiosa"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Talleres y Apoyo Escolar */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/biblioteca.webp"
                alt="Talleres y Apoyo Escolar"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0a2d8f]/10 rounded-full flex items-center justify-center mr-4">
                  <Lightbulb className="h-6 w-6 text-[#0a2d8f]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0a2d8f]">
                  Talleres y Apoyo Escolar
                </h2>
              </div>
              <p className="text-gray-700 mb-4">
                Ofrecemos una variedad de talleres y espacios de apoyo escolar
                que complementan la formación académica, permitiendo a nuestros
                alumnos explorar y desarrollar sus talentos e intereses
                particulares, así como reforzar aquellas áreas que requieren
                mayor atención.
              </p>
              <p className="text-gray-700 mb-4">
                Estos espacios están diseñados para fomentar la creatividad, el
                trabajo en equipo, la expresión artística y el desarrollo de
                habilidades específicas, en un ambiente distendido y motivador.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <Card className="bg-[#0a2d8f]/5 border-none">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center">
                      <Music className="h-4 w-4 mr-2 text-[#d91c1c]" />
                      Talleres Artísticos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-700">
                    <ul className="space-y-1">
                      <li>• Coro y música</li>
                      <li>• Teatro y expresión corporal</li>
                      <li>• Artes plásticas</li>
                      <li>• Danza</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-[#0a2d8f]/5 border-none">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-[#d91c1c]" />
                      Apoyo Académico
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-700">
                    <ul className="space-y-1">
                      <li>• Taller de lectoescritura</li>
                      <li>• Apoyo en matemáticas</li>
                      <li>• Técnicas de estudio</li>
                      <li>• Preparación para exámenes</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-gray-700 mb-6">
                Todos nuestros talleres están coordinados por docentes
                especializados que acompañan el proceso de aprendizaje de cada
                alumno, respetando sus tiempos y potenciando sus capacidades.
              </p>
            </div>
          </div>
        </section>

        {/* Inglés */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0a2d8f]/10 rounded-full flex items-center justify-center mr-4">
                  <Globe className="h-6 w-6 text-[#0a2d8f]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0a2d8f]">Inglés</h2>
              </div>
              <p className="text-gray-700 mb-4">
                En el mundo globalizado actual, el dominio del idioma inglés es
                una herramienta fundamental para el desarrollo académico y
                profesional. Por ello, nuestro Instituto ofrece una enseñanza
                intensiva y de calidad del idioma inglés desde el nivel inicial
                hasta el secundario.
              </p>
              <p className="text-gray-700 mb-4">
                Nuestro enfoque comunicativo busca que los alumnos desarrollen
                las cuatro habilidades lingüísticas (comprensión auditiva,
                expresión oral, comprensión lectora y expresión escrita) de
                manera integrada, permitiéndoles comunicarse con fluidez y
                confianza en diferentes contextos.
              </p>
              <div className="bg-[#0a2d8f]/5 p-4 rounded-lg mb-6">
                <h3 className="font-bold text-[#0a2d8f] mb-2">
                  Características de nuestro programa de inglés:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#d91c1c] mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Inicio temprano:</strong> Desde sala de 3 años,
                      con un enfoque lúdico y natural.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d91c1c] mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Carga horaria intensiva:</strong> Mayor cantidad
                      de horas semanales que el mínimo requerido.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d91c1c] mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Docentes especializados:</strong> Profesores con
                      excelente dominio del idioma y formación pedagógica.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d91c1c] mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Materiales actualizados:</strong> Recursos
                      didácticos modernos y tecnológicos.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d91c1c] mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>
                        Preparación para exámenes internacionales:
                      </strong>{" "}
                      En los niveles más avanzados.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/ingles.webp"
                alt="Enseñanza de Inglés"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Gabinete Psicopedagógico */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/gabinete.webp"
                alt="Gabinete Psicopedagógico"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0a2d8f]/10 rounded-full flex items-center justify-center mr-4">
                  <Brain className="h-6 w-6 text-[#0a2d8f]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0a2d8f]">
                  Gabinete Psicopedagógico
                </h2>
              </div>
              <p className="text-gray-700 mb-4">
                El Gabinete Psicopedagógico del Instituto Corazón de Jesús está
                conformado por un equipo de profesionales especializados que
                trabajan de manera interdisciplinaria para acompañar el proceso
                de enseñanza y aprendizaje de nuestros alumnos, atendiendo a sus
                necesidades específicas y potenciando su desarrollo integral.
              </p>
              <p className="text-gray-700 mb-4">
                Este equipo brinda apoyo tanto a los alumnos como a las familias
                y docentes, trabajando en estrecha colaboración para favorecer
                el bienestar emocional y el éxito académico de cada estudiante.
              </p>
              <div className="bg-[#0a2d8f]/5 p-4 rounded-lg mb-6">
                <h3 className="font-bold text-[#0a2d8f] mb-2">
                  Servicios que ofrece nuestro Gabinete:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#d91c1c] mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Evaluación y diagnóstico:</strong> Detección
                      temprana de dificultades de aprendizaje.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d91c1c] mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Orientación a docentes:</strong> Estrategias para
                      la atención a la diversidad en el aula.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d91c1c] mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Acompañamiento a familias:</strong> Asesoramiento
                      y orientación en el proceso educativo.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d91c1c] mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Seguimiento personalizado:</strong> De alumnos con
                      necesidades educativas específicas.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d91c1c] mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Orientación vocacional:</strong> Para alumnos del
                      nivel secundario.
                    </span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700">
                El trabajo del Gabinete Psicopedagógico se realiza siempre en un
                marco de respeto, confidencialidad y colaboración, buscando el
                bienestar integral de cada alumno y su pleno desarrollo.
              </p>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <div className="bg-[#0a2d8f]/5 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-[#0a2d8f] mb-4">
            ¿Quieres conocer más sobre nuestra propuesta?
          </h2>
          <p className="text-gray-700 mb-6">
            Te invitamos a contactarnos para obtener más información sobre
            nuestra propuesta educativa complementaria y cómo puede beneficiar a
            tu hijo/a.
          </p>
          <Button asChild className="bg-[#d91c1c] hover:bg-[#b01616]">
            <Link href="/contacto">Contactar</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
