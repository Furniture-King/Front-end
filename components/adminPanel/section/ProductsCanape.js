import React, { useState, useEffect } from 'react'

import { getAllMagic } from '../../misc_func/gettAll'
import DbDisplayer from '../dbDisplayer'

const ProductsCanape = (props) => {
  const { title } = props
  const [dB, setDB] = useState({})

  useEffect(() => {
    getAllMagic(setDB, title)
  }, [])
  // console.log(dB)

  return (
    <div>
      <div>
        <DbDisplayer data={dB.products} db={title} />
      </div>
    </div>
  )
}

export default ProductsCanape
