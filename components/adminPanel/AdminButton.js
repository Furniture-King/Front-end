import React from 'react'

const AdminButton = (props) => {
  const { title, value, onClick } = props
  return (
    <button
      onClick={onClick}
      value={value}
      className="border rounded-sm py-2 mt-1"
    >
      {title}
    </button>
  )
}

export default AdminButton
