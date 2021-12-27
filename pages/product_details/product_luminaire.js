import React, { useContext } from 'react'

import Context from '../../components/context'

import BigCard from '../../components/bigCard'
import DetailsPageTemplate from '../../components/detailsPageTemplate'

const ProductLuminaire = () => {
  const { name } = useContext(Context)
  return (
    <div>
      <DetailsPageTemplate
        headTitle="details produits luminaire"
        BreadCrumbItem2="Luminaire"
        BreadCrumbItem3={name}
        hrefItem1="/"
        hrefItem2="/products_luminaires"
        hrefItem3="/products_luminaires"
      >
        <BigCard db="luminaires" />
      </DetailsPageTemplate>
    </div>
  )
}

export default ProductLuminaire
