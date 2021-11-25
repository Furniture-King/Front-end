import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const NavBarItem = (props) => {
  const { href, text } = props
  return (
    <Link href={href} passHref>
      <a
        className="flex justify-center items-center px-5
      font-poiretOne text-color-bg-light text-2xl
      hover:bg-color-bg-light 
      hover:text-color-bg-lightBrown"
      >
        {text}
      </a>
    </Link>
  )
}
NavBarItem.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

const ProductNavBar = () => {
  return (
    <div className="flex justify-center bg-color-bg-lightBrown h-16">
      <nav className="flex justify-between h-16 w-8/12">
        <NavBarItem href="/products_chaise" text="Chaise" />
        <NavBarItem href="/products_canape" text="Canapé" />
        <NavBarItem href="/products_rangement" text="Rangement" />
        <NavBarItem href="/products_luminaire" text="Luminaire" />
      </nav>
    </div>
  )
}

export default ProductNavBar
