import React from 'react'
import Header from './components/Home/Header'
import Footer from './components/Home/Footer'
import Productshow from './components/Product/Productshow'
import Prodescription from './components/Product/Prodescription'
import Reviews from './components/Product/Reviews'


export default function Singleproduct() {
  return (
    <div>
        <Header />
        <Productshow />
        <Prodescription />
        <Reviews />
        <Footer />
    </div>
  )
}
