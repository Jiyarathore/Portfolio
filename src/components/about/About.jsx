import React from 'react'
import './About.css'
import svg2 from './svg2.svg'
import ME from '../../assets/jiyaphoto.jpeg'

const About = () => {
  return (
    <section id='about'>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='me'></img>
          </div>
        </div>
        <div className='about_me_content'>
          <div className='hey'>hey there!</div>
          <div className='name'>I'm Jiya Rathore</div>
          <div className='dash'></div>
          <div className='about_content' style={{ fontSize: "1.5rem", fontWeight: "700", textAlign: "center" }}>
            I'm a firm believer that an unyielding passion for technology can be your greatest asset. My mission is to guide you on a journey of exploration, innovation, and breaking through the barriers that limit your potential.

            I'll unveil the secrets of my tech journey and help you embark on your own path to boundless possibilities.
          </div>

          <div className='about_content2' style={{ fontSize: "1rem", margin: "1rem", textAlign: "center" }}>

            So, whether you're here to discover my projects, collaborate on exciting tech endeavors, or simply seek inspiration for your own digital adventures, you're in the right place. Let's embark on this unique journey together and make technology our canvas for pushing the boundaries of what's possible. Welcome to my digital space – let's get started on this incredible journey.
            <br />Let's make it exceptional!
          </div>


        </div>
        <div className='svg2' style={{top:"0px", right:"0px"}}>
        <img src={svg2}></img>

        </div>
      </div>



    </section>
  )
}

export default About