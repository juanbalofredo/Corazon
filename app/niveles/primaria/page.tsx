import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  BookOpen,
  Users,
  Heart,
  GraduationCap,
  Award,
  Target,
} from "lucide-react";

export const metadata = {
  title:
    "Nivel Primario Instituto Corazón de Jesús | Educación Nivel Primario Católica Balvanera",
  description:
    "Nivel Primario Instituto Corazón de Jesús en Balvanera - Educación nivel primario católica de jornada completa de 1° a 7° grado. Formación académica sólida con valores cristianos en Buenos Aires.",
  keywords:
    "nivel primario Instituto Corazón de Jesús, nivel primario católica Buenos Aires, escuela nivel primario Balvanera, educación nivel primario valores cristianos, nivel primario jornada completa Balvanera, colegio nivel primario católico Buenos Aires",
  openGraph: {
    title:
      "Nivel Primario Instituto Corazón de Jesús | Educación Nivel Primario Católica Balvanera",
    description:
      "Educación nivel primario católica de jornada completa de 1° a 7° grado en Balvanera. Formación académica sólida con valores cristianos.",
    url: "https://www.institutocorazondejesus.edu.ar/niveles/primaria",
    images: [
      {
        url: "https://www.institutocorazondejesus.edu.ar/images/primaria.webp",
        width: 1200,
        height: 630,
        alt: "Nivel Primario Instituto Corazón de Jesús - Aulas y estudiantes",
      },
    ],
  },
  alternates: {
    canonical: "https://www.institutocorazondejesus.edu.ar/niveles/primaria",
  },
};

export default function PrimariaPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Nivel Primario
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Formación integral con sólida base académica y valores cristianos
            </p>
            <div className="mt-4 inline-block bg-gradient-to-r from-orange-100 to-red-100 px-6 py-2 rounded-full">
              <p className="text-orange-700 font-medium">
                Jornada Completa: 09:00 a 17:00 hs • 1° a 7° grado
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-12 h-80 shadow-2xl">
            <Image
              src="/images/primaria.webp"
              alt="Alumnos de nivel primario en el aula"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">
                  Educación integral con enfoque pedagógico personalizado
                </h2>
                <p className="text-lg">
                  Acompañamos el crecimiento académico y personal de cada alumno
                </p>
              </div>
            </div>
          </div>

          {/* Equipo Directivo */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Equipo Directivo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="bg-gradient-to-br from-orange-100 to-red-100 border-none shadow-lg">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-4 mx-auto">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-orange-700">Directora</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 font-medium">Noemí Irma Marino</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-100 to-orange-100 border-none shadow-lg">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full mb-4 mx-auto">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-red-700">Secretario</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 font-medium">
                    Alejandro Casuscelli
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Plan de Estudios */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Plan de Estudios
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 1° a 3° grado */}
              <Card className="bg-white/70 backdrop-blur-sm border-none shadow-xl">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">1-3</span>
                    </div>
                    <CardTitle className="text-orange-700">
                      1° a 3° grado
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Lengua",
                      "Matemática",
                      "Conocimiento del mundo",
                      "Tecnología, diseño y programación",
                      "Educación artística: Artes visuales",
                      "Educación artística: Música",
                      "Lengua extranjera: Inglés",
                      "Educación física",
                      "Catequesis",
                    ].map((materia, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{materia}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* 4° a 7° grado */}
              <Card className="bg-white/70 backdrop-blur-sm border-none shadow-xl">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">4-7</span>
                    </div>
                    <CardTitle className="text-red-700">
                      4° a 7° grado
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Lengua",
                      "Matemática",
                      "Ciencias Naturales",
                      "Ciencias Sociales",
                      "Tecnología, diseño y programación",
                      "Educación artística: Artes visuales",
                      "Educación artística: Música",
                      "Lengua extranjera: Inglés",
                      "Educación física",
                      "Catequesis",
                      "Informática",
                    ].map((materia, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{materia}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Proyectos Especiales */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Proyectos Especiales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "Laboratorio de Matemática",
                  description:
                    "Espacio especializado para el aprendizaje práctico de matemáticas",
                  color: "from-orange-400 to-orange-600",
                },
                {
                  icon: BookOpen,
                  title: "Club de Familias Lectoras",
                  description:
                    "Programa que involucra a las familias en el fomento de la lectura",
                  color: "from-red-400 to-red-600",
                },
                {
                  icon: Award,
                  title: "Feria de Tecnología y Ciencias",
                  description:
                    "Muestra anual de proyectos científicos y tecnológicos",
                  color: "from-orange-400 to-orange-600",
                },
                {
                  icon: Users,
                  title: "Robótica",
                  description:
                    "Introducción a la programación y robótica educativa",
                  color: "from-red-400 to-red-600",
                },
                {
                  icon: Heart,
                  title: "Muestra anual de Inglés",
                  description: "Presentación de proyectos en lengua extranjera",
                  color: "from-orange-400 to-orange-600",
                },
              ].map((proyecto, index) => (
                <Card
                  key={index}
                  className="bg-white/70 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${proyecto.color} rounded-full mb-3`}
                    >
                      <proyecto.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-800">
                      {proyecto.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm text-justify">
                      {proyecto.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Actividades Extracurriculares */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Actividades Extracurriculares
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Taller de Arte",
                  description:
                    "Desarrollo de la creatividad y expresión artística",
                  color: "from-pink-400 to-rose-500",
                },
                {
                  title: "Gimnasia Artística",
                  description: "Desarrollo físico y coordinación motriz",
                  color: "from-purple-400 to-indigo-500",
                },
                {
                  title: "Taller de Fútbol Recreativo",
                  description: "Deporte y trabajo en equipo",
                  color: "from-green-400 to-emerald-500",
                },
              ].map((actividad, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${actividad.color} border-none shadow-lg text-white`}
                >
                  <CardHeader>
                    <CardTitle className="text-white">
                      {actividad.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90 text-justify">
                      {actividad.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Servicios Adicionales
            </h2>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                En el Nivel Primario acompañamos a nuestros estudiantes en una
                etapa fundamental de su formación académica y personal. Nuestra
                propuesta educativa integra la excelencia académica con la
                formación en valores cristianos, preparando a los alumnos para
                los desafíos del futuro.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Trabajamos con metodologías innovadoras y un enfoque
                personalizado que respeta los ritmos de aprendizaje de cada
                estudiante, fomentando el pensamiento crítico, la creatividad y
                el compromiso social.
              </p>
            </div>
          </div>

          {/* Inscripciones */}
          <Card className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 border-none shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Inscripciones 2025
              </h2>
              <p className="text-gray-700 text-center mb-8 text-lg">
                Te invitamos a formar parte de nuestra comunidad educativa
              </p>
              <div className="text-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 text-lg rounded-full shadow-lg"
                >
                  <Link href="/contacto">Solicitar información</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
