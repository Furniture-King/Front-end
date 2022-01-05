import React from 'react'
import Link from 'next/link'

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

export default Card
