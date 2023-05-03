import React from 'react'

const ListCard = ({list}) => {
  return (
    <ul className='flex flex-col gap-1 p-4 list-disc list-inside'>
        {list.map((subSkill)=>{
            return <li className=''>{subSkill}</li>
        })}
    </ul>
  )
}

export default ListCard