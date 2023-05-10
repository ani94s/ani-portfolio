import React from 'react'
import { resumeSkills } from '../constants'
import ResumeContainer from './atoms/resume-container'


const Skillset = ({id}) => {
  return (
      <ResumeContainer id="skills" title="Skills and Tools">
          {resumeSkills.map((skill)=>(
            <div className='pt-8 flex flex-wrap gap-2 w-full'>
                {skill.skillList.map((subskill) => ( 
                  <div className={`px-4 py-1 text-xl font-medium font-poppins text-primary w-max ${skill.skillClassName} rounded-l-full rounded-r-full shadow-md`}>
                    {subskill}
                  </div>
                ))}
            </div>
            ))}
      </ResumeContainer>
  )
}

export default Skillset
