import React, { useState, useContext } from 'react'

import Context from '../context'

import Thumbnail from '../card'

const CardDisplayer = (props) => {
  const { state, setState } = useContext(Context)
  const { productsArray, href } = props

  console.log(state)

  return (
    <div className="mx-auto w-10/12 md:w-8/12">
      <div className="flex flex-wrap justify-center md:justify-between">
        {productsArray.map((productItem, index) => {
          return (
            <Thumbnail
              key={productItem._id}
              href={href}
              src={productItem.src}
              src2={productItem.otherSrc[1]}
              title={productItem.title}
              text={productItem.text}
              price={productItem.price}
              numberOfRate={productItem.totalVote}
              numberOfStar={productItem.rating}
              onClick={() => setState(productItem._id)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CardDisplayer
