import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImage2 from '../Components/HeroImage2'
import PricingCard from '../Components/PricingCard'
import Work from '../Components/Work'

const Project = () => {
  return (
    <div>
       <Navbar/>
       <HeroImage2 heading="Projects" paragraph="some of my recents works"/>
       <Work/>
       <PricingCard/>
       <Footer/>
    </div>
   
  )
}

export default Project