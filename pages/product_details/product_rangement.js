import React, { useContext } from 'react'

import Context from '../../components/context'

import BigCard from '../../components/bigCard'
import DetailsPageTemplate from '../../components/detailsPageTemplate'

const ProductRangement = () => {
  const { name } = useContext(Context)
  return (
    <div>
      <DetailsPageTemplate
        headTitle="details produits rangement"
        BreadCrumbItem2="Rangement"
        BreadCrumbItem3={name}
        hrefItem1="/"
        hrefItem2="/products_rangements"
        hrefItem3="/products_rangements"
      >
        <BigCard db="rangements" />
      </DetailsPageTemplate>
    </div>
  )
}

export default ProductRangement
