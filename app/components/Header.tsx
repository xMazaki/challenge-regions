import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <>
      <header className="py-6 px-[300px] flex justify-between items-center w-full">
        <div className="text-3xl font-bold text-white">Aquigourmet</div>
        <nav className="flex-grow">
          <ul className="flex justify-center space-x-12">
            <li>
              <a
                href="https://x.com/mazaki_eth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400"
              >
                Mon Twitter
              </a>
            </li>
            <li>
              <a
                href="https://x.com/benjamincode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400"
              >
                Twitter Benjamin Code
              </a>
            </li>
            <li>
              <a
                href="https://www.lopt.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400"
              >
                Produits du terroir
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-yellow-400 rounded-full overflow-hidden">
            <Image
              src="https://pbs.twimg.com/profile_images/1607353032420769793/I8qQSUfQ_400x400.jpg"
              alt="Profile"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <button className="text-white text-2xl">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>
      <div className="h-px bg-[#A67C52] w-[calc(100%-580px)] mx-auto"></div>
    </>
  );
};

export default Header;
