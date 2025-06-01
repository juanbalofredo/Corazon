import Hero from "@/components/hero";
import MisionVision from "@/components/mision-vision";
import Carrusel from "@/components/carrusel";
import NivelesEducativos from "@/components/niveles-educativos";
import Noticias from "@/components/noticias";
import Contacto from "@/components/contacto";
import { getNoticias } from "@/lib/google-sheets";

export default async function Home() {
  const noticias = await getNoticias();

  return (
    <div className="container mx-auto px-4">
      <Hero />

      <NivelesEducativos />
      <MisionVision />
      <Carrusel />
      <Noticias noticias={noticias} />
      <Contacto />
    </div>
  );
}
