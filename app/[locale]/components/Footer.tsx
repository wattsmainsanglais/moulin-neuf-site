'use client';

import { Link } from '../../../src/i18n/navigation';
import { useTranslations } from 'next-intl';
import { MapPin, Mail } from 'lucide-react';
import Image from 'next/image';
import AwattsdevFooter from './AwattsdevFooter';

// Social icons
function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.7812 7C13.7812 3.25391 10.7461 0.21875 7 0.21875C3.25391 0.21875 0.21875 3.25391 0.21875 7C0.21875 10.3846 2.69855 13.1901 5.94043 13.6992V8.96027H4.21777V7H5.94043V5.50594C5.94043 3.80652 6.95215 2.86781 8.50172 2.86781C9.24383 2.86781 10.0198 3.00016 10.0198 3.00016V4.66813H9.16453C8.32234 4.66813 8.05957 5.19094 8.05957 5.72715V7H9.94027L9.63949 8.96027H8.05957V13.6992C11.3014 13.1901 13.7812 10.3846 13.7812 7Z" fill="currentColor"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.12771 3.85537C4.38865 3.85537 2.98591 5.25811 2.98591 6.99717C2.98591 8.73623 4.38865 10.139 6.12771 10.139C7.86677 10.139 9.26951 8.73623 9.26951 6.99717C9.26951 5.25811 7.86677 3.85537 6.12771 3.85537ZM6.12771 9.03975C5.00388 9.03975 4.08513 8.12373 4.08513 6.99717C4.08513 5.87061 5.00115 4.95459 6.12771 4.95459C7.25427 4.95459 8.17029 5.87061 8.17029 6.99717C8.17029 8.12373 7.25154 9.03975 6.12771 9.03975ZM10.1308 3.72686C10.1308 4.13428 9.80271 4.45967 9.39802 4.45967C8.9906 4.45967 8.66521 4.13154 8.66521 3.72686C8.66521 3.32217 8.99334 2.99404 9.39802 2.99404C9.80271 2.99404 10.1308 3.32217 10.1308 3.72686ZM12.2117 4.47061C12.1652 3.48896 11.941 2.61943 11.2219 1.90303C10.5054 1.18662 9.63591 0.962402 8.65427 0.913184C7.64255 0.855762 4.61013 0.855762 3.59841 0.913184C2.61951 0.959668 1.74998 1.18389 1.03084 1.90029C0.311694 2.6167 0.09021 3.48623 0.0409912 4.46787C-0.0164307 5.47959 -0.0164307 8.51201 0.0409912 9.52373C0.0874756 10.5054 0.311694 11.3749 1.03084 12.0913C1.74998 12.8077 2.61677 13.0319 3.59841 13.0812C4.61013 13.1386 7.64255 13.1386 8.65427 13.0812C9.63591 13.0347 10.5054 12.8104 11.2219 12.0913C11.9383 11.3749 12.1625 10.5054 12.2117 9.52373C12.2691 8.51201 12.2691 5.48232 12.2117 4.47061ZM10.9047 10.6093C10.6914 11.1452 10.2785 11.5581 9.73982 11.7741C8.93318 12.094 7.01912 12.0202 6.12771 12.0202C5.2363 12.0202 3.31951 12.0913 2.5156 11.7741C1.97966 11.5608 1.56677 11.1479 1.35076 10.6093C1.03084 9.80264 1.10466 7.88857 1.10466 6.99717C1.10466 6.10576 1.03357 4.18896 1.35076 3.38506C1.56404 2.84912 1.97693 2.43623 2.5156 2.22021C3.32224 1.90029 5.2363 1.97412 6.12771 1.97412C7.01912 1.97412 8.93591 1.90303 9.73982 2.22021C10.2758 2.4335 10.6886 2.84639 10.9047 3.38506C11.2246 4.1917 11.1508 6.10576 11.1508 6.99717C11.1508 7.88857 11.2246 9.80537 10.9047 10.6093Z" fill="currentColor"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('Footer');

  const quickLinks = [
    { labelKey: 'OurRooms', href: { pathname: '/', hash: 'spaces' } },
    { labelKey: 'BookDirect', href: '/contact' },
  ];

  return (
    <footer className="bg-forest py-16 px-6 md:px-10 lg:px-36">
      <div className="max-w-[1152px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-cream/20 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/round-logo-icon.png"
                  alt={t('SiteName')}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cream leading-7 tracking-tight">
                  {t('SiteName')}
                </h3>
                <p className="text-xs text-cream/70 leading-4 tracking-tight">
                  {t('Tagline')}
                </p>
              </div>
            </div>
            <p className="text-sm text-cream/80 leading-relaxed tracking-tight">
              {t('Description')}
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold text-cream leading-7 tracking-tight mb-4">
              {t('ContactTitle')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cream/60 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-cream/80 leading-normal tracking-tight">
                  {t('Address')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cream/60 flex-shrink-0" />
                <span className="text-sm text-cream/80 tracking-tight">
                  {t('Email')}
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-cream leading-7 tracking-tight mb-4">
              {t('QuickLinksTitle')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 hover:text-cream transition-colors tracking-tight"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-lg font-semibold text-cream leading-7 tracking-tight mb-4">
              {t('FollowUsTitle')}
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=61594124285757"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-cream/20 text-cream rounded-full flex items-center justify-center hover:bg-cream/30 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/chambres86400/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-cream/20 text-cream rounded-full flex items-center justify-center hover:bg-cream/30 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-sm text-cream/60 tracking-tight mb-2">
            &copy; {currentYear} {t('SiteName')}. {t('Copyright')}
          </p>
          <div className="flex justify-center items-center gap-2 text-sm">
            <Link href="/privacy-policy" className="text-cream hover:underline tracking-tight">
              {t('PrivacyPolicy')}
            </Link>
            <span className="text-cream">•</span>
            <Link href="/mentions-legales" className="text-cream hover:underline tracking-tight">
              {t('Terms')}
            </Link>
          </div>
        </div>

        {/* AwattsdevFooter branding */}
        <AwattsdevFooter />
      </div>
    </footer>
  );
}
