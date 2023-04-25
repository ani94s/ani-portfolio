import React from "react";
import { facebook, instagram, github, linkedin } from "../assets";
import styles from "../style";

const Footer = () => (
  <div className={`${styles.paddingX} ${styles.flexCenter} w-full`}>
    <div className={`${styles.boxWidth}`}>
      <footer
        id="footer"
        className={`flex justify-center items-center ${styles.paddingY} border-t border-t-tertiary`}
      >
        <div
          className={`w-full flex flex-wrap flex-row md:mx-16 mx-0 justify-between`}
        >
          <div className="flex flex-col py-4 sm:py-0">
            <h6>Phone</h6>
            <p>+44 77217 92760</p>
          </div>
          <div className="flex flex-col py-4 sm:py-0">
            <h6>Follow me</h6>
            <div className="flex flex-row space-x-4 my-2">
              <a href="https://www.linkedin.com/in/anirudhan-srisudhan/">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/anirudhan94s/">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/anirudhan94s/">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://github.com/ani94s">
                <img src={github} alt="Github" />
              </a>
            </div>
          </div>
          <div className="flex flex-col py-4 sm:py-0">
            <h6>Email</h6>
            <p><a href="mailto:anirudhan94s@gmail.com">anirudhan94s@gmail.com</a></p>
          </div>
          {/* <div className="flex flex-col m-4">
        <h6>Phone</h6>
        <p>+447721792760</p>
      </div> */}
        </div>
      </footer>
    </div>
  </div>
);

export default Footer;
