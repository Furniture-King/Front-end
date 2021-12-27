import React from 'react'
import Head from 'next/head'

import NavBar2 from '../navBar2'
import ProductNavBar from '../productNavBar'
import Footer from '../footer'
import MainTitle from '../mainTitle'
import RubanProduct from '../rubanProducts'
import InfoSection from '../infoSection'

const DetailsPageTemplate = (props) => {
  const { children, headTitle, contentTitle } = props
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>{headTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar2 />
        <ProductNavBar />
        <MainTitle text={contentTitle} />
        {children}
      </div>
      <div className="static bottom-0">
        <MainTitle text="Nos clients ont aussi consulté" />
        <RubanProduct />
        <InfoSection />
        <Footer />
      </div>
    </div>
  )
}

export default DetailsPageTemplate
