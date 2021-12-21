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
        contentTitle={`accueil/rangements/${name}`}
      >
        <BigCard db="rangements" />
      </DetailsPageTemplate>
    </div>
  )
}

export default ProductRangement
