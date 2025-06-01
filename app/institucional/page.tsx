import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const metadata = {
  title: "Institucional | Colegio Corazón de Jesús",
  description:
    "Conoce la historia, misión, visión y valores del Colegio Corazón de Jesús. Más de 100 años de trayectoria educativa en Balvanera, Buenos Aires.",
  keywords:
    "colegio católico Balvanera, historia Colegio Corazón de Jesús, Hermanas Carmelitas Vedruna, educación católica Buenos Aires",
};

export default function InstitucionalPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#0a2d8f] mb-4">
            Nuestra Institución
          </h1>
          <p className="text-xl text-gray-600">
            Más de 100 años educando con amor en el corazón de Balvanera
          </p>
        </div>

        <div className="relative rounded-lg overflow-hidden mb-12 h-80">
          <Image
            src="/images/historia.webp"
            alt="Fachada del Colegio Corazón de Jesús"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Nuestra Historia</h2>
              <p>Una trayectoria de compromiso educativo desde 1925</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0a2d8f] mb-4">
            Reseña Histórica
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              El Colegio Corazón de Jesús, situado en el corazón del barrio
              porteño de Balvanera, es mucho más que una institución educativa:
              es un símbolo de compromiso, fe y transformación comunitaria. Su
              historia se entrelaza con la de una ciudad que, a comienzos del
              siglo XX, vivía un proceso de fuerte expansión demográfica,
              producto de la inmigración europea y de los cambios sociales y
              urbanos que redefinían Buenos Aires.
            </p>

            <h3 className="text-xl font-bold text-[#0a2d8f] mt-6 mb-2">
              Pasos previos
            </h3>
            <p>
              En ese contexto, el 20 de mayo de 1906, nació en la calle
              Sarmiento 1881 una escuela completamente gratuita, fundada por el
              P. Anselmo María Aguilar S.J., sacerdote jesuita, con el fin de
              brindar formación a niñas pobres del populoso barrio de Balvanera.
              Estuvo inicialmente dirigida por la Srta. Dolores Carbia y tuvo
              como primera directora a la Srta. María Josefa Vederi, funcionando
              con cuatro grados primarios hasta 1913.
            </p>
            <p>
              Ese año marcó un crecimiento importante gracias al impulso de la
              Srta. María Avalle, quien construyó un nuevo edificio en Ayacucho
              474 (actual dirección del colegio), inaugurado en 1914. A partir
              de entonces, la dirección general estuvo a cargo de la Srta.
              Nieves Jordán, con la Srta. María Badaraco al frente del nivel
              primario hasta 1925. Durante estos años, la escuela no solo se
              consolidó en lo pedagógico, sino también en lo social, con el
              acompañamiento de mujeres comprometidas como Sara P. de Martínez,
              quien enseñaba religión, y con un fuerte espíritu de servicio
              impulsado siempre por su fundador, el P. Aguilar.
            </p>
            <p>
              En 1924 se amplió el edificio con la construcción de un primer
              piso, pensado para albergar a una comunidad religiosa.
            </p>

            <h3 className="text-xl font-bold text-[#0a2d8f] mt-6 mb-2">
              Fundación
            </h3>
            <p>
              Finalmente, el 1º de mayo de 1925 se celebró la inauguración
              oficial de la casa y su entrega a las Hermanas Carmelitas de la
              Caridad Vedruna, con la presencia de la Madre General Polonia
              Lizárraga del Santísimo Sacramento y su secretaria, la Madre
              Isabel Arias de San Ignacio, en visita desde la Casa Generalicia.
              En ese momento, era provincial en Argentina la Madre María Teresa
              Iturriague de la Santísima Trinidad.
            </p>
            <p>
              El día 4 de mayo comenzaron las actividades escolares, con 83
              alumnas en nivel primario (hasta 4º grado) y 35 en los cursos de
              Corte y Confección. La comunidad religiosa estaba formada por
              cinco hermanas, bajo la conducción de la Madre Claudia Vacas del
              Sagrado Corazón, y rápidamente se fortalecieron las actividades
              pastorales, sociales y recreativas. Se sumaron grados, se bendijo
              la capilla propia (en 1926), y se sostuvo una intensa colaboración
              con las asociaciones del barrio, destacándose el Centro San
              Ignacio, los PP. Jesuitas, las Damas Vicentinas y familias
              comprometidas con la misión del colegio.
            </p>
            <p>
              A lo largo de las décadas siguientes, la escuela atravesó momentos
              de gran crecimiento, desafíos económicos y transformaciones
              sociales. Se incorporaron nuevas áreas como manualidades, música y
              comercial; se abrió el jardín de infantes en 1949; se gestionó el
              aporte estatal en 1959; y se vivió un fecundo apostolado barrial
              que dejó huellas profundas en generaciones de familias.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0a2d8f] mb-6">
            ¿Quiénes son las Hermanas Carmelitas de la Caridad Vedruna?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/joaquina.webp"
                  alt="Santa Joaquina de Vedruna"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="bg-[#0a2d8f]/5 p-4 rounded-lg">
                <div className="flex items-start mb-2">
                  <Quote className="h-6 w-6 text-[#d91c1c] mr-2 flex-shrink-0" />
                  <p className="text-gray-700 italic">
                    "Hagamos el bien sin desanimarnos, al debido tiempo
                    cosecharemos con tal de que seamos constantes."
                  </p>
                </div>
                <p className="text-right text-sm text-gray-600">
                  — Santa Joaquina de Vedruna
                </p>
              </div>
            </div>

            <div className="prose max-w-none text-gray-700">
              <p>
                La Congregación de las Hermanas Carmelitas de la Caridad Vedruna
                fue fundada en 1826 en Vic, Cataluña (España), por Santa
                Joaquina de Vedruna, una mujer de profunda espiritualidad y
                acción transformadora. Su visión fue clara y revolucionaria para
                su tiempo: consagrar una comunidad de mujeres al servicio de los
                más necesitados, especialmente a través de la educación, la
                salud y la promoción social.
              </p>
              <p>
                Desde su origen, las Hermanas desarrollaron una pedagogía
                centrada en la cercanía, el amor evangélico, la sencillez y el
                compromiso con la justicia, valores que hoy siguen guiando su
                misión en los cinco continentes.
              </p>
              <p>
                En Argentina, las Hermanas llegaron a comienzos del siglo XX,
                desplegando una intensa labor educativa y pastoral en distintos
                contextos sociales. Además del Instituto Corazón de Jesús y la
                residencia universitaria en Balvanera, fundaron otras tres
                instituciones educativas que han dejado huella en sus
                respectivas comunidades:
              </p>
              <ul>
                <li>
                  Colegio Nuestra Señora del Sagrado Corazón (Belgrano,
                  C.A.B.A.)
                </li>
                <li>
                  Colegio Nuestra Señora del Carmen (Suipacha, Buenos Aires)
                </li>
                <li>Colegio Niño Jesús de Praga (Carcarañá, Santa Fe)</li>
              </ul>
              <p>
                En cada una de estas obras, se expresa el deseo de Santa
                Joaquina: "hacer todo por amor, nada por la fuerza", encarnando
                el carisma Vedruna en respuestas concretas a los desafíos del
                tiempo y lugar.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0a2d8f] mb-6">
            Presente y Legado
          </h2>

          <div className="prose max-w-none text-gray-700">
            <p>
              A lo largo de estos 100 años, el Colegio Corazón de Jesús ha sido
              mucho más que un espacio escolar: ha sido un verdadero hogar de
              contención, formación y esperanza, acompañando con cercanía a
              generaciones de niños, jóvenes y familias. Su propuesta educativa
              integral, con un fuerte contenido espiritual, académico y
              solidario, lo ha convertido en un referente ineludible en el
              corazón de un barrio vibrante y diverso, donde confluyen
              historias, culturas y trayectorias de vida muy distintas.
            </p>
            <p>
              Estar inserto en este entorno tan plural ha sido, desde siempre,
              una riqueza para la comunidad educativa, que ha sabido responder
              con sensibilidad y compromiso a las distintas realidades,
              generando un espacio accesible, acogedor y profundamente humano.
              Así, el colegio se ha mantenido fiel al espíritu de sus
              fundadoras, formando personas íntegras, comprometidas con su
              tiempo, capaces de transformar su entorno desde el amor, la fe y
              la esperanza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/vieja1.webp"
                alt="Imagen histórica del colegio"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/vieja2.webp"
                alt="Imagen histórica del colegio"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/vieja3.webp"
                alt="Imagen histórica del colegio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <Card className="mb-12 bg-[#0a2d8f]/5 border-none">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-[#0a2d8f] mb-4">
              Nuestra Identidad
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p>
                El Colegio pertenece a la congregación de HH. Carmelitas de la
                Caridad de Vedruna, fundada por Santa Joaquina, cuyo carisma se
                orienta a la educación integral de los alumnos desde una visión
                cristiana del hombre y del mundo.
              </p>
              <ul>
                <li>
                  <strong>Espacio de la Iglesia católica</strong> abierto a
                  todos los que desean recibir esta educación, preferentemente a
                  los más vulnerables, e identificada con sus intereses.
                </li>
                <li>
                  <strong>Comunidad Educativa</strong> que se estructura con la
                  participación de todos y asume este Proyecto Educativo en un
                  clima de libertad y amor, que favorece la integración.
                </li>
                <li>
                  <strong>Ámbito</strong> que se compromete con la realidad
                  socio-cultural argentina y a la cual nuestra comunidad trata
                  de dar respuesta.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#0a2d8f] mt-6 mb-2">
                Nuestro Estilo Educativo
              </h3>
              <p>
                La Comunidad Educativa que proyectamos se inspira en la
                intuición pedagógica de Joaquina de Vedruna y en la trayectoria
                educativa de las Carmelitas de la Caridad. El amor considerado
                como punto de partida para una educación integral y como único
                medio que la hace posible:
              </p>
              <ul>
                <li>
                  La relación familiar, sencilla y cercana entre todos los
                  miembros de la comunidad educativa.
                </li>
                <li>
                  La alegría como factor esencial en la educación y medio
                  indispensable para favorecer el desarrollo del alumno.
                </li>
                <li>
                  La constancia, tenacidad, amor al trabajo bien hecho, base de
                  una tarea educativa responsable.
                </li>
                <li>
                  Una educación motivadora que despierta y hace crecer las
                  posibilidades de los niños y jóvenes, y ayuda a descubrir las
                  propias cualidades y ponerlas al servicio de la sociedad.
                </li>
                <li>
                  Una educación que parte de lo positivo que hay en cada uno
                  como medio para superar limitaciones.
                </li>
                <li>
                  Una educación personalizadora que integra armónicamente todas
                  las dimensiones humanas.
                </li>
                <li>Una pedagogía activa, realista y práctica.</li>
                <li>
                  Una pedagogía que armonice la exigencia y seriedad en los
                  planeamientos, con la flexibilidad y creatividad en la forma y
                  en los medios.
                </li>
                <li>
                  El compromiso con los intereses de los pobres y la promoción
                  de la justicia y la solidaridad.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0a2d8f] mb-4">
            ¿Quieres formar parte de nuestra comunidad?
          </h2>
          <p className="text-gray-700 mb-6">
            Te invitamos a conocer nuestra propuesta educativa y ser parte de
            esta historia centenaria.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="border-[#0a2d8f] text-[#0a2d8f] hover:bg-[#0a2d8f] hover:text-white"
            >
              <Link href="/contacto">Contacto</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
