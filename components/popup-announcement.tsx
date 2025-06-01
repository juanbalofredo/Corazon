"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Announcement {
  active: boolean;
  title: string;
  message: string;
  buttonText: string;
  buttonLink: string;
  imagen?: string | null;
}

export default function PopupAnnouncement() {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await fetch("/api/sheets?sheet=anuncios");
        if (!response.ok) {
          throw new Error("Error al obtener anuncios");
        }
        const data = await response.json();

        if (data && data.length > 0 && data[0].active) {
          setAnnouncement(data[0]);

          const popupShown = sessionStorage.getItem("popup-shown");
          if (!popupShown) {
            setIsOpen(true);
            sessionStorage.setItem("popup-shown", "true");
          }
        }
      } catch (error) {
        // Error silencioso para evitar romper la app
      }
    };

    fetchAnnouncement();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!announcement || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative animate-in fade-in-0 zoom-in-95 duration-300">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Cerrar anuncio"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          {announcement.imagen ? (
            <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
              <Image
                src={announcement.imagen || "/placeholder.svg"}
                alt={announcement.title}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-16 h-16 bg-[#0a2d8f] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📢</span>
            </div>
          )}

          <h3 className="text-xl font-bold text-[#0a2d8f] mb-3">
            {announcement.title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {announcement.message}
          </p>

          <div className="flex gap-3 justify-center">
            <Button
              asChild
              className="bg-[#0a2d8f] hover:bg-[#081d5e]"
              onClick={handleClose}
            >
              <Link href={announcement.buttonLink}>
                {announcement.buttonText}
              </Link>
            </Button>
            <Button
              variant="outline"
              onClick={handleClose}
              className="border-gray-300"
            >
              Cerrar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
