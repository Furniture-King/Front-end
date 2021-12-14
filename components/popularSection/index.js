import React from 'react'

import tempDB from '../tempDB/myTestDB'
import Thumbnail from '../card'

const PopularSection = () => {
  const productsDisplayed = 2

  return (
    <div className="mx-auto w-10/12 md:w-8/12">
      <div className="flex flex-wrap justify-center md:justify-between">
        {/* LUMINAIRE SECTION */}
        {tempDB.luminaire.products.map((chairItem, index) => {
          if (index > productsDisplayed - 1) {
            return
          }
          return (
            <Thumbnail
              key={chairItem.id}
              href="/product_details"
              src={chairItem.src}
              src2={chairItem.otherSrc[1]}
              title={chairItem.title}
              text={chairItem.text}
              price={chairItem.price}
              numberOfRate={chairItem.totalVote}
              numberOfStar={chairItem.rating}
            />
          )
        })}
        {/* CHAISE SECTION */}
        {tempDB.chaise.products.map((chairItem, index) => {
          if (index > productsDisplayed - 1) {
            return
          }
          return (
            <Thumbnail
              key={chairItem.id}
              href="/product_details"
              src={chairItem.src}
              src2={chairItem.otherSrc[1]}
              title={chairItem.title}
              text={chairItem.text}
              price={chairItem.price}
              numberOfRate={chairItem.totalVote}
              numberOfStar={chairItem.rating}
            />
          )
        })}
        {/* CANAPE SECTION */}
        {tempDB.canape.products.map((chairItem, index) => {
          if (index > productsDisplayed - 1) {
            return
          }
          return (
            <Thumbnail
              key={chairItem.id}
              href="/product_details"
              src={chairItem.src}
              src2={chairItem.otherSrc[1]}
              title={chairItem.title}
              text={chairItem.text}
              price={chairItem.price}
              numberOfRate={chairItem.totalVote}
              numberOfStar={chairItem.rating}
            />
          )
        })}
        {/* RANGEMENT SECTION */}
        {tempDB.rangement.products.map((chairItem, index) => {
          if (index > productsDisplayed) {
            return
          }
          return (
            <Thumbnail
              key={chairItem.id}
              href="/product_details"
              src={chairItem.src}
              src2={chairItem.otherSrc[1]}
              title={chairItem.title}
              text={chairItem.text}
              price={chairItem.price}
              numberOfRate={chairItem.totalVote}
              numberOfStar={chairItem.rating}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PopularSection
