import React from 'react'
import { useState } from 'react';
import Button from './atoms/button'

const CollapsibleDiv = ({id, header, children, className}) => {
  const [divOpen, setDivOpen] = useState(false);

  function growDiv(id) {
    var growDiv = document.getElementById(`grow-${id}`);
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
      setDivOpen(false);
    } else {
      var wrapper = document.getElementById(`collapseWrapper-${id}`);
      growDiv.style.height = wrapper.clientHeight + "px";
      setDivOpen(true);
    }
  }
  return (
    <div key={id} className={`${className} rounded-sm flex flex-col`}>
        <Button type="button" onClick={() => growDiv(id)} className={`${divOpen ? '' : 'shadow-md hover:shadow-sm shadow-tertiary hover:translate-y-0.5 transition-all duration-200'}`}>
            {header}
        </Button>
        <div id={`grow-${id}`} className={`${divOpen ? 'border-b border-x border-tertiary' : ''} h-0 transition-height duration-300 overflow-hidden`}>
          <div id={`collapseWrapper-${id}`}>
            {children}
          </div>
        </div>
    </div>
  )
}

export default CollapsibleDiv