import React from 'react'
import Hero from '../Componet/Hero'
import LatestCollection from '../Componet/LatestCollection'
import BestSeller from '../Componet/BestSeller'
import OurPolicy from '../Componet/OurPolicy'
import NewsletterBox from '../Componet/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home