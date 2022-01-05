import React from 'react'

import { MdKeyboardArrowDown } from 'react-icons/md'

const MenuItem = (props) => {
  const { title } = props
  return (
    <div className="flex items-center cursor-pointer">
      <div className="mr-5">{title}</div>
      <div>
        <MdKeyboardArrowDown />
      </div>
    </div>
  )
}

export default MenuItem
