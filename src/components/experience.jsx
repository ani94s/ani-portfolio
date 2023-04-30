import React from 'react'
import ResumeContainer from './atoms/resume-container'
import ListCard from './list-card'


const Experience = ({id,experiences, title}) => {
  return (
        <ResumeContainer id={id} title={title}>
            <div className='flex flex-col gap-2 w-full p-4'>
                {experiences.map((exp)=>{
                    return <ListCard id={exp.id} title={exp.company} list={exp.keyPoints} />
                })}
            </div>
        </ResumeContainer>
  )
}

export default Experience
