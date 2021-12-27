import React, { useState, useEffect } from 'react'

import ProductsPageTemplate from '../components/produtsPageTemplate'
import CardDisplayer from '../components/cardDisplayer'

import { getAllMagic } from '../components/misc_func/gettAll'

const Chaises = () => {
  const [value, setValue] = useState({})

  useEffect(() => {
    getAllMagic(setValue, 'chaises')
    return function cleanup() {
      console.log('clean')
    }
  }, [])

  return (
    <div>
      <ProductsPageTemplate
        headTitle="Furniture King Web Store"
        hrefItem1="/"
        hrefItem2="/products_chaises"
        BreadCrumbItem2="Chaises"
      >
        {value.products ? (
          <CardDisplayer
            productsArray={value.products}
            href="/product_details/product_chaise"
          />
        ) : null}
      </ProductsPageTemplate>
    </div>
  )
}

export default Chaises
