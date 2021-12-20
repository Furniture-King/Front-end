import React, { useState, useEffect } from 'react'

import { getAllMagic } from '../misc_func/gettAll'
import Thumbnail from '../card'

const productsDisplayed = 2

const PopularSection = () => {
  const [chairDB, setChairDB] = useState({})
  const [lumnDB, setLumnDB] = useState({})
  const [canapeDB, setCanapeDB] = useState({})
  const [rangementDB, setRangementDB] = useState({})

  useEffect(() => {
    getAllMagic(setChairDB, 'chaises')
    getAllMagic(setLumnDB, 'luminaires')
    getAllMagic(setCanapeDB, 'canapes')
    getAllMagic(setRangementDB, 'rangements')
  }, [])

  return (
    <div className="mx-auto w-10/12 md:w-8/12">
      <div className="flex flex-wrap justify-center md:justify-between">
        {/* CHAISES SECTION */}
        {chairDB.products
          ? chairDB.products.map((item, index) => {
              if (index > productsDisplayed - 1) {
                return
              }
              return (
                <Thumbnail
                  key={item._id}
                  href="/product_details"
                  src={item.src}
                  src2={item.otherSrc[1]}
                  title={item.title}
                  text={item.text}
                  price={item.price}
                  numberOfRate={item.totalVote}
                  numberOfStar={item.rating}
                />
              )
            })
          : null}

        {/* LUMINAIRES SECTION */}
        {lumnDB.products
          ? lumnDB.products.map((item, index) => {
              if (index > productsDisplayed - 1) {
                return
              }
              return (
                <Thumbnail
                  key={item._id}
                  href="/product_details"
                  src={item.src}
                  src2={item.otherSrc[1]}
                  title={item.title}
                  text={item.text}
                  price={item.price}
                  numberOfRate={item.totalVote}
                  numberOfStar={item.rating}
                />
              )
            })
          : null}

        {/* CANAPES  SECTION */}
        {canapeDB.products
          ? canapeDB.products.map((item, index) => {
              if (index > productsDisplayed - 1) {
                return
              }
              return (
                <Thumbnail
                  key={item._id}
                  href="/product_details"
                  src={item.src}
                  src2={item.otherSrc[1]}
                  title={item.title}
                  text={item.text}
                  price={item.price}
                  numberOfRate={item.totalVote}
                  numberOfStar={item.rating}
                />
              )
            })
          : null}

        {/* RANGEMENTS  SECTION */}
        {rangementDB.products
          ? rangementDB.products.map((item, index) => {
              if (index > productsDisplayed - 1) {
                return
              }
              return (
                <Thumbnail
                  key={item._id}
                  href="/product_details"
                  src={item.src}
                  src2={item.otherSrc[1]}
                  title={item.title}
                  text={item.text}
                  price={item.price}
                  numberOfRate={item.totalVote}
                  numberOfStar={item.rating}
                />
              )
            })
          : null}
      </div>
    </div>
  )
}

export default PopularSection
