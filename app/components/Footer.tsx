import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-b from-brown to-brown-dark text-white">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        <div className="text-lg sm:text-xl tracking-wide mb-6 sm:mb-0 text-center sm:text-left">
          Made with{" "}
          <span className="text-red-500 animate-pulse inline-block transform hover:scale-110 transition-transform duration-200">
            ❤️
          </span>{" "}
          by{" "}
          <a 
            href="https://x.com/mazaki_eth" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-yellow-100 transition-colors duration-200 underline decoration-dotted underline-offset-4"
          >
            Benjamin
          </a>
        </div>

        <div className="text-sm text-gray-300 font-light">
          &copy; {new Date().getFullYear()} Aquigourmet
        </div>
      </div>

      <div className="container mx-auto mt-8 border-t border-[#523628] pt-6 flex justify-center items-center px-6">
        <div className="text-xs text-gray-400 hover:text-white transition-colors duration-200 cursor-default text-center">
          Savourez l'excellence de la Nouvelle-Aquitaine
        </div>
      </div>
    </footer>
  );
}