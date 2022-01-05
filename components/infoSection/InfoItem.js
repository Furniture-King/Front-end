import React from 'react'

const InfoItem = (props) => {
  const { title, text, subText, icon, children } = props
  return (
    <div className="mt-10 lg:mt-0 flex flex-col items-center font-raleway  text-color-bg-darkBlue">
      <div>{icon}</div>
      <div>
        <p className="text-xl font-bold">{title}</p>
      </div>
      <div>
        <p>{text}</p>
      </div>
      <div>
        <p>{subText}</p>
      </div>
      <div className="flex">{children}</div>
    </div>
  )
}

export default InfoItem
