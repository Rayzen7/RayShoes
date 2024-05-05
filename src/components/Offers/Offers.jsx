import React from 'react'
import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers' data-aos="fade-up" data-aos-duration="1200">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt=''/>
        </div>
    </div>
  )
}

export default Offers