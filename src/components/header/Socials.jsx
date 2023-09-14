import React from 'react'
import {FiMail} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header_socials'>
        <a href='jiyar3472@gmail.com' ><FiMail/></a>
        <a href='https://www.linkedin.com/in/jiya-rathore66/' ><BsLinkedin/></a>
        <a href='https://github.com/Jiyarathore'><BsGithub/></a>
    </div>
  )
}

export default Socials