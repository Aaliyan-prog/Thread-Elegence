import React from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../shop/PageHeader'
import Footer from '../components/footer'
import { useCart } from '../shop/CardContext'
import Count from '../components/Count'
import PriceSection from './PriceSection'

const BuyNow = () => {
  const { removeFromCart, updateCartPrice } = useCart()
  const productStorage = JSON.parse(localStorage.getItem("cartItem")) || []

  return (
    <div className='container fullscreen:max-w-1530'>
      <Navbar/>
      <PageHeader pageTitle={"buy Page"} curPage={"home/buy-now"} />
      <div className="container m-auto buyNow">
        <div className="buyNow-section">
          <div className="buyNow-header">
            <div className='remove-class p-class'><h1>Remove</h1></div>
            <div className='image-class'><h1>Image</h1></div>
            <div className='name-class'><h1>Name</h1></div>
            <div className='quantity-class'><h1>Quantity</h1></div>
            <div className='price-class'><h1>Price</h1></div>
            <div className='brand-class'><h1>brand</h1></div>
          </div>
          {productStorage.length > 0 ? (
            productStorage.map((val, i) => (
              <div key={i} className="buyNow-items">
                <div className='Remove-class p-class'><i className='icofont-trash' onClick={() => removeFromCart(val)}></i></div>
                <div className='Image-class'><img src={val.image} alt="" /></div>
                <div className='pro-name'><h1>{val.name}</h1></div>
                <div className="quantity-product"><div className="count-col"><Count updatePrice={val} proQuantity={val.quantity}/></div></div>
                <div className='Price-class'><h1>${(val.price * val.quantity).toFixed(2)}</h1></div>
                <div className='Brand-class'><h1>{val.brand}</h1></div>
              </div>
            ))) : <p>No cart found</p>
          }
        </div>
      </div>
      <div className="container m-auto price-buynow-section">
        <PriceSection productStorage={productStorage}/>
      </div>
      <Footer/>
    </div>
  )
}

export default BuyNow