import React from "react";
import { facebook, instagram, github, linkedin } from "../assets";
import BoxPadding from "../reusables/box-padding";
import styles from "../style";

const Footer = () => (
  <div className={`${styles.paddingX} ${styles.flexCenter} w-full`}>
    <div className={`${styles.boxWidth}`}>
      <section
        id="footer"
        className={`flex justify-center items-center ${styles.paddingY} border-t border-t-secondary`}
      >
        <div
          className={`w-full flex flex-wrap flex-row md:mx-16 mx-0 justify-between`}
        >
          <div className="flex flex-col py-4 sm:py-0">
            <h6>Phone</h6>
            <p>+447721792760</p>
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
            <p>anirudhan94s@gmail.com</p>
          </div>
          {/* <div className="flex flex-col m-4">
        <h6>Phone</h6>
        <p>+447721792760</p>
      </div> */}
        </div>
      </section>
    </div>
  </div>
);

export default Footer;
