import React, { useState, useEffect } from 'react'

import { getAllMagic } from '../misc_func/gettAll'
import DbDisplayer from './DbDisplayer'

const ProductsRangement = (props) => {
  const { title } = props
  const [dB, setDB] = useState({})

  useEffect(() => {
    getAllMagic(setDB, 'rangements')
  }, [])
  console.log(dB)

  return (
    <div>
      <div>{title}</div>
      <div>
        <DbDisplayer data={dB.products} db="rangements" />
      </div>
    </div>
  )
}

export default ProductsRangement
