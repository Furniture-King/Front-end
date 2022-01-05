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

export default Card
