"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { href: "https://x.com/mazaki_eth", text: "Mon Twitter" },
  { href: "https://x.com/benjamincode", text: "Twitter Benjamin Code" },
  { href: "https://www.lopt.org/", text: "Produits du terroir" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [logoInView, setLogoInView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLogoInView(true);
    }, 500);
  }, []);

  return (
    <>
      <header className="py-6 px-4 lg:px-[300px] flex justify-between items-center w-full relative">
        <div
          className={`text-3xl font-bold text-white font-recoleta transform transition-transform duration-700 ease-in-out ${
            logoInView
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-[-20px] opacity-0 scale-95"
          } hover:scale-105`}
        >
          Aquigourmet
        </div>

        {!isMobile && (
          <nav className="flex-grow">
            <ul className="flex justify-center space-x-12">
              {menuItems.map((item, index) => (
                <NavItem key={index} href={item.href} text={item.text} />
              ))}
            </ul>
          </nav>
        )}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-yellow-400 rounded-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110">
            <Image
              src="https://pbs.twimg.com/profile_images/1607353032420769793/I8qQSUfQ_400x400.jpg"
              alt="Profile"
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-700 ease-in-out hover:rotate-[360deg]"
            />
          </div>
          {isMobile && (
            <button
              className="text-white text-2xl z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          )}
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-brown transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="pt-20">
          <ul className="flex flex-col items-start py-4 px-6">
            {menuItems.map((item, index) => (
              <NavItem key={index} href={item.href} text={item.text} />
            ))}
          </ul>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div className="h-px bg-[#523628] w-full lg:w-[calc(100%-580px)] mx-auto"></div>
    </>
  );
};

const NavItem: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <li className="py-2">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out relative group"
    >
      {text}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </a>
  </li>
);

export default Header;
