import React from 'react'
import './Section.css'

const Section = ({title, titleAlign="left", children, link }) => {
  return (
    <div className='sectionPrincipal'>
        <div className='sectionTitle'>
           {title && titleAlign === "center" && <h2 className='center'>{title}</h2> }
           {title && titleAlign === "left" && <h2 className='left'>{title}</h2> }
        </div>
      
      <div className='sectionChildren'>
        {children} 
      </div>
    </div>
  )
}

export default Section