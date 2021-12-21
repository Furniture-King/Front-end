import React from 'react'

import BigCard from '../../components/bigCard'
import DetailsPageTemplate from '../../components/detailsPageTemplate'

const ProductCanape = () => {
  return (
    <div>
      <DetailsPageTemplate headTitle="details produits canape">
        <BigCard db="canapes" />
      </DetailsPageTemplate>
    </div>
  )
}

export default ProductCanape
