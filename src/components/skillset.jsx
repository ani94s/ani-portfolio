import React from 'react'
import ListCard from './list-card'
import { resumeSkills } from '../constants'
import ResumeContainer from './atoms/resume-container'
import CollapsibleDiv from './collapsible-div'


const Skillset = ({id}) => {
  return (
      <ResumeContainer id="skills" title="Skills and Tools">
          <div className='flex flex-col sm:grid gap-4 grid-cols-skill p-4'>
              {resumeSkills.map((skill)=>{
                const header = <div className='flex flex-rpw p-4 justify-center items-center'>
                <h3 className='py-2 text-center'>{skill.title}</h3>
            </div>
                  return <CollapsibleDiv  id={skill.id} header={header}>
                    <ListCard list={skill.skillList}/>
                  </CollapsibleDiv>
              })}
          </div>
      </ResumeContainer>
  )
}

export default Skillset
