import React from 'react'
import './PricingCardStyle.css'
import { Link } from 'react-router-dom'

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3> -- Basic --</h3>
                <span className='bar'></span>
                <p className='btc'>RP.50k</p>
                <p>- 3days -</p>
                <p>- 3Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Designed</p>
                <Link to="/Contact" className='btn '> Pesan Sekarang</Link >
            </div>

            <div className='card'>
                <h3> -- Premium --</h3>
                <span className='bar'></span>
                <p className='btc'>RP.150k</p>
                <p>- 2days -</p>
                <p>- 5Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Designed</p>
                <Link to="/Contact" className='btn '> Pesan Sekarang</Link >
            </div>

            <div className='card'>
                <h3> -- Busines --</h3>
                <span className='bar'></span>
                <p className='btc'>RP.500k</p>
                <p>- 5days -</p>
                <p>- 8Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Designed</p>
                <Link to="/Contact" className='btn '> Pesan Sekarang</Link >
            </div>
        </div>
    </div>
  )
}

export default PricingCard