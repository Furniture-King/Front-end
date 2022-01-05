import React, { useState, useEffect, useContext } from 'react'

import Context from '../context'
import { getAllMagic } from '../misc_func/gettAll'
import initialState from './initialState'

const Range = (props) => {
  const { dbName } = props
  const [db, setDb] = useState([])
  const [values, setValues] = useState(0)
  const [maxValues, setMaxValues] = useState(0)
  const { setDownPrice } = useContext(Context)
  const { setUpPrice } = useContext(Context)

  useEffect(() => {
    getAllMagic(setDb, dbName)

    setDownPrice(values ? values.target.value : null)
    setUpPrice(maxValues ? maxValues.target.value : null)
  }, [values, maxValues])

  const [...pricesArray] = db.products
    ? db.products.map((item) => item.price).sort((a, b) => a - b)
    : []

  const miniPrice = pricesArray[0]
  const maxPrice = pricesArray[pricesArray.length - 1]

  initialState.minPrice = Number(values ? values.target.value : miniPrice)
  initialState.maxPrice = Number(maxValues ? maxValues.target.value : maxPrice)

  return (
    <div>
      <div className="flex justify-between mb-2">
        <div>min : {values ? values.target.value : miniPrice}</div>
        <div>max : {maxValues ? maxValues.target.value : maxPrice}</div>
      </div>
      {/* le mini range  */}
      <input
        type="range"
        min={miniPrice}
        max={maxPrice}
        defaultValue="0"
        className="range"
        step="10"
        onChange={(values) => setValues(values)}
      />
      {/* le maxi range  */}
      <input
        type="range"
        min={miniPrice}
        max={maxPrice}
        defaultValue="100"
        className="range range-accent"
        step="10"
        onChange={(maxValues) => setMaxValues(maxValues)}
      />
    </div>
  )
}

export default Range
