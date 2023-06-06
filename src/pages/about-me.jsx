import React from 'react'
import ResumeContainer from '../components/wrappers/resume-container'
import styles from '../style'
import {motion as m } from "framer-motion"

const motionVariant = {
  visible:{ opacity: 1, transition:{ease:"linear", duration: 0.5} },
  hidden:{ opacity: 0, transition:{ duration:0 } },
}
const slideInVariant = {
  visible:{ opacity: 1, x: "0%", transition:{type: "spring", bounce: 0.3, duration: 1.2, delay:0.2 } },
  hidden:{ opacity: 0, x: "100%", transition:{ duration:0 } },
}

const AboutMe = () => {
  return (
    <m.section 
    id="about" 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.8 }}
    variants={motionVariant}
    className={`${styles.padding} w-full`}
    >
        <ResumeContainer id="about" title="About me">
            <m.p 
            variants={slideInVariant}
            className='pt-4 sm:pt-8 font-poppins text-lg text-center px-0 sm:px-20 md:px-40'
            >
              An experienced software engineer with over 5 years of professional experience in software development, which includes front-end development expertise using HTML, CSS, and React for about 2 years. I have experience working on a range of projects, from small company websites to huge corporate systems, and I am keen on producing high-quality and aesthetically pleasing user interfaces.
            </m.p>
        </ResumeContainer>
    </m.section>
  )
}

export default AboutMe