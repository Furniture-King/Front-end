import React from 'react'
import Slider from 'react-slick'

import CarouselItem from './CarouselItem'

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 9000
  }
  return (
    <div className="w-auto">
      <Slider {...settings} style={{ overflow: 'hidden' }}>
        <CarouselItem
          id="item1"
          src="./images/images_Carousel/indoor_bedroom.jpg"
          text=""
        />
        <CarouselItem
          id="item2"
          src="./images/images_Carousel/indoor_living.jpg"
          text=""
        />
        <CarouselItem
          id="item3"
          src="./images/images_Carousel/indoor_living2.jpg"
          text=""
        />
        <CarouselItem
          id="item4"
          src="./images/images_Carousel/indoor_living3.jpg"
          text=""
        />
      </Slider>
    </div>
  )
}

export default Carousel
