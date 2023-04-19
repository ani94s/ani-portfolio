import React from "react";
import { ani1 } from "../../assets";
import styles from "../../style";

const Home = () => (
  <section
    id="intro"
    className={`flex ${styles.paddingY} justify-center items-center md:mx-16 mx-0`}
  >
    <div className="w-full flex md:flex-row flex-col justify-center items-center">
      <div
        className={`md:w-1/3 w-full max-w-lg flex md:justify-end justify-center items-center md:order-1 order-2`}
      >
        <img
          src={ani1}
          alt="profile-pic"
          className="w-auto relative z-[5] rounded-full"
        />
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col lg:pl-16 md:pl-12 pl-0 md:pb-0 pb-8 md:order-2 order-1`}
      >
        <div className="flex flex-row justify-start items-start w-full opacity-100">
          <div className="flex-1 font-poppins">
            <h3 className="font-semibold ss:text-lg text-base text-white">
              Hi, its me
            </h3>
            <h1 className="text-gradient font-semibold ss:text-7xl text-4xl">
              Anirudhan
            </h1>
          </div>
        </div>
        <p className="font-poppins font-normal text-dimWhite ss:text-base text-sm mt-5">
          An experienced software engineer with over 5 years of professional
          experience in software development, which includes front-end
          development expertise using HTML, CSS, and React for about 1.5 years.
        </p>
      </div>
    </div>
  </section>
);

export default Home;
