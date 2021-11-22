import Head from 'next/head'

import NavBar from '../components/navbar'
import Carousel from '../components/carousel'
import ProductNavBar from '../components/productNavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Furniture King Web Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Carousel />
      <ProductNavBar />
    </div>
  )
}
