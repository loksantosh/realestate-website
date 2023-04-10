import React from 'react'
import './Residency.css'

const SlidderButton = ({ useSwiper }) => {
  const swiper = useSwiper()
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}

export default SlidderButton