'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Hero Image - Client's brand card */}
      <Image
        src="/CMN-A6-card.jpg"
        alt="Chambres Moulin Neuf - Civray"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-70 animate-bounce">
        <ChevronDown className="w-8 h-8 text-forest" />
      </div>
    </section>
  );
}
