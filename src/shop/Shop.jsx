import React from 'react'
import PageHeader from './PageHeader'
import Navbar from '../components/Navbar'
import ShopProduct from './ShopProduct'
import Footer from '../components/Footer'

const Shop = () => {
  return (
    <div>
      <Navbar active={"shop"}/>
      <PageHeader pageTitle={"Shop Page"} curPage={"home/shop"}/>
      <ShopProduct/>
      <Footer/>
    </div>
  )
}

export default Shop