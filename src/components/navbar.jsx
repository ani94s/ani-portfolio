import React, { useState } from "react";
import styles from "../style";
import { anilogo, close, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [seletectedTab, setSelectedTab] = useState(navLinks[0].id);
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} w-full`}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex flex-row justify-between border-b border-b-tertiary items-center navbar">
          <Link className="flex flex-row py-4" to={navLinks[0].url} onClick={()=>setSelectedTab(navLinks[0].id)}>
            <img src={anilogo} alt="Logo" className="w-[46px] h-[32px]" />
            <div className="flex flex-col align-middle justify-start text-xs uppercase font-poppins">
              <p>Anirudhan</p>
              <p>Srisudhan</p>
            </div>
          </Link>
          <ul className="list-none sm:flex hidden flex-row justify-end items-center">
            {navLinks.map((nav, index) => (
              <Link to={nav.url} onClick={()=>setSelectedTab(nav.id)}>
                <li
                  key={nav.id}
                  className={`p-5 font-poppins font-normal ${seletectedTab === nav.id ? 'shadow-md border border-b-primary border-tertiary shadow-primary translate-y-1':''} hover:translate-y-1 hover:transition-transform cursor-pointer text-xs text-white`}
                >
                  {nav.title}
                </li>
              </Link>
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
              <div className="flex justify-center absolute top-20 right-0 bg-slate-700 min-w-[140px] border border-slate-700 z-50 rounded-lg mx-4 my-2">
                <ul className="w-full list-none flex flex-col justify-center items-center">
                  {navLinks.map((nav, index) => (
                    <Link to={nav.url} onClick={()=>setSelectedTab(nav.id)} className="w-full">
                    <li
                      key={nav.id}
                      className={`${seletectedTab === nav.id ? 'bg-secondary':''} p-5 w-full hover:bg-tertiary last:mb-0 font-poppins font-normal cursor-pointer text-center text-xs text-white`}
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      {nav.title}
                    </li>
                    </Link>
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
