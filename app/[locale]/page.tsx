import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Spaces from './components/Spaces';
import Location from './components/Location';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import {LayoutProps} from './layout';

export default async function Home({params}: LayoutProps) {
  const {locale} = await params;

  return (
    <main>
      <NavBar locale={locale} />
      <Hero />
      <Welcome />
      <Spaces />
      <Location />
      <ContactForm />
      <Footer />
    </main>
  );
}
