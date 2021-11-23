import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import StarGenerator from '../misc_func/StarGenerator'

const BigCard = (props) => {
  const { href, src, title, text } = props
  return (
    <Link href={href} passHref>
      <a className="card text-center shadow-xl hover:shadow-md font-poiretOne h-full">
        <img src={src} className="pt-10" />
        <div className="card-body p-5 justify-between">
          <div className="card-title text-4xl">{title}</div>
          <p className="font-raleway text-justify">{text}</p>
          <div className="flex justify-between items-end">
            <div className="flex items-center">
              <StarGenerator numberOfRate="7" />
            </div>
            <p className="text-3xl font-black">119€</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
BigCard.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}

const Card = (props) => {
  const { href, src, title, text } = props
  return (
    <Link href={href} passHref>
      <a className="card shadow-md hover:shadow-none image-full font-raleway">
        <figure>
          <img src={src} />
        </figure>
        <div className="justify-center items-center card-body">
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
    <div className="flex mx-auto mt-10 w-8/12">
      <div className="flex justify-between">
        <div className="w-11/12 mr-10">
          <BigCard
            href="/product_details"
            src="./images/images_Chaises/chaise_baron.jpg"
            title="BARON"
            text="Beatae tenetur excepturi aut pariatur est eos. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
          />
        </div>
        <div className="w-8/12 flex flex-col justify-between">
          <Card
            href="/products_chaise"
            src="./images/images_background/chaise_bg.jpeg"
            title="Chaise"
            text="Rerum reiciendis beatae."
          />
          <div className="mt-10">
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
