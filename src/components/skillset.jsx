import React from 'react'
import { IconContext } from 'react-icons'
import { allSkills } from '../constants'
import ResumeContainer from './wrappers/resume-container'


const Skillset = () => {
  return (
    <section id="skills" className="sm:px-8 pb-8 px-4 w-full bg-mistyPink">
      <ResumeContainer id="skills" title="Skills and Tools">
        <div className='pt-8 flex flex-wrap justify-center gap-2 sm:gap-6 w-full'>
        {allSkills.map((skill) => 
          <div key={skill.id} className={`px-4 py-8 flex flex-col w-36 justify-center items-center bg-deepMattGray ${skill.skillClassName} shadow-lg shadow-deepMattGray rounded-lg`}>
            <IconContext.Provider value={{ size: '80px', color: skill.color }}>
              {skill.icon}
            </IconContext.Provider>
            <div className='pt-4 font-medium text-xl font-poppins text-skyBlue'>
              {skill.label}
            </div>
        </div>
        )}
        </div>
      </ResumeContainer>
    </section>
  )
}

export default Skillset
