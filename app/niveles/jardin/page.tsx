import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, BookOpen, Gamepad2 } from "lucide-react";

export const metadata = {
  title:
    "Nivel Inicial Instituto Corazón de Jesús | Nivel Inicial Católico Balvanera",
  description:
    "Nivel Inicial Instituto Corazón de Jesús en Balvanera - Nivel inicial católico para niños de 2 a 5 años con jornada completa. Metodología lúdica en ambiente cálido y familiar en Buenos Aires.",
  keywords:
    "nivel inicial Instituto Corazón de Jesús, nivel inicial Balvanera, nivel inicial maternal Buenos Aires, educación inicial católica, nivel inicial jornada completa Balvanera, nivel inicial católico Buenos Aires",
  openGraph: {
    title:
      "Nivel Inicial Instituto Corazón de Jesús | Nivel Inicial Católico Balvanera",
    description:
      "Nivel inicial católico para niños de 2 a 5 años con jornada completa. Metodología lúdica en ambiente cálido y familiar.",
    url: "https://www.institutocorazondejesus.edu.ar/niveles/jardin",
    images: [
      {
        url: "https://www.institutocorazondejesus.edu.ar/images/jardin2.webp",
        width: 1200,
        height: 630,
        alt: "Nivel Inicial Instituto Corazón de Jesús - Niños jugando y aprendiendo",
      },
    ],
  },
  alternates: {
    canonical: "https://www.institutocorazondejesus.edu.ar/niveles/jardin",
  },
};

export default function JardinPage() {
  return (
    <div className="min-h-screen bg-green-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
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
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                Somos una comunidad educativa con carisma Vedruna, inspirada en
                los valores de Santa Joaquina de Vedruna. Acompañamos a los más
                pequeños en sus primeros pasos escolares en un clima seguro y
                cálido, donde cada niño es protagonista activo de su
                aprendizaje.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Promovemos una educación integral que transforma, integra y
                humaniza, revalorizando los saberes previos de cada niño a
                través del juego, la exploración y la creatividad.
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
                  <p className="text-gray-700 text-justify">
                    El juego es fundamental en nuestra propuesta pedagógica,
                    como forma natural de aproximarse al mundo, compartir con
                    otros y socializar. Lo integramos como medio de aprendizaje
                    y derecho esencial en la infancia.
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
                  <p className="text-gray-700 text-justify">
                    "Crecer con otros" es nuestro eje de trabajo, donde la
                    formación en valores como la amistad, solidaridad y trabajo
                    en equipo atraviesa toda la propuesta educativa,
                    construyendo los primeros vínculos sociales.
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
                    <p className="text-gray-600 text-justify">
                      {objetivo.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Equipo Directivo */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Equipo Directivo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-none shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-green-700">Directora</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 font-medium">
                    Hna. María Inés Barbé
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-100 to-green-100 border-none shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-emerald-700">Secretaria</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 font-medium">Claudia Montanari</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Servicios */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Servicios
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Comedor",
                  description:
                    "Almuerzo y merienda elaborados en nuestra cocina con menús balanceados",
                  icon: "🍽️",
                },
                {
                  title: "Gabinete Psicopedagógico",
                  description:
                    "Acompañamiento profesional en el proceso de aprendizaje",
                  icon: "🧠",
                },
                {
                  title: "Inglés",
                  description:
                    "Iniciación al idioma inglés de manera lúdica y natural",
                  icon: "🗣️",
                },
                {
                  title: "Catequesis",
                  description:
                    "Formación en valores cristianos adaptada a cada edad",
                  icon: "✝️",
                },
              ].map((servicio, index) => (
                <Card
                  key={index}
                  className="text-center bg-white/70 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <div className="text-4xl mb-2">{servicio.icon}</div>
                    <CardTitle className="text-lg text-gray-800">
                      {servicio.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm text-justify">
                      {servicio.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              ¿Quieres que tu hijo forme parte de nuestra familia?
            </h2>
            <p className="text-gray-700 mb-6 text-justify max-w-2xl mx-auto">
              Te invitamos a conocer nuestra propuesta educativa y descubrir
              cómo acompañamos a los más pequeños en sus primeros pasos
              escolares.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <Link href="/contacto">Contactanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
