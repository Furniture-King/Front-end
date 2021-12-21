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
        contentTitle={`accueil/luminaires/${name}`}
      >
        <BigCard db="luminaires" />
      </DetailsPageTemplate>
    </div>
  )
}

export default ProductLuminaire
