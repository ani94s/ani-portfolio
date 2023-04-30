import React from 'react'
import { education, otherExperience, workExperience } from '../constants'
import Experience from './experience'
import Skillset from './skillset'

const Subpanel = ({subHeadings}) => {
  return (
    <div className=' flex-1 flex flex-col items-center overflow-y-scroll'>
      <Experience id={subHeadings[0].id} experiences={workExperience} title="Professional Experience" />
      <Experience id={subHeadings[1].id} experiences={otherExperience} title="Other Experience" />
      <Experience id={subHeadings[2].id} experiences={education} title="Education" />
      <Skillset id={subHeadings[3].id}/>
    </div>
  )
}

export default Subpanel