import React from 'react'

import Card from './Card'

const ThumbnailsNavBar = () => {
  return (
    <div className="flex justify-center md:justify-between flex-wrap mx-auto mt-10 w-10/12 md:w-8/12 ">
      <Card
        href="/products_chaises"
        src="./images/images_background/chaise_bg.jpeg"
        title="Chaise"
      />

      <Card
        href="/products_canapes"
        src="./images/images_background/canape_bg.jpg"
        title="Canapé"
      />

      <Card
        href="/products_rangements"
        src="./images/images_background/commode.jpg"
        title="Rangement"
      />

      <Card
        href="/products_luminaires"
        src="./images/images_background/luminaire.jpg"
        title="Luminaire"
      />
    </div>
  )
}

export default ThumbnailsNavBar
