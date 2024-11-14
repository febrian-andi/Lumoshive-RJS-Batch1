import React, { useState } from "react";
import logoipsum from "../assets/logoipsum.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (menu) => {
    setMenuActive(menu);
    setIsMenuOpen(false); // Menutup menu setelah klik di layar mobile
  };

  return (
    <header className="py-4 bg-white">
      <div className="container mx-auto md:flex md:justify-between items-center px-6 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleMenuClick("")}
            className="flex items-center"
          >
            <img src={logoipsum} alt="Logo" className="h-8" />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0 w-full md:w-auto px-2 md:px-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto mb-4 md:mb-0">
            <li>
              <Link
                to="/about"
                onClick={() => handleMenuClick("about")}
                className={`p-1 font-medium hover:text-peach-red-100 ${
                  menuActive === "about"
                    ? "text-peach-red-100 border-b-4 border-peach-red-100"
                    : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/our-services"
                onClick={() => handleMenuClick("ourServices")}
                className={`p-1 font-medium hover:text-peach-red-100 ${
                  menuActive === "ourServices"
                    ? "text-peach-red-100 border-b-4 border-peach-red-100"
                    : ""
                }`}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                onClick={() => handleMenuClick("portfolio")}
                className={`p-1 font-medium hover:text-peach-red-100 ${
                  menuActive === "portfolio"
                    ? "text-peach-red-100 border-b-4 border-peach-red-100"
                    : ""
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={() => handleMenuClick("blog")}
                className={`p-1 font-medium hover:text-peach-red-100 ${
                  menuActive === "blog"
                    ? "text-peach-red-100 border-b-4 border-peach-red-100"
                    : ""
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => handleMenuClick("contact")}
                className={`p-1 font-medium hover:text-peach-red-100 ${
                  menuActive === "contact"
                    ? "text-peach-red-100 border-b-4 border-peach-red-100"
                    : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <Link
            to="/contact"
            onClick={() => handleMenuClick("contact")}
            className="bg-peach-red-100 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
