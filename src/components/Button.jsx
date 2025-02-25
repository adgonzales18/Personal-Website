import React from 'react'
import './button.css'

function Button({icon, label, link, className}) {
  return (
    <a href={link}
        target="_blank" 
        rel="noopener noreferrer" 
        className={className}>
        {icon}
        {label}
    </a>
    
  )
}

export default Button