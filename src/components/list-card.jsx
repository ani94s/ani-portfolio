import React from 'react'

const ListCard = ({list}) => {
  return (
    <ul className='flex flex-col gap-1 p-4 list-disc list-inside'>
        {list.map((item,index)=>{
            return <li key={`item-${index}`}>{item}</li>
        })}
    </ul>
  )
}

export default ListCard