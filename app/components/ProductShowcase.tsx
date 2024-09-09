"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import CallToAction from "./CallToAction";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductShowcase({
  setSelectedFlavor,
}: {
  setSelectedFlavor: (flavor: {
    name: string;
    image: string;
    url: string;
    pronoun: string;
    asset: string;
  }) => void;
}) {
  const flavors = [
    {
      name: "Vin",
      image: "vin.png",
      color: "#F4A7B9",
      url: "https://www.avenuedesvins.fr/fr/s-1/couleur-rouge/region-vins_bordeaux",
      pronoun: "du",
      asset: "assets/vin.png",
    },
    {
      name: "Foie gras",
      image: "foie-gras.webp",
      color: "#F9D78F",
      url: "https://www.lafermedufoiegras.com/",
      pronoun: "du",
      asset: "assets/foie-gras.png",
    },
    {
      name: "Glace vanille",
      image: "vanilla-scoops.png",
      color: "#FFE5A8",
      url: "https://holiscoops.com/",
      pronoun: "de la",
      asset: "assets/spoon.png",
    },
    {
      name: "Gâteau basque",
      image: "gateau-basque.png",
      color: "#FFD27E",
      url: "https://www.maisonadam.fr/fr/11-gateaux-basques",
      pronoun: "du",
      asset: "assets/basque.png",
    },
    {
      name: "Canelés",
      image: "caneles.png",
      color: "#D9A67E",
      url: "https://www.la-toque-cuivree.fr/",
      pronoun: "des",
      asset: "assets/caneles.png",
    },
  ];

  const centerIndex = Math.floor(flavors.length / 2);
  const buttonSpacing = 50;
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(centerIndex);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleButtons, setVisibleButtons] = useState<number[]>([]);

  const flavorsRef = useRef(flavors);
  const centerIndexRef = useRef(centerIndex);

  const memoizedSetSelectedFlavor = useCallback(() => {
    setSelectedFlavor(flavorsRef.current[centerIndexRef.current]);
  }, [setSelectedFlavor]);

  useEffect(() => {
    memoizedSetSelectedFlavor();
  }, [memoizedSetSelectedFlavor]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const positionButtons = () => {
      const container = containerRef.current;
      if (!container || isSmallScreen) return;

      const buttons = container.querySelectorAll("button");
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const buttonWidth = buttons[0]?.offsetWidth || 100;
      const totalWidth =
        (buttonWidth + buttonSpacing) * buttons.length - buttonSpacing;
      const startX = (containerWidth - totalWidth) / 2;

      buttons.forEach((button, index) => {
        const offset = index - centerIndex;
        const x = startX + index * (buttonWidth + buttonSpacing);
        let y = containerHeight / 2;

        const curveHeight = 15;
        const curveCorrection = 1.5;
        y +=
          Math.abs(offset) *
          (curveHeight / centerIndex) *
          (1 - (Math.abs(offset) / totalWidth) * curveCorrection);

        (button as HTMLElement).style.left = `${x}px`;
        (button as HTMLElement).style.top = `${y}px`;

        const rotationAngle = offset * 2.0;
        const scale =
          hoveredIndex === index ? 1.15 : selectedIndex === index ? 1.15 : 1;
        (
          button as HTMLElement
        ).style.transform = `rotate(${rotationAngle}deg) scale(${scale})`;
      });

      setIsReady(true);
    };

    positionButtons();
    window.addEventListener("resize", positionButtons);

    return () => window.removeEventListener("resize", positionButtons);
  }, [
    centerIndex,
    buttonSpacing,
    flavors.length,
    hoveredIndex,
    selectedIndex,
    isSmallScreen,
  ]);

  useEffect(() => {
    if (isReady && !isSmallScreen) {
      setTimeout(() => {
        const timer = setInterval(() => {
          setVisibleButtons((prev) => {
            if (prev.length < flavors.length) {
              return [...prev, prev.length];
            }
            clearInterval(timer);
            return prev;
          });
        }, 250);
      }, 550);
    }
  }, [isReady, isSmallScreen, flavors.length]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < flavors.length - 3) {
      setCurrentIndex(currentIndex + 1);
      scrollToIndex(currentIndex + 1);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const buttonWidth = scrollContainerRef.current.children[0].clientWidth;
      const scrollPosition = index * (buttonWidth + 8);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative pt-20">
      <div
        className="bg-yellow-400 pt-32 pb-20 relative z-10"
        style={{
          clipPath: isSmallScreen ? "none" : "ellipse(90% 100% at 50% 100%)",
        }}
      >
        <CallToAction />
      </div>

      <div
        className={`absolute inset-x-0 ${
          isSmallScreen ? "top-0" : "top-12 transform translate-y-[30%]"
        } z-20`}
      >
        <div ref={containerRef} className="relative w-full">
          {isSmallScreen ? (
            <div className="flex items-center justify-center">
              <button
                onClick={handlePrev}
                className="p-2 mr-2"
                disabled={currentIndex === 0}
              >
                <ChevronLeft size={24} />
              </button>
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {flavors.map((flavor, index) => (
                  <button
                    key={index}
                    className="flex-shrink-0 font-recoleta py-3 px-4 mx-1 text-center rounded-full text-black text-[16px] font-bold whitespace-nowrap border-2 border-brown transition-all duration-300 ease-in-out"
                    style={{
                      backgroundColor: flavor.color,
                    }}
                    onClick={() => {
                      setSelectedFlavor(flavor);
                      setSelectedIndex(index);
                    }}
                  >
                    {flavor.name}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-2 ml-2"
                disabled={currentIndex >= flavors.length - 3}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          ) : (
            flavors.map((flavor, index) => (
              <button
                key={index}
                className={`absolute font-recoleta py-3 w-[150px] text-center rounded-full text-black text-[16px] font-bold whitespace-nowrap border-2 border-brown transition-all duration-300 ease-in-out`}
                style={{
                  backgroundColor: flavor.color,
                  transform: `rotate(${(index - centerIndex) * 0.8}deg) scale(${
                    hoveredIndex === index
                      ? 1.15
                      : selectedIndex === index
                      ? 1.15
                      : 1
                  })`,
                  boxShadow:
                    selectedIndex === index
                      ? "0 20px 10px rgba(0,0,0,0.2)"
                      : "none",
                  opacity: visibleButtons.includes(index) ? 1 : 0,
                  transition:
                    "opacity 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                }}
                onClick={() => {
                  setSelectedFlavor(flavor);
                  setSelectedIndex(index);
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {flavor.name}
              </button>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
