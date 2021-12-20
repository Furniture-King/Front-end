import React, { useContext, useEffect, useState } from 'react'

import Context from '../context'

import { getItemById } from '../misc_func/gettAll'

const BigCard = (props) => {
  const { db } = props
  const { state } = useContext(Context)
  const [value, setValue] = useState([])

  useEffect(() => {
    getItemById(setValue, db, state)
  }, [])

  console.log(value)

  return (
    <div>
      {value.products ? (
        <div>
          <p>{value.products.title}</p>
          <p>{value.products.text}</p>
          <p>{value.products.price} €</p>
        </div>
      ) : null}
    </div>
  )
}

export default BigCard
