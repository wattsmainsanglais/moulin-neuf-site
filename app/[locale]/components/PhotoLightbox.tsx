'use client';

import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage {
  src: string;
  alt: string;
}

interface PhotoLightboxProps {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export default function PhotoLightbox({ images, index, onClose, onIndexChange }: PhotoLightboxProps) {
  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, goPrev, goNext]);

  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      <div className="relative w-full h-full max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
