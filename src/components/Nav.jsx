import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";
const Nav = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={toggleNavbar}
          />
          {isNavbarOpen && (
            <div className="absolute top-10 right-7 bg-white shadow-md rounded-lg w-40 p-4 z-20 mt-7 z-10">
              <ul className="flex flex-col gap-4 text-lg">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-montserrat text-slate-gray hover:text-blue-600 transition-all"
                      onClick={toggleNavbar} // Close menu on click
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
