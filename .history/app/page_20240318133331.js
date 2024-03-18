'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import { CiLinkedin } from 'react-icons/ci';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import {
  SiIndeed,
  SiTailwindcss,
  SiTauri,
  SiWelcometothejungle,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showSite, setShowSite] = useState(false);
  const words = ['BIENVENUE', 'SUR', 'MON', 'PORTEFOLIO'];

  const [lang, setLang] = useState('fr');
  const [currentTime, setCurrentTime] = useState(new Date());

  const [scrolled, setScrolled] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const [darkMode, setDarkMode] = useState(true);

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
        <div
          className={`flex justify-center items-center fixed top-0 left-0 w-full h-full ${
            darkMode ? 'dark-mode' : 'light-mode'
          }`}
        >
          <p className="text-9xl font-bold ">{words[currentWordIndex]}</p>
        </div>
      ) : (
        <main
          className={`min-h-screen p-4 font-sans font-bold ${
            darkMode ? 'dark-mode' : 'light-mode'
          }`}
        >
          <header
            className={`fixed top-0 left-0 w-full text-left py-10 z-50 shadow-md transition-all duration-500 ${
              scrolled ? 'header-scrolled' : ''
            } ${darkMode ? 'header-darkmode-gradient' : ''}`}
          >
            <h1 className="text-7xl flex justify-between items-end underline">
              <div className="mx-8">Fabregoule Lucas</div>

              <label className="switch relative mr-8">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <span className="slider"></span>
              </label>
            </h1>

            <div className="flex justify-between mx-8">
              <p
                className={`font-bold mt-2 border-t-2 ${
                  darkMode ? 'dark-mode' : 'light-mode'
                }`}
              >
                {lang === 'fr'
                  ? 'Developpeur full stack - FE & BE'
                  : 'Developpeur full stack'}
              </p>

              <p
                className={`font-bold mt-2 border-t-2 ${
                  darkMode ? 'dark-mode' : 'light-mode'
                }`}
              >
                {currentTime.toLocaleTimeString()}
              </p>
            </div>

            <button
              onClick={toggleLang}
              className={`absolute top-0 right-0 m-4 mr-8 ${
                darkMode ? 'dark-mode' : 'light-mode'
              }`}
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          </header>

          <section className="py-10 flex mt-52">
            <div
              className={`flex-col container mx-auto justify-center text-center my-auto ${
                darkMode ? 'dark-mode' : 'light-mode'
              }`}
            >
              <h2 className="text-2xl font-bold">Lucas Fabregoule</h2>
              <p className="text-2xl">lucasfabregoule@gmail.com</p>
              <p className="text-2xl">06 62 13 55 22</p>
              <div className="flex justify-center space-x-2 mt-2">
                <SiIndeed size={40} color="blue" href="" />
                <SiWelcometothejungle
                  size={40}
                  className="text-yellow-500 rounded-xl p-2"
                />
                <CiLinkedin size={40} />
              </div>
            </div>
            <div
              className={`flex-col container mx-auto px-4 border-l-2 ${
                darkMode ? 'dark-mode' : 'light-mode'
              }`}
            >
              <div className="container mx-auto flex-col justify-center">
                <div className="flex justify-center mt-2">
                  <Image
                    src={'/pp.jpg'}
                    width={200}
                    height={100}
                    className="rounded-3xl border-2 border-white"
                    alt="photo"
                  />
                </div>
                <div className="flex justify-center">
                  <div
                    className={`text-xl border-2 rounded-xl px-2 m-2 ${
                      darkMode ? 'dark-mode' : 'light-mode'
                    }`}
                  >
                    {lang === 'fr' ? 'MON CV' : 'MY CV'}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-10 flex mt-2">
            <div
              className={`flex container mx-auto justify-center text-center ${
                darkMode ? 'dark-mode' : 'light-mode'
              }`}
            >
              <h2 className="text-3xl font-bold underline flex my-auto ">
                {lang === 'fr' ? 'MA STACK' : 'MY STACK'}
              </h2>
            </div>
            <div
              className={`container mx-auto px-4 flex flex-col items-center justify-center border-l-2 ${
                darkMode ? 'dark-mode' : 'light-mode'
              }`}
            >
              <div className={`flex items-center justify-center `}>
                <button
                  className={`button flex flex-col items-center justify-center text-1xl border-2 rounded-3xl p-3 ml-4 mt-2  transform hover:scale-105 transition duration-300 ease-in-out ${
                    darkMode ? 'dark-mode' : 'light-mode'
                  }`}
                >
                  <RiJavascriptFill size={70} className="text-yellow-400" />
                  JavaScript
                </button>
                <button
                  className={`button flex flex-col items-center justify-center text-1xl border-2 rounded-3xl p-3 ml-4 mt-2 transform hover:scale-105 transition duration-300 ease-in-out ${
                    darkMode ? 'dark-mode' : 'light-mode'
                  }`}
                >
                  <SiTailwindcss size={70} className="text-blue-400" />
                  Tailwind
                </button>
              </div>
              <div className="flex items-center justify-center mt-2">
                <button
                  className={`button flex flex-col items-center justify-center text-1xl border-2 rounded-3xl p-3 ml-4 mt-2 transform hover:scale-105 transition duration-300 ease-in-out ${
                    darkMode ? 'dark-mode' : 'light-mode'
                  }`}
                >
                  <FaReact size={70} className="text-blue-600" />
                  ReactJS
                </button>
                <button
                  className={`button flex flex-col items-center justify-center text-1xl border-2 rounded-3xl p-3 ml-4 mt-2  transform hover:scale-105 transition duration-300 ease-in-out ${
                    darkMode ? 'dark-mode' : 'light-mode'
                  }`}
                >
                  <FaNodeJs size={70} className="text-green-500" />
                  NodeJS
                </button>
                <button
                  className={`button flex flex-col items-center justify-center text-1xl border-2 rounded-3xl p-3 ml-4 transform hover:scale-105 transition duration-300 ease-in-out ${
                    darkMode ? 'dark-mode' : 'light-mode'
                  }`}
                >
                  <TbBrandNextjs size={70} />
                  NextJS
                </button>
              </div>
              <div className="flex items-center justify-center mt-2">
                <button
                  className={`button flex flex-col items-center justify-center text-1xl border-2 rounded-3xl p-3 ml-4 mt-2  transform hover:scale-105 transition duration-300 ease-in-out ${
                    darkMode ? 'dark-mode' : 'light-mode'
                  }`}
                >
                  <BiLogoPostgresql size={70} className="text-blue-400" />
                  SQL
                </button>
                <button
                  className={`button flex flex-col items-center justify-center text-1xl border-2 rounded-3xl p-3 ml-4 mt-2  transform hover:scale-105 transition duration-300 ease-in-out ${
                    darkMode ? 'dark-mode' : 'light-mode'
                  }`}
                >
                  <SiTauri size={70} />
                  Tauri
                </button>
              </div>
            </div>
          </section>

          <section className="py-10 flex mt-2">
            <div
              className={`flex text-center justify-center container mx-auto my-auto ${
                darkMode ? 'dark-mode' : 'light-mode'
              }`}
            >
              <h2 className="text-3xl font-bold underline">
                {lang === 'fr' ? 'MON PARCOURS' : 'MY JOURNEY'}
              </h2>
            </div>
            {showDetails && (
              <div
                className={`container mx-auto px-4 border-l-2 ${
                  darkMode ? 'dark-mode' : 'light-mode'
                }`}
              >
                <h2 className="text-2xl font-bold ">
                  {lang === 'fr'
                    ? `2023 : Formation d'un mois à l'école 42 (69)`
                    : '2023 : 1 month to study C language at 42'}
                </h2>
                <h2 className="text-2xl font-bold  mt-4">
                  {lang === 'fr'
                    ? '2021 : Création de Walknear et développement de logiciels pour mon entreprise'
                    : '2023 : Starting project X'}
                </h2>
                <h2 className="text-2xl font-bold  mt-4">
                  {lang === 'fr'
                    ? '2020 : BTS Services Informatiques aux organisations (SIO) (26)'
                    : '2023 : Starting project X'}
                </h2>
                <h2 className="text-2xl font-bold  mt-4">
                  {lang === 'fr'
                    ? '2019 : 1 an en formation Réseaux et Télécommunications (26)'
                    : '2023 : Starting project X'}
                </h2>
                <h2 className="text-2xl font-bold  mt-4">
                  {lang === 'fr'
                    ? '2018 : Baccalauréat STI2D EE (Energie & Environnement) (26)'
                    : 'October 2023 : Starting project X'}
                </h2>
              </div>
            )}
          </section>

          <section>
            <div className="text-center mt-32">
              <div
                className={`inline-block border-4 rounded-xl ${
                  darkMode ? 'dark-mode' : 'light-mode'
                }`}
              >
                <h2 className="text-4xl font-bold p-2">
                  {lang === 'fr' ? 'PROJETS SELECTIONNES' : 'SELECTED PROJECTS'}
                </h2>
              </div>
            </div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className={`container mx-auto h-screen flex flex-col justify-center items-center ${
              darkMode ? 'dark-mode' : 'light-mode'
            }`}
          >
            {' '}
            <h2 className="text-4xl underline">
              {lang === 'fr'
                ? 'Bot Vinted'
                : 'September 2023 : 1 month to study C language at 42'}
            </h2>
            <section className="py-10 flex items-center">
              <div
                className={`container flex items-center border-r-2 ${
                  darkMode ? 'dark-mode' : 'light-mode'
                }`}
              >
                <h2 className="text-2xl p-2">
                  {lang === 'fr'
                    ? ' Application creee a partir d un systeme de scrapping sur vinted afin de pouvoir acher en un clic les articles que l on veut suivant des filtres precis .'
                    : 'MY PROJECTS'}
                </h2>

                <div className="flex flex-col items-center justify-center">
                  <button
                    className={`rounded-full flex text-1xl border-2 p-2 mx-8 hover:bg-white hover:text-black ${
                      darkMode ? 'dark-mode' : 'light-mode'
                    }`}
                  >
                    <RiJavascriptFill size={60} />
                  </button>
                  <button
                    className={`rounded-full flex text-1xl border-2 p-2 mx-8 items-center hover:bg-white hover:text-black mt-4 ${
                      darkMode ? 'dark-mode' : 'light-mode'
                    }`}
                  >
                    <TbBrandNextjs size={60} />
                  </button>
                  <button
                    className={`rounded-full flex text-1xl border-2 p-2 mx-8 items-center hover:bg-white hover:text-black mt-4 ${
                      darkMode ? 'dark-mode' : 'light-mode'
                    }`}
                  >
                    <SiTailwindcss size={60} />
                  </button>
                </div>
              </div>

              <div className="container mx-auto px-4 justify-center">
                <Image
                  src="/vintedge.png"
                  width={900}
                  height={0}
                  alt="Description de l'image"
                  className="mt-3 rounded-2xl"
                />
              </div>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className={`container mx-auto h-screen flex flex-col justify-center items-center ${
              darkMode ? 'dark-mode' : 'light-mode'
            }`}
          >
            <h2 className="text-4xl font-bold text-end underline">
              {lang === 'fr'
                ? 'Site de Sneakers'
                : 'September 2023 : 1 month to study C language at 42'}
            </h2>
            <section className="py-10 flex items-center">
              <div className="container mx-auto px-4">
                <Image
                  src="/sneakers_site.png"
                  width={900}
                  height={0}
                  alt="Description de l'image"
                  className="mt-3 rounded-2xl"
                />
              </div>

              <div
                className={`container flex justify-center items-center ${
                  darkMode ? 'dark-mode' : 'light-mode'
                }`}
              >
                <div
                  className={`flex flex-col items-center justify-center border-l-2 ${
                    darkMode ? 'dark-mode' : 'light-mode'
                  }`}
                >
                  <button
                    className={`rounded-full flex text-1xl border-2 p-2 mx-8 hover:bg-white hover:text-black ${
                      darkMode ? 'dark-mode' : 'light-mode'
                    }`}
                  >
                    <RiJavascriptFill size={60} />
                  </button>
                  <button
                    className={`rounded-full flex text-1xl border-2 p-2 mx-8 items-center hover:bg-white hover:text-black mt-4 ${
                      darkMode ? 'dark-mode' : 'light-mode'
                    }`}
                  >
                    <TbBrandNextjs size={60} />
                  </button>
                  <button
                    className={`rounded-full flex text-1xl border-2 p-2 mx-8 items-center hover:bg-white hover:text-black mt-4 ${
                      darkMode ? 'dark-mode' : 'light-mode'
                    }`}
                  >
                    <SiTailwindcss size={60} />
                  </button>
                </div>
                <h2 className="text-2xl p-2">
                  {lang === 'fr'
                    ? ' Application creee a partir d un systeme de scrapping sur vinted afin de pouvoir acher en un clic les articles que l on veut suivant des filtres precis .'
                    : 'MY PROJECTS'}
                </h2>
              </div>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className={`container mx-auto h-screen flex flex-col justify-center items-center ${
              darkMode ? 'dark-mode' : 'light-mode'
            }`}
          >
            <h2 className="text-4xl underline">
              {lang === 'fr'
                ? 'Sneakers Bot'
                : 'September 2023 : 1 month to study C language at 42'}
            </h2>
            <section className="flex items-center">
              <div
                className={`container flex justify-center items-center border-r-2 ${
                  darkMode ? 'dark-mode' : 'light-mode'
                }`}
              >
                <h2 className="text-2xl p-2">
                  {lang === 'fr'
                    ? ' Application creee a partir d un systeme de scrapping sur vinted afin de pouvoir acher en un clic les articles que l on veut suivant des filtres precis .'
                    : 'MY PROJECTS'}
                </h2>
                <div className="flex flex-col items-center justify-center">
                  <button
                    className={`rounded-full flex text-1xl border-2 p-2 mx-8 hover:bg-white hover:text-black ${
                      darkMode ? 'dark-mode' : 'light-mode'
                    }`}
                  >
                    <RiJavascriptFill size={60} />
                  </button>
                  <button
                    className={`rounded-full flex text-1xl border-2 p-2 mx-8 items-center hover:bg-white hover:text-black mt-4 ${
                      darkMode ? 'dark-mode' : 'light-mode'
                    }`}
                  >
                    <TbBrandNextjs size={60} />
                  </button>
                  <button
                    className={`rounded-full flex text-1xl border-2 p-2 mx-8 items-center hover:bg-white hover:text-black mt-4 ${
                      darkMode ? 'dark-mode' : 'light-mode'
                    }`}
                  >
                    <SiTailwindcss size={60} />
                  </button>
                </div>
              </div>

              <div className="container mx-auto px-4 underline">
                <Image
                  src="/plantaio.png"
                  width={900}
                  height={0}
                  alt="Description de l'image"
                  className="wrounded-2xl"
                />
              </div>
            </section>
          </motion.div>

          {/* <ContactForm />  */}
          <footer
            className={`text-center py-5 border-t-2 ${
              darkMode ? 'dark-mode' : 'light-mode'
            }`}
          >
            <p className="text-gray-500">
              © {lang === 'fr' ? 'LUCAS FABREGOULE' : 'FABREGOULE LUCAS'} -{' '}
              {new Date().getFullYear()}
            </p>
          </footer>
        </main>
      )}
    </div>
  );
}
