import React from 'react'
import './FooterStyle.css'
import {FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-container'>
         <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color:'red',marginRight:"2rem"}}/>
                <div>
                <p>Bogor</p>
                <p>INDONESIA</p> 
                </div>
            </div>  
            <div className='phone'>
                <FaPhone size={20} style={{color:'red' ,marginRight:"2rem"}}/>
                <p> 0857 7386 3369</p>
            </div>
            <div className='mail'>
                <FaMailBulk size={20} style={{color:"red" ,marginRight:"2rem"}}/>
                <p>dedesyarifudinalhadid@gmail.com</p>
            </div>
         </div>
         <div className='right'>
            <h4>About The Company</h4>
            <p>This is Me Dede Syarifudin,It & Web Developer , I enjoy
                discussing About New Projects are Design chalenges
            </p>
            <div className='social'>
                <FaInstagram size={20} style={{color:"red" ,marginRight:"2rem" }}/>
                <FaLinkedin size={20} style={{color:"red" ,marginRight:"2rem"}}/>
            </div>
         </div>
        </div> 
    </div>
  )
}

export default Footer