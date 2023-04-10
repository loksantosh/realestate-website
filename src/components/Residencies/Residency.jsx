import React from 'react'
import "./Residency.css"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
import SlidderButton from './SlidderButton'
const Residency = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlidderButton useSwiper={useSwiper} style={{marginBottom:"2rem"}} />
          {
            data.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />
                  <span className="secondaryText">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>
                  <span className='primaryText'>{card.name}</span>
                  <span className='secondaryText'>{card.detail}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Residency