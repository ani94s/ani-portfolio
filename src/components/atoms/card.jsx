import React from 'react'

const Card = ({children,className}) => {
  return (
    <div className={`shadow-lg shadow-deepMattGray h-full ${className}`}>
        {children}
    </div>
  )
}

export default Card