import React from 'react'

const Sidebar = ({subHeadings,selectedHeading,setSelectedHeading}) => {
  return (
    <div className='h-full sm:w-1/4 w-max flex z-10 flex-col'>
        <ul className='flex flex-col h-full py-4 gap-2 text-white'>
            {subHeadings.map((heading)=>{
                return(
                    <a href={`#${heading.id}`} onClick={()=>setSelectedHeading(heading.id)}>
                        <li key={heading.id} className={`${heading.id === selectedHeading?'sm:translate-x-2 bg-gradient-to-l transition-all':''} p-5 sm:px-0 flex items-center gap-2 w-full hover:bg-gradient-to-l hover:sm:translate-x-2 hover:transition-all from-tertiary to-primary`}>
                            <img src={heading.icon} alt={heading.name} className="w-8 h-8"/>
                            <p className='hidden sm:block'>{heading.name}</p>
                        </li>
                    </a>
                )
            })}
        </ul>
    </div>
  )
}

export default Sidebar