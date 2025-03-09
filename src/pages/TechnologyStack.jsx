import React from 'react'
import './technologyStack.css'
import TechStackCard from '../components/TechStackCard'
import technologyStackData from '../data/technologyStackData'

function TechnologyStack() {
  return (
    <div className="container technology-stack">
      <h1 className="techstack-title">Technology Stack:</h1>
      <div className='tech-stack-logos'>
        {technologyStackData.map((data) => (
          <TechStackCard 
            key={data._id}
            icon={data.icon}
            techName={data.techName}
          />
        ))}
      </div>
    </div>
  )
}

export default TechnologyStack