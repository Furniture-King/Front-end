import React from 'react'
import Head from 'next/head'

import NavBar2 from '../navBar2'
import ProductNavBar from '../productNavBar'
import Footer from '../footer'

const DetailsPageTemplate = (props) => {
  const { children, headTitle } = props
  return (
    <div>
      <Head>
        <title>{headTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar2 />
      <ProductNavBar />
      {children}
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  )
}

export default DetailsPageTemplate
