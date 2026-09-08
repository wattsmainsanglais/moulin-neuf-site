'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();

  // Remove the current locale from the pathname
  const currentRoute = pathname.slice(3); // Remove /en or /fr

  return (
    <div className="flex items-center gap-2">
      <Link
        href={`/en${currentRoute}`}
        className={`text-sm font-medium tracking-tight transition-colors ${
          locale === 'en' ? 'text-sage' : 'text-ink/60 hover:text-sage'
        }`}
      >
        EN
      </Link>
      <span className="text-sage/50">|</span>
      <Link
        href={`/fr${currentRoute}`}
        className={`text-sm font-medium tracking-tight transition-colors ${
          locale === 'fr' ? 'text-sage' : 'text-ink/60 hover:text-sage'
        }`}
      >
        FR
      </Link>
    </div>
  );
}
