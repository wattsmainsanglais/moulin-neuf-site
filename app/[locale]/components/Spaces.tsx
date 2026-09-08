'use client';

import { useTranslations } from 'next-intl';
import { Link } from '../../../src/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const rooms = [
  {
    titleKey: 'ChambreTitle',
    descKey: 'ChambreDesc',
    priceKey: 'ChambrePrice',
    images: [
      '/images/CMN-moulin-bed1.jpg',
      '/images/CMN-moulin-bed2.jpg',
      '/images/CMN-moulin-bed3.jpg',
      '/images/CMN-moulin-bed4.jpg',
      '/images/CMN-moulin-bain1.jpg',
    ],
  },
  {
    titleKey: 'PontTitle',
    descKey: 'PontDesc',
    priceKey: 'PontPrice',
    images: [
      '/images/CMN-pont-bed1.jpg',
      '/images/CMN-pont-bed2.jpg',
      '/images/CMN-pont-bed3.jpg',
      '/images/CMN-pont-bed4.jpg',
      '/images/CMN-pont-bain1.jpg',
      '/images/CMN-pont-vista.jpg',
    ],
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
          <p className="text-lg text-ink/70 leading-7 tracking-tight">
            {t('Description')}
          </p>
        </div>

        {/* Rooms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {rooms.map((room, index) => (
            <div key={index} className="flex flex-col">
              {/* Photo grid */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="col-span-2 row-span-2 relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={room.images[0]}
                    alt={t(room.titleKey)}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {room.images.slice(1).map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={src}
                      alt={t(room.titleKey)}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-forest leading-7 tracking-tight mb-2">
                {t(room.titleKey)}
              </h3>
              <p className="text-sm text-ink/70 leading-5 tracking-tight mb-6 flex-grow">
                {t(room.descKey)}
              </p>

              {/* Price Link */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-sm text-sage hover:text-forest transition-colors tracking-tight"
              >
                {t(room.priceKey)}
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            {t('ViewAllSpaces')}
          </Link>
        </div>
      </div>
    </section>
  );
}
