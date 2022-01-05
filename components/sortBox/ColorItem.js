import React, { useState, useContext } from 'react'

import Context from '../context'

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
      m-1 transition-shadow duration-150 active:shadow-none outline-black`
                : `${color} rounded-full p-4 shadow-lg cursor-pointer 
      m-1 transition-shadow duration-150 active:shadow-none `
            }
            onClick={handleClick}
            value={value}
          ></button>
          <div className="flex justify-center">
            <button
              className="flex justify-center mt-1 text-color-bg-lightBrown border rounded-full w-6/12 shadow-lg active:shadow-none"
              onClick={deleteColorItem}
              value={value}
            >
              x
            </button>
          </div>
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

export default ColorItem
