import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { getNoticias } from "@/lib/google-sheets";
import { notFound } from "next/navigation";

interface NoticiasPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: NoticiasPageProps) {
  const noticias = await getNoticias();
  const noticia = noticias.find((n) => n.id === params.id);

  if (!noticia) {
    return {
      title: "Noticia no encontrada | Colegio Corazón de Jesús",
    };
  }

  return {
    title: `${noticia.titulo} | Colegio Corazón de Jesús`,
    description:
      noticia.resumen ||
      "Noticia del Colegio Corazón de Jesús en Balvanera, Buenos Aires.",
  };
}

export default async function NoticiaDetallePage({
  params,
}: NoticiasPageProps) {
  const { id } = params;

  const noticias = await getNoticias();
  const noticia = noticias.find((n) => n.id === id);

  if (!noticia) {
    notFound();
  }

  const noticiasRelacionadas = noticias.filter((n) => n.id !== id).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/noticias" className="flex items-center text-[#0a2d8f]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a noticias
            </Link>
          </Button>

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center text-sm text-gray-500">
              <CalendarIcon className="mr-1 h-4 w-4" />
              <time dateTime={noticia.fecha}>
                {new Date(noticia.fecha).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              {noticia.categoria && (
                <>
                  <span className="mx-2">•</span>
                  <span className="bg-[#0a2d8f] text-white text-xs px-2 py-1 rounded">
                    {noticia.categoria}
                  </span>
                </>
              )}
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" title="Compartir">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Compartir</span>
              </Button>
              <Button variant="ghost" size="icon" title="Guardar">
                <Bookmark className="h-4 w-4" />
                <span className="sr-only">Guardar</span>
              </Button>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-[#0a2d8f] mb-4">
            {noticia.titulo}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{noticia.resumen}</p>

          <div className="relative rounded-lg overflow-hidden mb-8 h-80">
            <Image
              src={noticia.imagen || "/placeholder.svg"}
              alt={noticia.titulo}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none whitespace-pre-wrap">
            {noticia.contenido}
          </div>
        </div>

        {noticiasRelacionadas.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#0a2d8f] mb-6">
              Noticias relacionadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {noticiasRelacionadas.map((noticia) => (
                <Link
                  key={noticia.id}
                  href={`/noticias/${noticia.id}`}
                  className="group"
                >
                  <div className="relative h-40 rounded-lg overflow-hidden mb-2">
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
                  <h3 className="font-medium text-[#0a2d8f] group-hover:underline">
                    {noticia.titulo}
                  </h3>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    <time dateTime={noticia.fecha}>
                      {new Date(noticia.fecha).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
