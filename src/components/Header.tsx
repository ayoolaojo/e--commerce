import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 shadow-md  ">
      <div className="max-w-7xl mx-auto px-6 flex h-[13vh] justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-white">AXIOS practice</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10">
          <Link to="/" className="text-white hover:text-blue-200 transition">
            Home
          </Link>
          <Link
            to="/products"
            className="text-white hover:text-blue-200 transition"
          >
            Products
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-blue-200 transition"
          >
            Services
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-blue-600">
          <a
            href="#"
            className="block text-white hover:text-blue-200 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-white hover:text-blue-200 transition"
          >
            About
          </a>
          <a
            href="#"
            className="block text-white hover:text-blue-200 transition"
          >
            Services
          </a>
          <a
            href="#"
            className="block text-white hover:text-blue-200 transition"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
