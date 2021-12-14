import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const SortBox = () => {
  const [show, setShow] = useState(false)

  const toggleMenu = () => {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  const MenuItem = (props) => {
    const { title } = props
    return (
      <div className="flex items-center cursor-pointer">
        <div className="mr-5">{title}</div>
        <div>{show ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</div>
      </div>
    )
  }
  MenuItem.propTypes = {
    title: PropTypes.string
  }

  const Range = () => {
    return <div>plop</div>
  }

  return (
    <div className="mx-auto w-10/12 md:w-8/12 mt-3 font-raleway">
      {!show ? (
        <div className="flex justify-around" onClick={toggleMenu}>
          <MenuItem title="TRIER PAR" />
          <MenuItem title="COULEURS" />
          <MenuItem title="PRIX" />
          <MenuItem title="DÉLAIS DE LIVRAISON" />
        </div>
      ) : null}
      {show ? (
        <div className="flex border-2 border-black shadow-lg">
          <div>
            <div>Prix croissant</div>
            <div>Prix décroissant</div>
            <div>Note clients</div>
            <div>Nom</div>
          </div>
          <Range />
          <div onClick={toggleMenu}>
            <MdKeyboardArrowUp />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default SortBox
