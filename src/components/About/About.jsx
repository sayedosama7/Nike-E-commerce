import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

import './About.css'
const About = () => {
  return (
    <>
      <NavBar/>
          {/* <img src="/images\nike1.jpg" alt="" /> */}

          <div  className='about'>
          <div  className='about_text'>
          <h1>OUR MISSION</h1>
          <h2>"BRING INSPIRATION AND INNOVATION TO <br/> <span>EVERY ATHLETE* IN THE WORLD"</span></h2>
          </div>
          </div>
          <div className='about2'>
            <h1>About Nike</h1>
            <p>
              Our mission is what drives us to do everything possible to expand human potential. We do that by creating
              <br/> groundbreaking sport innovations, by making our products more sustainably, by building a creative and 
              <br/> diverse global team and by making a positive impact in communities where we live and work. Based in
              <br/> Beaverton, Oregon, NIKE, Inc. includes the Nike, Converse, and Jordan brands.
            </p>
          </div>

          <Footer />


    </>
  )
}

export default About