import React from 'react'

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

export default CarouselItem
