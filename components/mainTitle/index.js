import React from 'react'

const MainTitle = (props) => {
  const { text, className } = props
  return (
    <div className="flex flex-col items-center justify-center ">
      <div
        className={`w-10/12 md:w-8/12 border-b-2 border-color-bg-lightBrown ${className}`}
      >
        <div className="mt-10 pb-4 font-poiretOne text-3xl text-color-font-black">
          {text}
        </div>
      </div>
    </div>
  )
}

export default MainTitle
