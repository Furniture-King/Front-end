import React, { createContext, useState } from 'react'

export const Provider = (props) => {
  const [state, setState] = useState('')
  const [name, setName] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [colors, setColors] = useState([])
  const [downPrice, setDownPrice] = useState(0)
  const [upPrice, setUpPrice] = useState(0)

  return (
    <Context.Provider
      {...props}
      value={{
        state,
        setState,
        name,
        setName,
        sortBy,
        setSortBy,
        colors,
        setColors,
        downPrice,
        setDownPrice,
        upPrice,
        setUpPrice
      }}
    />
  )
}

const Context = createContext()
export default Context
