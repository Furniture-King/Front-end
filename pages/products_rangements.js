import React, { useState, useEffect } from 'react'

import ProductsPageTemplate from '../components/produtsPageTemplate'
import CardDisplayer from '../components/cardDisplayer'

import { getAllMagic } from '../components/misc_func/gettAll'
import MySpinner from '../components/spinner'

const Rangements = () => {
  const [value, setValue] = useState({})

  useEffect(() => {
    getAllMagic(setValue, 'rangements')
    return function cleanup() {
      console.log('clean')
    }
  }, [])
  return (
    <div>
      <ProductsPageTemplate
        headTitle="Furniture King Web Store"
        hrefItem1="/"
        hrefItem2="/products_rangements"
        BreadCrumbItem2="Rangements"
        dbName="rangements"
      >
        {value.products ? (
          <CardDisplayer
            productsArray={value.products}
            href="/product_details/product_rangement"
          />
        ) : (
          <div className="my-48">
            <MySpinner />
          </div>
        )}
      </ProductsPageTemplate>
    </div>
  )
}

export default Rangements
