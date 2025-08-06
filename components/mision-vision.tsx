import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, BookOpen, Users } from "lucide-react";

export default function MisionVision() {
  return (
    <section
      className="py-16 bg-[#0a2d8f]/5 mb-10 rounded-xl"
      id="mision-vision"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a2d8f] mb-6">
            Nuestra Identidad
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Somos una institución católica comprometida con la educación
              integral, inspirada en el carisma de Santa Joaquina de Vedruna.
              Nuestra comunidad educativa se caracteriza por:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0a2d8f] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Un ambiente familiar, cercano y acogedor
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0a2d8f] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  La formación en valores cristianos y humanos
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0a2d8f] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  El compromiso con la excelencia académica
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0a2d8f] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  La atención personalizada a cada estudiante
                </p>
              </div>
              <div className="flex items-start space-x-3 md:col-span-2 justify-center">
                <div className="w-2 h-2 bg-[#0a2d8f] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  El servicio preferencial a las familias más vulnerables
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-[#0a2d8f] bg-white border-none">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-[#0a2d8f]/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-[#0a2d8f]" />
              </div>
              <CardTitle className="text-xl text-[#0a2d8f]">Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Formar integralmente a niños y jóvenes, desarrollando todas sus
                dimensiones humanas desde una visión cristiana, con un estilo
                educativo basado en el amor, la cercanía y la valoración de la
                persona, preparándolos para ser agentes de transformación
                social.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-[#0a2d8f] bg-white border-none">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-[#0a2d8f]/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-[#0a2d8f]" />
              </div>
              <CardTitle className="text-xl text-[#0a2d8f]">Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Ser una comunidad educativa de referencia que, desde la
                pedagogía Vedruna, forma personas íntegras, comprometidas con su
                tiempo, capaces de transformar su entorno desde el amor, la fe y
                la esperanza, con especial atención a los más vulnerables.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-[#0a2d8f] bg-white border-none">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-[#0a2d8f]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#0a2d8f]" />
              </div>
              <CardTitle className="text-xl text-[#0a2d8f]">Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Nuestra propuesta educativa Vedruna prioriza cuatro valores
                fundamentales:
                <strong> Fe, Libertad, Fraternidad y Justicia</strong>. Educamos
                en un clima familiar, sencillo, cercano y alegre, valorando a la
                persona y las relaciones interpersonales.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
