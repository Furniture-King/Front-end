import React from 'react'

import { MdCreditCardOff } from 'react-icons/md'
import { FiTruck, FiPhoneCall } from 'react-icons/fi'
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from 'react-icons/fa'

import InfoItem from './InfoItem'

const InfoSection = () => {
  return (
    <div className="bg-color-bg-light mt-10">
      <div className="mx-auto w-full xl:w-8/12 px-20">
        <div className="flex flex-col justify-center lg:flex-row xs:justify-between flex-wrap lg:pt-10 pb-5">
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
