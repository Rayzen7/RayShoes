import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox' data-aos="fade-up" data-aos-duration="1200">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>The shoes is a functional work of art that combines design elegance with comfort, making it the perfect choice for walking with confidence with every step.</p>
            <p>
            With its refined details and unrivaled quality, the shoe is a manifestation of sophistication and timeless style, ready to accompany any adventure with undeniable style.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox