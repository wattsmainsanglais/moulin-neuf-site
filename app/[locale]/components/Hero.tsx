'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="w-full h-[600px] md:h-[700px] bg-white py-8 md:py-12">
      {/* Hero Image - Client's brand card */}
      <div className="relative w-full h-full">
        <Image
          src="/CMN-A6-card.jpg"
          alt="Chambres Moulin Neuf - Civray"
          fill
          priority
          className="object-contain object-center"
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-70 animate-bounce">
        <ChevronDown className="w-8 h-8 text-forest" />
      </div>
    </section>
  );
}
