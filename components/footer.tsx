import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a2d8f] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Logo Instituto Corazón de Jesús"
                width={60}
                height={60}
                className="h-12 w-auto mr-3 bg-white rounded-full p-1"
              />
              <div>
                <h3 className="text-lg font-bold">
                  Instituto Corazón de Jesús
                </h3>
                <p className="text-xs">
                  Hermanas Carmelitas de la Caridad Vedruna
                </p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Educación integral basada en valores cristianos desde 1925.
              Formamos personas íntegras, comprometidas con su tiempo y capaces
              de transformar su entorno.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="hover:text-white/80 transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-white/80 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="mailto:info@colegiocorazondejesus.edu.ar"
                className="hover:text-white/80 transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/institucional"
                  className="text-sm hover:text-white/80 transition-colors"
                >
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link
                  href="/niveles/jardin"
                  className="text-sm hover:text-white/80 transition-colors"
                >
                  Jardín de Infantes
                </Link>
              </li>
              <li>
                <Link
                  href="/niveles/primaria"
                  className="text-sm hover:text-white/80 transition-colors"
                >
                  Nivel Primario
                </Link>
              </li>
              <li>
                <Link
                  href="/niveles/secundaria"
                  className="text-sm hover:text-white/80 transition-colors"
                >
                  Nivel Secundario
                </Link>
              </li>
              <li>
                <Link
                  href="/propuesta-complementaria"
                  className="text-sm hover:text-white/80 transition-colors"
                >
                  Propuesta Complementaria
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="text-sm hover:text-white/80 transition-colors"
                >
                  Noticias
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm hover:text-white/80 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">
              Contacto
            </h3>
            <address className="not-italic">
              <div className="flex items-start mb-2">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  Ayacucho 474, Balvanera
                  <br />
                  Ciudad Autónoma de Buenos Aires
                </p>
              </div>
              <div className="flex items-center mb-2">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <p className="text-sm">(011) 4951-5123</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@colegiocorazondejesus.edu.ar"
                  className="text-sm hover:text-white/80 transition-colors"
                >
                  info@colegiocorazondejesus.edu.ar
                </a>
              </div>
            </address>
            <div className="mt-4">
              <h4 className="text-sm font-bold mb-2">Horarios de atención:</h4>
              <p className="text-sm">Lunes a Viernes: 8:00 a 16:30</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Instituto Corazón de Jesús - Todos
            los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
