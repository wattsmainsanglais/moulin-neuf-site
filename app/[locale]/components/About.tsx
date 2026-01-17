'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="py-20 bg-forestgreen text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          {t('Title')}
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg">
          <p>{t('P1')}</p>
          <p>{t('P2')}</p>
          <p>{t('P3')}</p>
        </div>
      </div>
    </section>
  );
}
