"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Flavor {
  name: string;
  image: string;
  url: string;
  pronoun: string;
  asset: string;
}

export default function Hero({ selectedFlavor }: { selectedFlavor: Flavor }) {
  const [currentImage, setCurrentImage] = useState("/plats/vanilla-scoops.png");
  const [isFading, setIsFading] = useState(true);
  const [textInView, setTextInView] = useState(false);
  const [imageInView, setImageInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentAsset, setCurrentAsset] = useState(selectedFlavor?.asset);
  const [isAssetFading, setIsAssetFading] = useState(true);
  const [isAssetMoved, setIsAssetMoved] = useState(false);

  useEffect(() => {
    setTextInView(true);
    setImageInView(true);
  }, []);

  useEffect(() => {
    if (selectedFlavor && selectedFlavor.image !== currentImage) {
      setIsFading(true);
      setIsAssetFading(true);
      setIsAssetMoved(false);

      const timer = setTimeout(() => {
        setCurrentImage(`/plats/${selectedFlavor.image}`);
        setCurrentAsset(selectedFlavor.asset);
        setIsFading(false);
        setIsAssetFading(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [selectedFlavor, currentImage]);

  const getButtonText = () => {
    if (selectedFlavor && selectedFlavor.pronoun && selectedFlavor.name) {
      return `Acheter ${
        selectedFlavor.pronoun
      } ${selectedFlavor.name.toLowerCase()}`;
    }
    return "Acheter";
  };

  const toggleAssetPosition = () => {
    setIsAssetMoved(!isAssetMoved);
  };

  return (
    <section className="py-10 lg:py-20 px-4 lg:px-[300px] relative overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div
          className={`w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0 transition-transform duration-700 ease-out ${
            textInView
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h1 className="text-4xl lg:text-8xl font-bold mb-6 font-recoleta">
            Les produits de Nouvelle-Aquitaine
          </h1>
          <p className="text-base lg:text-lg mb-8">
            Découvrez l'authenticité et les saveurs uniques du terroir de
            Nouvelle-Aquitaine.
          </p>

          {selectedFlavor && (
            <a
              href={selectedFlavor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-5
                bg-yellow-400
                text-black 
                text-lg lg:text-xl
                rounded-[50%]
                px-8 lg:px-14
                py-3 lg:py-5
                font-bold
                border-2
                border-[#2b1509] 
                shadow-[0px_3px_0px_0px_rgba(255,255,255,1)]
                transition-all duration-300 ease-in-out
                hover:bg-yellow-500
                active:transform active:translate-y-1
                font-recoleta
              "
            >
              {getButtonText()}
            </a>
          )}
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <div
            className={`relative w-full h-[300px] lg:w-[550px] lg:h-[450px] transition-all duration-300 ease-in-out transform 
    ${imageInView ? "translate-x-0" : "translate-x-full"} 
    ${isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"}
    group`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={currentImage}
              alt={selectedFlavor.name}
              layout="fill"
              objectFit="contain"
              className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6"
            />
          </div>
        </div>
      </div>

      {selectedFlavor.asset && (
        <div
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 overflow-visible cursor-pointer transition-all duration-500 ease-in-out
            ${isAssetMoved ? "translate-x-[75%]" : "translate-x-1/4"}`}
          onClick={toggleAssetPosition}
        >
          <div
            className={`relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] transform -rotate-12
              transition-all duration-300 ease-in-out
              ${
                isAssetFading ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
          >
            <Image
              src={currentAsset}
              alt={selectedFlavor.name}
              layout="fill"
              objectFit="contain"
              className="transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      )}
    </section>
  );
}
