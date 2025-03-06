import React from 'react'
import './footer.css'

function Footer() {
  return (
        <div className="footer-top">
            <a href="#">Avril Donovan Gonzales</a>
            <p>© 2024 Agile DevGrit, Inc.</p>
            <div className="social-media-links">
                <a class="text-body-secondary" href="https://github.com/adgonzales18"><i class="fa-brands footer-icon fa-github" aria-hidden="true"></i></a>
                <a class="text-body-secondary" href="https://www.linkedin.com/in/avrilgonzales/"><i class="fa-brands footer-icon fa-linkedin" aria-hidden="true"></i></a>
                <a class="text-body-secondary" href="https://www.instagram.com/avrilgonzales"><i class="fa-brands footer-icon fa-instagram" aria-hidden="true"></i></a>
            </div>
        </div>
  )
}

export default Footer