import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className="hero">
        <img src='/assets/memoji_circle.png' alt="" />
        <div className="hero-text">
            <h1><span>Hi, I'm Arin.</span> I'm a Software Engineer,</h1>
            <p>with experience in front-end and back-end development.</p>
            <p>I'm passionate about building applications that are user-friendly and accessible.</p>
            <p>I'm always looking to learn new technologies and improve my skills.</p>
        </div>
        <div className="hero-action">
            <div className="hero-resume">My Resume</div>
            <div className="hero-contact">Contact Me</div>
        </div>
    </div>
  )
}

export default Hero