import React from 'react'
import CTA from './CTA'
// import ME from '../../assets/jiyaphoto.jpeg'
import Socials from './Socials'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
      <h5>Hello I'm</h5>
      <h1>Jiya Rathore</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA/>
      <Socials/>

      {/* <div className='me'>
      <img src={ME} alt='me'></img>
      </div> */}

      <a href='#contact' className='scroll_down'>Sroll Down</a>
      </div>
    </header>
  )
}

export default Header