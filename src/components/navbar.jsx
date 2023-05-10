import React from "react";
import { anilogo} from "../assets";
// import { Link } from "react-router-dom";
import styles from "../style";
import Button from "./atoms/button";
import resume from "../assets/Anirudhan_FrontEnd_Resume.pdf"
import download from "../assets/icons/download.svg"

const Navbar = () => {
  return (
    <header className={`fixed flex justify-center w-full top-0 bg-primary z-20`}>
        <nav className={`${styles.boxWidth} ${styles.paddingX} w-full text-white flex flex-row justify-between items-center navbar`}>
          <div className="flex flex-row py-4">
            <img src={anilogo} alt="Logo" className="w-[46px] h-[32px]" />
            <div className="flex flex-col align-middle justify-start text-xs uppercase font-poppins">
              <p>Anirudhan</p>
              <p>Srisudhan</p>
            </div>
          </div>
          <div className="sm:flex hidden gap-2 items-center">
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
          </div>
        </nav>
        </header>
  );
};

export default Navbar;
