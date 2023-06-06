import React from "react";
import { IconContext } from "react-icons";
import { SiGithub, SiGmail } from "react-icons/si";
import { profilePic } from "../assets";
import styles from "../style";
import {motion as m} from "framer-motion"

const motionVariant = {
  visible:{ opacity: 1 },
  hidden:{ opacity: 0, transition:{ duration:0 } },
}

const Home = () => (
  <m.section
    id="intro"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.8 }}
    className={`flex flex-1 items-center h-full text-blueberry bg-gradient-to-b from-apricot`}
  >
    <m.div 
    variants={motionVariant}
    transition={{ease:"linear", duration: 0.75}}
    className={`${styles.padding} w-full flex sm:flex-row flex-col sm:justify-center items-center h-full`}>
      <div className={`sm:w-[30%] w-full max-w-sm flex sm:justify-end justify-center pb-4 items-center`}
      >
        <img
          src={profilePic}
          alt="profile-pic"
          className="w-auto relative z-10 rounded-full"
        />
      </div>
      <div className={"flex flex-row lg:pl-16 sm:pl-12 pl-0 sm:pb-0 pb-8"}
      >
        <div className="flex flex-col justify-start items-start w-full">
          <h3 className="font-semibold ss:text-lg text-base">
            Hi, it's me
          </h3>
          <h1 className="text-secondary font-dancing font-semibold ss:text-7xl text-6xl">
            Anirudhan
          </h1>
          <p className="font-semibold ss:text-3xl text-2xl text-deepMattGray">Front-End Developer</p>
          <p className="font-semibold ss:text-lg text-base">Inspiring Innovation, Embracing Growth</p>
          <a href="https://github.com/ani94s/" className="flex gap-1 mt-4 w-full p-2 justify-center items-center hover:scale-105 bg-deepMattGray transition-all duration-300">
            <IconContext.Provider value={{ size: '20px', color:"white"}} >
              <SiGithub /> 
            </IconContext.Provider>
            <p className="pl-1 text-white">Explore my projects</p>            
          </a>
          <a href="mailto:anirudhan94s@gmail.com" className="flex gap-1 mt-4 w-full p-2 justify-center items-center hover:scale-105 bg-[#ea4335] transition-all duration-300">
            <IconContext.Provider value={{ size: '20px', color:"white"}} >
              <SiGmail /> 
            </IconContext.Provider>
            <p className="pl-1 text-base text-white font-semibold">Let's Connect </p>            
          </a>
        </div>
      </div>
    </m.div>
  </m.section>
);

export default Home;
