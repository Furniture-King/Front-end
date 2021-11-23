import React from 'react'
import PropTypes from 'prop-types'

import { RiStarFill, RiStarHalfFill, RiStarLine } from 'react-icons/ri'

const StarGenerator = (props) => {
  const { numberOfRate } = props
  return (
    <div className="flex">
      <div className="flex text-yellow-400">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
        <RiStarHalfFill />
        <RiStarLine />
      </div>
      <p className="pl-1 text-xs">({numberOfRate})</p>
    </div>
  )
}
StarGenerator.propTypes = {
  numberOfRate: PropTypes.string
}

export default StarGenerator
