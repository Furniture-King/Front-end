import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import StarGenerator from '../misc_func/StarGenerator'
import tempDB from '../tempDB/myTestDB'

import { AiOutlineHeart } from 'react-icons/ai'
import { BsBoxSeam } from 'react-icons/bs'
import { MdShoppingCart } from 'react-icons/md'

const RandomProduct = () => {
  let random = Math.floor(Math.random() * tempDB.chaise.products.length) + 1
  const result = tempDB.chaise.products[random - 1]
  return result
}

const wishClick = (e) => {
  e.preventDefault()
  console.log('ajouter à la wish list!')
}
const cartClick = (e) => {
  e.preventDefault()
  console.log('ajouter au panier!')
}

const BigCard = (props) => {
  const [product, setProducts] = useState([])
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    setProducts(() => RandomProduct())
  }, [setProducts])

  const { href } = props
  return (
    <Link href={href} passHref>
      <a
        className="card text-center shadow-xl hover:shadow-md font-poiretOne h-full"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
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
        {isShown ? (
          <img src={product.otherSrc[0]} className="pt-10" />
        ) : (
          <img src={product.src} className="pt-10" />
        )}
        <div className="card-body p-5 justify-between">
          <div className="card-title text-4xl">{product.title}</div>
          <p className="font-raleway text-justify">{product.text}</p>
          <div className="flex justify-between items-end">
            <div className="flex items-center">
              <StarGenerator
                numberOfRate={product.totalVote}
                numberOfStar={product.rating}
              />
            </div>
            <p className="text-3xl font-black">{product.price} €</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
BigCard.propTypes = {
  href: PropTypes.string
}

const Card = (props) => {
  const { href, src, title, text } = props
  return (
    <Link href={href} passHref>
      <a className="card shadow-md hover:shadow-none image-full font-raleway">
        <figure>
          <img src={src} />
        </figure>
        <div
          className="justify-center items-center card-body hover:scale-105"
          style={{ transition: '.3s' }}
        >
          <h2 className="card-title text-5xl font-bold">{title}</h2>
          <p className="font-poiretOne font-bold">{text}</p>
        </div>
      </a>
    </Link>
  )
}
Card.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}

const NewsSections = () => {
  return (
    <div className="mx-auto mt-10 w-10/12 md:w-8/12">
      <div className="flex flex-col md:flex-row">
        <div className="w-full mr-10">
          <BigCard href="/product_details" />
        </div>
        <div className="hidden md:w-8/12 lg:flex flex-col justify-between">
          <Card
            href="/products_chaise"
            src="./images/images_background/chaise_bg.jpeg"
            title="Chaise"
            text="Rerum reiciendis beatae."
          />

          <div className="md:mt-5">
            <Card
              href="/products_canape"
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
