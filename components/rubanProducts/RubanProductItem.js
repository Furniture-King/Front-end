import React from 'react'
import Link from 'next/link'

import StarGenerator from '../misc_func/StarGenerator'

const RubanProductItem = (props) => {
  const { href, src, title, price, rating, onClick, starz } = props
  return (
    <Link href={href} passHref>
      <a>
        <div
          className="m-3 rounded-md shadow-xl hover:shadow-md flex flex-col justify-center items-center border p-1"
          onClick={onClick}
        >
          <div>
            <img src={src} />
          </div>
          <div className="font-semibold">{title}</div>
          <div>{price} €</div>
          <div>
            <StarGenerator totalVotes={starz} stars={rating} />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default RubanProductItem
