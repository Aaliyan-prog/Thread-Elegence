import React from 'react'
import PageHeader from './PageHeader'
import Navbar from '../components/Navbar'
import Gallery from './Gallery'
import ProDetail from './ProDetail'
import Footer from '../components/Footer'

const Cart = () => {
  return (
    <div>
      <Navbar/>
      <PageHeader pageTitle={"Cart Page"} curPage={"home/cart"} />
      <div className="pro-detail-sec">
        <div className="gallery-section">
          <Gallery/>
        </div>
        <div className="product-detail-section">
          <ProDetail/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Cart