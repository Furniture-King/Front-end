import React, { useState, useEffect } from 'react'

import { getAllMagic } from '../misc_func/gettAll'
import DbDisplayer from './DbDisplayer'

const ProductsCanape = (props) => {
  const { title } = props
  const [dB, setDB] = useState({})

  useEffect(() => {
    getAllMagic(setDB, 'canapes')
  }, [])
  console.log(dB)

  return (
    <div>
      <div>{title}</div>
      <div>
        <DbDisplayer data={dB.products} db="canapes" />
      </div>
    </div>
  )
}

export default ProductsCanape
