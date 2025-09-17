import React, { useState } from 'react'
import buyUrl from '../assets/images/pay.png'
import buyUrl2 from '../assets/images/paypal-Img.svg'
import buyUrl3 from '../assets/images/potterybarn-logo.jpg'
import buyUrl4 from '../assets/images/hulu-logo.jpg'
import buyUrl5 from '../assets/images/groupon-logo.jpg'
import { Link } from "react-router-dom"

const PriceSection = ({ productStorage }) => {

  const totalPrice = productStorage.reduce((acc, val) => {
    console.log(val, acc);  
    return acc + (val.price * val.quantity)
  }, 0)

  
  return (
    <div className='price-section'>
      <div className="payment-sec">
        <img src={buyUrl5} alt="" />
        <img src={buyUrl4} alt="" />
        <img src={buyUrl3} alt="" />
        <img src={buyUrl2} alt="" />
        <div className='visa-img'>
          <img src={buyUrl} alt="" />
        </div>
      </div>
      <div className="price-sec">
        <div className="price-container">
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>shipping Tax</td>
                <td>Total Price</td>
              </tr>
            </thead>
            <tbody>
              {productStorage.length > 0 ? (
                productStorage.map((val, i) => (
                <tr key={i}>
                  <td>{val.name}</td>
                  <td>${(val.price * val.quantity).toFixed(2)}</td>
                  <td>Free</td>
                  <td>${(val.price* val.quantity).toFixed(2)}</td>
                </tr>
                )
              )) : (
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="final-Price">
            <div className="total width-div">
              <h3>Total</h3>
            </div>
            <div className="width-div">
            </div>
            <div className="width-div">
            </div>
            <div className="final-total width-div">
              <h3>{`$${totalPrice.toFixed(2)}`}</h3>
            </div>
          </div>
          <div className="coupon">
            <div className="coupon-sec">
              <input type="text" name='coupon' id='coupon' placeholder='Enter Coupon' className='coupon-class' />
              <button className='coupon-button'>Apply Coupon</button>
            </div>
            <div className="checkout-sec">
              <button className='checkout-button'>
                <Link to={"/checkout"}>Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceSection