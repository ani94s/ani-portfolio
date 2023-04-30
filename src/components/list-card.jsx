import React from 'react'

const ListCard = ({id,title,list}) => {
  return (
    <div key={id} className='border border-secondary rounded-lg flex flex-col'>
        <h3 className='py-2 border-b text-center'>{title}</h3>
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