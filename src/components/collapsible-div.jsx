import React from 'react'
import Button from './atoms/button'

function growDiv(id) {
  var growDiv = document.getElementById(`grow-${id}`);
  if (growDiv.clientHeight) {
    growDiv.style.height = 0;
  } else {
    var wrapper = document.getElementById(`collapseWrapper-${id}`);
    growDiv.style.height = wrapper.clientHeight + "px";
  }
}

const CollapsibleDiv = ({id, header, children, className}) => {
  return (
    <div key={id} className={`${className} border border-tertiary rounded-sm flex flex-col`}>
        <Button type="button" onClick={() => growDiv(id)}>
            {header}
        </Button>
        <div id={`grow-${id}`} className='h-0 transition-height duration-300 overflow-hidden'>
          <div id={`collapseWrapper-${id}`}>
            {children}
          </div>
        </div>
    </div>
  )
}

export default CollapsibleDiv