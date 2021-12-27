import React, { useContext } from 'react'

import Context from '../../components/context'

import BigCard from '../../components/bigCard'
import DetailsPageTemplate from '../../components/detailsPageTemplate'

const ProductCanape = () => {
  const { name } = useContext(Context)

  return (
    <div>
      <DetailsPageTemplate
        headTitle="details produits canape"
        BreadCrumbItem2="Canapé"
        BreadCrumbItem3={name}
        hrefItem1="/"
        hrefItem2="/products_canapes"
        hrefItem3="/products_canapes"
      >
        <BigCard db="canapes" />
      </DetailsPageTemplate>
    </div>
  )
}

export default ProductCanape
