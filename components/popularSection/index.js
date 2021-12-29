import React, { useState, useEffect, useContext } from 'react'

import Context from '../context'

import { getAllMagic } from '../misc_func/gettAll'
import Thumbnail from '../card'

const productsDisplayed = 2

const PopularSection = () => {
  const { setName } = useContext(Context)
  const { setState } = useContext(Context)
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
                <div key={item._id} onClick={() => setName(item.title)}>
                  <Thumbnail
                    href="/product_details/product_chaise"
                    src={item.src}
                    src2={item.otherSrc[1]}
                    title={item.title}
                    text={item.text}
                    price={item.price}
                    numberOfRate={item.totalVote}
                    numberOfStar={item.stars}
                    onClick={() => setState(item._id)}
                  />
                </div>
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
                <div key={item._id} onClick={() => setName(item.title)}>
                  <Thumbnail
                    key={item._id}
                    href="/product_details/product_luminaire"
                    src={item.src}
                    src2={item.otherSrc[1]}
                    title={item.title}
                    text={item.text}
                    price={item.price}
                    numberOfRate={item.totalVote}
                    numberOfStar={item.stars}
                    onClick={() => setState(item._id)}
                  />
                </div>
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
                <div key={item._id} onClick={() => setName(item.title)}>
                  <Thumbnail
                    key={item._id}
                    href="/product_details/product_canape"
                    src={item.src}
                    src2={item.otherSrc[1]}
                    title={item.title}
                    text={item.text}
                    price={item.price}
                    numberOfRate={item.totalVote}
                    numberOfStar={item.stars}
                    onClick={() => setState(item._id)}
                  />
                </div>
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
                <div key={item._id} onClick={() => setName(item.title)}>
                  <Thumbnail
                    key={item._id}
                    href="/product_details/product_rangement"
                    src={item.src}
                    src2={item.otherSrc[1]}
                    title={item.title}
                    text={item.text}
                    price={item.price}
                    numberOfRate={item.totalVote}
                    numberOfStar={item.stars}
                    onClick={() => setState(item._id)}
                  />
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default PopularSection
