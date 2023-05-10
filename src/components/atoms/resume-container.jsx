import React from 'react'

const ResumeContainer = ({children,title, className}) => {
  return (
    <div className={`py-4 w-full ${className}`}>
        <h1 className='text-center font-semibold text-xl sm:text-3xl'>{title}</h1>
        {children}
    </div>
  )
}

export default ResumeContainer