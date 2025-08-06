import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Globe, Music, Brain, Lightbulb } from "lucide-react";

export const metadata = {
  title: "Propuesta Educativa Complementaria | Instituto Corazón de Jesús",
  description:
    "Conoce nuestra propuesta educativa complementaria: talleres, inglés y gabinete psicopedagógico.",
  keywords:
    "talleres escolares, inglés escolar, gabinete psicopedagógico, educación integral, actividades extracurriculares",
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
            Formación integral que complementa el desarrollo académico y
            personal de nuestros alumnos
          </p>
        </div>

        {/* Talleres y Apoyo Escolar */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-[#0a2d8f]/10 rounded-full flex items-center justify-center mr-4">
                <Lightbulb className="h-6 w-6 text-[#0a2d8f]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0a2d8f]">
                Talleres y Apoyo Escolar
              </h2>
            </div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Espacios creativos y de apoyo que complementan la formación
              académica, fomentando talentos y reforzando áreas de mayor
              atención.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/biblioteca.webp"
                alt="Talleres y Apoyo Escolar"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-bold text-[#0a2d8f] mb-2 flex items-center">
                  <Music className="h-4 w-4 mr-2 text-[#d91c1c]" />
                  Talleres Artísticos
                </h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Coro y música</li>
                  <li>• Teatro y expresión</li>
                  <li>• Artes plásticas</li>
                  <li>• Danza</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#0a2d8f] mb-2 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-[#d91c1c]" />
                  Apoyo Académico
                </h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Lectoescritura</li>
                  <li>• Matemáticas</li>
                  <li>• Técnicas de estudio</li>
                  <li>• Preparación exámenes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Inglés */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-[#0a2d8f]/10 rounded-full flex items-center justify-center mr-4">
                <Globe className="h-6 w-6 text-[#0a2d8f]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0a2d8f]">Inglés</h2>
            </div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Enseñanza intensiva del idioma inglés desde nivel inicial hasta
              secundario, con enfoque comunicativo y preparación para exámenes
              internacionales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/ingles.webp"
                alt="Enseñanza de Inglés"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-sm">
              <h3 className="font-bold text-[#0a2d8f] mb-3">
                Características del programa:
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <strong>• Inicio temprano:</strong> Desde sala de 3 años con
                  enfoque lúdico
                </li>
                <li>
                  <strong>• Carga intensiva:</strong> Mayor cantidad de horas
                  semanales
                </li>
                <li>
                  <strong>• Docentes especializados:</strong> Profesores con
                  formación pedagógica
                </li>
                <li>
                  <strong>• Exámenes internacionales:</strong> Preparación en
                  niveles avanzados
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gabinete Psicopedagógico */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-[#0a2d8f]/10 rounded-full flex items-center justify-center mr-4">
                <Brain className="h-6 w-6 text-[#0a2d8f]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0a2d8f]">
                Gabinete Psicopedagógico
              </h2>
            </div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Equipo de profesionales especializados que acompañan el proceso de
              aprendizaje, brindando apoyo a alumnos, familias y docentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-sm">
              <h3 className="font-bold text-[#0a2d8f] mb-3">
                Servicios que ofrece:
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <strong>• Evaluación y diagnóstico:</strong> Detección
                  temprana de dificultades
                </li>
                <li>
                  <strong>• Orientación docente:</strong> Estrategias para la
                  diversidad
                </li>
                <li>
                  <strong>• Acompañamiento familiar:</strong> Asesoramiento y
                  orientación
                </li>
                <li>
                  <strong>• Orientación vocacional:</strong> Para alumnos de
                  secundario
                </li>
              </ul>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/gabinete.webp"
                alt="Gabinete Psicopedagógico"
                fill
                className="object-cover"
              />
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

        <div className="text-center">
          <Button
            asChild
            className="bg-[#0a2d8f] hover:bg-[#0a2d8f]/90 text-white px-8 py-3 text-lg rounded-full shadow-lg"
          >
            <Link href="/contacto">Más información</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
