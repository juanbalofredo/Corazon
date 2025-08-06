"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getNoticiasClient } from "@/lib/google-sheets-client";

interface Noticia {
  id: string;
  titulo: string;
  resumen: string;
  fecha: string;
  imagen: string;
  contenido: string;
  categoria: string;
}

export default function NoticiasClient() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNoticias() {
      try {
        const data = await getNoticiasClient();
        setNoticias(data);
      } catch (error) {
        setNoticias([]);
      } finally {
        setLoading(false);
      }
    }

    loadNoticias();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-[#0a2d8f]/5 rounded-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0a2d8f] mb-12">
            Noticias y Novedades
          </h2>
          <div className="text-center">
            <p className="text-gray-500">Cargando noticias...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#0a2d8f]/5 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0a2d8f] mb-12">
          Noticias y Novedades
        </h2>
        {noticias.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {noticias.map((noticia) => (
                <Card
                  key={noticia.id}
                  className="overflow-hidden h-full flex flex-col"
                >
                  <div className="relative h-48">
                    <Image
                      src={noticia.imagen}
                      alt={noticia.titulo}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-[#0a2d8f]">
                      {noticia.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">{noticia.resumen}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(noticia.fecha).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-gray-500">
              No hay noticias disponibles en este momento.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
