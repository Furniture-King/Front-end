import React, { useEffect, useState, useContext } from 'react'
import Link from 'next/link'

import Context from '../context'
import StarGenerator from '../misc_func/StarGenerator'
import { getAllMagic } from '../misc_func/gettAll'
import MySpinner from '../spinner'

import { AiOutlineHeart } from 'react-icons/ai'
import { BsBoxSeam } from 'react-icons/bs'
import { MdShoppingCart } from 'react-icons/md'

const RandomProduct = Math.floor(Math.random() * 15)

const wishClick = (e) => {
  e.preventDefault()
  console.log('ajouter à la wish list!')
}
const cartClick = (e) => {
  e.preventDefault()
  console.log('ajouter au panier!')
}

const BigCardNewSection = (props) => {
  const { href } = props
  const [isShown, setIsShown] = useState(false)
  const [value, setValue] = useState({})
  const { setState } = useContext(Context)
  const { setName } = useContext(Context)

  useEffect(() => {
    getAllMagic(setValue, 'chaises')
  }, [])
  // console.log(value.products ? value.products.map((item) => item.title) : null)

  const handleClick = (id, productName) => {
    setState(id)
    setName(productName)
  }

  return (
    <Link href={href} passHref>
      <a
        className="card text-center shadow-xl hover:shadow-md font-poiretOne h-full"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown ? (
          <div>
            <div
              className="absolute top-4 left-5 hover:text-red-600"
              onClick={wishClick}
            >
              <AiOutlineHeart size={20} />
            </div>
            <BsBoxSeam size={20} className="absolute top-12 left-5 " />
            <MdShoppingCart
              size={20}
              className="absolute top-20 left-5 hover:text-green-600"
              onClick={cartClick}
            />
          </div>
        ) : null}
        {value.products ? (
          isShown ? (
            <img
              src={value.products[RandomProduct].otherSrc[0]}
              className="pt-10"
              onClick={() =>
                handleClick(
                  value.products[RandomProduct]._id,
                  value.products[RandomProduct].title
                )
              }
            />
          ) : (
            <img src={value.products[RandomProduct].src} className="pt-10" />
          )
        ) : null}
        {value.products ? (
          <div
            className="card-body p-5 justify-between"
            onClick={() => setState(value.products[RandomProduct]._id)}
          >
            <div className="card-title text-4xl">
              {value.products[RandomProduct].title}
            </div>
            <p className="font-raleway text-justify">
              {value.products[RandomProduct].text}
            </p>
            <div className="flex justify-between items-end">
              <div className="flex items-center">
                <StarGenerator
                  totalVotes={value.products[RandomProduct].totalVote}
                  stars={value.products[RandomProduct].stars}
                />
              </div>
              <p className="text-3xl font-black">
                {value.products[RandomProduct].price} €
              </p>
            </div>
          </div>
        ) : (
          <div className="my-48">
            <MySpinner />
          </div>
        )}
      </a>
    </Link>
  )
}

export default BigCardNewSection
