import React from 'react'
import TwoSwipers from '../Home/TwoSwipers'
import BestSellers from '../Home/BestSellers'
import Category from '../Home/Category'
import Shop from '../Home/Shop'
import Reviews from '../Home/Reviews'
import Shipping from '../Home/Shipping'

const Home = () => {
  return (
    <div>
      <TwoSwipers />
      <BestSellers />
      <Category />
      <Shop />
      <Reviews />
      <Shipping />

    </div>
  )
}

export default Home
