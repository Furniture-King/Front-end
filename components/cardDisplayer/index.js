import React from 'react'

import Thumbnail from '../card'

const CardDisplayer = (props) => {
  const { productsArray } = props

  return (
    <div className="mx-auto w-10/12 md:w-8/12">
      <div className="flex flex-wrap justify-center md:justify-between">
        {productsArray.map((productItem, index) => {
          return (
            <div>
              <Thumbnail
                key={productItem._id}
                href="/product_details"
                src={productItem.src}
                src2={productItem.otherSrc[1]}
                title={productItem.title}
                text={productItem.text}
                price={productItem.price}
                numberOfRate={productItem.totalVote}
                numberOfStar={productItem.rating}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardDisplayer
