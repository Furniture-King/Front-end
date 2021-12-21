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
        contentTitle={`accueil/canapé/${name}`}
      >
        <BigCard db="canapes" />
      </DetailsPageTemplate>
    </div>
  )
}

export default ProductCanape
