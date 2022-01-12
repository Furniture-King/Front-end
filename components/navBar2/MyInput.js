import React, { useState, useEffect } from 'react'

import { FaSearchLocation } from 'react-icons/fa'
import { fetchDataForList } from '../misc_func/gettAll'

let userWord = ''

const handleSubmit = (e) => {
  e.preventDefault()
}

const inteliSearch = (arr, user) => {
  return arr.filter((item) => item.toLowerCase().includes(user.toLowerCase()))
}

const MyInput = () => {
  const [userValue, setUserValue] = useState('')
  const [placeholder, setPlaceholder] = useState([])
  const [state, setState] = useState([])
  const [rangementsList, setRangementsList] = useState([])
  const [luminairesList, setLuminairesList] = useState([])
  const [canapesList, setCanapesList] = useState([])

  useEffect(() => {
    fetchDataForList(setState, 'chaises')
    fetchDataForList(setRangementsList, 'rangements')
    fetchDataForList(setLuminairesList, 'luminaires')
    fetchDataForList(setCanapesList, 'canapes')
  }, [])

  // console.log(state)

  const handleClick = () => {
    setUserValue(userWord)
  }

  const handleChange = (e) => {
    userWord = e.target.value
    setPlaceholder(
      inteliSearch(
        [...rangementsList, ...state, ...luminairesList, ...canapesList],
        e.target.value
      )
    )
  }

  return (
    <div className="flex flex-col justify-center items-baseline">
      <form onSubmit={handleSubmit}>
        <div className=" rounded flex">
          <input
            onChange={handleChange}
            className=" appearance-none placeholder-gray-500 border-b py-2 px-3 focus:outline-none bg-white bg-opacity-10 rounded"
          />
          <button
            type="submit"
            onClick={handleClick}
            className="ml-3"
            style={{ transform: 'translate(-50px)' }}
          >
            <FaSearchLocation size={20} />
          </button>
        </div>
      </form>
      {placeholder && userWord ? (
        <div className="p-2 bg-opacity-80 shadow-lg absolute top-14 w-72 rounded z-10 bg-gray-300 text-color-bg-darkBlue">
          {placeholder && userWord
            ? placeholder.map((item, index) => {
                return (
                  <div
                    key={index}
                    value={item}
                    onClick={() => console.log('plop')}
                  >
                    {item}
                  </div>
                )
              })
            : null}
        </div>
      ) : null}
    </div>
  )
}

export default MyInput
