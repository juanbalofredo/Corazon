import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, BookOpen, Users } from "lucide-react";

export default function MisionVision() {
  return (
    <section className="py-16 bg-gray-50" id="mision-vision">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a2d8f] mb-2">
            Nuestra Identidad
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            El Instituto pertenece a la congregación de Hermanas Carmelitas de
            la Caridad de Vedruna, fundada por Santa Joaquina, cuyo carisma se
            orienta a la educación integral de los alumnos desde una visión
            cristiana del hombre y del mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-[#0a2d8f]">
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

          <Card className="border-t-4 border-t-[#0a2d8f]">
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

          <Card className="border-t-4 border-t-[#0a2d8f]">
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

        <div className="mt-12 text-center">
          <blockquote className="italic text-xl text-gray-700 max-w-3xl mx-auto">
            "Mira a la juventud a quien educas como antorcha que tienes que
            encender para alumbrar a los que están en la casa y todos
            glorifiquen al Padre que está en los cielos."
            <footer className="text-sm mt-2 text-gray-500">
              — Santa Joaquina de Vedruna
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
