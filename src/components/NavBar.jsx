import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-white text-purple flex items-center justify-between py-4 px-6 shadow-md">
      <img
        src="/imgg - Edited.png"
        loading="lazy"
        alt="Fadaa El Madina logo"
        className="w-20"
      />

      <ul className="hidden md:flex gap-6 text-2xl font-black">
        {["Home", "About", "Programs", "Contact"].map((item) => (
          <li
            key={item}
            className="hover:text-purple-500 hover:underline duration-300 hover:scale-105 transition-all"
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white flex flex-col gap-4 text-center py-6 md:hidden shadow-lg">
          {["Home", "About", "Programs", "Contact"].map((item) => (
            <li key={item} className="text-2xl font-bold">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
