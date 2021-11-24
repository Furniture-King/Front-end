import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Card = (props) => {
  const { href, src, title } = props
  return (
    <Link href={href} passHref>
      <a className=" card shadow-md hover:shadow-none image-full font-raleway w-60">
        <figure>
          <img src={src} />
        </figure>
        <div
          className="justify-center items-center card-body hover:scale-105"
          style={{ transition: '.3s' }}
        >
          <h2 className="card-title text-4xl font-bold">{title}</h2>
        </div>
      </a>
    </Link>
  )
}
Card.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string
}

const ThumbnailsNavBar = () => {
  return (
    <div className="flex justify-between flex-wrap mx-auto mt-10 w-8/12">
      <Card
        href="/products_chaise"
        src="./images/images_background/chaise_bg.jpeg"
        title="Chaise"
      />

      <Card
        href="/products_canape"
        src="./images/images_background/canape_bg.jpg"
        title="Canapé"
      />

      <Card
        href="/products_commode"
        src="./images/images_background/commode.jpg"
        title="Commode"
      />

      <Card
        href="/products_luminaire"
        src="./images/images_background/luminaire.jpg"
        title="Luminaire"
      />
    </div>
  )
}

export default ThumbnailsNavBar
