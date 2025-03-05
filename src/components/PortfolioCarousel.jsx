import { useState, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FlixifyVideo from '../assets/Portfolio_video.mp4'
import ToDoVideo from '../assets/Portfolio_video-ToDoApp.mp4'
import './portfolioCarousel.css'

function PortfolioCarousel() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false)
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <div className={`carousel-item-wrapper ${hovered ? 'hovered' : ''}`}>
                <video autoPlay muted loop className='carousel-video'>
                <source src={FlixifyVideo} type="video/mp4"/>
                </video>
                <div className="carousel-caption-wrapper">
                    <h2>FLIXIFY</h2>
                    <p>A streaming website.</p>
                    <p>TECH STACK: React, JavaScript, Bootstrap</p>
                    <a href='' className="project-link" ><ion-icon name="link-outline"></ion-icon></a>
                </div>
            </div>
            <div className="carousel-caption-small">
              <h2>FLIXIFY</h2>
              <p>A streaming website.</p>
              <p>TECH STACK: React, JavaScript, Bootstrap</p>
              <a href='' className="project-link" ><ion-icon name="link-outline"></ion-icon></a>
            </div>
      </Carousel.Item>
      <Carousel.Item
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <div className={`carousel-item-wrapper ${hovered ? 'hovered' : ''}`}>
              <div>
                <video autoPlay muted loop className='carousel-video'>
                <source src={ToDoVideo} type="video/mp4"/>
                </video>
              </div>
                <div className="carousel-caption-wrapper">
                    <h2>TO-DO APP</h2>
                    <p>Basic To-Do App.</p>
                    <p>TECH STACK: React, JavaScript, CSS Styling</p>
                    <a href="/" className="project-link" ><ion-icon name="link-outline"></ion-icon></a>
                </div>
            </div>
            <div className="carousel-caption-small">
              <h2>TO-DO APP</h2>
              <p>Basic To-Do App.</p>
              <p>TECH STACK: React, JavaScript, CSS Styling</p>
              <a href="/" className="project-link" ><ion-icon name="link-outline"></ion-icon></a>
            </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default PortfolioCarousel;