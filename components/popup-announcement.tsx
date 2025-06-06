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

interface PopupAnnouncementProps {
  popupData?: Announcement | null;
}

export default function PopupAnnouncement({
  popupData,
}: PopupAnnouncementProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (popupData && popupData.active && popupData.title && popupData.message) {
      const popupShown = sessionStorage.getItem("popup-shown");

      if (!popupShown) {
        setIsOpen(true);
        sessionStorage.setItem("popup-shown", "true");
      } else {
        console.error("Popup ya se mostró anteriormente");
      }
    } else {
      console.error("Condiciones no cumplidas para mostrar popup");
    }
  }, [popupData]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (
    !popupData ||
    !popupData.active ||
    !popupData.title ||
    !popupData.message ||
    !isOpen
  ) {
    return null;
  }

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
          {popupData.imagen ? (
            <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
              <Image
                src={popupData.imagen || "/placeholder.svg"}
                alt={popupData.title}
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
            {popupData.title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {popupData.message}
          </p>

          <div className="flex gap-3 justify-center">
            <Button
              asChild
              className="bg-[#0a2d8f] hover:bg-[#081d5e]"
              onClick={handleClose}
            >
              <Link href={popupData.buttonLink}>{popupData.buttonText}</Link>
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
