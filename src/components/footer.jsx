import React from "react";
import { IconContext } from "react-icons";
import { socialMedia } from "../constants";
import styles from "../style";

const Footer = () => (
    <footer
      id="footer"
      className={`w-full flex justify-center fixed bottom-0 bg-primary z-20 py-4 h-20`}
    >
      <div
        className={`${styles.boxWidth} w-full h-full flex flex-col md:mx-8 mx-4 justify-center items-center`}
      > 
          <div className="flex flex-row space-x-4 my-2">
          {socialMedia.map((social) => {
            return (
              <a href={social.link} key={social.id}>
                <IconContext.Provider value={{ size: '20px', color:social.color , className:'hover:scale-150 transition-all duration-300 ' }} >
                {social.icon}
                </IconContext.Provider>
            </a>
            )
          })}
          </div>
        <h6 className="text-center text-apricot text-xs">© Anirudhan, 2023 - Created with 🧡 using React</h6>
      </div>
    </footer>
);

export default Footer;
