import React from 'react'

const ListCard = ({id,header,list}) => {
  return (
    <div key={id} className='border border-secondary rounded-lg flex flex-col'>
        {header}
        <ul className='flex flex-col gap-1 p-4'>
            {list.map((subSkill)=>{
                return <li className='items-center justify-center rounded-md shadow-md bg-gradient-to-l from-secondary to-primary'>
                    <p className='text-center'>{subSkill}</p></li>
            })}
        </ul>
    </div>
  )
}

export default ListCard