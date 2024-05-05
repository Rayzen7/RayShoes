import React from 'react'
import './CSS/About.css'
import Setio from '../components/assets/Setio.jpg'
import web_logo from '../components/assets/Web_logo.png'

export const About = () => {
  return (
    <div className='About'>
        <div className="setio">
            <img src={Setio} alt="" />
        </div>
        <h1>Thank you for visiting my website</h1>
        <div className="web">
            <img src={web_logo} alt="" />
        </div>
        <button><a href="https://setio7.vercel.app/Portfolio.html" target="_blank">My Portfolio</a></button>
    </div>
  )
}

export default About