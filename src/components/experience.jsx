import React from 'react'
import ResumeContainer from './atoms/resume-container'
import CollapsibleDiv from './collapsible-div'
import ListCard from './list-card'


const Experience = ({id, experiences, title}) => {
  return (
        <ResumeContainer id={id} title={title}>
            <div className='flex flex-col gap-4 w-full p-4'>
                {experiences.map((exp)=>{
                    const header = <div className='flex flex-rpw p-4 justify-between items-center'>
                        <h1><span className='text-xl font-medium'>{exp.role ?? exp.course}</span>, {exp.institution}</h1>
                        <h2>{exp.from} - {exp.to}</h2>
                    </div>
                    return <CollapsibleDiv id={exp.id} header={header} className="w-full shadow-sm shadow-secondary">
                        <ListCard list={exp.keyPoints} />
                    </CollapsibleDiv>
                })}
            </div>
        </ResumeContainer>
  )
}

export default Experience
