import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <nav className="mx-auto py-4 xl:flex justify-between items-center">
      <div className="flex justify-between items-center">
        <a href="#" className="md:mx-auto">
          <img
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/tokopedia-logo.276ef32a.png"
            alt="Logo"
            className="w-40 md:w-52 mr-2"
          />
        </a>
        <button
          className="text-gray-800 inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
      >
        <ul className="flex justify-center flex-col md:flex-row space-x-0 mt-4 md:mt-0">
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("home")}
              className={
                activeMenu === "home"
                  ? "font-bold text-sm border-b-2 border-sky-500 block px-3 py-2"
                  : "font-bold text-sm hover:border-b-2 hover:border-sky-500 block px-3 py-2"
              }
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("company")}
              className={
                activeMenu === "company"
                  ? "font-bold text-sm border-b-2 border-sky-500 block px-3 py-2"
                  : "font-bold text-sm hover:border-b-2 hover:border-sky-500 block px-3 py-2"
              }
            >
              COMPANY
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("community")}
              className={
                activeMenu === "community"
                  ? "font-bold text-sm border-b-2 border-sky-500 block px-3 py-2"
                  : "font-bold text-sm hover:border-b-2 hover:border-sky-500 block px-3 py-2"
              }
            >
              COMMUNITY
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("stories")}
              className={
                activeMenu === "stories"
                  ? "font-bold text-sm border-b-2 border-sky-500 block px-3 py-2"
                  : "font-bold text-sm hover:border-b-2 hover:border-sky-500 block px-3 py-2"
              }
            >
              STORIES
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("insight")}
              className={
                activeMenu === "insight"
                  ? "font-bold text-sm border-b-2 border-sky-500 block px-3 py-2"
                  : "font-bold text-sm hover:border-b-2 hover:border-sky-500 block px-3 py-2"
              }
            >
              INSIGHT
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("toplist")}
              className={
                activeMenu === "toplist"
                  ? "font-bold text-sm border-b-2 border-sky-500 block px-3 py-2"
                  : "font-bold text-sm hover:border-b-2 hover:border-sky-500 block px-3 py-2"
              }
            >
              TOP LIST
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("newsroom")}
              className={
                activeMenu === "newsroom"
                  ? "font-bold text-sm border-b-2 border-sky-500 block px-3 py-2"
                  : "font-bold text-sm hover:border-b-2 hover:border-sky-500 block px-3 py-2"
              }
            >
              NEWSROOM
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("kalkupedia")}
              className={
                activeMenu === "kalkupedia"
                  ? "font-bold text-sm border-b-2 border-sky-500 block px-3 py-2"
                  : "font-bold text-sm hover:border-b-2 hover:border-sky-500 block px-3 py-2"
              }
            >
              KALKUPEDIA
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
