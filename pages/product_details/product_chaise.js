import React, { useContext } from 'react'

import Context from '../../components/context'

import BigCard from '../../components/bigCard'
import DetailsPageTemplate from '../../components/detailsPageTemplate'

const ProductChaise = () => {
  const { name } = useContext(Context)

  return (
    <div>
      <DetailsPageTemplate
        headTitle="details produits chaise"
        BreadCrumbItem2="Chaise"
        BreadCrumbItem3={name}
        hrefItem1="/"
        hrefItem2="/products_chaises"
        hrefItem3="/products_chaises"
      >
        <BigCard db="chaises" />
      </DetailsPageTemplate>
    </div>
  )
}

export default ProductChaise
