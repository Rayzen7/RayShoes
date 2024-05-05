import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from "../assets/arrow.png";
import hero_image from '../assets/hero_image.png';

export const Hero = () => {
  return (
    <div className='hero' data-aos="fade-up" data-aos-duration="1200">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt=''/>
          </div>
          <p>Collections</p>
          <p>For everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt=''/>
        </div>
      </div>
      <div className="hero-right">
        <img src= {hero_image} alt=''/>
      </div>
    </div>
  )
}

export default Hero