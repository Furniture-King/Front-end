import React from 'react'

import BigCard from '../../components/bigCard'
import DetailsPageTemplate from '../../components/detailsPageTemplate'

const ProductRangement = () => {
  return (
    <div>
      <DetailsPageTemplate headTitle="details produits rangement">
        <BigCard db="rangements" />
      </DetailsPageTemplate>
    </div>
  )
}

export default ProductRangement
