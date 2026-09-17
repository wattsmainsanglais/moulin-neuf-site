import type { Metadata } from "next";
import { Playfair_Display, Lato, Jost } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '../../src/i18n/routing';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chambres Moulin Neuf | Chambre d'Hôtes à Civray, Charente",
  description: "Chambres d'hôtes de charme à Civray, Charente. Découvrez l'hospitalité française au cœur de la campagne charentaise.",
  other: {
    google: "notranslate",
  },
};

export type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function RootLayout({
  children,
  params
}: LayoutProps) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} translate="no">
      <body
        className={`${playfair.variable} ${lato.variable} ${jost.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <NavBar locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
