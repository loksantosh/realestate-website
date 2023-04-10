import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left-side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" />
          <div className="secondaryText">
            <span>Our vision is to make all people <br />
              the best place to live for them.</span>
          </div>
        </div>
        {/* right-side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter f-nav">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer