import React from 'react'
import './Navbar.css'
import {BiSolidHome} from 'react-icons/bi'
import {BiSolidUser} from 'react-icons/bi'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiSolidMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active':''}><BiSolidHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}><BiSolidUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><BiBookAlt/></a>
      <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav==='#services' ? 'active':''}><RiServiceLine/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><BiSolidMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar