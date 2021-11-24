import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import StarGenerator from '../misc_func/StarGenerator'

import { AiOutlineHeart } from 'react-icons/ai'
import { BsBoxSeam } from 'react-icons/bs'
import { MdShoppingCart } from 'react-icons/md'

const Thumbnail = (props) => {
  const [isShown, setIsShown] = useState(false)
  const { href, src, src2, title, text, price, numberOfRate } = props

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
          <p className="text-2xl font-bold my-2">{price}</p>
          <StarGenerator numberOfRate={numberOfRate} />
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
  price: PropTypes.string,
  numberOfRate: PropTypes.string
}

const PopularSection = () => {
  return (
    <div className="mx-auto w-8/12">
      <div className="flex flex-wrap justify-between">
        <Thumbnail
          href="/product_details"
          src="./images/images_luminaire/ayel1.jpeg"
          src2="./images/images_luminaire/ayel2.jpeg"
          title="Ayel"
          text="Parfait pour apporter une note super naturelle et 100 % hype dans un intérieur contemporain !"
          price="299 €"
          numberOfRate="20"
        />
        <Thumbnail
          href="/product_details"
          src="./images/images_luminaire/booba1.jpeg"
          src2="./images/images_luminaire/booba2.jpeg"
          title="Booba"
          text="Savant mix entre savoir-faire traditionnel et modernité, la suspension Booba invite au voyage."
          price="99 €"
          numberOfRate="7"
        />
        <Thumbnail
          href="/product_details"
          src="./images/images_Chaises/lex1.jpeg"
          src2="./images/images_Chaises/lex2.jpeg"
          title="Aplat"
          text="N'hésitez pas à jouer sur une belle mise en valeur en exposant Aplat dans le coin salon !"
          price="129 €"
          numberOfRate="12"
        />
        <Thumbnail
          href="/product_details"
          src="./images/images_canape/copo1.jpg"
          src2="./images/images_canape/copo2.jpg"
          title="Copo"
          text="Le canapé retro Copo se distingue avant tout par sa forme et un design arrondi."
          price="1290 €"
          numberOfRate="19"
        />
        <Thumbnail
          href="/product_details"
          src="./images/images_commode/salik1.jpeg"
          src2="./images/images_commode/salik2.jpeg"
          title="Salik"
          text="La collection Salik offre instantanément une touche d'élégance naturelle."
          price="490 €"
          numberOfRate="29"
        />
        <Thumbnail
          href="/product_details"
          src="./images/images_canape/auster1.jpeg"
          src2="./images/images_canape/auster2.jpeg"
          title="Auster"
          text="La ligne de canapés AUSTER a été conçue pour être le parfait allié pour un intérieur cocooning réussi !"
          price="2290 €"
          numberOfRate="8"
        />
      </div>
    </div>
  )
}

export default PopularSection
