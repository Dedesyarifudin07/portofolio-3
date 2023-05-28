import React from 'react'
import "./AboutContentStyle.css";
import { Link } from 'react-router-dom';
import excel from '../assets/img/1.png';
import word from '../assets/img/2.png';

const AboutContent = () => {
  return (
    <div className='about'>
    <div className='left'>
        <h1> Who AM I ?</h1>
        <p>im a frond end React Enginer.
            i Create Responsive Secure Website
            for My CLients
        </p>
        <Link to="/Contact">
            <button className='btn'>Contact</button>
        </Link>
    </div>
    <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                 <img src={excel} className='img' alt="true"/> 
            </div>
            <div className='img-stack bottom'>
                 <img src={word} className='img' alt="true"/> 
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutContent