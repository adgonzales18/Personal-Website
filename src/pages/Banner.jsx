import React, { useEffect, useRef } from 'react'
import './banner.css'
import ProfilePhoto from '../assets/avrilgonzales.png'
import Button from '../components/Button'

function Banner() {

  const textElementRef = useRef(null);
  const photoElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.target === textElementRef.current) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
          } else {
            entry.target.classList.add('hidden');
            entry.target.classList.remove('visible');
          }
        }

        if (entry.target === photoElementRef.current) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
          } else {
            entry.target.classList.add('hidden');
            entry.target.classList.remove('visible');
          }
        }
      });
    }, { threshold: 0.5 });

    if (textElementRef.current) {
      observer.observe(textElementRef.current);
    }
    
    if (photoElementRef.current) {
      observer.observe(photoElementRef.current);
    }

    return () => {
      if (textElementRef.current) {
        observer.unobserve(textElementRef.current);
      }
      if (photoElementRef.current) {
        observer.unobserve(photoElementRef.current);
      }
    };
  }, []);

  return (
    <div className='banner grad1'>
      <div className="row flex-row flex-lg-row-reverse">
          <div className="col-12 col-lg-6 photo-content" ref={photoElementRef}>
            <img className="profile-photo mx-auto d-block"src={ProfilePhoto} alt="Avril Donovan Gonzales Photo" />
          </div>
          <div className="col-12 col-lg-6 profile-content" ref={textElementRef}>
            <h1 className="full-stack">Full Stack Developer</h1>
            <h2 className='profile-description'>Business Enabler | Mechanical Engineering | MBA</h2>
            <p className='profile-mantra'>I help businesses grow and thrive using technology based solutions.</p>
            <div className="media-buttons d-flex gap-2">
                <Button 
                  className="btn btn-dark btn-lg btn-hero"
                  icon={<ion-icon name="logo-linkedin"></ion-icon>}
                  label="Let's Connect!"
                  link="https://www.linkedin.com/in/avrilgonzales/"
                />
                <Button 
                  className="btn btn-outline-light btn-lg btn-hero"
                  icon={<ion-icon name="logo-github"></ion-icon>}
                  label="GitHub"
                  link="https://github.com/adgonzales18"
                />
            </div>
          </div>
      </div>  
    </div>
  )
}

export default Banner