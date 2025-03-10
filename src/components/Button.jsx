import React from 'react'
import './button.css'

function Button({icon, label, link, className, downloadFileName}) {
  return (
    <a href={link}
        target="_blank" 
        rel="noopener noreferrer" 
        className={className}
        download={downloadFileName || undefined}
        >
        {icon}
        {label}
    </a>
  )
}

export default Button