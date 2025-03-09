import React from 'react'
import './techStackCard.css'

function TechStackCard({icon, techName}) {
  return (
        <div className="techstack-card">
          <div className="techstack-card-icon">
           {icon}
          </div>
            <h2 className='tech-name'>{techName}</h2>
        </div>
  )
}
export default TechStackCard