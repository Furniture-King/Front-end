import Head from 'next/head'

import NavBar2 from '../components/navBar2'
// import NavBar from '../components/navbar'
import Carousel from '../components/carousel'
import ProductNavBar from '../components/productNavBar'
import MainTitle from '../components/mainTitle'
import NewsSections from '../components/newsSections'
import PopularSection from '../components/popularSection'
import HeroSection from '../components/heroSection'
import ThumbnailsNavBar from '../components/thumbnailsNavBar'
import InfoSection from '../components/infoSection'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Furniture King Web Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar2 />
      <div className="hidden lg:block">
        <Carousel />
      </div>
      <ProductNavBar />
      <MainTitle text="News & Tendances" />
      <NewsSections />
      <MainTitle text="Produits populaires" />
      <PopularSection />
      <div className="hidden lg:block">
        <HeroSection />
      </div>
      <MainTitle text="Retrouvez tous nos produits" />
      <ThumbnailsNavBar />
      <InfoSection />
      <Footer />
    </div>
  )
}
