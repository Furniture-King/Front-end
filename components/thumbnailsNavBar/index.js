import React from 'react'
import Link from 'next/link'

const Card = (props) => {
  const { href, src, title } = props
  return (
    <Link href={href} passHref>
      <a className=" card shadow-md hover:shadow-none image-full font-raleway w-60 mt-3 xl:mt-0">
        <figure>
          <img src={src} />
        </figure>
        <div
          className="justify-center items-center card-body hover:scale-105"
          style={{ transition: '.3s' }}
        >
          <h2 className="card-title text-3xl font-bold">{title}</h2>
        </div>
      </a>
    </Link>
  )
}

const ThumbnailsNavBar = () => {
  return (
    <div className="flex justify-center md:justify-between flex-wrap mx-auto mt-10 w-10/12 md:w-8/12 ">
      <Card
        href="/products_chaises"
        src="./images/images_background/chaise_bg.jpeg"
        title="Chaise"
      />

      <Card
        href="/products_canapes"
        src="./images/images_background/canape_bg.jpg"
        title="Canapé"
      />

      <Card
        href="/products_rangements"
        src="./images/images_background/commode.jpg"
        title="Rangement"
      />

      <Card
        href="/products_luminaires"
        src="./images/images_background/luminaire.jpg"
        title="Luminaire"
      />
    </div>
  )
}

export default ThumbnailsNavBar
