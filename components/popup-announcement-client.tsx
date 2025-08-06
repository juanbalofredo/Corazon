"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getPopupDataClient } from "@/lib/google-sheets-client";

interface PopupData {
  active: boolean;
  title: string;
  message: string;
  buttonText: string;
  buttonLink: string;
  imagen: string | null;
}

export default function PopupAnnouncementClient() {
  const [popupData, setPopupData] = useState<PopupData | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPopupData() {
      try {
        const data = await getPopupDataClient();
        setPopupData(data);
        if (data && data.active) {
          setIsOpen(true);
        }
      } catch (error) {
        setPopupData(null);
      } finally {
        setLoading(false);
      }
    }

    loadPopupData();
  }, []);

  if (loading || !popupData || !popupData.active) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[480px] p-0">
        <div className="bg-gradient-to-br from-[#0a2d8f] to-[#1e40af] text-white p-6 rounded-t-lg">
          <DialogHeader>
            <DialogTitle className="text-white text-xl font-bold text-center">
              📢 {popupData.title}
            </DialogTitle>
          </DialogHeader>
        </div>

        <div className="p-6">
          <DialogDescription className="text-base text-gray-700 text-center leading-relaxed">
            {popupData.message}
          </DialogDescription>
        </div>

        <DialogFooter className="px-6 pb-6 pt-2">
          <div className="flex gap-3 w-full justify-center">
            <Button
              onClick={() => setIsOpen(false)}
              variant="outline"
              className="flex-1 border-gray-300 hover:bg-gray-50"
            >
              Cerrar
            </Button>
            <Button
              onClick={() => {
                setIsOpen(false);
                if (popupData.buttonLink) {
                  window.location.href = popupData.buttonLink;
                }
              }}
              className="flex-1 bg-[#0a2d8f] hover:bg-[#083074] text-white"
            >
              {popupData.buttonText}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
