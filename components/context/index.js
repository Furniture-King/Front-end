import React, { createContext, useState } from 'react'

export const Provider = (props) => {
  const [state, setState] = useState('')

  return (
    <Context.Provider
      {...props}
      value={{
        state,
        setState
      }}
    />
  )
}

const Context = createContext()
export default Context
