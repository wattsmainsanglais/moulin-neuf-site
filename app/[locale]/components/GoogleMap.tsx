'use client';

import { useTranslations } from 'next-intl';

interface GoogleMapProps {
  address?: string;
  embedUrl?: string;
  height?: string;
  className?: string;
}

export default function GoogleMap({
  address,
  embedUrl,
  height = '400px',
  className = ''
}: GoogleMapProps) {
  const t = useTranslations('GoogleMap');

  // Generate Google Maps embed URL from address
  const generateMapUrl = (addr: string) => {
    const encodedAddress = encodeURIComponent(addr);
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`;
  };

  // Use custom embedUrl if provided, otherwise generate from address
  const mapUrl = embedUrl || (address ? generateMapUrl(address) : null);

  if (!mapUrl) {
    return (
      <div className={`bg-gray-100 rounded-lg flex items-center justify-center ${className}`} style={{ height }}>
        <p className="text-gray-500">{t('NotConfigured')}</p>
      </div>
    );
  }

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${className}`} style={{ height }}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={t('Title')}
      />
    </div>
  );
}
