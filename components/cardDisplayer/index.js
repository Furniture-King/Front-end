import React, { useContext } from 'react'

import Context from '../context'

import Thumbnail from '../card'

const CardDisplayer = (props) => {
  const { setState } = useContext(Context)
  const { setName } = useContext(Context)
  const { productsArray, href } = props

  return (
    <div className="mx-auto w-10/12 md:w-8/12">
      <div className="flex flex-wrap justify-center md:justify-between">
        {productsArray.map((productItem) => {
          return (
            <div
              onClick={() => setName(productItem.title)}
              key={productItem._id}
            >
              <Thumbnail
                href={href}
                src={productItem.src}
                src2={productItem.otherSrc[1]}
                title={productItem.title}
                text={productItem.text}
                price={productItem.price}
                numberOfRate={productItem.totalVote}
                numberOfStar={productItem.stars}
                onClick={() => setState(productItem._id)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardDisplayer
