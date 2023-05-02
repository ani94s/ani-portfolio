import React, { useState } from 'react'
import Button from './atoms/button'

const CollapsibleDiv = ({id, header, children, className}) => {
    const [showChildren, setShowChildren] = useState(false);
  return (
    <div key={id} className={`${className} border border-tertiary rounded-sm flex flex-col`}>
        <Button type="button" onClick={() => setShowChildren(!showChildren)}>
            {header}
        </Button>
        {showChildren && 
            children
        }
    </div>
  )
}

export default CollapsibleDiv