import React from 'react'
import ResumeContainer from './wrappers/resume-container'


const Education = ({id, education, title}) => {
  return (
        <ResumeContainer key={id} title={title}>
            <div className='flex flex-col gap-4 w-full p-4'>
                {education.map((edu)=>{
                    return <div className='flex flex-row p-4 justify-between items-center border border-pinkHighlight'>
                        <h1><span className='text-xl font-medium'>{edu.course}</span>, {edu.institution}</h1>
                        <h2>{edu.from} - {edu.to}</h2>
                    </div>
                })}
            </div>
        </ResumeContainer>
  )
}

export default Education;
