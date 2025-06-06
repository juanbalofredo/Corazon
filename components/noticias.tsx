import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

interface Noticia {
  id: string;
  titulo: string;
  resumen: string;
  fecha: string;
  imagen: string;
  contenido: string;
}

interface NoticiasProps {
  noticias: Noticia[];
}

export default function Noticias({ noticias = [] }: NoticiasProps) {
  // Mostrar solo las 3 noticias más recientes
  const noticiasRecientes = noticias.slice(0, 3);

  // Si no hay noticias, no mostrar la sección
  if (noticiasRecientes.length === 0) {
    return (
      <section className="py-16 bg-gray-50" id="noticias">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#0a2d8f] mb-2">
              Noticias y Novedades
            </h2>
            <p className="text-gray-600">
              Próximamente tendremos noticias para compartir.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50" id="noticias">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a2d8f] mb-2">
            Noticias y Novedades
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mantente informado sobre las actividades, eventos y novedades de
            nuestra comunidad educativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {noticiasRecientes.map((noticia) => (
            <Card key={noticia.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={noticia.imagen || "/placeholder.svg"}
                  alt={noticia.titulo}
                  fill
                  className="object-cover"
                />
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
              <CardContent>
                <p className="text-gray-600">{noticia.resumen}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {noticias.length > 3 && (
          <div className="text-center mt-8">
            <Button asChild className="bg-[#0a2d8f] hover:bg-[#081d5e]">
              <Link href="/noticias">Ver todas las noticias</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
