import React, { useState, useEffect } from 'react'

import { getAllMagic } from '../misc_func/gettAll'
import DbDisplayer from './DbDisplayer'

const ProductsChair = (props) => {
  const { title } = props
  const [dB, setDB] = useState({})

  useEffect(() => {
    getAllMagic(setDB, 'chaises')
  }, [])
  console.log(dB)

  return (
    <div>
      <div>{title}</div>
      <div>
        <DbDisplayer data={dB.products} db="chaises" />
      </div>
    </div>
  )
}

export default ProductsChair
