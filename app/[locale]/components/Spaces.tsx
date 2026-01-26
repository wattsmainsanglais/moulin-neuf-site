'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Placeholder images - replace with actual property images
const spaces = [
  {
    titleKey: 'ChambreTitle',
    descKey: 'ChambreDesc',
    priceKey: 'ChambrePrice',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
  },
  {
    titleKey: 'StudioTitle',
    descKey: 'StudioDesc',
    priceKey: 'StudioPrice',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
  },
  {
    titleKey: 'EspaceTitle',
    descKey: 'EspaceDesc',
    priceKey: 'EspacePrice',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
];

export default function Spaces() {
  const t = useTranslations('Spaces');

  return (
    <section id="spaces" className="bg-white py-20 px-6 md:px-10 lg:px-36">
      <div className="max-w-[1152px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-forest leading-tight tracking-tight mb-6">
            {t('Title')}
          </h2>
          <p className="text-lg text-gray-800/70 leading-7 tracking-tight">
            {t('Description')}
          </p>
        </div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {spaces.map((space, index) => (
            <div key={index} className="flex flex-col">
              {/* Image */}
              <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src={space.image}
                  alt={t(space.titleKey)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-forest leading-7 tracking-tight mb-2">
                {t(space.titleKey)}
              </h3>
              <p className="text-sm text-gray-800/70 leading-5 tracking-tight mb-6 flex-grow">
                {t(space.descKey)}
              </p>

              {/* Price Link */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 text-sm text-sage hover:text-forest transition-colors tracking-tight"
              >
                {t(space.priceKey)}
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="#contact" className="btn-primary">
            {t('ViewAllSpaces')}
          </Link>
        </div>
      </div>
    </section>
  );
}
