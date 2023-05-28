import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImage2 from '../Components/HeroImage2'
import Form from '../Components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 paragraph="Hubungi Saya Untuk Bekerja Sama" heading="Contact Me"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact