import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImage2 from '../Components/HeroImage2'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <>
    <Navbar/>
    <HeroImage2 paragraph="im'a friendly  front end web developer" heading="About me"/>
    <AboutContent/>
    <Footer/>
    
    </>
  )
}

export default About