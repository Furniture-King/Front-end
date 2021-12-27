import React from 'react'
import Head from 'next/head'

import NavBar2 from '../navBar2'
import Carousel from '../carousel'
import ProductNavBar from '../productNavBar'
import SortBox from '../sortBox'
import Footer from '../footer'
import MyBreadcrumb from '../breadcrumb'

const ProductsPageTemplate = (props) => {
  const { children, headTitle, hrefItem1, hrefItem2, BreadCrumbItem2 } = props
  return (
    <div>
      <Head>
        <title>{headTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar2 />
      <div className="hidden lg:block">
        <Carousel />
      </div>
      <ProductNavBar />
      <SortBox />
      <MyBreadcrumb
        item1="Accueil"
        item2={BreadCrumbItem2}
        hrefItem1={hrefItem1}
        hrefItem2={hrefItem2}
      />
      {children}
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  )
}

export default ProductsPageTemplate
