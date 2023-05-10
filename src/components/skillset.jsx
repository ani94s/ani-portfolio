import React from 'react'
import { IconContext } from 'react-icons'
import { allSkills } from '../constants'
import ResumeContainer from './atoms/resume-container'


const Skillset = () => {
  return (
      <ResumeContainer id="skills" title="Skills and Tools">
        <div className='pt-8 grid grid-cols-skillSmall sm:grid-cols-skill gap-2 sm:gap-6 w-full'>
        {allSkills.map((skill) => 
          <div key={skill.id} className={`px-4 py-8 flex flex-col justify-center items-center bg-deepMattGray ${skill.skillClassName} shadow-lg shadow-deepMattGray rounded-lg`}>
            <IconContext.Provider value={{ size: '80px', color: skill.color }}>
              {skill.icon}
            </IconContext.Provider>
            <div className='pt-4 font-medium text-2xl font-poppins text-skyBlue'>
              {skill.label}
            </div>
        </div>
        )}
        </div>
      </ResumeContainer>
  )
}

export default Skillset
