import React from 'react'

import BigCardNewSection from './BigCardNewSection'
import Card from './Card'

const NewsSections = () => {
  return (
    <div className="mx-auto mt-10 w-10/12 md:w-8/12">
      <div className="flex flex-col md:flex-row">
        <div className="w-full mr-10">
          <BigCardNewSection href="/product_details/product_chaise" />
        </div>
        <div className="hidden md:w-8/12 lg:flex flex-col justify-between">
          <Card
            href="/products_chaises"
            src="./images/images_background/chaise_bg.jpeg"
            title="Chaise"
            text="Rerum reiciendis beatae."
          />
          <div className="md:mt-5">
            <Card
              href="/products_canapes"
              src="./images/images_background/canape_bg.jpg"
              title="Canapé"
              text="Sit sit incidunt iure sapiente."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsSections
