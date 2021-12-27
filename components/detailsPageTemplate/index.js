import React from 'react'
import Head from 'next/head'

import NavBar2 from '../navBar2'
import ProductNavBar from '../productNavBar'
import Footer from '../footer'
import MainTitle from '../mainTitle'
import RubanProduct from '../rubanProducts'
import InfoSection from '../infoSection'
import MyBreadcrumb from '../breadcrumb'

const DetailsPageTemplate = (props) => {
  const {
    children,
    headTitle,
    BreadCrumbItem2,
    BreadCrumbItem3,
    hrefItem1,
    hrefItem2,
    hrefItem3
  } = props
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>{headTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar2 />
        <ProductNavBar />
        <MyBreadcrumb
          item1="Accueil"
          item2={BreadCrumbItem2}
          item3={BreadCrumbItem3}
          hrefItem1={hrefItem1}
          hrefItem2={hrefItem2}
          hrefItem3={hrefItem3}
        />
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
