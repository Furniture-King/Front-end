import React from 'react'
import Link from 'next/link'

const NavBarItem = (props) => {
  const { href, text } = props
  return (
    <Link href={href} passHref>
      <a className="flex justify-center items-center px-5 font-poiretOne text-color-bg-light text-2xl hover:bg-color-bg-light hover:text-color-bg-lightBrown transition-colors duration-500">
        {text}
      </a>
    </Link>
  )
}

export default NavBarItem
