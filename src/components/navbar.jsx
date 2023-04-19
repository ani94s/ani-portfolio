import React, { useState } from "react";
import styles from "../style";
import { anilogo, close, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} w-full`}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex flex-row py-6 justify-between items-center navbar">
          <Link className="flex flex-row" to={"/"}>
            <img src={anilogo} alt="Logo" className="w-[46px] h-[32px]" />
            <div className="flex flex-col align-middle justify-start text-xs uppercase font-poppins">
              <p>Anirudhan</p>
              <p>Srisudhan</p>
            </div>
          </Link>
          <ul className="list-none sm:flex hidden flex-row justify-end items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className="mr-8 last:mr-0 font-poppins font-normal cursor-pointer text-xs text-white"
              >
                <Link to={nav.url}>{nav.title}</Link>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end">
            <img
              src={isOpen ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setIsOpen((prev) => !prev)}
            />
            {isOpen && (
              <div className="flex justify-center absolute top-20 right-0 p-6 bg-slate-700 min-w-[140px] rounded-lg mx-4 my-2">
                <ul className="list-none flex flex-col justify-center items-center">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className="mb-8 last:mb-0 font-poppins font-normal cursor-pointer text-xs text-white"
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      <Link to={nav.url}>{nav.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
