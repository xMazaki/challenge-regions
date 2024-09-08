"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero({ selectedFlavor }: { selectedFlavor: string }) {
  const [currentImage, setCurrentImage] = useState("/plats/vanilla-scoops.png");
  const [isFading, setIsFading] = useState(true);
  const [textInView, setTextInView] = useState(false);
  const [imageInView, setImageInView] = useState(false);

  useEffect(() => {
    setTextInView(true);
    setImageInView(true);
  }, []);

  useEffect(() => {
    if (selectedFlavor !== currentImage) {
      setIsFading(true);

      setTimeout(() => {
        setCurrentImage(`/plats/${selectedFlavor}`);
        setIsFading(false);
      }, 500);
    }
  }, [selectedFlavor, currentImage]);

  return (
    <section className="py-20 px-[300px] flex justify-between items-center w-full overflow-x-hidden">
      <div
        className={`w-1/2 pr-8 transition-transform duration-700 ease-out ${
          textInView
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <h1 className="text-7xl font-bold mb-6">Grab the best ice cream.</h1>
        <p className="text-xl mb-8">
          We ditched the dairy we cut the sugar infused mood-boosting
          adaptogens.
        </p>

        <button
          className="
            mt-5
            bg-yellow-400
            text-black 
            text-xl
            rounded-[50%]
            px-14
            py-5
            font-bold
            border-2
            border-[#2b1509] 
            shadow-[0px_3px_0px_0px_rgba(255,255,255,1)]
            transition-transform duration-150 ease-in-out
            active:transform active:translate-y-1
          "
        >
          Shop Flavors
        </button>
      </div>

      <div className="w-1/2 flex justify-end relative">
        <div
          className={`relative w-[550px] h-[450px] transition-all duration-500 ease-in-out transform 
          ${imageInView ? "translate-x-0" : "translate-x-full"} 
          ${isFading ? "opacity-0" : "opacity-100"}`}
        >
          <Image
            src={currentImage}
            alt="Delicious Ice Cream"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}
