import React from 'react'
import HeaderSection from '../../components/HeaderSection/HeaderSection'
import OurOffers from '../../components/OurOffersSection/OurOffers'
import { Helmet } from 'react-helmet-async'
import Welcome from '../../components/WelcomeSection/Welcome'
import News from '../../components/NewsSection/News'
import Gallery from '../../components/GallerySection/Gallery'

function Home() {
  return (
    <div>
        <div>
          <Helmet>
        <title>Home</title>
      </Helmet>
          </div>
      <HeaderSection/>
      <Welcome/>
      <OurOffers/>
      <News/>
      <Gallery/>
    </div>
  )
}

export default Home