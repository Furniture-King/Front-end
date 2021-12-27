import React, { useState } from 'react'
import Link from 'next/link'

import StarGenerator from '../misc_func/StarGenerator'

import { AiOutlineHeart } from 'react-icons/ai'
import { BsBoxSeam } from 'react-icons/bs'
import { MdShoppingCart } from 'react-icons/md'

const Thumbnail = (props) => {
  const [isShown, setIsShown] = useState(false)
  const {
    href,
    src,
    src2,
    title,
    text,
    price,
    numberOfRate,
    numberOfStar,
    onClick
  } = props

  const wishClick = (e) => {
    e.preventDefault()
    console.log('ajouter à la wish list!')
  }
  const cartClick = (e) => {
    e.preventDefault()
    console.log('ajouter au panier!')
  }

  return (
    <Link href={href} passHref>
      <a
        className="rounded font-raleway p-5 mt-10  w-96 md:w-56 lg:w-80 xl:w-96 card shadow-xl hover:shadow-md"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={onClick}
      >
        <figure className="h-50">
          {isShown ? (
            <div>
              <div
                className="absolute top-4 left-5 hover:text-red-600"
                onClick={wishClick}
              >
                <AiOutlineHeart size={20} />
              </div>
              <BsBoxSeam size={20} className="absolute top-12 left-5 " />
              <MdShoppingCart
                size={20}
                className="absolute top-20 left-5 hover:text-green-600"
                onClick={cartClick}
              />
            </div>
          ) : null}
          {isShown ? <img src={src2} /> : <img src={src} />}
        </figure>
        <div className="card-body items-center m-0 p-0">
          <h2 className="font-poiretOne card-title mt-10 text-4xl">{title}</h2>
          {isShown ? (
            <p className="text-center text-sm">{text}</p>
          ) : (
            <p className="text-center text-sm">{text.slice(0, 90)}...</p>
          )}

          <p className="text-2xl font-bold my-2">{price} €</p>
          <StarGenerator
            numberOfRate={numberOfRate}
            numberOfStar={numberOfStar}
          />
        </div>
      </a>
    </Link>
  )
}

export default Thumbnail
