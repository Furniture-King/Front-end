import React, { useState } from 'react'

import { HiOutlineMenu } from 'react-icons/hi'
import { AiFillLock } from 'react-icons/ai'
import { MdShoppingCart } from 'react-icons/md'

import NavBarItem from './NavBarItem'

const ProductNavBar = () => {
  const [show, setShow] = useState(false)

  const toggleMenu = () => {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  return (
    <div>
      <div className=" flex items-center xs:justify-center bg-color-bg-lightBrown h-16">
        <div className="flex items-center xs:hidden">
          <button className="btn btn-square btn-ghost ">
            <HiOutlineMenu size={30} onClick={toggleMenu} />
          </button>
          <div className="flex md:mt-0">
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
        <nav className="hidden xs:flex justify-between h-16 md:w-8/12">
          <NavBarItem href="/products_chaises" text="Chaise" />
          <NavBarItem href="/products_canapes" text="Canapé" />
          <NavBarItem href="/products_rangements" text="Rangement" />
          <NavBarItem href="/products_luminaires" text="Luminaire" />
        </nav>
      </div>
      <div className="xs:hidden shadow-xl">
        {show ? (
          <ul className=" bg-color-bg-lightBrown ">
            <li>
              <NavBarItem href="/products_chaises" text="Chaise" />
            </li>
            <li>
              <NavBarItem href="/products_canapes" text="Canapé" />
            </li>
            <li>
              <NavBarItem href="/products_rangements" text="Rangement" />
            </li>
            <li className="pb-2">
              <NavBarItem href="/products_luminaires" text="Luminaire" />
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export default ProductNavBar
