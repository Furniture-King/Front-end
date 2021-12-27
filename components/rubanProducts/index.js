import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'

import Context from '../context'

import { getAllMagic } from '../misc_func/gettAll'
import StarGenerator from '../misc_func/StarGenerator'

const RubanProductItem = (props) => {
  const { href, src, title, price, rating, onClick, starz } = props
  return (
    <Link href={href} passHref>
      <a>
        <div
          className="m-3 rounded-md shadow-xl hover:shadow-md flex flex-col justify-center items-center border p-1"
          onClick={onClick}
        >
          <div>
            <img src={src} />
          </div>
          <div className="font-semibold">{title}</div>
          <div>{price} €</div>
          <div>
            <StarGenerator numberOfRate={starz} numberOfStar={rating} />
          </div>
        </div>
      </a>
    </Link>
  )
}

const RubanProduct = () => {
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

  // console.log(chairDB.products ? chairDB.products.length : null)
  const RandomProduct = Math.floor(Math.random() * 15)

  return (
    <div className="mx-auto my-5 w-10/12 md:w-8/12 font-poiretOne">
      <div className="flex justify-between">
        {/* CHAISE SECTION */}
        {chairDB.products
          ? chairDB.products.map((item, index) => {
              if (index !== RandomProduct) {
                return
              }
              return (
                <div key={item._id} onClick={() => setName(item.title)}>
                  <RubanProductItem
                    href="/product_details/product_chaise"
                    src={item.src}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    starz={item.totalVote}
                    onClick={() => setState(item._id)}
                  />
                </div>
              )
            })
          : null}
        {/* LUMINAIRE SECTION */}
        {lumnDB.products
          ? lumnDB.products.map((item, index) => {
              if (index !== RandomProduct) {
                return
              }
              return (
                <div key={item._id} onClick={() => setName(item.title)}>
                  <RubanProductItem
                    key={item._id}
                    href="/product_details/product_luminaire"
                    src={item.src}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    starz={item.totalVote}
                    onClick={() => setState(item._id)}
                  />
                </div>
              )
            })
          : null}
        {/* CANAPE SECTION */}
        {canapeDB.products
          ? canapeDB.products.map((item, index) => {
              if (index !== RandomProduct) {
                return
              }
              return (
                <div key={item._id} onClick={() => setName(item.title)}>
                  <RubanProductItem
                    key={item._id}
                    href="/product_details/product_canape"
                    src={item.src}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    starz={item.totalVote}
                    onClick={() => setState(item._id)}
                  />
                </div>
              )
            })
          : null}
        {/* RANGEMENT SECTION */}
        {rangementDB.products
          ? rangementDB.products.map((item, index) => {
              if (index !== RandomProduct) {
                return
              }
              return (
                <div key={item._id} onClick={() => setName(item.title)}>
                  <RubanProductItem
                    key={item._id}
                    href="/product_details/product_rangement"
                    src={item.src}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    starz={item.totalVote}
                    onClick={() => setState(item._id)}
                  />
                </div>
              )
            })
          : null}
        {/* CHAISES SECTION */}
        {chairDB.products
          ? chairDB.products.map((item, index) => {
              if (index !== RandomProduct + 1) {
                return
              }
              return (
                <div key={item._id} onClick={() => setName(item.title)}>
                  <RubanProductItem
                    key={item._id}
                    href="/product_details/product_chaise"
                    src={item.src}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    starz={item.totalVote}
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

export default RubanProduct
