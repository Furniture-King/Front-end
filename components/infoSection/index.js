import React from 'react'
import PropTypes from 'prop-types'

import { MdCreditCardOff } from 'react-icons/md'
import { FiTruck, FiPhoneCall } from 'react-icons/fi'
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from 'react-icons/fa'

const InfoItem = (props) => {
  const { title, text, subText, icon, children } = props
  return (
    <div className="flex flex-col items-center font-raleway  text-color-bg-darkBlue">
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
InfoItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  subText: PropTypes.string,
  icon: PropTypes.object,
  children: PropTypes.node
}

const InfoSection = () => {
  return (
    <div className="bg-color-bg-light mt-10">
      <div className="mx-auto w-8/12 px-20">
        <div className="flex justify-between flex-wrap pt-10 pb-5">
          <InfoItem
            icon={<MdCreditCardOff size={40} />}
            title="Paiment sécurisé"
          >
            <FaCcMastercard size={30} />
            <div className="mx-5">
              <FaCcVisa size={30} />
            </div>
            <FaCcPaypal size={30} />
          </InfoItem>
          <InfoItem
            icon={<FiTruck size={40} />}
            title="Livraison rapide"
            text="Livraison offerte à partir de 999 €"
          />
          <InfoItem
            icon={<FiPhoneCall size={40} />}
            title="Service client"
            text="Du lundi au vendredi"
            subText="06.78.78.23.25"
          />
        </div>
      </div>
    </div>
  )
}

export default InfoSection
