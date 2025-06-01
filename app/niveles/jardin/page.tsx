import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, BookOpen, Gamepad2 } from "lucide-react";

export const metadata = {
  title: "Nivel Inicial | Instituto Corazón de Jesús",
  description:
    "Nivel inicial en Balvanera con jornada completa para niños de 2 a 5 años. Metodología lúdica y creativa en un ambiente cálido y familiar.",
  keywords:
    "nivel inicial Balvanera, jardín maternal Buenos Aires, educación inicial católica, jardín jornada completa",
};

export default function JardinPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Nivel Inicial
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Educando con el corazón, sirviendo con amor
            </p>
            <div className="mt-4 inline-block bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-2 rounded-full">
              <p className="text-green-700 font-medium">
                Jornada Completa: 09:00 a 16:40 hs • Salas de 2, 3, 4 y 5 años
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-12 h-80 shadow-2xl">
            <Image
              src="/images/jardin2.webp"
              alt="Niños jugando en el nivel inicial"
              fill
              className="object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">
                  Un espacio de crecimiento y amor
                </h2>
                <p className="text-lg">
                  Acompañamos a los más pequeños en sus primeros pasos escolares
                </p>
              </div>
            </div>
          </div>

          {/* Nuestra Propuesta */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Nuestra Propuesta Educativa
            </h2>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Somos una comunidad educativa con carisma Vedruna, inspirada en
                los valores de Santa Joaquina de Vedruna. Promovemos una
                educación que transforma, integra y humaniza.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Acompañamos a los más pequeños en los primeros pasos de su
                trayecto escolar en un clima seguro y cálido. Creemos que este
                inicio es una etapa fundamental, no solo para ellos, sino
                también para sus familias, a quienes también acompañamos con
                compromiso y cercanía.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Revalorizamos los saberes previos de cada uno de los niños
                porque cada uno de ellos es el protagonista activo en la
                construcción de sus conocimientos, explorando, observando,
                creando y afrontando nuevos desafíos para adquirir nuevos
                aprendizajes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Gamepad2 className="h-8 w-8 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">
                      El Juego como Aprendizaje
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    El juego es una parte fundamental de nuestra propuesta
                    pedagógica, como forma de aproximarse al mundo para poner a
                    prueba emociones, ideas, para compartir con el otro y
                    socializar. Integramos el juego como medio natural de
                    aprendizaje y como un derecho esencial en la infancia.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Users className="h-8 w-8 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">
                      Crecer con Otros
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    "Crecer con otros" es el eje del trabajo con los niños y
                    niñas donde la formación en valores atraviesa toda la
                    propuesta, destacando valores como la amistad, la
                    solidaridad y el trabajo en equipo. Acompañamos en el
                    proceso de socialización construyendo los primeros vínculos
                    por fuera de la familia.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Objetivos Generales */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Objetivos Generales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Entorno Afectivo",
                  description:
                    "Brindar un entorno afectivo y seguro que privilegie el desarrollo integral del niño.",
                  color: "from-green-400 to-emerald-500",
                },
                {
                  icon: BookOpen,
                  title: "Experiencias Significativas",
                  description:
                    "Ofrecer experiencias significativas que favorezcan la curiosidad, la creatividad y el pensamiento crítico.",
                  color: "from-green-400 to-emerald-500",
                },
                {
                  icon: Heart,
                  title: "Valores Cristianos",
                  description:
                    "Iniciar en la vivencia de los valores cristianos: amor, respeto, solidaridad, alegría, paz y cuidado de la creación.",
                  color: "from-green-400 to-emerald-500",
                },
                {
                  icon: Users,
                  title: "Autonomía y Autoestima",
                  description:
                    "Desarrollar la autonomía, la autoestima y las habilidades sociales.",
                  color: "from-green-400 to-emerald-500",
                },
                {
                  icon: Gamepad2,
                  title: "Lenguaje y Juego",
                  description:
                    "Estimular y potenciar el lenguaje, el juego, y los saberes previos como fuente de aprendizajes matemáticos.",
                  color: "from-green-400 to-emerald-500",
                },
              ].map((objetivo, index) => (
                <Card
                  key={index}
                  className="bg-white/70 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${objetivo.color} rounded-full mb-3`}
                    >
                      <objetivo.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-800">
                      {objetivo.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      {objetivo.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Propuesta Didáctica */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Propuesta Didáctica
            </h2>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Secuencias y proyectos significativos
                </h3>
                <p className="text-gray-700">
                  Aprendizajes integrados a través de situaciones lúdicas y
                  cotidianas
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  {
                    name: "Matemática",
                    icon: "🔢",
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    name: "Indagación del Ambiente",
                    icon: "🌱",
                    color: "from-green-400 to-green-600",
                  },
                  {
                    name: "Catequesis",
                    icon: "✝️",
                    color: "from-purple-400 to-purple-600",
                  },
                  {
                    name: "Música",
                    icon: "🎵",
                    color: "from-pink-400 to-pink-600",
                  },
                  {
                    name: "Educación Física",
                    icon: "⚽",
                    color: "from-orange-400 to-orange-600",
                  },
                  {
                    name: "Inglés",
                    icon: "🌍",
                    color: "from-cyan-400 to-cyan-600",
                  },
                  {
                    name: "Arte",
                    icon: "🎨",
                    color: "from-red-400 to-red-600",
                  },
                  {
                    name: "Juego",
                    icon: "🎲",
                    color: "from-yellow-400 to-yellow-600",
                  },
                  {
                    name: "Lengua",
                    icon: "📚",
                    color: "from-indigo-400 to-indigo-600",
                  },
                ].map((materia, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${materia.color} rounded-xl p-4 text-center text-white shadow-lg`}
                  >
                    <div className="text-2xl mb-2">{materia.icon}</div>
                    <div className="text-sm font-medium">{materia.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Equipo Docente */}
          <div className="mb-16">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
                  Nuestro Equipo Docente
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed text-center">
                  El equipo docente asume con{" "}
                  <strong>RESPONSABILIDAD Y COMPROMISO</strong> cada paso de los
                  niños, creando un espacio de cuidado, juego y aprendizaje que
                  nutre su bienestar y crecimiento, considerando al niño como
                  activo protagonista en la construcción de sus conocimientos.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Inscripciones */}
          <Card className="mb-12 shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Inscripciones 2025
              </h2>
              <p className="text-gray-700 text-center mb-8 text-lg">
                Te invitamos a formar parte de nuestra comunidad educativa
                Vedruna
              </p>
              <div className="text-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 text-lg rounded-full shadow-lg"
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
