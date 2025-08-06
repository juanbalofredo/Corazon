import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const metadata = {
  title: "Institucional | Instituto Corazón de Jesús",
  description:
    "Conoce la historia, misión, visión y valores del Instituto Corazón de Jesús. Más de 100 años de trayectoria educativa en Balvanera, Buenos Aires.",
  keywords:
    "Instituto católico Balvanera, historia Instituto Corazón de Jesús, Hermanas Carmelitas Vedruna, educación católica Buenos Aires",
};

export default function InstitucionalPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#0a2d8f] mb-4">
            Nuestra Institución
          </h1>
          <p className="text-xl text-gray-600">
            Más de 100 años educando con amor en el corazón de Balvanera
          </p>
        </div>

        <div className="relative rounded-lg overflow-hidden mb-12 h-80">
          <Image
            src="/images/historia.webp"
            alt="Fachada del Instituto Corazón de Jesús"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Nuestra Historia</h2>
              <p>Una trayectoria de compromiso educativo desde 1925</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0a2d8f] mb-4">
            Reseña Histórica
          </h2>
          <div className="prose max-w-none text-gray-700 text-justify">
            <p>
              El Instituto Corazón de Jesús fue fundado el 1º de mayo de 1925
              por las Hermanas Carmelitas de la Caridad Vedruna en Ayacucho 474,
              Balvanera. Nació como una escuela gratuita destinada a brindar
              educación integral a niños del barrio, con el firme propósito de
              formar personas íntegras basadas en valores cristianos.
            </p>
            <p>
              Durante estos casi 100 años, el Instituto se ha consolidado como
              un referente educativo en el corazón de Buenos Aires, adaptándose
              a los tiempos pero manteniendo siempre su esencia: educar con amor
              y servir con el corazón.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0a2d8f] mb-6">
            Las Hermanas Carmelitas de la Caridad Vedruna
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/joaquina.webp"
                  alt="Santa Joaquina de Vedruna"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="bg-[#0a2d8f]/5 p-4 rounded-lg">
                <div className="flex items-start mb-2">
                  <Quote className="h-6 w-6 text-[#d91c1c] mr-2 flex-shrink-0" />
                  <p className="text-gray-700 italic">
                    "Hagamos el bien sin desanimarnos, al debido tiempo
                    cosecharemos con tal de que seamos constantes."
                  </p>
                </div>
                <p className="text-right text-sm text-gray-600">
                  — Santa Joaquina de Vedruna
                </p>
              </div>
            </div>

            <div className="prose max-w-none text-gray-700 text-justify">
              <p>
                La Congregación fue fundada en 1826 en Vic, España, por Santa
                Joaquina de Vedruna, con la misión de servir a los más
                necesitados a través de la educación y la promoción social.
              </p>
              <p>
                En Argentina, las Hermanas fundaron varias instituciones
                educativas, siendo el Instituto Corazón de Jesús una de sus
                obras más queridas en Buenos Aires.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/vieja1.webp"
                alt="Imagen histórica del Instituto"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/vieja2.webp"
                alt="Imagen histórica del Instituto"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/vieja3.webp"
                alt="Imagen histórica del Instituto"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <Card className="mb-12 bg-[#0a2d8f]/5 border-none">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-[#0a2d8f] mb-4">
              Nuestra Identidad
            </h2>
            <div className="prose max-w-none text-gray-700 text-justify">
              <p>
                Somos una institución católica comprometida con la educación
                integral, inspirada en el carisma de Santa Joaquina de Vedruna.
                Nuestra comunidad educativa se caracteriza por:
              </p>
              <ul>
                <li>Un ambiente familiar, cercano y acogedor</li>
                <li>La formación en valores cristianos y humanos</li>
                <li>El compromiso con la excelencia académica</li>
                <li>La atención personalizada a cada estudiante</li>
                <li>El servicio preferencial a las familias más vulnerables</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0a2d8f] mb-4">
            ¿Quieres formar parte de nuestra comunidad?
          </h2>
          <p className="text-gray-700 mb-6">
            Te invitamos a conocer nuestra propuesta educativa y ser parte de
            esta historia centenaria.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="border-[#0a2d8f] text-[#0a2d8f] hover:bg-[#0a2d8f] hover:text-white"
            >
              <Link href="/contacto">Contacto</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
