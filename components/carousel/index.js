import React from 'react'
import Slider from 'react-slick'

const CarouselItem = (props) => {
  const { id, src, text } = props
  return (
    <div>
      <div id={id}>
        <img src={src} />
      </div>
      <div className="text-6xl font-raleway absolute bottom-48 left-36">
        {text}
      </div>
    </div>
  )
}

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
