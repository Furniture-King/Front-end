import React, { useState, useContext } from 'react'

import Context from '../context'
import MenuItem from './MenuItem'
import Range from './Range'
import MyButton from './MyButton'
import ColorItem from './ColorItem'
import PriceItem from './PriceItem'
import initialState from './initialState'

import { FiTruck } from 'react-icons/fi'

const SortBox = (props) => {
  const { dbName } = props
  const [show, setShow] = useState(false)
  const { sortBy, setSortBy } = useContext(Context)
  const { colors, setColors } = useContext(Context)
  const { downPrice } = useContext(Context)
  const { upPrice } = useContext(Context)

  initialState.sortBy = sortBy
  initialState.color = colors
  initialState.minPrice = downPrice
  initialState.maxPrice = upPrice

  const toggleMenu = () => {
    if (show) {
      setSortBy('')
      setColors([])
      setShow(false)
    } else {
      setShow(true)
    }
  }

  const handleClick = () => {
    console.log(initialState)
  }

  return (
    <div className="mx-auto w-10/12 md:w-8/12 font-raleway pt-3 ">
      {!show ? (
        <div className="flex justify-around" onClick={toggleMenu}>
          <MenuItem title="TRIER PAR" />
          <MenuItem title="COULEURS" />
          <MenuItem title="PRIX" />
          <MenuItem title="DÉLAIS DE LIVRAISON" />
        </div>
      ) : null}
      {show ? (
        <div className="shadow-lg bg-color-bg-ultraLight">
          <div className="flex justify-around ">
            <div>
              <div>TRIER PAR</div>
              <div className="flex flex-col mt-2">
                <PriceItem title="Prix croissant" value="croissant" />
                <PriceItem title="Prix décroissant" value="decroissant" />
                <PriceItem title="Note clients" value="clients" />
              </div>
            </div>
            <div>
              <div>COULEURS</div>
              <div className="flex mt-2">
                <ColorItem color="bg-white" value="bg-white" />
                <ColorItem color="bg-black" value="bg-black" />
                <ColorItem color="bg-gray-600" value="bg-gray-600" />
                <ColorItem color="bg-red-800" value="bg-red-800" />
                <ColorItem color="bg-blue-900" value="bg-blue-900" />
              </div>
            </div>
            <div>
              <div>PRIX</div>
              <div className="flex mt-2">
                <Range dbName={dbName} />
              </div>
            </div>
            <div>
              <div>DÉLAIS DE LIVRAISON</div>
              <div className="mt-2 flex flex-col justify-center items-center">
                <FiTruck size={35} />
                <div className="font-bold">Livraison rapide </div>
                <div>(4 semaines)</div>
                <div className="font-bold">Livraison standart </div>
                <div>(8 semaines)</div>
              </div>
            </div>
          </div>
          <div className="border-t flex justify-between">
            <div className="mx-auto my-5">
              <MyButton
                title="ANNULER"
                bgColor="bg-color-bg-lightBrown"
                fontColor="text-color-font-white"
                hoverBg="hover:bg-color-font-white"
                hoverFont="hover:text-red-500"
                onClick={toggleMenu}
              />
              <MyButton
                title="APPLIQUER"
                bgColor="bg-color-bg-darkBlue"
                fontColor="text-color-font-white"
                hoverBg="hover:bg-white"
                hoverFont="hover:text-color-bg-darkBlue"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default SortBox
