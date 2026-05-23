import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Clock, 
  X, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { MENU_ITEMS, MenuItem } from './data';

export default function App() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4] font-sans text-[#10241A] antialiased selection:bg-[#EAE2D5] selection:text-[#10241A]">
      
      {/* HEADER NAVBAR */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FBF9F4]/95 backdrop-blur-md border-b border-[#10241A]/10 py-4 shadow-sm/5' 
          : 'bg-[#FBF9F4] py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col items-start cursor-pointer text-left focus:outline-none"
            id="brand-logo"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#10241A]">
              Domowe Obiady
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-[#10241A]/60 mt-0.5">
              Obiady na zamówienie &amp; Garmażeria
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => scrollToSection('galeria-dan')}
              className="text-[#10241A]/80 hover:text-[#10241A] font-medium text-sm transition-colors cursor-pointer"
            >
              Galeria dań
            </button>
            <button 
              onClick={() => scrollToSection('opinie-klientow')}
              className="text-[#10241A]/80 hover:text-[#10241A] font-medium text-sm transition-colors cursor-pointer"
            >
              Opinie
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-[#10241A]/80 hover:text-[#10241A] font-medium text-sm transition-colors cursor-pointer"
            >
              Kontakt
            </button>
          </nav>

          {/* Clean Facebook CTA & Order Button */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.facebook.com/profile.php?id=61561268035084" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#10241A] hover:opacity-80 transition-opacity border-b border-[#10241A] pb-0.5"
              id="nav-facebook-btn"
            >
              <span>Facebook</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button 
              onClick={() => scrollToSection('kontakt')}
              className="inline-flex items-center bg-[#10241A] text-[#FBF9F4] hover:bg-[#B88B2A] px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer"
              id="header-order-btn"
            >
              Zamów
            </button>

            {/* Mobile Menu Icon */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#10241A] hover:opacity-80 transition-opacity"
              aria-label="Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <div className="w-5 h-4 flex flex-col justify-between"><span className="w-full h-0.5 bg-[#10241A]"></span><span className="w-full h-0.5 bg-[#10241A]"></span><span className="w-full h-0.5 bg-[#10241A]"></span></div>}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#FBF9F4] border-b border-[#10241A]/10 fixed top-[70px] left-0 right-0 z-30 shadow-lg"
          >
            <div className="px-6 py-8 space-y-6">
              <button 
                onClick={() => scrollToSection('galeria-dan')}
                className="block w-full text-left font-serif text-lg text-[#10241A]"
              >
                Galeria dań
              </button>
              <button 
                onClick={() => scrollToSection('opinie-klientow')}
                className="block w-full text-left font-serif text-lg text-[#10241A]"
              >
                Opinie na Facebooku
              </button>
              <button 
                onClick={() => scrollToSection('kontakt')}
                className="block w-full text-left font-serif text-lg text-[#10241A]"
              >
                Lokalizacja &amp; Kontakt
              </button>
              <div className="pt-4 border-t border-[#10241A]/10">
                <a 
                  href="https://www.facebook.com/profile.php?id=61561268035084"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm font-semibold uppercase tracking-wider text-[#10241A]"
                >
                  <span>Przejdź na profil Facebook</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION - ASYMMETRIC, LUXURY FULL-DARK */}
      <section className="relative overflow-hidden bg-[#10241A] text-[#FBF9F4] py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-end">
            
            {/* Left Content Area (Content Shifted Bottom-Left Feel) */}
            <div className="lg:col-span-7 space-y-8 text-left z-10">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#F3ECE2]/80 block">
                Tradycyjna Kuchnia Mokotowska
              </span>
              
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-[#FBF9F4] leading-[1.02]">
                Prawdziwe jedzenie, <br />
                <span className="font-serif italic font-light text-[#F3ECE2]">przygotowane</span> <br />
                z sercem.
              </h1>
              
              <p className="max-w-lg text-[#FBF9F4]/80 text-base sm:text-lg leading-relaxed font-light">
                Zabiegani? Oferujemy świeże, ręcznie robione posiłki oraz rzemieślnicze wyroby garmażeryjne, przygotowywane wyłącznie z naturalnych składników na warszawskim Mokotowie.
              </p>

              {/* Minimalist Scroll Cue or Direct link */}
              <div className="pt-4 flex items-center space-x-6">
                <button 
                  onClick={() => scrollToSection('galeria-dan')}
                  className="inline-flex items-center space-x-3 bg-[#FBF9F4] text-[#10241A] hover:bg-[#F3ECE2] px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-colors focus:outline-none"
                >
                  <span>Przeglądaj wyroby</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side Single Cookbook-quality Image Detail */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] w-full max-w-sm ml-auto bg-stone-900 border border-[#FBF9F4]/10">
                <img 
                  referrerPolicy="no-referrer"
                  src="https://i.ibb.co/DD364nkp/699010371-122212149914375601-3206478650981954949-n.jpg"
                  alt="Odżachuri gruzińskie z karkówki" 
                  className="w-full h-full object-cover filter brightness-[0.95]"
                />
                
                {/* Understated bottom caption */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#10241A]/95 p-4 border border-[#FBF9F4]/15">
                  <span className="text-[9px] uppercase tracking-widest text-[#F3ECE2]">Specjał Tygodnia</span>
                  <h3 className="font-serif font-light italic text-[#FBF9F4] text-base mt-0.5">Odżachuri gruzińskie</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: STATEMENT SECTION (One elegant sentence with gold divider - Gold Rule) */}
      <section className="bg-[#FBF9F4] py-24 sm:py-32 border-b border-[#10241A]/15">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif italic font-light text-2xl sm:text-4xl text-[#10241A] leading-relaxed max-w-2xl mx-auto">
            „Proste składniki, tradycyjna cierpliwość i stół pachnący autentycznym domem.”
          </p>
          
          {/* THE GOLD RULE - RARE ACCENT EMBYED */}
          <div className="h-px w-24 bg-[#B88B2A] mx-auto mt-12" />
        </div>
      </section>

      {/* SECTION 3: EDITORIAL DISHES GALLERY (Alternating grid layout with pristine typography) */}
      <section id="galeria-dan" className="bg-[#F3ECE2] py-28 sm:py-36">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Asymmetric Header with Space */}
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#10241A]/70 block mb-3">
                Sztuka Domowego Smaku
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#10241A] leading-none">
                Galeria Naszych <br />
                <span className="font-serif italic text-[#10241A]/70">Dań i Wyrobów</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[#10241A]/80 font-light text-sm sm:text-base leading-relaxed">
                Wszystkie wyroby powstają rzemieślniczo z lokalnych składników w naszej mokotowskiej kuchni. Przeglądaj realne zdjęcia przygotowywanych przez nas dań.
              </p>
            </div>
          </div>

          {/* Staggered Alternating Photo Rows (No card containers, negative space is luxury) */}
          <div className="space-y-24 sm:space-y-36">
            {MENU_ITEMS.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center cursor-pointer`}
                >
                  {/* Photo Frame - crisp edges, no shadow, no lift, just subtle opacity and scale */}
                  <div className="w-full lg:w-[55%] aspect-[16/10] overflow-hidden bg-stone-900 border border-[#10241A]/5 relative">
                    <img 
                      referrerPolicy="no-referrer"
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03] filter brightness-[0.98]"
                    />
                    <div className="absolute inset-0 bg-[#10241A]/5 hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Details block */}
                  <div className="w-full lg:w-[45%] space-y-6 text-left">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#10241A]/60 font-medium block">
                        {item.categoryLabel}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[#10241A]/95 leading-tight group-hover:text-[#10241A] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[#10241A]/85 text-sm sm:text-base leading-relaxed font-light max-w-md">
                      {item.description}
                    </p>

                    {/* Minimal Tags */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-[#10241A]/50 font-mono tracking-wider">
                          #{tag.toLowerCase()}
                        </span>
                      ))}
                    </div>

                    {/* Discrete CTA trigger with gold accent border */}
                    <div className="pt-2">
                      <span className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#10241A] border-b border-[#10241A]/20 group-hover:border-[#10241A] pb-1 transition-all">
                        <span>Pokaż zbliżenie</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Restrained Bistro Ordering Note */}
          <div className="mt-32 border-t border-[#10241A]/10 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#10241A] block">
                Zasady Zamówień &amp; Dowóz
              </span>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xs sm:text-sm text-[#10241A]/80 font-light leading-relaxed max-w-xl">
                Z uwagi na to, że dbamy o zachowanie absolutnej rzemieślniczej świeżości i nie magazynujemy potraw, prosimy o składanie zamówień z jednodniowym wyprzedzeniem poprzez kontakt na profilu Facebook lub telefonicznie. Oferujemy wygodną dostawę na dowóz pod wskazany adres na terenie Mokotowa i okolic, a także odbiór osobisty.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: DARK FEATURE REVIEW (Full Width Dark, Large Quote, Spacing Is Luxury) */}
      <section id="opinie-klientow" className="bg-[#10241A] text-[#FBF9F4] py-32 sm:py-40">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#F3ECE2]/80 font-medium tracking-widest block">
            Głosy z Mokotowa
          </span>
          
          <blockquote className="font-serif italic font-light text-2xl sm:text-4xl md:text-5xl text-[#FBF9F4] leading-normal max-w-3xl mx-auto">
            „Pyszne obiady, najlepsze w Warszawie. Polecam 😋!!!”
          </blockquote>
          
          <div className="space-y-1">
            <p className="font-light text-sm tracking-widest uppercase text-[#F3ECE2]">
              Użytkownik Facebooka
            </p>
            <a 
              href="https://www.facebook.com/profile.php?id=61561268035084&sk=reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs text-[#FBF9F4]/60 hover:text-[#FBF9F4] border-b border-[#FBF9F4]/20 hover:border-[#FBF9F4] pb-0.5 transition-colors"
            >
              <span>Zweryfikowana opinia na Facebooku</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 5: ABOUT SECTION - ASYMMETRIC (55% left column, 45% empty luxury layout) */}
      <section className="bg-[#FBF9F4] py-24 sm:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* 55% Text Left */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#10241A]/70 block">
                Etos Naszej Pracy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#10241A]">
                Gotujemy uczciwie <br />
                <span className="font-serif italic text-[#10241A]/70 font-light">tak, jak we własnym domu.</span>
              </h2>
              
              <div className="space-y-6 text-[#10241A]/80 font-light text-base sm:text-lg leading-relaxed max-w-xl">
                <p>
                  Wszystko, co opuszcza naszą kuchnię przy ulicy Zygmunta Modzelewskiego, podlega tym samym prostym zasadom. Zero sztucznych polepszaczy. Wyłącznie świeże zioła, naturalne mięsa oraz warzywa pochodzące od stałych, wyselekcjonowanych dostawców.
                </p>
                <p>
                  Oferujemy obfite, bogate w tradycyjne aromaty porcje – dokładnie takie, jakie zaserwowałaby ukochana babcia czy mama, z zachowaniem należytej skrupulatności i higieny rzemieślniczej kuchni.
                </p>
              </div>
            </div>

            {/* 45% Restrained image and Empty Space Column */}
            <div className="lg:col-span-5 relative space-y-8 h-full">
              <div className="border border-[#10241A]/10 w-full max-w-md aspect-square overflow-hidden bg-stone-100 ml-auto">
                <img 
                  referrerPolicy="no-referrer"
                  src="https://i.ibb.co/LzSD5M2P/524142003-122176915256375601-3971851207692124314-n.jpg"
                  alt="Tradycyjny domowy smalec"
                  className="w-full h-full object-cover filter brightness-[0.98]"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: HOURS & KONTAKT (Two columns, max-width 850px, centered, minimal) */}
      <section id="kontakt" className="bg-[#F3ECE2] py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            
            {/* Left Column info */}
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#10241A]/70 block">
                  Informacje
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-[#10241A]">
                  Dostawa na dowóz &amp; Odbiór
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#10241A]/60 tracking-wider">
                    Obszar dostawy i lokalizacja
                  </span>
                  <span className="block text-[#10241A] font-serif text-lg mt-1">
                    Warszawa, Mokotów i okolice
                  </span>
                  <span className="block text-[#10241A]/70 text-sm">
                    Punkt odbioru osobistego: Zygmunta Modzelewskiego 67
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#10241A]/60 tracking-wider">
                    Zamówienia z dostawą pod drzwi
                  </span>
                  <p className="text-sm text-[#10241A]/80 mt-1 font-light leading-relaxed">
                    Szanując Twój czas, jedzenie pakujemy w bezpieczne opakowania termiczne. Zamówienie dostarczamy bezpośrednio na dowóz pod Twój adres o precyzyjnie ustalonej porze lub przygotowujemy wygodny odbiór na gorąco po uprzednim kontakcie na Facebooku lub telefonicznie.
                  </p>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=61561268035084"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-[#10241A] hover:bg-[#10241A]/90 text-[#FBF9F4] px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-colors w-full sm:w-auto text-center justify-center cursor-pointer"
                  id="contact-facebook-link"
                >
                  <span>Wyślij zamówienie na Facebooku</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="block pt-2">
                  <a 
                    href="https://maps.google.com/?q=Zygmunta+Modzelewskiego+67,+Warszawa+02-679"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#10241A] border-b border-[#10241A] pb-0.5"
                  >
                    <span>Otwórz Mapę Google</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Clean geometric map border */}
            <div className="relative aspect-square w-full bg-stone-200 border border-[#10241A]/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.8870343348667!2d21.010753777091757!3d52.190926060540605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471932d50b7c42e7%3A0x56275a063bc4ad37!2sZygmunta%20Modzelewskiego%2067%2C%2002-679%20Warszawa!5e0!3m2!1spl!2spl!4v1779534558658!5m2!1spl!2spl" 
                className="w-full h-full border-0 absolute inset-0 filter grayscale contrast-[1.1] brightness-[0.98]" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja Domowe Obiady"
                id="google-maps-frame"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER - RESTRAINED THREE COLUMNS */}
      <footer className="bg-[#10241A] text-[#FBF9F4]/70 py-16 border-t border-[#FBF9F4]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[#FBF9F4]/10">
            
            {/* Col 1 */}
            <div className="space-y-4">
              <span className="block font-serif text-lg font-bold text-[#FBF9F4] leading-tight">
                Domowe Obiady
              </span>
              <p className="text-xs text-[#FBF9F4]/70 leading-relaxed font-light max-w-xs">
                Domowe obiady na zamówienie z realizacją dostawy na dowóz oraz tradycyjna garmażeria rzemieślnicza. Gotowane wyłącznie ze świeżych produktów na warszawskim Mokotowie.
              </p>
            </div>

            {/* Col 2 */}
            <div className="space-y-4">
              <span className="block text-[10px] uppercase tracking-wider font-semibold text-[#F3ECE2]">
                Nawigacja
              </span>
              <div className="flex flex-col space-y-2.5 text-xs font-light">
                <button 
                  onClick={() => scrollToSection('galeria-dan')}
                  className="hover:text-[#FBF9F4] transition-colors text-left"
                >
                  Galeria dań i wyrobów
                </button>
                <button 
                  onClick={() => scrollToSection('opinie-klientow')}
                  className="hover:text-[#FBF9F4] transition-colors text-left"
                >
                  Opinie gości
                </button>
                <button 
                  onClick={() => scrollToSection('kontakt')}
                  className="hover:text-[#FBF9F4] transition-colors text-left"
                >
                  Lokalizacja &amp; Odbiór
                </button>
              </div>
            </div>

            {/* Col 3 */}
            <div className="space-y-4">
              <span className="block text-[10px] uppercase tracking-wider font-semibold text-[#F3ECE2]">
                Social Media
              </span>
              <div className="flex flex-col space-y-2 text-xs font-light">
                <a 
                  href="https://www.facebook.com/profile.php?id=61561268035084"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FBF9F4] underline"
                >
                  Profil na Facebooku
                </a>
                <span className="text-[#FBF9F4]/50">
                  Ulica Zygmunta Modzelewskiego 67
                </span>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-12 text-xs text-[#FBF9F4]/50 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} Domowe Obiady. Wszystkie prawa zastrzeżone.
            </p>
          </div>

        </div>
      </footer>

      {/* DETAILED LIGHTBOX MODAL FOR ZOOM (Editorial, Stark, flat edges, no cards) */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#10241A]/95 backdrop-blur-sm flex items-center justify-center p-6 overflow-y-auto"
            onClick={() => setSelectedItem(null)}
            id="lightbox-container"
          >
            <motion.div
              initial={{ scale: 0.98, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 10 }}
              className="bg-[#FBF9F4] text-[#10241A] overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-xl relative border border-[#10241A]/10"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close button with simple typographic X */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-10 bg-[#10241A] text-[#FBF9F4] p-2 hover:bg-[#10241A]/90 transition-colors cursor-pointer focus:outline-none"
                aria-label="Zamknij"
                id="lightbox-close-btn"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column - Crisp Image */}
              <div className="md:w-1/2 aspect-square md:aspect-auto select-none bg-stone-900 relative min-h-[300px] md:min-h-[450px]">
                <img 
                  referrerPolicy="no-referrer"
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover absolute inset-0 filter brightness-[0.98]"
                />
              </div>

              {/* Right Column - Info */}
              <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-between space-y-12">
                
                <div className="space-y-6">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#10241A]/60 block">
                    {selectedItem.categoryLabel}
                  </span>
                  
                  <h3 className="font-serif font-light text-3xl sm:text-4xl text-[#10241A] leading-tight">
                    {selectedItem.title}
                  </h3>
                  
                  <p className="text-[#10241A]/90 text-sm sm:text-base font-light leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedItem.tags.map(tag => (
                      <span key={tag} className="bg-[#10241A]/5 text-[#10241A] text-[10px] px-3 py-1 font-mono tracking-wider">
                        #{tag.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-[#10241A]/15 space-y-6">
                  <p className="text-xs text-[#10241A]/70 font-light leading-relaxed">
                    Każdy nasz wyrób powstaje ze świeżych produktów od sprawdzonych lokalnych dostawców bezpośrednio przed odbiorem.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61561268035084"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#10241A] hover:opacity-90 text-center text-[#FBF9F4] py-4 text-xs font-semibold uppercase tracking-widest transition-opacity flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>Zamów przez Facebook</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="px-6 py-4 border border-[#10241A]/20 hover:bg-[#10241A]/5 text-[#10241A] font-semibold text-xs tracking-widest uppercase transition-colors"
                    >
                      Zamknij
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
