import React from 'react'

const Section = ({title, titleAlign="left", children, link }) => {
  return (
    <div className='sectionPrincipal'>
        <div className='sectionTitle'>
           {title && titleAlign === "center" && <h2 id='center'>{title}</h2> }
           {title && titleAlign === "left" && <h2>{title}</h2> }
        </div>
      
      <div className='sectionChildren'>
        {children} 
      </div>
    </div>
  )
}

export default Section