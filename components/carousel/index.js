import React from 'react'
import PropTypes from 'prop-types'
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
CarouselItem.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string
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
          text="Lorem Ipsum"
        />
        <CarouselItem
          id="item2"
          src="./images/images_Carousel/indoor_living.jpg"
          text="Lorem Ipsum"
        />
        <CarouselItem
          id="item3"
          src="./images/images_Carousel/indoor_living2.jpg"
          text="Lorem Ipsum"
        />
        <CarouselItem
          id="item4"
          src="./images/images_Carousel/indoor_living3.jpg"
          text="Lorem Ipsum"
        />
      </Slider>
    </div>
  )
}

export default Carousel
