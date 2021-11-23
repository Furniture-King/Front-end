import Head from 'next/head'

import NavBar from '../components/navbar'
import Carousel from '../components/carousel'
import ProductNavBar from '../components/productNavBar'
import MainTitle from '../components/mainTitle'
import NewsSections from '../components/newsSections'
import PopularSection from '../components/popularSection'
import HeroSection from '../components/heroSection'
import ThumbnailsNavBar from '../components/thumbnailsNavBar'
import InfoSection from '../components/infoSection'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Furniture King Web Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Carousel />
      <ProductNavBar />
      <MainTitle text="News & Tendances" />
      <NewsSections />
      <MainTitle text="Produits populaires" />
      <PopularSection />
      <HeroSection />
      <MainTitle text="Retrouvez tous nos produits" />
      <ThumbnailsNavBar />
      <InfoSection />
    </div>
  )
}
