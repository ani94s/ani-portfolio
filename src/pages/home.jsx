import React from "react";
import { ani1 } from "../assets";
import styles from "../style";

const Home = () => (
  <section
    id="intro"
    className={`flex flex-1 items-center h-full overflow-y-scroll`}
  >
    <div className={`${styles.padding} w-full flex md:flex-row flex-col md:justify-center items-center h-full`}>
      <div
        className={`md:w-[30%] w-full max-w-sm flex md:justify-end justify-center items-center`}
      >
        <img
          src={ani1}
          alt="profile-pic"
          className="w-auto relative z-10 rounded-full"
        />
      </div>
      <div
        className={`w-full ${styles.flexStart} flex-col lg:pl-16 md:pl-12 pl-0 md:pb-0 pb-8`}
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
        An experienced software engineer with over 5 years of professional experience in software development, which includes front-end development expertise using HTML, CSS, and React for about 2 years. I have experience working on a range of projects, from small company websites to huge corporate systems, and I am passionate about producing high-quality and aesthetically pleasing user interfaces.
        </p>
      </div>
    </div>
  </section>
);

export default Home;
