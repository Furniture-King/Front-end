import React, { useContext } from 'react'

import Context from '../context'

const PriceItem = (props) => {
  const { title, value } = props
  const { setSortBy } = useContext(Context)

  const handleClick = (e) => {
    setSortBy(e.target.value)
  }

  return (
    <button
      onClick={handleClick}
      value={value}
      className="p-1 mt-2 rounded
     transition-colors
     duration-400
     shadow
     hover:shadow-none
     active:shadow-none
      bg-color-bg-light
      text-color-bg-lightBrown
      active:bg-color-bg-darkBlue
      focus:bg-color-bg-darkBlue
      focus:text-color-bg-light"
    >
      {title}
    </button>
  )
}

export default PriceItem
