import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PopupAnnouncement from "@/components/popup-announcement"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Instituto Corazón de Jesús | Educación Católica en Balvanera",
  description:
    "Instituto católico en Balvanera con jardín, primaria y secundaria. Formación integral basada en valores cristianos y pedagogía Vedruna. Más de 100 años educando con amor.",
  keywords:
    "instituto católico Balvanera, jardín en Balvanera, primaria católica Buenos Aires, secundaria Balvanera, educación católica, Hermanas Carmelitas Vedruna, Instituto Corazón de Jesús",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://www.institutocorazondejesus.edu.ar" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Instituto Corazón de Jesús | Educación Católica en Balvanera" />
        <meta
          property="og:description"
          content="Instituto católico en Balvanera con jardín, primaria y secundaria. Formación integral basada en valores cristianos y pedagogía Vedruna."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.institutocorazondejesus.edu.ar" />
        <meta property="og:image" content="https://www.institutocorazondejesus.edu.ar/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Instituto Corazón de Jesús",
              url: "https://www.institutocorazondejesus.edu.ar",
              logo: "https://www.institutocorazondejesus.edu.ar/images/logo.png",
              sameAs: [
                "https://www.facebook.com/institutocorazondejesus",
                "https://www.instagram.com/institutocorazondejesus",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ayacucho 474",
                addressLocality: "Balvanera",
                addressRegion: "Buenos Aires",
                postalCode: "C1025AAD",
                addressCountry: "AR",
              },
              telephone: "+541149515123",
              email: "info@institutocorazondejesus.edu.ar",
              description:
                "Instituto católico en Balvanera con jardín, primaria y secundaria. Formación integral basada en valores cristianos y pedagogía Vedruna.",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <PopupAnnouncement />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
