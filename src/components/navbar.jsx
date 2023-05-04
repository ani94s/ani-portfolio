import React, { useState } from "react";
import { anilogo, close, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import styles from "../style";
import Button from "./atoms/button";
import resume from "../assets/Anirudhan.pdf"
import download from "../assets/icons/download.svg"
import { useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [seletectedTab, setSelectedTab] = useState();
  useEffect(() => {
    const currentURL = window.location.pathname;
    const currentNav = navLinks.find(navLink => navLink.url === currentURL);
    setSelectedTab(currentNav?.id ?? navLinks[0].id)
  },[setSelectedTab])
  return (
    <div className={`${styles.boxWidth} ${styles.paddingX} fixed w-full top-0 bg-primary z-20`}>
        <nav className="w-full text-white flex flex-row justify-between items-center navbar">
          <Link className="flex flex-row py-4" to={navLinks[0].url} onClick={()=>setSelectedTab(navLinks[0].id)}>
            <img src={anilogo} alt="Logo" className="w-[46px] h-[32px]" />
            <div className="flex flex-col align-middle justify-start text-xs uppercase font-poppins">
              <p>Anirudhan</p>
              <p>Srisudhan</p>
            </div>
          </Link>
          <div className="sm:flex hidden gap-2 items-center">
            <ul className="list-none flex flex-row justify-end items-center">
              {navLinks.map((nav, index) => (
                <Link key={nav.id} to={nav.url} onClick={()=>setSelectedTab(nav.id)}>
                  <li
                    className={`p-4 m-[1px] font-poppins font-normal ${seletectedTab === nav.id ? 'translate-y-1 to-tertiary':'to-secondary'} hover:translate-y-1 hover:transition-transform bg-gradient-to-b from-primary rounded-b-md rounded-t-2xl cursor-pointer text-xs`}
                  >
                    <p>{nav.title}</p>
                  </li>
                </Link>
              ))}
            </ul>
            <a href={resume} download="Anirudhan-Resume.pdf" >
              <Button type="button" className="flex gap-2 hover:bg-tertiary items-center justify-center rounded-md p-2">
              <img src={download} alt="Download Resume" width="24px" height="24px" />
                Resume
              </Button>
            </a>
          </div>
          <div className="sm:hidden flex items-center gap-4 justify-end">
            <a href={resume} download="Anirudhan-Resume.pdf" >
              <Button type="button" className="rounded-md p-2 bg-secondary">
                <img src={download} alt="Download Resume" width="24px" height="24px" />
              </Button>
            </a>
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
                      className={`${seletectedTab === nav.id ? 'bg-secondary':''} p-5 w-full hover:bg-tertiary last:mb-0 font-poppins font-normal cursor-pointer text-center text-xs`}
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
  );
};

export default Navbar;