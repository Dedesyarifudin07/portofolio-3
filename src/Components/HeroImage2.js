import React from 'react'
import './HeroImage2Style.css'

const HeroImage2 = (props) => {
  return (
    <div className='hero-img'>
        <div className='heading'>
            <h1>
               {props.heading}
            </h1>
            <p>{props.paragraph}</p>
        </div>
    </div>
  )
}

export default HeroImage2