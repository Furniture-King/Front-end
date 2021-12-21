import React, { useContext, useEffect, useState } from 'react'

import Context from '../context'

import { getItemById } from '../misc_func/gettAll'
import StarGenerator from '../misc_func/StarGenerator'

import { BsBoxSeam } from 'react-icons/bs'
import { MdShoppingCart } from 'react-icons/md'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const BigCard = (props) => {
  const { db } = props
  const { state } = useContext(Context)
  const [value, setValue] = useState([])

  useEffect(() => {
    getItemById(setValue, db, state)
  }, [])

  console.log(value)

  return (
    <div className="mx-auto my-10 w-10/12 md:w-8/12 font-poiretOne">
      {value.products ? (
        <div className="rounded shadow-md ">
          <div className="flex">
            <div className="flex flex-col justify-start">
              <img src={value.products.src} style={{ width: '300em' }} />
            </div>
            <div className="  p-4 flex flex-col justify-between bg-color-bg-ultraLight">
              <div className="mb-8">
                <div className="font-bold text-5xl mb-2 text-color-bg-lightBrown">
                  {value.products.title}
                </div>
                <div className="text-color-font-black font-raleway text-sm">
                  <p className="mt-5">{value.products.bigText1}</p>
                  <p className="mt-5">{value.products.bigText2}</p>
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
                      numberOfRate={value.products.totalVote}
                      numberOfStar={value.products.rating}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center">
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
                  <button className="flex  items-center border p-1 px-4 bg-color-bg-darkBlue text-color-bg-ultraLight">
                    Ajouter au panier
                    <span className="ml-2">
                      <MdShoppingCart />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default BigCard
