import React from 'react'

const ResumeContainer = ({id,children,title}) => {
  return (
    <div id={id} className="py-4 w-full">
        <h1 className='text-center font-semibold text-xl sm:text-3xl'>{title}</h1>
        {children}
    </div>
  )
}

export default ResumeContainer