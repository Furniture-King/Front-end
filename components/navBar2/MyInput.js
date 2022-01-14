import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'

import Context from '../context'

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
  const [chaisesList, setChaisesList] = useState([])
  const [rangementsList, setRangementsList] = useState([])
  const [luminairesList, setLuminairesList] = useState([])
  const [canapesList, setCanapesList] = useState([])
  const [myDb, setMyDb] = useState('')
  const { state, setState } = useContext(Context)

  useEffect(() => {
    fetchDataForList(setChaisesList, 'chaises')
    fetchDataForList(setRangementsList, 'rangements')
    fetchDataForList(setLuminairesList, 'luminaires')
    fetchDataForList(setCanapesList, 'canapes')
  }, [])

  const newArr = [
    ...rangementsList,
    ...chaisesList,
    ...luminairesList,
    ...canapesList
  ]

  const handleClick = () => {
    setUserValue(userWord)
  }

  const handleChange = (e) => {
    userWord = e.target.value
    setPlaceholder(
      inteliSearch(
        [
          ...rangementsList.map((item) => item.title),
          ...chaisesList.map((item) => item.title),
          ...luminairesList.map((item) => item.title),
          ...canapesList.map((item) => item.title)
        ],
        e.target.value
      )
    )
  }

  const handleCompare = (e) => {
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].title === e) {
        const dbName = newArr[i].db.substring(0, newArr[i].db.length - 1)
        setMyDb(`/product_details/product_${dbName}`)
        setState(newArr[i].id)
      }
    }
  }

  return (
    <div className="flex flex-col justify-center items-baseline">
      <form onSubmit={handleSubmit}>
        <div className=" rounded flex">
          <input
            onChange={handleChange}
            className="placeholder-gray-500 border-b py-2 px-3 focus:outline-none bg-white bg-opacity-10 rounded"
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
        <div className="bg-opacity-80 shadow-lg absolute top-14 w-72 rounded z-10 bg-gray-300 text-color-bg-darkBlue">
          {placeholder && userWord
            ? placeholder.map((item, index) => {
                return (
                  <div
                    key={index}
                    value={item}
                    onMouseEnter={() => handleCompare(item)}
                  >
                    <Link href={myDb} passHref>
                      <a className="ml-2 mt-1">{item}</a>
                    </Link>
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
