'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showSite, setShowSite] = useState(false);
  const words = ['BIENVENUE', 'SUR', 'MON', 'PORTEFOLIO'];

  const [lang, setLang] = useState('fr');
  const [currentTime, setCurrentTime] = useState(new Date());

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

  return (
    <div className="scroll-smooth">
      {!showSite ? (
        <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black">
          <p className="text-9xl font-bold text-white">
            {words[currentWordIndex]}
          </p>
        </div>
      ) : (
        <main className="min-h-screen bg-gray-100 dark:bg-white-300 p-4 font-sans font-bold">
          <header className="text-left py-10 fixed z-0">
            <h1 className="text-black  text-9xl ">
              <div>
                {lang === 'fr' ? 'LUCAS FABREGOULE' : 'FABREGOULE LUCAS'}
              </div>
              {/* <Image src="/pp.jpg" width={150} height={150} alt="Description" /> */}
            </h1>
            <div className="flex justify-between">
              <p className="text-black  font-bold mt-2 border-t-2 border-black">
                {lang === 'fr'
                  ? "Developpeur Web & Createur D'applications"
                  : 'Web Developer & App Creator'}
              </p>
              <p className="text-black font-bold mt-2 border-t-2 border-black">
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
          <section className="py-10 flex mt-48">
            <div className="container mx-auto px-4 border-r-2 border-black">
              <h2 className="text-3xl font-bold text-black ">
                {lang === 'fr' ? 'MON PARCOURS' : 'MY JOURNEY'}
              </h2>
            </div>

            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-black">
                {lang === 'fr'
                  ? 'Septembre 2023 : 1 mois de formation en C à 42'
                  : 'September 2023 : 1 month to study C language at 42'}
              </h2>
              <h2 className="text-3xl font-bold text-black mt-4">
                {lang === 'fr'
                  ? 'Septembre 2019-2021 : BTS Services Informatiques aux organisations (SIO)'
                  : 'October 2023 : Starting project X'}
              </h2>
              <h2 className="text-3xl font-bold text-black  mt-4">
                {lang === 'fr'
                  ? 'Septembre 2019 : DUT en Réseaux et télécommunications'
                  : 'October 2023 : Starting project X'}
              </h2>
              <h2 className="text-3xl font-bold text-black  mt-4">
                {lang === 'fr'
                  ? 'Juin 2018 : Baccalauréat STI2D EE (Energie & Environnement)'
                  : 'October 2023 : Starting project X'}
              </h2>
            </div>
          </section>

          <section className="py-10 flex">
            <div className="container mx-auto px-4 border-r-2 border-black">
              <h2 className="text-3xl font-bold text-black ">
                {lang === 'fr' ? 'MES COMPETENCES' : 'MY SKILLS'}
              </h2>
            </div>

            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-black ">
                {lang === 'fr'
                  ? 'Capacite a traviller en equipe'
                  : 'September 2023 : 1 month to study C language at 42'}
              </h2>
              <h2 className="text-3xl font-bold text-black  mt-4">
                {lang === 'fr'
                  ? 'Sens de l initiative'
                  : 'October 2023 : Starting project X'}
              </h2>
              <h2 className="text-3xl font-bold text-black  mt-4">
                {lang === 'fr'
                  ? 'Organise et methodique'
                  : 'October 2023 : Starting project X'}
              </h2>
              <h2 className="text-3xl font-bold text-black  mt-4">
                {lang === 'fr'
                  ? 'Aisance relationnelle'
                  : 'October 2023 : Starting project X'}
              </h2>
            </div>
          </section>

          <section className="py-10 flex">
            <div className="container mx-auto px-4 border-r-2 border-black">
              <h2 className="text-3xl font-bold text-black ">
                {lang === 'fr' ? 'PROJETS REALISES' : 'MY SKILLS'}
              </h2>
            </div>

            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-black ">
                {lang === 'fr'
                  ? 'Bot Vinted'
                  : 'September 2023 : 1 month to study C language at 42'}
              </h2>
              <h2 className="text-3xl font-bold text-black  mt-4">
                {lang === 'fr'
                  ? 'Logiciel de Gestion de Stocks'
                  : 'October 2023 : Starting project X'}
              </h2>
              <h2 className="text-3xl font-bold text-black  mt-4">
                {lang === 'fr'
                  ? 'Site de Vente de Sneakers'
                  : 'October 2023 : Starting project X'}
              </h2>
              <h2 className="text-3xl font-bold text-black  mt-4">
                {lang === 'fr'
                  ? 'Site de Manga'
                  : 'October 2023 : Starting project X'}
              </h2>
            </div>
          </section>

          <section className="py-10 flex">
            <div className="container mx-auto px-4 border-r-2 border-black">
              <h2 className="text-3xl font-bold text-black ">
                {lang === 'fr' ? 'CENTRES D INTERET' : 'MY SKILLS'}
              </h2>
            </div>

            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-black ">
                {lang === 'fr'
                  ? 'Ski / Skate'
                  : 'September 2023 : 1 month to study C language at 42'}
              </h2>
              <h2 className="text-3xl font-bold text-black  mt-4">
                {lang === 'fr'
                  ? 'Musique / Festivals'
                  : 'October 2023 : Starting project X'}
              </h2>
              <h2 className="text-3xl font-bold text-black  mt-4">
                {lang === 'fr'
                  ? 'Voyages / Aventure'
                  : 'October 2023 : Starting project X'}
              </h2>
              <h2 className="text-3xl font-bold text-black  mt-4">
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
