import Image from 'next/image';
import { readdirSync } from 'fs';
import path from 'path';
import {getTranslations} from 'next-intl/server';

async function getScreenshots() {
  const shotsDir = path.join(process.cwd(), 'public', 'shots');
  try {
    const files = readdirSync(shotsDir);
    const screenshots = files
      .filter(file => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'))
      .slice(0, 12) // Get first 12 screenshots
      .map((file, index) => ({
        id: index,
        filename: file,
        path: `/shots/${file}`,
        alt: `Screenshot ${index + 1}`
      }));
    return screenshots;
  } catch (error) {
    console.error('Error reading screenshots:', error);
    return [];
  }
}

export default async function Gallery() {
  const screenshots = await getScreenshots();
  const t = await getTranslations('Gallery');

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-forestgreen">
          {t('Title')}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('Description')}
        </p>

        {screenshots.length === 0 ? (
          <p className="text-center text-gray-500">{t('NoScreenshots')}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((screenshot) => (
              <div
                key={screenshot.id}
                className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <Image
                  src={screenshot.path}
                  alt={`${t('ScreenshotAlt')} ${screenshot.id + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-forestgreen/0 group-hover:bg-forestgreen/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
