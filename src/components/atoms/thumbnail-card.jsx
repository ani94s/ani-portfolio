import React from 'react'
import Card from './card'

const ThumbnailCard = ({thumbnail, imgDesc, className, children}) => {
  return (
    <Card className={`flex flex-col`}>
        {thumbnail ? 
        <img src={thumbnail} alt={imgDesc} className="w-full h-40 border-0 object-scale-down bg-gradient-to-br from-slate-900 to-slate-400" /> 
        : 
        <div className='w-full h-40 border-0 bg-gradient-to-br from-slate-900 to-slate-400' />}
        <div className={className}>
            {children}
        </div>
    </Card>
  )
}

export default ThumbnailCard