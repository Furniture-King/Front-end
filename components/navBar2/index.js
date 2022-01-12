import React from 'react'
import Link from 'next/link'

import MyInput from './MyInput'

import { AiFillLock } from 'react-icons/ai'
import { MdShoppingCart } from 'react-icons/md'

const NavBar2 = () => {
  return (
    <div className="fixed z-10 w-full navbar flex-col md:flex-row justify-center shadow-lg bg-color-bg-darkBlue text-neutral-content px-0 lg:px-16">
      <div className="flex-1 hidden px-2 mx-2 lg:flex">
        <Link href="/">
          <a className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-color-font-white">
            Furniture K
          </a>
        </Link>
      </div>
      <MyInput />
      <div className="hidden xs:flex mt-5 md:mt-0">
        <div className="avatar mx-5">
          <div className="rounded-full w-10 h-10 m-1">
            <img src="https://i.pravatar.cc/500?img=32" />
          </div>
        </div>
        <a
          className="px-3 py-2 flex flex-col items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
          href="#"
        >
          <AiFillLock />
          <span>Connexion</span>
        </a>
        <a
          className="px-3 py-2 flex flex-col items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
          href="#"
        >
          <MdShoppingCart />
          <span className="ml-2">Panier</span>
        </a>
      </div>
    </div>
  )
}

export default NavBar2
