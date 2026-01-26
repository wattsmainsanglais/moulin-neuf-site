'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { MapPin, UtensilsCrossed, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

const features = [
  { icon: MapPin, textKey: 'Feature1' },
  { icon: UtensilsCrossed, textKey: 'Feature2' },
  { icon: ShoppingBag, textKey: 'Feature3' },
];

export default function Location() {
  const t = useTranslations('Location');

  return (
    <section id="location" className="bg-cream py-20 px-6 md:px-10 lg:px-36">
      <div className="max-w-[1152px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-forest leading-tight tracking-tight mb-8">
              {t('Title')}
            </h2>
            <p className="text-lg text-gray-800/80 leading-relaxed tracking-tight mb-12">
              {t('Description')}
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <li key={index} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-sage flex-shrink-0" />
                    <span className="text-base text-gray-800/70 tracking-tight">
                      {t(feature.textKey)}
                    </span>
                  </li>
                );
              })}
            </ul>

            <Link href="#contact" className="btn-primary">
              {t('ExploreButton')}
            </Link>
          </div>

          {/* Image */}
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80"
              alt={t('ImageAlt')}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
