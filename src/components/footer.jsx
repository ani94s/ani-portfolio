import React from "react";
import { facebook, instagram, github, linkedin, mail } from "../assets";
import styles from "../style";

const Footer = () => (
    <footer
      id="footer"
      className={`${styles.boxWidth} w-full border-t border-t-tertiary fixed bottom-0 bg-primary z-20 py-4`}
    >
      <div
        className='w-full h-full flex flex-col md:mx-8 mx-4 justify-center items-center'
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-row space-x-4 my-2">
            <a href="https://www.linkedin.com/in/anirudhan-srisudhan/">
              <img src={linkedin} alt="LinkedIn" className="w-5 hover:scale-150 transition-all duration-300" />
            </a>
            <a href="https://www.instagram.com/anirudhan94s/">
              <img src={instagram} alt="Instagram" className="w-5 hover:scale-150 transition-all duration-300" />
            </a>
            <a href="https://www.facebook.com/anirudhan94s/">
              <img src={facebook} alt="Facebook" className="w-5 hover:scale-150 transition-all duration-300"/>
            </a>
            <a href="https://github.com/ani94s">
              <img src={github} alt="Github" className="w-5 hover:scale-150 transition-all duration-300"/>
            </a>
            <a href="mailto:anirudhan94s@gmail.com">
              <img src={mail} alt="Email" className="w-5 hover:scale-150 transition-all duration-300"/>
            </a>
          </div>
        </div>
        <h6 className="text-center text-xs">© Anirudhan, 2023 - Created with passion using React</h6>
      </div>
    </footer>
);

export default Footer;
