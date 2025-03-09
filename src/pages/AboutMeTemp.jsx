import React from 'react'
import PersonalPhoto from '../assets/photo_personal.PNG'
import './about.css'
import TechnologyStack from './TechnologyStack'


function AboutMe() {
  return (
    <section id="about-me">
        <div className="container">
            <h1 className='section-title about-me'>About Me</h1>
            <div className="photo-img">
                <div className="img-wrapper">
                    <img src={PersonalPhoto} alt="Avril Photo in Red" />    
                </div>
            </div>
            <p className='aboutme-description'>I'm <span>Avril</span>, a <span>full-stack developer</span> who transitioned into tech after spending 9 years in corporate sales. 
                I’m passionate about learning and development, and while I’m still a junior in this field, I bring along valuable skills and a unique perspective. 
                I’m excited to build efficient, beautiful web and software applications and use tech-based solutions to help businesses grow and thrive.
            </p>
        </div>
        <TechnologyStack />

    </section>
  )
}

export default AboutMe