import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Sun, Moon, AlignJustify, X } from "lucide-react";
import { changeTheme } from "../redux/theme/themeSlice";

function Navbar() {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };

  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    dispatch(changeTheme(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center py-4 relative">
      <Link
        to="/"
        className={`text-2xl font-bold transition-all duration-300 ${
          isOpenNavbar ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        LumosBlog
      </Link>
      <button
        className="md:hidden transition-all duration-300"
        onClick={toggleNavbar}
        aria-label="Toggle menu"
      >
        <AlignJustify size={24} />
      </button>
      <nav
        className={`fixed md:static top-0 left-0 w-full h-screen md:h-auto bg-white dark:bg-dark-mode-cstm md:bg-transparent z-20 transform transition-transform duration-500 ease-in-out ${
          isOpenNavbar ? "translate-y-0" : "-translate-y-full"
        } md:translate-y-0 flex flex-col md:flex-row md:justify-end justify-center items-center md:space-x-6 p-4 md:p-0 shadow-md md:shadow-none`}
      >
        <Link to="/" className="block md:hidden text-2xl font-bold mb-8">
          LumosBlog
        </Link>
        <div className="flex flex-col md:flex-row justify-center items-center my-auto md:space-x-4">
          <Link
            to="/blog"
            className="block py-2 text-gray-600 dark:text-white hover:text-purple-600 md:inline"
            onClick={() => setIsOpenNavbar(false)}
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="block py-2 text-gray-600 dark:text-white hover:text-purple-800 md:inline"
            onClick={() => setIsOpenNavbar(false)}
          >
            About
          </Link>
          <Link
            to="/newsletter"
            className="block py-2 text-gray-600 dark:text-white hover:text-gray-800 md:inline"
            onClick={() => setIsOpenNavbar(false)}
          >
            Newsletter
          </Link>
          <div
            className={`flex my-auto relative mt-4 md:mt-0 py-2 px-3 gap-4 rounded-full transition-all duration-300 ease-[cubic-bezier(0.42, 0, 0.58, 1)] cursor-pointer ${
              !isDarkMode === true ? "bg-black-cstm" : "bg-white"
            }`}
            onClick={toggleDarkMode}
          >
            <div
              className={`w-6 h-6 rounded-full absolute cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.42, 0, 0.58, 1)] ${
                !isDarkMode === true
                  ? "left-14 bg-white"
                  : "right-14 bg-black-cstm"
              }`}
            ></div>
            <Sun className="text-white" />
            <Moon className="text-black-cstm" />
          </div>
        </div>
        <button
          className="block mt-auto md:hidden text-gray-600 dark:text-white hover:text-gray-800 focus:outline-none"
          onClick={toggleNavbar}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
