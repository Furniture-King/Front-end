import React from 'react'

import { ImSpinner2 } from 'react-icons/im'

const MySpinner = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="animate-spin text-color-bg-lightBrown">
        <ImSpinner2 size={50} />
      </div>
    </div>
  )
}

export default MySpinner
