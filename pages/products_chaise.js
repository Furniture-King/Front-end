import Head from 'next/head'

import NavBar2 from '../components/navBar2'
import Carousel from '../components/carousel'
import ProductNavBar from '../components/productNavBar'
import CardDisplayer from '../components/cardDisplayer'
import SortBox from '../components/sortBox'

import tempDB from '../components/tempDB/myTestDB'

const chaise = () => {
  return (
    <div>
      <Head>
        <title>Furniture King Web Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar2 />
      <div className="hidden lg:block">
        <Carousel />
      </div>
      <ProductNavBar />
      <SortBox />
      <CardDisplayer productsArray={tempDB.chaise.products} />
    </div>
  )
}

export default chaise
