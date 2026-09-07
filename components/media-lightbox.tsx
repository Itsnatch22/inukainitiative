"use client";

import Image from "next/image";
import { X } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type MediaLightboxProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "image" | "video";
  src: string;
  alt: string;
};

export function MediaLightbox({
  open,
  onOpenChange,
  type,
  src,
  alt,
}: MediaLightboxProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-w-6xl border-0 bg-black/95 p-2 text-white shadow-2xl sm:p-4"
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogDescription className="sr-only">
          Expanded {type} view of {alt}
        </DialogDescription>
        <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden rounded-lg bg-black sm:min-h-[70vh]">
          {type === "image" ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 90vw"
              className="object-contain"
            />
          ) : (
            <video
              src={src}
              controls
              autoPlay
              playsInline
              className="max-h-[78vh] w-full object-contain"
            />
          )}
          <DialogClose
            aria-label="Close expanded media"
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/65 text-white transition-colors hover:bg-black/85"
          >
            <X className="h-5 w-5" />
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
