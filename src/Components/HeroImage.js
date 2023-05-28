import React from 'react'
import './HeroImage.css';
import introImg from '../assets/img/belajar_mikrotik.jpg';
import { Link } from 'react-router-dom';

const HeroImage = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={introImg} alt='foto'/>
        </div>
        <div className='content'>
            <p>hi am'a freelancer</p>
            <h1>React Developer</h1>
            <div>
                <Link to='/Project' className='btn'>Project</Link>
                <Link to='/Contact' className='btn btn-light'>Contact</Link> 
            </div>
        </div>
    </div>
  )
}

export default HeroImage