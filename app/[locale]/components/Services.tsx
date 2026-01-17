'use client';

import * as Icons from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Service {
  icon: keyof typeof Icons;
  title: string;
  description: string;
}

interface ServicesProps {
  services: Service[];
  title?: string;
  description?: string;
  bgColor?: 'white' | 'gray';
}

export default function Services({
  services,
  title,
  description,
  bgColor = 'white'
}: ServicesProps) {
  const t = useTranslations('Services');
  const bgClass = bgColor === 'white' ? 'bg-white' : 'bg-gray-50';
  const displayTitle = title || t('DefaultTitle');

  return (
    <section id="services" className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-forestgreen">
          {displayTitle}
        </h2>
        {description && (
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {description}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon] as Icons.LucideIcon;

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-orange/10 rounded-lg mb-4">
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-orange" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-forestgreen mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
