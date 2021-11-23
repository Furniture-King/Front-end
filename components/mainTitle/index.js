import React from 'react'
import PropTypes from 'prop-types'

const MainTitle = (props) => {
  const { text } = props
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-8/12 border-b-2 border-color-bg-lightBrown">
        <div className="mt-10 pb-4 font-poiretOne text-3xl text-color-font-black">
          {text}
        </div>
      </div>
    </div>
  )
}
MainTitle.propTypes = {
  text: PropTypes.string
}

export default MainTitle
