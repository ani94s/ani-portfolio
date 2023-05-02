import React from 'react'

const ListCard = ({list}) => {
  return (
    <ul className='flex flex-col gap-1 p-4'>
        {list.map((subSkill)=>{
            return <li className='items-center justify-center rounded-md shadow-md bg-gradient-to-l from-secondary to-primary'>
                <p className='text-left'>{subSkill}</p></li>
        })}
    </ul>
  )
}

export default ListCard