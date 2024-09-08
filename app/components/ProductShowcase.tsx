"use client";
import React, { useEffect, useRef, useState } from "react";
import CallToAction from "./CallToAction";

export default function ProductShowcase({
  setSelectedFlavor,
}: {
  setSelectedFlavor: (flavor: string) => void;
}) {
  const flavors = [
    { name: "Vin", image: "vin.png", color: "#F4A7B9" },
    { name: "Foie gras", image: "foie-gras.webp", color: "#F9D78F" },
    { name: "Glace vanille", image: "vanilla-scoops.png", color: "#FFE5A8" },
    { name: "Gâteau basque", image: "gateau-basque.png", color: "#FFD27F" },
    { name: "Canelés", image: "caneles.png", color: "#D9A67E" },
  ];

  const centerIndex = Math.floor(flavors.length / 2);
  const buttonSpacing = 50;
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const positionButtons = () => {
      const container = containerRef.current;
      if (!container) return;

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

        const rotationAngle = offset * 1.5;
        (
          button as HTMLElement
        ).style.transform = `rotate(${rotationAngle}deg) scale(${
          hoveredIndex === index ? 1.2 : 1
        })`;
      });

      setIsReady(true);
    };

    positionButtons();
    window.addEventListener("resize", positionButtons);

    return () => window.removeEventListener("resize", positionButtons);
  }, [centerIndex, buttonSpacing, flavors.length, hoveredIndex]);

  return (
    <section className="relative pt-20">
      <div
        className="bg-yellow-400 pt-32 pb-20 relative z-10"
        style={{
          clipPath: "ellipse(90% 100% at 50% 100%)",
        }}
      >
        <CallToAction />
      </div>

      <div className="absolute inset-x-0 top-12 transform translate-y-[30%] z-20">
        <div ref={containerRef} className="relative w-full">
          {flavors.map((flavor, index) => (
            <button
              key={index}
              className={`absolute px-6 py-4 w-[150px] text-center rounded-full text-black text-sm font-bold whitespace-nowrap border-2 border-brown transition-opacity duration-500 ease-in-out ${
                isReady ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundColor: flavor.color,
                transform: `rotate(${(index - centerIndex) * 0.8}deg) scale(${
                  hoveredIndex === index ? 1.2 : 1
                })`,
                transition: "transform 0.3s ease, opacity 0.5s ease-in-out",
              }}
              onClick={() => setSelectedFlavor(flavor.image)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {flavor.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
