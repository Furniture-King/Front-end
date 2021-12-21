import React, { createContext, useState } from 'react'

export const Provider = (props) => {
  const [state, setState] = useState('')
  const [name, setName] = useState('')

  return (
    <Context.Provider
      {...props}
      value={{
        state,
        setState,
        name,
        setName
      }}
    />
  )
}

const Context = createContext()
export default Context
