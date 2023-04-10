import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <div className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexCenter inner-container">
          <span className='primaryText'>Get started with Homyz</span>
          <span className='secondaryText'>Subscribe and find super attractive price quotes from us.</span>
          <span className='secondaryText'>Find your residence soon</span>
          <div className="button">
            <a href="mailto:sample@gmail.com">
              Get Started
            </a>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted