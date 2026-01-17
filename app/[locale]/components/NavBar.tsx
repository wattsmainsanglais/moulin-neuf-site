'use client'

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

// Bridge icon SVG component
function BridgeIcon({ className = "w-5 h-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.125 1.125C0.502734 1.125 0 1.62773 0 2.25C0 2.87227 0.502734 3.375 1.125 3.375H2.53125V5.625H0V10.125C1.86328 10.125 3.375 11.6367 3.375 13.5V15.75C3.375 16.3723 3.87773 16.875 4.5 16.875H5.625C6.24727 16.875 6.75 16.3723 6.75 15.75V13.5C6.75 11.6367 8.26172 10.125 10.125 10.125C11.9883 10.125 13.5 11.6367 13.5 13.5V15.75C13.5 16.3723 14.0027 16.875 14.625 16.875H15.75C16.3723 16.875 16.875 16.3723 16.875 15.75V13.5C16.875 11.6367 18.3867 10.125 20.25 10.125V5.625H17.7188V3.375H19.125C19.7473 3.375 20.25 2.87227 20.25 2.25C20.25 1.62773 19.7473 1.125 19.125 1.125H1.125ZM16.0312 3.375V5.625H13.2188V3.375H16.0312ZM11.5312 3.375V5.625H8.71875V3.375H11.5312ZM7.03125 3.375V5.625H4.21875V3.375H7.03125Z" fill="currentColor"/>
    </svg>
  );
}

export default function NavBar({ locale }: { locale: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('Nav');

  const navItems = [
    { title: t('Spaces'), href: '#spaces' },
    { title: t('Location'), href: '#location' },
    { title: t('Contact'), href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-cream border-b border-sage/20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center">
              <BridgeIcon className="w-5 h-[18px] text-cream" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-forest tracking-tight leading-7">
                {t('SiteName')}
              </h1>
              <p className="text-xs font-light text-sage tracking-tight leading-4">
                {t('Tagline')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-base font-medium text-gray-800 hover:text-sage transition-colors tracking-tight"
              >
                {item.title}
              </Link>
            ))}
            <div className="pl-6 border-l border-sage/30">
              <LanguageSwitcher locale={locale} />
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher locale={locale} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-forest hover:text-sage transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 md:hidden z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="fixed top-20 left-0 right-0 bg-cream md:hidden shadow-lg animate-slide-down z-50">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block px-6 py-4 border-b border-sage/10 hover:bg-sage/10 text-gray-800 hover:text-sage transition-all font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
