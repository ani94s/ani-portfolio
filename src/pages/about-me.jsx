import React from 'react'
import ResumeContainer from '../components/wrappers/resume-container'
import styles from '../style'

const AboutMe = () => {
  return (
    <section id="about" className={`${styles.padding} w-full`}>
        <ResumeContainer id="about" title="About me">
            <p className='pt-4 sm:pt-8 font-poppins text-lg text-center px-0 sm:px-20 md:px-40'>An experienced software engineer with over 5 years of professional experience in software development, which includes front-end development expertise using HTML, CSS, and React for about 2 years. I have experience working on a range of projects, from small company websites to huge corporate systems, and I am keen on producing high-quality and aesthetically pleasing user interfaces.</p>
        </ResumeContainer>
    </section>
  )
}

export default AboutMe