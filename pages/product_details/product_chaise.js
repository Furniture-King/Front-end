import React from 'react'

import BigCard from '../../components/bigCard'
import DetailsPageTemplate from '../../components/detailsPageTemplate'

const ProductChaise = () => {
  return (
    <div>
      <DetailsPageTemplate headTitle="details produits chaise">
        <BigCard db="chaises" />
      </DetailsPageTemplate>
    </div>
  )
}

export default ProductChaise
