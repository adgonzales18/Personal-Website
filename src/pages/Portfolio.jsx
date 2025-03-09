import React from 'react'
import PortfolioCarousel from '../components/PortfolioCarousel'
import './portfolio.css'

function Portfolio() {
  return (
    <section id="projects">
        <div className='container portfolio-body'>
            <h1 className="section-title portfolio-title">Portfolio</h1>
            <div>
                <PortfolioCarousel />
            </div>
        </div>

    </section>

  )
}

export default Portfolio