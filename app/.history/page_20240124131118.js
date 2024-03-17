'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showSite, setShowSite] = useState(false);
  const words = ['BIENVENUE', 'SUR', 'MON', 'PORTEFOLIO'];

  const [lang, setLang] = useState('fr');
  const [currentTime, setCurrentTime] = useState(new Date());

  const [scrolled, setScrolled] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const [darkMode, setDarkMode] = useState(false);

  //DARK MODE

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', newMode.toString());
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  //show skills

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  //

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentWordIndex(currentWordIndex + 1);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowSite(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [currentWordIndex, words.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  };

  // Headers

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {!showSite ? (
        <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-gray-100">
          <p className="text-9xl font-bold text-black">
            {words[currentWordIndex]}
          </p>
        </div>
      ) : (
        <main className="min-h-screen bg-gray-100 dark:bg-white-300 p-4 font-sans font-bold">
          <header
            className={`fixed top-0 left-0 w-full text-left py-10 bg-white z-50 shadow-md transition-all duration-300 ${
              scrolled ? 'header-scrolled' : ''
            }`}
          >
            <h1 className="text-black dark:text-black text-9xl ">
              <div className="mx-8">
                {lang === 'fr' ? 'LUCAS FABREGOULE' : 'FABREGOULE LUCAS'}
              </div>
              {/* <Image src="/pp.jpg" width={150} height={150} alt="Description" /> */}
            </h1>
            <div className="flex justify-between mx-8">
              <p className="text-black dark:text-black font-bold mt-2 border-t-2 border-black">
                {lang === 'fr'
                  ? "Developpeur Web & Createur D'applications"
                  : 'Web Developer & App Creator'}
              </p>
              <button onClick={toggleDarkMode} className="text-black">
                {darkMode ? 'Mode Clair' : 'Mode Sombre'}
              </button>
              <p className="text-black dark:text-black font-bold mt-2 border-t-2 border-black">
                {currentTime.toLocaleTimeString()}
              </p>
            </div>

            <button
              onClick={toggleLang}
              className="absolute top-0 right-0 m-4 text-black"
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          </header>

          <section className="py-10 flex mt-52 text-black">
            <div className="container mx-auto px-4 border-r-2 border-black">
              <h2 className={darkMode ? 'dark' : 'text-3xl font-bold'}>
                {lang === 'fr' ? 'MON PARCOURS' : 'MY JOURNEY'}
              </h2>
            </div>
            {showDetails && (
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-700 dark:text-black">
                  {lang === 'fr'
                    ? 'Septembre 2023 : Formation à l école 42'
                    : 'September 2023 : 1 month to study C language at 42'}
                </h2>
                <h2 className="text-3xl font-bold text-gray-700 dark:text-black mt-4">
                  {lang === 'fr'
                    ? 'Septembre 2019-2021 : BTS Services Informatiques aux organisations (SIO)'
                    : 'October 2023 : Starting project X'}
                </h2>
                <h2 className="text-3xl font-bold text-gray-700 dark:text-black mt-4">
                  {lang === 'fr'
                    ? 'Septembre 2019 : DUT en Réseaux et télécommunications'
                    : 'October 2023 : Starting project X'}
                </h2>
                <h2 className="text-3xl font-bold text-gray-700 dark:text-black mt-4">
                  {lang === 'fr'
                    ? 'Juin 2018 : Baccalauréat STI2D EE (Energie & Environnement)'
                    : 'October 2023 : Starting project X'}
                </h2>
              </div>
            )}
          </section>

          <section className="py-10 flex">
            <div className="container mx-auto px-4 border-r-2 border-black">
              <h2 className="text-3xl font-bold text-gray-700 dark:text-black">
                {lang === 'fr' ? 'MES COMPETENCES' : 'MY SKILLS'}
              </h2>
            </div>

            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-700 dark:text-black">
                {lang === 'fr'
                  ? 'Capacite a traviller en equipe'
                  : 'September 2023 : 1 month to study C language at 42'}
              </h2>
              <h2 className="text-3xl font-bold text-gray-700 dark:text-black mt-4">
                {lang === 'fr'
                  ? 'Sens de l initiative'
                  : 'October 2023 : Starting project X'}
              </h2>
              <h2 className="text-3xl font-bold text-gray-700 dark:text-black mt-4">
                {lang === 'fr'
                  ? 'Organise et methodique'
                  : 'October 2023 : Starting project X'}
              </h2>
              <h2 className="text-3xl font-bold text-gray-700 dark:text-black mt-4">
                {lang === 'fr'
                  ? 'Aisance relationnelle'
                  : 'October 2023 : Starting project X'}
              </h2>
            </div>
          </section>

          <section className="py-10 flex">
            <div className="container mx-auto px-4 border-r-2 border-black">
              <h2 className="text-3xl font-bold text-gray-700 dark:text-black">
                {lang === 'fr' ? 'PROJETS REALISES' : 'MY SKILLS'}
              </h2>
            </div>

            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-700 dark:text-black">
                {lang === 'fr'
                  ? 'Bot Vinted'
                  : 'September 2023 : 1 month to study C language at 42'}
              </h2>
              <h2 className="text-3xl font-bold text-gray-700 dark:text-black mt-4">
                {lang === 'fr'
                  ? 'Logiciel de Gestion de Stocks'
                  : 'October 2023 : Starting project X'}
              </h2>
              <h2 className="text-3xl font-bold text-gray-700 dark:text-black mt-4">
                {lang === 'fr'
                  ? 'Site de Vente de Sneakers'
                  : 'October 2023 : Starting project X'}
              </h2>
              <h2 className="text-3xl font-bold text-gray-700 dark:text-black mt-4">
                {lang === 'fr'
                  ? 'Site de Manga'
                  : 'October 2023 : Starting project X'}
              </h2>
            </div>
          </section>

          <section className="py-10 flex">
            <div className="container mx-auto px-4 border-r-2 border-black">
              <h2 className="text-3xl font-bold text-gray-700 dark:text-black">
                {lang === 'fr' ? 'CENTRES D INTERET' : 'MY SKILLS'}
              </h2>
            </div>

            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-700 dark:text-black">
                {lang === 'fr'
                  ? 'Ski / Skate'
                  : 'September 2023 : 1 month to study C language at 42'}
              </h2>
              <h2 className="text-3xl font-bold text-gray-700 dark:text-black mt-4">
                {lang === 'fr'
                  ? 'Musique / Festivals'
                  : 'October 2023 : Starting project X'}
              </h2>
              <h2 className="text-3xl font-bold text-gray-700 dark:text-black mt-4">
                {lang === 'fr'
                  ? 'Voyages / Aventure'
                  : 'October 2023 : Starting project X'}
              </h2>
              <h2 className="text-3xl font-bold text-gray-700 dark:text-black mt-4">
                {lang === 'fr' ? 'Mode' : 'October 2023 : Starting project X'}
              </h2>
            </div>
          </section>

          <footer className="text-center py-5 border-t-2 border-black">
            <p className="text-gray-500 dark:text-gray-500">
              © {lang === 'fr' ? 'LUCAS FABREGOULE' : 'FABREGOULE LUCAS'} -{' '}
              {new Date().getFullYear()}
            </p>
          </footer>
        </main>
      )}
    </div>
  );
}
