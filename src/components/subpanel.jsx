import React from 'react'
import { education, otherExperience, workExperience } from '../constants'
import Experience from './experience'
import Skillset from './skillset'

const Subpanel = ({subHeadings, selectedHeading}) => {
  
  return (
    <div className=' flex-1 flex flex-col px-4 items-center w-full'>
      <Experience data-section id={subHeadings[0].id} experiences={workExperience} title="Professional Experience" />
      <Experience data-section id={subHeadings[1].id} experiences={otherExperience} title="Other Experience" />
      <Experience data-section id={subHeadings[2].id} experiences={education} title="Education" />
      <Skillset data-section id={subHeadings[3].id}/>
    </div>
  )
}

export default Subpanel