import React from 'react'

import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className=" bg-color-bg-darkBlue">
      <div className="flex flex-col items-center mx-auto w-8/12 text-color-font-gray text-center py-6 font-poiretOne text-xl">
        <a href="/">Copyright 2021</a>
        <a href="/">Mentions légales | Contacts</a>
        <div className="flex justify-between w-48 mt-3">
          <a href="/">
            <BsFacebook />
          </a>
          <a href="/">
            <BsInstagram />
          </a>
          <a href="/">
            <BsTwitter />
          </a>
          <a href="/">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
