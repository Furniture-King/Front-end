import React from 'react'
import Head from 'next/head'

import NavBar2 from '../components/navBar2'
import MainTitle from '../components/mainTitle'
import CartDisplayer from '../components/cartDisplayer'

const MyCart = () => {
  return (
    <div>
      <Head>
        <title>Furniture King Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar2 />
      <div className="flex flex-col items-center justify-center mt-5">
        <ul className="steps">
          <li className="step mx-24">Panier</li>
          <li className="step ">Livraison</li>
          <li className="step">Paiment</li>
          <li className="step">Validation</li>
        </ul>
      </div>
      <MainTitle text="Panier" />
      <CartDisplayer />
    </div>
  )
}

export default MyCart
