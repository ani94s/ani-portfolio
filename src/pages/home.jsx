import React from "react";
import { profilePic } from "../assets";
import styles from "../style";

const Home = () => (
  <section
    id="intro"
    className={`flex flex-1 items-center h-full text-blueberry bg-gradient-to-b from-apricot`}
  >
    <div className={`${styles.padding} w-full flex md:flex-row flex-col md:justify-center items-center h-full`}>
      <div
        className={`md:w-[30%] w-full max-w-sm flex md:justify-end justify-center pb-4 items-center`}
      >
        <img
          src={profilePic}
          alt="profile-pic"
          className="w-auto relative z-10 rounded-full"
        />
      </div>
      <div
        className={"flex flex-row lg:pl-16 md:pl-12 pl-0 md:pb-0 pb-8"}
      >
        <div className="flex flex-col justify-start items-start w-full">
          <h3 className="font-semibold ss:text-lg text-base">
            Hi, its me
          </h3>
          <h1 className="text-secondary font-dancing font-semibold ss:text-7xl text-6xl">
            Anirudhan
          </h1>
          <p className="font-semibold ss:text-3xl text-2xl text-deepMattGray">Front-End Developer</p>
          <p className="font-semibold ss:text-lg text-base">Inspiring Innovation, Embracing Growth</p>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
