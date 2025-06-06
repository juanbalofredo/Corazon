import Hero from "@/components/hero";
import MisionVision from "@/components/mision-vision";
import Carrusel from "@/components/carrusel";
import NivelesEducativos from "@/components/niveles-educativos";
import Noticias from "@/components/noticias";
import Contacto from "@/components/contacto";
import PopupAnnouncement from "@/components/popup-announcement";
import { getNoticias, getPopupData } from "@/lib/google-sheets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Instituto Corazón de Jesús - Colegio Católico en Balvanera | Buenos Aires",
  description:
    "Colegio Corazón de Jesús en Balvanera - Más de 100 años educando con amor. Jardín, primaria y secundaria católica con formación integral y valores cristianos. Hermanas Carmelitas Vedruna.",
  keywords:
    "Instituto Corazón de Jesús, Corazón de Jesús, colegio Balvanera, instituto Balvanera, colegio católico Buenos Aires, escuela católica Balvanera, jardín Balvanera, primaria Balvanera, secundaria Balvanera, educación católica, Hermanas Carmelitas Vedruna",
  openGraph: {
    title: "Instituto Corazón de Jesús - Colegio Católico en Balvanera",
    description:
      "Más de 100 años educando con amor en Balvanera. Jardín, primaria y secundaria con formación integral y valores cristianos.",
    url: "https://www.institutocorazondejesus.edu.ar",
    siteName: "Instituto Corazón de Jesús",
    images: [
      {
        url: "https://www.institutocorazondejesus.edu.ar/images/header.webp",
        width: 1200,
        height: 630,
        alt: "Instituto Corazón de Jesús - Fachada del colegio en Balvanera",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.institutocorazondejesus.edu.ar",
  },
};

export default async function Home() {
  const noticias = await getNoticias();
  const popupData = await getPopupData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.institutocorazondejesus.edu.ar/#webpage",
            url: "https://www.institutocorazondejesus.edu.ar",
            name: "Instituto Corazón de Jesús - Colegio Católico en Balvanera",
            isPartOf: {
              "@id": "https://www.institutocorazondejesus.edu.ar/#website",
            },
            about: {
              "@id": "https://www.institutocorazondejesus.edu.ar/#organization",
            },
            description:
              "Página principal del Instituto Corazón de Jesús, colegio católico en Balvanera con más de 100 años de trayectoria educativa.",
            breadcrumb: {
              "@id": "https://www.institutocorazondejesus.edu.ar/#breadcrumb",
            },
            inLanguage: "es-AR",
            potentialAction: [
              {
                "@type": "ReadAction",
                target: ["https://www.institutocorazondejesus.edu.ar"],
              },
            ],
          }),
        }}
      />
      <div className="container mx-auto px-4">
        <PopupAnnouncement popupData={popupData} />
        <Hero />
        <NivelesEducativos />
        <MisionVision />
        <Carrusel />
        <Noticias noticias={noticias} />
        <Contacto />
      </div>
    </>
  );
}
