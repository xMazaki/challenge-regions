import Image from "next/image";
import { useState } from "react";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-[250px] relative text-black">
      <div className="w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
        <h2 className="text-2xl lg:text-3xl mb-4 text-gray-900 font-recoleta transition-all duration-300 ease-in-out">
          Les spécialités{" "}
          <span className="text-pink-600 inline-block transition-transform duration-300 ease-in-out hover:scale-105">
            de la Nouvelle-Aquitaine
          </span>
        </h2>
        <p className="text-base lg:text-lg mb-8 font-bold opacity-80 hover:opacity-100 transition-opacity duration-300">
          Une région riche en saveurs et en traditions culinaires.
        </p>
        <a
          href="https://www.lopt.org/carte"
          target="_blank"
          className="inline-block group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="bg-pink-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full border-black flex items-center transition-all duration-300 hover:bg-pink-600 hover:shadow-lg">
            <span className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1">
              Explorez nos spécialités
            </span>
            <span
              className={`text-xl transition-all duration-300 ${
                isHovered ? "rotate-45" : ""
              }`}
            >
              🍴
            </span>
          </button>
        </a>
      </div>

      <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
        <div className="relative group">
          <Image
            src="/assets/nouvelleaquitaine.png"
            alt="Nouvelle Aquitaine"
            width={250}
            height={250}
            className="object-contain relative z-10 transition-all duration-500 ease-in-out transform group-hover:scale-110"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/3 text-center">
        <h2 className="text-xl lg:text-2xl font-recoleta mb-4 transition-all duration-300 ease-in-out">
          Des produits uniques:
          <span className="block mt-2">
            {["vins", "foie gras", "canelés"].map((product, index, array) => (
              <span key={index}>
                <span className="inline-block transition-transform duration-300 ease-in-out hover:scale-105 hover:text-yellow-900 text-brown">
                  {product}
                </span>
                {index < array.length - 1 ? ", " : " ... "}
              </span>
            ))}
          </span>
          <span className="block mt-2">une richesse à découvrir.</span>
        </h2>
      </div>
    </div>
  );
}
