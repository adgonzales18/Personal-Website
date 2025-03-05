import React from 'react'

function TechStackCard({icon, techName}) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
        <div className="techstack-card">
            {icon}
            <h2>{techName}</h2>
        </div>
    </div>
    
  )
}
export default TechStackCard