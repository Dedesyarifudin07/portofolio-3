import React, { useState } from 'react'
import  './NavbarStyle.css';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';


const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click === true);

    const [color,setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    }

    window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? 'header header-bg' :'header'}>
        <Link to="/">
            <h2>DedeSyarifudin</h2>
        </Link>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
            <Link to="/">
               Home
            </Link>
            </li>

            <li>
            <Link to="/About">
               About
            </Link>
            </li>

            <li>
            <Link to="/Contact">
               Contact
            </Link>
            </li>

            <li>
                <Link to="/Project">
                Project
                </Link>
            </li>

        </ul >

        <div className='hamburgers' onClick={handleClick} >
            {click ?  (
                <FaTimes size={20} style={{color:'red'}}/>
                
            ): (<FaBars size={20} style={{color:'red'}}/>)}
            
        </div>
    </div>
  )
}

export default Navbar