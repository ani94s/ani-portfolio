import React from 'react'
import { education, otherExperience, workExperience } from '../constants'
import Experience from './experience'
import Skillset from './skillset'

const Subpanel = ({subHeadings, selectedHeading}) => {
  
  return (
    <div className=' flex-1 flex flex-col px-4 items-center overflow-y-scroll w-full'>
      {selectedHeading === subHeadings[0].id && <Experience data-section id={subHeadings[0].id} experiences={workExperience} title="Professional Experience" />}
      {selectedHeading === subHeadings[1].id && <Experience data-section id={subHeadings[1].id} experiences={otherExperience} title="Other Experience" />}
      {selectedHeading === subHeadings[2].id && <Experience data-section id={subHeadings[2].id} experiences={education} title="Education" />}
      {selectedHeading === subHeadings[3].id && <Skillset data-section id={subHeadings[3].id}/>}
    </div>
  )
}

export default Subpanel