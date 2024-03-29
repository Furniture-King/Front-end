import React from 'react'

const MyButton = (props) => {
  const { title, bgColor, fontColor, hoverBg, hoverFont, onClick } = props
  return (
    <button
      onClick={onClick}
      className={`p-2 px-10 rounded first:mr-0 md:first:mr-10 
                first:mb-2 md:first:mb-0 transition-color duration-500 
                shadow-lg active:shadow-none hover:shadow-md 
                ${bgColor} ${fontColor} ${hoverBg} ${hoverFont}`}
    >
      {title}
    </button>
  )
}

export default MyButton
