import React from 'react'

// ICONS
import { ImSearch } from 'react-icons/im'
import { AiFillLock } from 'react-icons/ai'
import { MdAccountCircle, MdShoppingCart } from 'react-icons/md'

const NavBar = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-color-bg-darkBlue">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-color-font-white"
            href="#"
          >
            Furniture K
          </a>
        </div>

        <div className="relative flex  sm:w-7/12 md:w-1/4 flex-wrap text-color-font-white border-b border-opacity-25">
          <div className="flex mr-2">
            <span className="font-normal leading-snug flex text-center white-space-no-wrap text-sm bg-color-bg-darkBlue items-center pl-2 py-1 border-r-0 placeholder-gray-300">
              <ImSearch />
            </span>
          </div>
          <input
            type="text"
            className="px-2 py-1 h-8 text-sm leading-snug text-black-700 bg-color-bg-darkBlue shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-gray-300"
            placeholder="Search..."
          />
        </div>

        <div className="lg:flex text-color-font-white" id="account_section">
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex flex-col items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                href="#"
              >
                <AiFillLock />
                <span>Connexion</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex flex-col items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                href="#"
              >
                <MdAccountCircle />
                <span className="ml-2">Compte</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex flex-col items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                href="#"
              >
                <MdShoppingCart />
                <span className="ml-2">Panier</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
