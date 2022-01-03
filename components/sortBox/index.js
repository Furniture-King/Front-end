import React, { useState, useEffect, useContext } from 'react'

import Context from '../context'

import { getAllMagic } from '../misc_func/gettAll'

import { MdKeyboardArrowDown } from 'react-icons/md'
import { FiTruck } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'

const initialState = {
  sortBy: '',
  color: [],
  minPrice: '',
  maxPrice: ''
}

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

const MyButton = (props) => {
  const { title, bgColor, fontColor, hoverBg, hoverFont, onClick } = props
  return (
    <button
      onClick={onClick}
      className={`p-2 px-10 rounded first:mr-10 transition-color duration-500 
                shadow-lg active:shadow-none hover:shadow-md 
                ${bgColor} ${fontColor} ${hoverBg} ${hoverFont}`}
    >
      {title}
    </button>
  )
}

let userColorsArray = []

const ColorItem = (props) => {
  const { color, value } = props
  const [show, setShow] = useState(false)
  const [colorDisplayer, setColorDisplayer] = useState(false)
  const { setColors } = useContext(Context)

  const handleClick = (e) => {
    userColorsArray.push(e.target.value)
    setColors(userColorsArray)
    toggleMenu()
  }

  const toggleMenu = () => {
    if (show) {
      setShow(false)
      setColorDisplayer(false)
    } else {
      setShow(true)
      setColorDisplayer(true)
    }
  }

  const deleteColorItem = (e) => {
    setShow(false)
    setColorDisplayer(false)

    for (let i = 0; i < userColorsArray.length; i++) {
      if (userColorsArray[i] === e.target.value) {
        userColorsArray.splice([i], 1)
        setColors(userColorsArray)
      }
    }
  }

  return (
    <div>
      {colorDisplayer ? (
        <div className="flex flex-col">
          <button
            disabled
            className={
              show
                ? `${color} rounded-full p-4 shadow-lg cursor-pointer 
      m-1 transition-shadow duration-150 active:shadow-none outline-black `
                : `${color} rounded-full p-4 shadow-lg cursor-pointer 
      m-1 transition-shadow duration-150 active:shadow-none `
            }
            onClick={handleClick}
            value={value}
          ></button>
          <button className="border" onClick={deleteColorItem} value={value}>
            click
          </button>
        </div>
      ) : (
        <button
          className={
            show
              ? `${color} rounded-full p-4 shadow-lg cursor-pointer 
      m-1 transition-shadow duration-150 active:shadow-none outline-black `
              : `${color} rounded-full p-4 shadow-lg cursor-pointer 
      m-1 transition-shadow duration-150 active:shadow-none `
          }
          onClick={handleClick}
          value={value}
        ></button>
      )}
    </div>
  )
}

const PriceItem = (props) => {
  const { title, value } = props
  const [show, setShow] = useState(false)
  const { setSortBy } = useContext(Context)

  const handleClick = (e) => {
    setSortBy(e.target.value)
    toggleMenu()
  }

  const toggleMenu = () => {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  return (
    <div
      className={
        show
          ? ` p-1 rounded 
    transition-shadow 
    duration-300
    hover:shadow-md
    active:shadow-none
   bg-color-bg-darkBlue 
   text-color-bg-light`
          : ` p-1 rounded
    transition-shadow 
    duration-300
    hover:shadow-md
    active:shadow-none
    hover:bg-color-bg-light 
    hover:text-color-bg-lightBrown`
      }
    >
      <button onClick={handleClick} value={value}>
        {title}
      </button>
    </div>
  )
}

const SortBox = (props) => {
  const { dbName } = props
  const [show, setShow] = useState(false)
  const { sortBy } = useContext(Context)
  const { colors } = useContext(Context)

  initialState.sortBy = sortBy
  initialState.color = colors

  const toggleMenu = () => {
    if (show) {
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
              <PriceItem title="Prix croissant" value="croissant" />
              <PriceItem title="Prix décroissant" value="decroissant" />
              <PriceItem title="Note clients" value="clients" />
              {/* <PriceItem title="Nom" value="nom" /> */}
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
            {/* <div>
              {initialState.sortBy}
              {initialState.color.map((item, index) => {
                return <div key={index}>{item}</div>
              })}
            </div> */}
            <div className="mx-auto my-5">
              <MyButton
                title="RÉINITIALISER"
                bgColor="bg-color-bg-lightBrown"
                fontColor="text-color-font-white"
                hoverBg="hover:bg-color-font-white"
                hoverFont="hover:text-red-500"
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
            <div
              onClick={toggleMenu}
              className="cursor-pointer"
              style={{ transform: 'translate(-100%) translateY(10%)' }}
            >
              <AiFillCloseCircle />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default SortBox
