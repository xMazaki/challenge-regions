export default function CallToAction() {
  return (
    <div className="flex justify-between items-center px-[300px] py-16 relative text-black">
      <div className="w-1/3 transition-transform duration-500 ease-in-out transform hover:-translate-y-2">
        <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
          Les spécialités{" "}
          <span className="text-pink-600">de la Nouvelle-Aquitaine</span>
        </h2>
        <p className="text-lg mb-8 text-gray-700">
          Une région riche en saveurs et en traditions culinaires.
        </p>
        <a href="https://www.lopt.org/carte" target="_blank">
          <button className="bg-pink-500 text-white px-8 py-4 rounded-full flex items-center transform transition-transform duration-300 hover:scale-105 hover:bg-pink-600">
            Explorez nos spécialités
            <span className="ml-2 text-xl animate-pulse">🍴</span>
          </button>
        </a>
      </div>

      <div className="w-1/3 flex justify-center">
        <img
          src="assets/nouvelleaquitaine.svg"
          alt="Nouvelle Aquitaine"
          className="w-[220px] h-[220px]"
        />
      </div>

      <div className="w-1/3 text-center transition-transform duration-500 ease-in-out transform hover:-translate-y-2">
        <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
          Des produits uniques
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Vins, foie gras, canelés... une richesse à découvrir.
        </p>
      </div>
    </div>
  );
}
