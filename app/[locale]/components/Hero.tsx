'use client';

//import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="w-full bg-cream">
      {/* Hero Image - widescreen banner, full graphic (incl. text) must stay visible, never cropped */}
      <div className="relative w-full max-w-[1920px] mx-auto aspect-[2/1]">
        <Image
          src="/CMN-banner.jpg"
          alt="Chambres Moulin Neuf - Civray"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center"
        />
      </div>

      {/* Scroll Indicator 
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-70 animate-bounce">
        <ChevronDown className="w-8 h-8 text-forest" />
      </div>*/}
    </section>
  );
}
