import React, { useContext } from 'react'

import Context from '../../components/context'

import BigCard from '../../components/bigCard'
import DetailsPageTemplate from '../../components/detailsPageTemplate'

const ProductChaise = () => {
  const { name } = useContext(Context)

  return (
    <div>
      <DetailsPageTemplate
        headTitle="details produits chaise"
        contentTitle={`accueil/chaises/${name}`}
      >
        <BigCard db="chaises" />
      </DetailsPageTemplate>
    </div>
  )
}

export default ProductChaise
