import React, { useState, useEffect } from 'react'

import { getAllMagic } from '../misc_func/gettAll'

import { MdKeyboardArrowDown } from 'react-icons/md'
import { FiTruck } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'

const MenuItem = (props) => {
  const { title } = props

  return (
    <div className="flex items-center cursor-pointer">
      <div className="mr-5">{title}</div>
      <div>
        <MdKeyboardArrowDown />
      </div>
    </div>
  )
}

const Range = (props) => {
  const { dbName } = props
  const [db, setDb] = useState([])
  const [values, setValues] = useState(0)
  const [maxValues, setMaxValues] = useState(0)

  useEffect(() => {
    getAllMagic(setDb, dbName)
  }, [])

  const [...pricesArray] = db.products
    ? db.products.map((item) => item.price).sort((a, b) => a - b)
    : []

  const miniPrice = pricesArray[0]
  const maxPrice = pricesArray[pricesArray.length - 1]

  // console.log(miniPrice, maxPrice)
  // console.log(values ? values.target.value : null)
  // console.log(maxValues ? maxValues.target.value : null)

  return (
    <div>
      <div className="flex justify-between mb-2">
        <div>min : {values ? values.target.value : miniPrice}</div>
        <div>max : {maxValues ? maxValues.target.value : maxPrice}</div>
      </div>
      {/* le mini range  */}
      <input
        type="range"
        min={miniPrice}
        max={maxPrice}
        defaultValue="0"
        className="range"
        step="10"
        onChange={(values) => setValues(values)}
      />
      {/* le maxi range  */}
      <input
        type="range"
        min={miniPrice}
        max={maxPrice}
        defaultValue="100"
        className="range range-accent"
        step="10"
        onChange={(maxValues) => setMaxValues(maxValues)}
      />
    </div>
  )
}

const PriceItem = (props) => {
  const handleClick = (e) => {
    // e.preventDefault()
    // e.stopPropagation()
    console.log(e.target.value)
  }

  const { title, value } = props
  return (
    <div
      className=" p-1 rounded 
      transition-shadow 
      duration-300
      hover:shadow-md
      hover:bg-color-bg-light 
      hover:text-color-bg-lightBrown"
    >
      <button onClick={handleClick} value={value}>
        {title}
      </button>
    </div>
  )
}

const ColorItem = (props) => {
  const { color } = props
  return (
    <div
      className={`${color} rounded-full p-4 shadow-lg cursor-pointer 
      m-1 transition-shadow duration-150 hover:shadow-sm`}
    ></div>
  )
}

const SortBox = (props) => {
  const { dbName } = props
  const [show, setShow] = useState(false)

  const toggleMenu = () => {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
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
              <PriceItem title="Prix croissant" value="croissant" />
              <PriceItem title="Prix décroissant" value="decroissant" />
              <PriceItem title="Note clients" value="clients" />
              <PriceItem title="Nom" value="nom" />
            </div>
            <div>
              <div>COULEURS</div>
              <div className="flex mt-2">
                <ColorItem color="bg-white" />
                <ColorItem color="bg-black" />
                <ColorItem color="bg-gray-600" />
                <ColorItem color="bg-red-800" />
                <ColorItem color="bg-blue-900" />
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
                <FiTruck size={40} />
                <div className="font-bold">Livraison rapide </div>
                <div>(4 semaines)</div>
                <div className="font-bold">Livraison standart </div>
                <div>(8 semaines)</div>
              </div>
            </div>
          </div>
          <div className="border-t flex justify-between">
            <div className="mx-auto my-5">
              <button className="border p-2">RÉINITIALISER</button>
              <button className="border p-2">APPLIQUER</button>
            </div>
            <div onClick={toggleMenu}>
              <AiFillCloseCircle />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default SortBox
