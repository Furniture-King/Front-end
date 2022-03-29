import React, { createContext, useState } from 'react'

export const Provider = (props) => {
  const [state, setState] = useState('')
  const [name, setName] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [colors, setColors] = useState([])
  const [downPrice, setDownPrice] = useState(0)
  const [upPrice, setUpPrice] = useState(0)
  const [cart, setCart] = useState([])

  const addToCart = (products) => {
    setCart((prevState) => [...prevState, { products }])
    console.log('add to cart context')
  }

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
        setUpPrice,
        cart,
        setCart,
        addToCart
      }}
    />
  )
}

const Context = createContext()
export default Context
