import React, { useState } from 'react'

const MyLittleCarousel = (props) => {
  const { url1, url2, url3 } = props
  const [value, setValue] = useState(1)

  return (
    <div className="flex flex-col justify-start">
      {value === 1 ? (
        <img src={url1} style={{ width: '300em' }} />
      ) : value === 2 ? (
        <img src={url2} style={{ width: '300em' }} />
      ) : (
        <img src={url3} style={{ width: '300em' }} />
      )}
      <div className="flex justify-center m-2">
        <div
          onClick={() => setValue(1)}
          className="mr-3 cursor-pointer inline-flex items-center justify-center w-5 h-5 rounded-full shadow-lg bg-gray-500 bg-opacity-30 hover:bg-opacity-60"
        ></div>
        <div
          onClick={() => setValue(2)}
          className="mr-3 cursor-pointer inline-flex items-center justify-center w-5 h-5 rounded-full shadow-lg bg-gray-500 bg-opacity-30 hover:bg-opacity-60"
        ></div>
        <div
          onClick={() => setValue(3)}
          className=" cursor-pointer inline-flex items-center justify-center w-5 h-5 rounded-full shadow-lg bg-gray-500 bg-opacity-30 hover:bg-opacity-60"
        ></div>
      </div>
    </div>
  )
}

export default MyLittleCarousel
