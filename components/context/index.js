import React, { createContext, useState } from 'react'

export const Provider = (props) => {
  const [state, setState] = useState('')
  const [name, setName] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [colors, setColors] = useState([])

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
        setColors
      }}
    />
  )
}

const Context = createContext()
export default Context
