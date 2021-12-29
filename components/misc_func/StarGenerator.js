import React from 'react'

import { RiStarFill, RiStarLine } from 'react-icons/ri'

const starsTransform = (stars, totalVotes) => {
  const value = totalVotes / stars

  switch (value) {
    case 1:
      return (
        <div className="flex">
          <RiStarFill />
          <RiStarLine />
          <RiStarLine />
          <RiStarLine />
          <RiStarLine />
        </div>
      )
    case 2:
      return (
        <div className="flex">
          <RiStarFill />
          <RiStarFill />
          <RiStarLine />
          <RiStarLine />
          <RiStarLine />
        </div>
      )
    case 3:
      return (
        <div className="flex">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarLine />
          <RiStarLine />
        </div>
      )
    case 4:
      return (
        <div className="flex">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarLine />
        </div>
      )
    case 5:
      return (
        <div className="flex">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
        </div>
      )
  }
}

const StarGenerator = (props) => {
  const { totalVotes, stars } = props

  return (
    <div className="flex">
      <div className="text-yellow-400">{starsTransform(totalVotes, stars)}</div>
      <p className="pl-1 text-xs">({totalVotes})</p>
    </div>
  )
}

export default StarGenerator
