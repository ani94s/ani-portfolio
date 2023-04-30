import React from 'react'
import ListCard from './list-card'
import { resumeSkills } from '../constants'
import ResumeContainer from './atoms/resume-container'


const Skillset = ({id}) => {
  return (
    <ResumeContainer id={id} title="Skills and Tools">
        <div className='flex flex-col sm:grid gap-4 md:grid-cols-4 p-4'>
            {resumeSkills.map((skill)=>{
                return <ListCard id={skill.id} list={skill.skillList} header={<h3 className='py-2 border-b text-center'>{skill.title}</h3>}/>
            })}
        </div>
    </ResumeContainer>
  )
}

export default Skillset
