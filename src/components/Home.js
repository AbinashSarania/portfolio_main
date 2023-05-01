import React, { useState } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import CardSlider from "./CardSlider";
import { Footer } from "./Footer";
import ChatBot from "./Chatbot";
import Contact from "./Contact";
import Skills from "./Skills";
import Board from "./Board";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };





  return (
    <div>

      <div className={` flex-col mx-auto items-center overflow-x:hidden ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`} style={{ overflowX: 'hidden' }}>
        <header className=" pt-6 ">
          <div className=" fixed right-5 pt-2 ">
           

            <button
              type="button"
              className={`${isDarkMode ? 'bg-yellow-400' : 'bg-gray-800'} inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pt-`}
              aria-label="Toggle dark mode"
              onClick={handleToggleMode}
            >
              {isDarkMode ? (
                <>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="sr-only">Switch to light mode</span>
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="sr-only">Switch to dark mode</span>
                </>
              )}
            </button>
          </div>
        </header>

        <div className="flex flex-col md:flex-row items-center justify-between py-6 ">
          <div className="max-w-4xl mx-auto p-8 text-center md:text-left md:pr-8 lg:w-1/2 lg:text-left">
            <h1 class="font-bold font-Urbanist tracking-wider cursor-pointer relative text-justify">
              <span class="text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-xs md:text-2xl block" style={{ maxWidth: '50vw', fontSize: 'clamp(1rem, 3vw, 3rem)' }}
              >
                Hi, I'm
              </span>
              <br />
              <span class="text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-4xl md:text-7xl font-bold tracking-wide mt-4" style={{ maxWidth: '60vw', fontSize: 'clamp(2rem, 4vw, 4rem)' }}>
                Abinash Sarania
              </span>
            </h1>
            <p className="text-hsl-900 font-Urbanist tracking-wider cursor-pointer relative text-base md:text-lg font-medium py-4 text-justify mb-8" style={{ maxWidth: '90vw' }}>
              I am a dedicated full stack developer with expertise in React, Node.js, and React Native. I am passionate about crafting exceptional web and mobile applications that provide seamless user experiences. I strive to stay up-to-date with the latest technologies and best practices to deliver innovative and reliable solutions that exceed expectations.
            </p>


            <a href="https://drive.google.com/file/d/1NO9bDF5PfO7g2R_8GicT36dz3OyjoAfR/view?usp=share_link" class=" mt-8 px-8 md:px-16 py-4 font-Urbanist font-md bg-gradient-to-r from-blue-500 via-blue-300 to-blue-800 text-white rounded-xl  hover:bg-blue-700 dark:bg-gray-700 transition duration-300 hover:translate-y-px">
              Download CV
            </a>


          </div>
          <div className="lg:w-1/3">
            <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_NHtRApNRPx.json"
              style={{ height: '400px', width: '400px' }}
            >
            </Player>
          </div>

        </div>
        <CardSlider />
        <ChatBot />
        <Skills />
        <Board />
        <Contact />
        <Footer />

      </div>

    </div>
  );
};

export default Hero;

