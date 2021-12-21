import React from 'react'

import BigCard from '../../components/bigCard'
import DetailsPageTemplate from '../../components/detailsPageTemplate'

const ProductLuminaire = () => {
  return (
    <div>
      <DetailsPageTemplate headTitle="details produits luminaire">
        <BigCard db="luminaires" />
      </DetailsPageTemplate>
    </div>
  )
}

export default ProductLuminaire
