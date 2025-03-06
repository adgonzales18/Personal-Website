import React from 'react'

function TechStackCard({icon, techName}) {
  return (
    <div className="col-lg-2 col-md-4 card-holder">
        <div className="techstack-card">
          <div className="techstack-card-icon">
           {icon}
          </div>
            <h2>{techName}</h2>
        </div>
    </div>
    
  )
}
export default TechStackCard