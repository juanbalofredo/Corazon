import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a2d8f",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Instituto Corazón de Jesús",
  description:
    "Instituto Corazón de Jesús - Colegio católico en Balvanera con más de 100 años de trayectoria. Nivel inicial, nivel primario y nivel secundario. Educación integral con valores cristianos y pedagogía Vedruna en Buenos Aires.",
  keywords: [
    "Instituto Corazón de Jesús",
    "Corazón de Jesús",
    "colegio Balvanera",
    "instituto Balvanera",
    "colegio católico Buenos Aires",
    "escuela católica Balvanera",
    "nivel inicial Balvanera",
    "nivel primario Balvanera",
    "nivel secundario Balvanera",
    "educación católica",
    "Hermanas Carmelitas Vedruna",
    "colegio religioso Buenos Aires",
    "instituto católico CABA",
    "educación integral Buenos Aires",
  ].join(", "),
  authors: [{ name: "Instituto Corazón de Jesús" }],
  creator: "Instituto Corazón de Jesús",
  publisher: "Instituto Corazón de Jesús",
  category: "Educación",
  classification: "Institución Educativa",
  generator: "Next.js",
  applicationName: "Instituto Corazón de Jesús",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.institutocorazondejesus.edu.ar",
    siteName: "Instituto Corazón de Jesús",
    title: "Instituto Corazón de Jesús - Colegio Católico en Balvanera",
    description:
      "Colegio católico en Balvanera con más de 100 años de trayectoria. Nivel inicial, nivel primario y nivel secundario con educación integral y valores cristianos.",
    images: [
      {
        url: "https://www.institutocorazondejesus.edu.ar/images/header.webp",
        width: 1200,
        height: 630,
        alt: "Instituto Corazón de Jesús - Colegio Católico en Balvanera",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instituto Corazón de Jesús - Colegio Católico en Balvanera",
    description:
      "Colegio católico en Balvanera con más de 100 años de trayectoria. Educación integral con valores cristianos.",
    images: ["https://www.institutocorazondejesus.edu.ar/images/header.webp"],
  },
  alternates: {
    canonical: "https://www.institutocorazondejesus.edu.ar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/header.webp"
          fetchPriority="high"
        />
        <link
          rel="canonical"
          href="https://www.institutocorazondejesus.edu.ar"
        />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <meta name="geo.region" content="AR-C" />
        <meta name="geo.placename" content="Balvanera, Buenos Aires" />
        <meta name="geo.position" content="-34.6037,-58.3816" />
        <meta name="ICBM" content="-34.6037,-58.3816" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "@id": "https://www.institutocorazondejesus.edu.ar",
              name: "Instituto Corazón de Jesús",
              alternateName: [
                "Corazón de Jesús",
                "Instituto Corazón de Jesús Balvanera",
                "Colegio Corazón de Jesús",
              ],
              url: "https://www.institutocorazondejesus.edu.ar",
              logo: {
                "@type": "ImageObject",
                url: "https://www.institutocorazondejesus.edu.ar/images/logo.png",
              },
              image:
                "https://www.institutocorazondejesus.edu.ar/images/header.webp",
              description:
                "Instituto Corazón de Jesús - Colegio católico en Balvanera con más de 100 años de trayectoria. Nivel inicial, nivel primario y nivel secundario con educación integral y valores cristianos.",
              foundingDate: "1925",
              sameAs: [
                "https://www.facebook.com/institutocorazondejesus",
                "https://www.instagram.com/institutocorazondejesus",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ayacucho 474",
                addressLocality: "Balvanera",
                addressRegion: "Ciudad Autónoma de Buenos Aires",
                postalCode: "C1025AAD",
                addressCountry: "AR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -34.6037,
                longitude: -58.3816,
              },
              telephone: "+541149515123",
              email: "info@institutocorazondejesus.edu.ar",
              priceRange: "$$",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Niveles Educativos",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Course",
                      name: "Nivel Inicial",
                      description:
                        "Nivel inicial maternal y de infantes para niños de 2 a 5 años",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Course",
                      name: "Nivel Primario",
                      description:
                        "Educación nivel primario de 1° a 7° grado con jornada completa",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Course",
                      name: "Nivel Secundario",
                      description:
                        "Bachillerato con orientación en Ciencias Sociales y Humanidades",
                    },
                  },
                ],
              },
              areaServed: {
                "@type": "City",
                name: "Buenos Aires",
                containedInPlace: {
                  "@type": "Country",
                  name: "Argentina",
                },
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
