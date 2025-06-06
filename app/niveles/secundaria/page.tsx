import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  BookOpen,
  Users,
  GraduationCap,
  Globe,
  Award,
  Target,
  Brain,
} from "lucide-react";

export const metadata = {
  title:
    "Secundaria Instituto Corazón de Jesús | Bachillerato Católico Balvanera",
  description:
    "Secundaria Instituto Corazón de Jesús en Balvanera - Bachillerato católico con orientación en Ciencias Sociales y Humanidades. Formación integral para estudios superiores en Buenos Aires.",
  keywords:
    "secundaria Instituto Corazón de Jesús, secundaria Balvanera, bachillerato ciencias sociales, instituto secundario católico, orientación humanidades Buenos Aires, bachillerato católico Buenos Aires",
  openGraph: {
    title:
      "Secundaria Instituto Corazón de Jesús | Bachillerato Católico Balvanera",
    description:
      "Bachillerato católico con orientación en Ciencias Sociales y Humanidades. Formación integral para estudios superiores.",
    url: "https://www.institutocorazondejesus.edu.ar/niveles/secundaria",
    images: [
      {
        url: "https://www.institutocorazondejesus.edu.ar/images/secundaria.webp",
        width: 1200,
        height: 630,
        alt: "Secundaria Instituto Corazón de Jesús - Estudiantes en el instituto",
      },
    ],
  },
  alternates: {
    canonical: "https://www.institutocorazondejesus.edu.ar/niveles/secundaria",
  },
};

export default function SecundariaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-600 to-blue-700 rounded-full mb-6">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent mb-4">
              Nivel Secundario
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bachillerato con orientación en Ciencias Sociales y Humanidades
            </p>
            <div className="mt-4 inline-block bg-gradient-to-r from-slate-100 to-blue-100 px-6 py-2 rounded-full">
              <p className="text-blue-700 font-medium">
                Formación integral para estudios superiores
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-12 h-80 shadow-2xl">
            <Image
              src="/images/secundaria.webp"
              alt="Estudiantes de secundaria en el instituto"
              fill
              className="object-cover object-[45%_70%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">
                  Preparación académica y humana para el futuro
                </h2>
                <p className="text-lg">
                  Formamos jóvenes comprometidos con su tiempo y sociedad
                </p>
              </div>
            </div>
          </div>

          {/* Propuesta Educativa */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
              Nuestra Propuesta Educativa
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <BookOpen className="h-6 w-6 text-slate-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-slate-700 mb-2">
                        Formación Académica
                      </h3>
                      <p className="text-gray-700">
                        Ofrecemos una sólida formación académica que prepara a
                        nuestros estudiantes para los estudios superiores, con
                        especial énfasis en las ciencias sociales y humanidades,
                        desarrollando el pensamiento crítico y reflexivo.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-blue-700 mb-2">
                        Formación Personal
                      </h3>
                      <p className="text-gray-700">
                        Acompañamos el desarrollo personal de cada estudiante,
                        promoviendo valores cristianos, habilidades
                        socioemocionales y el compromiso con la construcción de
                        una sociedad más justa y fraterna.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Target className="h-6 w-6 text-indigo-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-indigo-700 mb-2">
                        Orientación Vocacional
                      </h3>
                      <p className="text-gray-700">
                        Brindamos un programa de orientación vocacional que
                        ayuda a nuestros estudiantes a descubrir sus talentos e
                        intereses, y a tomar decisiones informadas sobre su
                        futuro académico y profesional.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-purple-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-purple-700 mb-2">
                        Proyección Social
                      </h3>
                      <p className="text-gray-700">
                        Fomentamos el compromiso social a través de proyectos
                        solidarios y de servicio comunitario, formando
                        ciudadanos responsables y comprometidos con la
                        transformación de la realidad.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                Nuestra propuesta educativa para el nivel secundario se basa en
                la pedagogía Vedruna, que pone en el centro a la persona y
                promueve un clima familiar, sencillo, cercano y alegre como
                experiencia educativa fundamental. Buscamos formar jóvenes con
                sólidos conocimientos académicos, valores cristianos y
                compromiso social.
              </p>
            </div>
          </div>

          {/* Plan de Estudios */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
              Plan de Estudios
            </h2>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <p className="text-gray-700 mb-6 text-center">
                Nuestro plan de estudios sigue los lineamientos del Ministerio
                de Educación, con orientación en Ciencias Sociales y
                Humanidades:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Lengua y Literatura",
                  "Matemática",
                  "Historia",
                  "Geografía",
                  "Economía",
                  "Filosofía",
                  "Psicología",
                  "Ciencias Naturales",
                  "Inglés",
                  "Educación Física",
                  "Educación Artística",
                  "Formación Religiosa",
                  "Tecnologías de la Información",
                  "Proyecto de Investigación Social",
                ].map((materia, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg"
                  >
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{materia}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Actividades Complementarias */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
              Actividades Complementarias
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Proyectos Interdisciplinarios",
                  description:
                    "Integración de conocimientos de diferentes áreas",
                  color: "from-slate-400 to-slate-600",
                },
                {
                  icon: Globe,
                  title: "Salidas Educativas",
                  description: "Experiencias de aprendizaje fuera del aula",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  icon: Users,
                  title: "Convivencias",
                  description: "Jornadas de reflexión y crecimiento personal",
                  color: "from-indigo-400 to-indigo-600",
                },
                {
                  icon: Award,
                  title: "Actividades Solidarias",
                  description: "Proyectos de servicio comunitario",
                  color: "from-purple-400 to-purple-600",
                },
                {
                  icon: Target,
                  title: "Orientación Vocacional",
                  description: "Talleres para la elección de carrera",
                  color: "from-pink-400 to-pink-600",
                },
                {
                  icon: Brain,
                  title: "Modelo de Naciones Unidas",
                  description: "Simulacro de debates internacionales",
                  color: "from-cyan-400 to-cyan-600",
                },
              ].map((actividad, index) => (
                <Card
                  key={index}
                  className="shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${actividad.color} rounded-full mb-4`}
                    >
                      <actividad.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {actividad.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {actividad.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Inscripciones */}
          <Card className="mb-12 bg-gradient-to-r from-slate-50 to-blue-50 border-none shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
                Inscripciones 2025
              </h2>
              <p className="text-gray-700 text-center mb-8 text-lg">
                Te invitamos a formar parte de nuestra comunidad educativa y
                prepararte para los desafíos del futuro
              </p>
              <div className="text-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-slate-600 to-blue-700 hover:from-slate-700 hover:to-blue-800 text-white px-8 py-3 text-lg rounded-full shadow-lg"
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
