import React from 'react'
import { IconContext } from 'react-icons'
import { allSkills } from '../constants'
import ResumeContainer from './wrappers/resume-container'
import {motion as m} from "framer-motion"

const parentVariant = {
  visible:{ opacity: 1 },
  hidden:{ opacity: 0, transition:{ duration:0 } },
}
const childVariant = {
  visible: i => ({ scale: "100%", opacity: 1, transition:{type: "spring", bounce: 0.5, duration: 1, delay:0.1*i} }),
  hidden:{ scale: "0%", opacity: 0, transition:{ duration:0 } },
}

const Skillset = () => {
  return (
    <m.section 
      id="skills"
      variants={parentVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="sm:px-8 pb-8 px-4 w-full bg-mistyPink"
    >
      <ResumeContainer id="skills" title="Skills and Tools">
        <div 
        className='pt-8 flex flex-wrap justify-center gap-2 sm:gap-6 w-full'
        >
        {allSkills.map((skill,index) => 
          <m.div 
          key={skill.id}
          variants={childVariant}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`px-4 py-8 flex flex-col w-36 justify-center items-center bg-deepMattGray ${skill.skillClassName} shadow-lg shadow-deepMattGray rounded-lg`}>
            <IconContext.Provider value={{ size: '80px', color: skill.color }}>
              {skill.icon}
            </IconContext.Provider>
            <div className='pt-4 font-medium text-xl font-poppins text-skyBlue'>
              {skill.label}
            </div>
          </m.div>
        )}
        </div>
      </ResumeContainer>
    </m.section>
  )
}

export default Skillset
