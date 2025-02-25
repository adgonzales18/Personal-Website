import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div className="contact-me grad1">
        <div className="container">
          <div className="contact-form bg-white p-4 rounded shadow-lg">
            <h1 className="text-center">Contact Me</h1>
            <div className="email-me">
              <form className="mb-3" action="https://formspree.io/f/xyzgaqjl" method="POST">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" name="name" className="form-control" id="name" placeholder="Name" />
  
                <label htmlFor="email" className="form-label">Your Email address</label>
                <input type="email" name="email" className="form-control" id="email" placeholder="name@mail.com" />
  
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea name="message" className="form-control" id="message" rows="5"></textarea>
                  <button type="submit" className="send-button btn btn-dark">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Contact