import React from 'react'
import resume from '../../assets/Jiya.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download className='btn'>Resume</a>
        <a href='#contact' className='btn btn-primary'>Lets Talk</a>
    </div>
  )
}

export default CTA