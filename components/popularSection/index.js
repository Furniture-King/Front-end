import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import StarGenerator from '../misc_func/StarGenerator'
import tempDB from '../tempDB/myTestDB'

import { AiOutlineHeart } from 'react-icons/ai'
import { BsBoxSeam } from 'react-icons/bs'
import { MdShoppingCart } from 'react-icons/md'

const Thumbnail = (props) => {
  const [isShown, setIsShown] = useState(false)
  const { href, src, src2, title, text, price, numberOfRate, numberOfStar } =
    props

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
        className="rounded font-raleway p-5 mt-10 w-96 card shadow-xl hover:shadow-md"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <figure className="h-50 ">
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
          <p className="text-center text-sm">{text}</p>
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
Thumbnail.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  src2: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.number,
  numberOfRate: PropTypes.number,
  numberOfStar: PropTypes.number
}

const PopularSection = () => {
  const productsDisplayed = 2

  return (
    <div className="mx-auto w-8/12">
      <div className="flex flex-wrap justify-between">
        {/* LUMINAIRE SECTION */}
        {tempDB.luminaire.products.map((chairItem, index) => {
          if (index > productsDisplayed - 1) {
            return
          }
          return (
            <Thumbnail
              key={chairItem.id}
              href="/product_details"
              src={chairItem.src}
              src2={chairItem.otherSrc[1]}
              title={chairItem.title}
              text={chairItem.text}
              price={chairItem.price}
              numberOfRate={chairItem.totalVote}
              numberOfStar={chairItem.rating}
            />
          )
        })}
        {/* CHAISE SECTION */}
        {tempDB.chaise.products.map((chairItem, index) => {
          if (index > productsDisplayed - 1) {
            return
          }
          return (
            <Thumbnail
              key={chairItem.id}
              href="/product_details"
              src={chairItem.src}
              src2={chairItem.otherSrc[1]}
              title={chairItem.title}
              text={chairItem.text}
              price={chairItem.price}
              numberOfRate={chairItem.totalVote}
              numberOfStar={chairItem.rating}
            />
          )
        })}
        {/* CANAPE SECTION */}
        {tempDB.canape.products.map((chairItem, index) => {
          if (index > productsDisplayed - 1) {
            return
          }
          return (
            <Thumbnail
              key={chairItem.id}
              href="/product_details"
              src={chairItem.src}
              src2={chairItem.otherSrc[1]}
              title={chairItem.title}
              text={chairItem.text}
              price={chairItem.price}
              numberOfRate={chairItem.totalVote}
              numberOfStar={chairItem.rating}
            />
          )
        })}
        {/* RANGEMENT SECTION */}
        {tempDB.rangement.products.map((chairItem, index) => {
          if (index > productsDisplayed) {
            return
          }
          return (
            <Thumbnail
              key={chairItem.id}
              href="/product_details"
              src={chairItem.src}
              src2={chairItem.otherSrc[1]}
              title={chairItem.title}
              text={chairItem.text}
              price={chairItem.price}
              numberOfRate={chairItem.totalVote}
              numberOfStar={chairItem.rating}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PopularSection
