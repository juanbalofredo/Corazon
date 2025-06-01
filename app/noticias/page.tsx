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
import { CalendarIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getNoticias } from "@/lib/google-sheets";

export const metadata = {
  title: "Noticias y Novedades | Colegio Corazón de Jesús",
  description:
    "Mantente informado sobre las actividades, eventos y novedades del Colegio Corazón de Jesús en Balvanera, Buenos Aires.",
  keywords:
    "noticias colegio Balvanera, eventos escolares Buenos Aires, actividades Colegio Corazón de Jesús, novedades educativas",
};

export default async function NoticiasPage() {
  const noticias = await getNoticias();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#0a2d8f] mb-4">
            Noticias y Novedades
          </h1>
          <p className="text-xl text-gray-600">
            Mantente informado sobre las actividades, eventos y novedades de
            nuestra comunidad educativa
          </p>
        </div>

        {noticias.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {noticias.map((noticia) => (
              <Card
                key={noticia.id}
                className="overflow-hidden h-full flex flex-col"
              >
                <div className="relative h-48">
                  <Image
                    src={noticia.imagen || "/placeholder.svg"}
                    alt={noticia.titulo}
                    fill
                    className="object-cover"
                  />
                  {noticia.categoria && (
                    <div className="absolute top-2 right-2">
                      <span className="bg-[#0a2d8f] text-white text-xs px-2 py-1 rounded">
                        {noticia.categoria}
                      </span>
                    </div>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <CalendarIcon className="mr-1 h-4 w-4" />
                    <time dateTime={noticia.fecha}>
                      {new Date(noticia.fecha).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <CardTitle className="text-xl text-[#0a2d8f]">
                    {noticia.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{noticia.resumen}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#0a2d8f] text-[#0a2d8f] hover:bg-[#0a2d8f] hover:text-white"
                  >
                    <Link href={`/noticias/${noticia.id}`}>Leer más</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hay noticias disponibles en este momento.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
