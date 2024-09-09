import Image from "next/image";

export default function CallToAction() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-[250px] relative text-black">
      <div className="w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
        <h2 className="text-2xl lg:text-3xl mb-4 text-gray-900 font-recoleta">
          Les spécialités{" "}
          <span className="text-pink-600">de la Nouvelle-Aquitaine</span>
        </h2>
        <p className="text-base lg:text-lg mb-8 font-bold">
          Une région riche en saveurs et en traditions culinaires.
        </p>
        <a
          href="https://www.lopt.org/carte"
          target="_blank"
          className="inline-block"
        >
          <button className="bg-pink-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full border-black flex items-center transform transition-transform duration-300 hover:scale-105 hover:bg-pink-600">
            Explorez nos spécialités
            <span className="ml-2 text-xl animate-pulse">🍴</span>
          </button>
        </a>
      </div>

      <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
        <Image
          src="/assets/nouvelleaquitaine.svg"
          alt="Nouvelle Aquitaine"
          width={180}
          height={180}
          className="object-contain relative z-10 transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
      </div>

      <div className="w-full lg:w-1/3 text-center">
        <h2 className="text-xl lg:text-2xl font-recoleta mb-4">
          Des produits uniques: vins, foie gras, canelés... une richesse à
          découvrir.
        </h2>
      </div>
    </div>
  );
}
