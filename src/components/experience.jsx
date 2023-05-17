import React from 'react'
import ResumeContainer from './wrappers/resume-container'
import CollapsibleDiv from './collapsible-div'
import ListCard from './list-card'


const Experience = ({id, experiences, title}) => {
  return (
        <ResumeContainer key={id} title={title}>
            <div className='flex flex-col gap-4 w-full p-4'>
                {experiences.map((exp)=>{
                    const header = <div className='flex w-full flex-row p-4 justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <h1><span className='text-xl font-medium'>{exp.role ?? exp.course}</span>, {exp.institution}</h1>
                        </div>
                        <h2>{exp.from} - {exp.to}</h2>
                    </div>
                    return <CollapsibleDiv key={exp.id} id={exp.id} header={header} className="w-full">
                        <ListCard list={exp.keyPoints} />
                    </CollapsibleDiv>
                })}
            </div>
        </ResumeContainer>
  )
}

export default Experience
