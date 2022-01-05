import React, { useContext, useEffect, useState } from 'react'

import Context from '../context'

import { getItemById } from '../misc_func/gettAll'
import StarGenerator from '../misc_func/StarGenerator'
import MySpinner from '../spinner'
import MyLittleCarousel from './MyLittleCarousel'

import { BsBoxSeam } from 'react-icons/bs'
import { MdShoppingCart } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const BigCard = (props) => {
  const { db } = props
  const { state } = useContext(Context)
  const [isShown, setIsShown] = useState(false)
  const [value, setValue] = useState([])

  useEffect(() => {
    getItemById(setValue, db, state)
    return function cleanup() {
      console.log('clean')
    }
  }, [setValue, db, state])

  const toggleClick = () => {
    if (isShown) {
      setIsShown(false)
    } else {
      setIsShown(true)
    }
  }

  return (
    <div className="mx-auto my-10 w-10/12 md:w-8/12 font-poiretOne">
      {value.products ? (
        <div className="rounded shadow-md ">
          <div className="flex lg:flex-row flex-col">
            <MyLittleCarousel
              url1={value.products.src}
              url2={value.products.otherSrc[0]}
              url3={value.products.otherSrc[1]}
            />

            <div className="p-4 flex flex-col justify-between bg-color-bg-ultraLight">
              <div className="mb-8">
                <div style={{ transform: 'translate(-30%)' }}>
                  <button
                    className="hidden lg:inline-flex items-center justify-center w-8 h-8 
                text-color-font-gray hover:text-color-bg-darkBlue transition-colors duration-150 
                bg-pink-800 rounded-full focus:shadow-outline 
                hover:bg-pink-200 shadow hover:shadow-none"
                  >
                    <AiOutlineHeart size={20} />
                  </button>
                </div>
                <div className="flex justify-between">
                  <div className="font-bold text-5xl mb-2 text-color-bg-lightBrown">
                    {value.products.title}
                  </div>
                  <button
                    className="lg:hidden inline-flex items-center justify-center w-8 h-8 
                text-color-font-gray hover:text-color-bg-darkBlue transition-colors duration-150 
                bg-pink-800 rounded-full focus:shadow-outline 
                hover:bg-pink-200 shadow hover:shadow-none"
                  >
                    <AiOutlineHeart size={20} />
                  </button>
                </div>

                <div className="text-color-font-black font-raleway text-sm">
                  <p className="mt-5">{value.products.bigText1}</p>
                  <p onClick={toggleClick} className="mt-2 cursor-pointer">
                    En savoir plus...
                  </p>
                  {isShown ? (
                    <p className="mt-5">{value.products.bigText2}</p>
                  ) : null}
                </div>
                <div className="flex justify-end font-bold text-3xl my-5 text-color-bg-lightBrown">
                  {value.products.price} €
                </div>
                <div className="flex justify-between">
                  {value.products.stock > 0 ? (
                    <div className="flex items-center">
                      <BsBoxSeam color={'green'} />
                      <p className="ml-2 text-sm">Stock: </p>
                      <span className="text-sm">{value.products.stock}</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <BsBoxSeam color={'red'} />
                      <p className="ml-2 text-sm">Out of Stock</p>
                    </div>
                  )}
                  <div>
                    <StarGenerator
                      totalVotes={value.products.totalVote}
                      stars={value.products.stars}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div className="btn-group">
                  <select id="myselect">
                    {arr.map((_, index) => {
                      return (
                        <option value={index + 1} key={index}>
                          {index + 1}
                        </option>
                      )
                    })}
                  </select>

                  <button className="flex items-center border p-1 px-4 bg-color-bg-darkBlue text-color-bg-ultraLight">
                    <span className="block lg:hidden xl:block">
                      Ajouter au panier
                    </span>
                    <span className="ml-2 ">
                      <MdShoppingCart />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" my-48">
          <MySpinner />
        </div>
      )}
    </div>
  )
}

export default BigCard
