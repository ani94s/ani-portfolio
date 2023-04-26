import React from 'react'

const Sidebar = ({subHeadings,selectedHeading,setSelectedHeading}) => {
  return (
    <div className='h-full w-1/4 flex z-10 flex-col bg-gradient-to-l from-secondary to-primary items-center'>
        <ul className='flex flex-col h-full p-4 justify-between'>
            {subHeadings.map((heading)=>{
                return(
                    <li key={heading.id} className='flex h-full items-center justify-end'>
                        <p className='text-right'>{heading.name}</p>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Sidebar