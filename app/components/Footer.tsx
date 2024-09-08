export default function Footer() {
  return (
    <footer className="py-10 bg-brown text-white">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-xl font-bold tracking-wide">
          Made with ❤️ by{" "}
          <a href="https://x.com/mazaki_eth" target="_blank">
            Benjamin
          </a>
        </div>
      </div>

      <div className="container mx-auto mt-8 border-t border-gray-600 pt-6 flex justify-between items-center px-6">
        <div className="text-sm text-gray-400">&copy; 2024 Aquigourmet</div>
      </div>
    </footer>
  );
}
