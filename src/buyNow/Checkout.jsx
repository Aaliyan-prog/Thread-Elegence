import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../shop/PageHeader'
import Footer from '../components/footer'

const Checkout = () => {
  const [eyeChange, setEyeChange] = useState(true)
  const [eyeChanges, setEyeChanges] = useState(true)
  const [paymentSelection, setPaymentSelection] = useState(false)

  const toggleStates = () => {
    setEyeChange(!eyeChange)
  }

  const toggleState = () => {
    setEyeChanges(!eyeChanges)
  }

  const togglemethods = (val) => {
    setPaymentSelection(val)
  }

  return (
    <div className='container fullscreen:max-w-1530'>
      <Navbar/>
      <PageHeader pageTitle={"checkout Page"} curPage={"home/checkout"} />
      <div className='checkout-section container m-auto'>
        <div className="checkout-navbar">
          <div className={`navbar-val ${paymentSelection === false ? "active-border" : "inactive-border"}`}  onClick={() => togglemethods(false)}>
            <h1>Paypal</h1>
          </div>
          <div className={`navbar-val ${paymentSelection === false ? "inactive-border" : "active-border"}`} onClick={() => togglemethods(true)}>
            <h1>Visa</h1>
          </div>
        </div>
        <div className={` ${paymentSelection === false ? "paypal-section" : ""} ${paymentSelection === false ? "active-display" : "inactive-display"}`}>
          <form className='payment-form'>
            <input type="text" name='name' id='name' placeholder='Enter Your name' />
            <div className="search-sec">
              <input type="text" name='credit-card' id='credit-card' placeholder={eyeChange === false ? "Enter Your Credit Card Number" : "*******"} />
              <i className={eyeChange === false ? "icofont-eye-alt" : "icofont-eye-blocked"} onClick={() => toggleStates()}></i>
            </div>
            <div className="search-sec">
              <input type="text" name='confirm-credit-card' id='confirm-credit-card' placeholder={eyeChanges === false ? "Confirm Your Credit Card Number" : "*******"} />
              <i className={eyeChanges === false ? "icofont-eye-alt" : "icofont-eye-blocked"} onClick={() => toggleState()}></i>
            </div>
            <input type="text" name='coupon' id='coupon' placeholder='Enter Coupon' />
            <button>Apply Coupon</button>
            <button>Buy</button>
          </form>
        </div>

        <div className={` ${paymentSelection === false ? "" : "visa-section"} ${paymentSelection === false ? "inactive-display" : "active-display"}`}>
          <form className='payment-form'>
            <input type="text" name='name' id='name' placeholder='Enter Your name' />
            <div className="search-sec">
              <input type="text" name='credit-card' id='credit-card' placeholder={eyeChange === false ? "Enter Your Credit Card Number" : "*******"} />
              <i className={eyeChange === false ? "icofont-eye-alt" : "icofont-eye-blocked"} onClick={() => toggleStates()}></i>
            </div>
            <div className="search-sec">
              <input type="text" name='confirm-credit-card' id='confirm-credit-card' placeholder={eyeChanges === false ? "Confirm Your Credit Card Number" : "*******"} />
              <i className={eyeChanges === false ? "icofont-eye-alt" : "icofont-eye-blocked"} onClick={() => toggleState()}></i>
            </div>
            <input type="text" name='coupon' id='coupon' placeholder='Enter Coupon' />
            <button>Apply Coupon</button>
            <button>Buy</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Checkout