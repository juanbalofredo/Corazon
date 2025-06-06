import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-critical">
      <div className="absolute inset-0 z-0">
        <div className="hero-overlay" />
        <img
          src="/images/header.webp"
          alt="Instituto Corazón de Jesús"
          className="hero-image"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
        <div className="max-w-2xl text-white ml-8 md:ml-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Instituto Corazón de Jesús
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Educando con el corazón, sirviendo con amor
          </p>
          <p className="mb-8 text-lg">
            "Hagamos el bien sin desanimarnos, al debido tiempo cosecharemos con
            tal de que seamos constantes."
          </p>
        </div>
      </div>
    </section>
  );
}
