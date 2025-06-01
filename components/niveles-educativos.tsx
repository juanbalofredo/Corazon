import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NivelesEducativos() {
  const niveles = [
    {
      id: "jardin",
      title: "Jardín de Infantes",
      description:
        "Jornada completa para salas de 2, 3, 4 y 5 años. Metodología lúdica y creativa que fomenta el desarrollo integral.",
      image: "/images/jardin.webp",
      color: "#16a34a", // Verde
      link: "/niveles/jardin",
    },
    {
      id: "primaria",
      title: "Nivel Primario",
      description:
        "Jornada completa con enfoque pedagógico personalizado. Formación académica sólida con valores cristianos.",
      image: "/images/primaria.webp",
      color: "#ea580c", // Naranja
      link: "/niveles/primaria",
    },
    {
      id: "secundaria",
      title: "Nivel Secundario",
      description:
        "Bachillerato con orientación en Ciencias Sociales y Humanidades. Preparación integral para estudios superiores.",
      image: "/images/secundaria.webp",
      color: "#0a2d8f", // Azul (mantener)
      link: "/niveles/secundaria",
    },
  ];

  return (
    <section className="py-16" id="niveles">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a2d8f] mb-2">
            Niveles Educativos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una propuesta educativa integral desde el nivel inicial
            hasta el secundario, con formación académica de calidad y educación
            en valores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {niveles.map((nivel) => (
            <Card
              key={nivel.id}
              className="overflow-hidden border-none shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={nivel.image || "/placeholder.svg"}
                  alt={nivel.title}
                  fill
                  className="object-cover object-bottom"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: `${nivel.color}20` }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl" style={{ color: nivel.color }}>
                  {nivel.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{nivel.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full"
                  style={{ backgroundColor: nivel.color, color: "white" }}
                >
                  <Link href={nivel.link}>Conocer más</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#0a2d8f] mb-4">
            Propuesta Educativa Complementaria
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold text-[#0a2d8f]">Formación Religiosa</h4>
              <p className="text-sm text-gray-600">
                Educación en la fe católica y valores cristianos.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold text-[#0a2d8f]">
                Talleres y Apoyo Escolar
              </h4>
              <p className="text-sm text-gray-600">
                Actividades extracurriculares y acompañamiento personalizado.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold text-[#0a2d8f]">Inglés</h4>
              <p className="text-sm text-gray-600">
                Enseñanza del idioma inglés en todos los niveles.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-bold text-[#0a2d8f]">
                Gabinete Psicopedagógico
              </h4>
              <p className="text-sm text-gray-600">
                Acompañamiento profesional para el desarrollo integral.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button asChild className="bg-[#0a2d8f] hover:bg-[#081d5e]">
              <Link href="/propuesta-complementaria">Conocer más</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
