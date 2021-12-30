import React, { useState, useEffect } from 'react'

import ProductsPageTemplate from '../components/produtsPageTemplate'
import CardDisplayer from '../components/cardDisplayer'

import { getAllMagic } from '../components/misc_func/gettAll'

const Luminaires = () => {
  const [value, setValue] = useState({})

  useEffect(() => {
    getAllMagic(setValue, 'luminaires')
    return function cleanup() {
      console.log('clean')
    }
  }, [])
  return (
    <div>
      <ProductsPageTemplate
        headTitle="Furniture King Web Store"
        hrefItem1="/"
        hrefItem2="/products_luminaires"
        BreadCrumbItem2="Luminaires"
        dbName="luminaires"
      >
        {value.products ? (
          <CardDisplayer
            productsArray={value.products}
            href="/product_details/product_luminaire"
          />
        ) : null}
      </ProductsPageTemplate>
    </div>
  )
}

export default Luminaires
