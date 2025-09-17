import React from 'react'
import payImg from "/src/assets/images/pay.png"
import playImg from "/src/assets/images/play.jpg"

const Footer = () => {
  return (
    <div className='container fullscreen:max-w-1530 bg-black text-white'>
      <div className="footer-section">
        <div className="footer-contact">
          <div className="footer-logo">
            <h1 className="logo">Thread <span>Elegence</span></h1>
          </div>
          <div className="footer-detail">
            <h3>Phone: <span>+012 345 678 90</span></h3>
            <h3>Email: <span>ThreadElegence@gmail.com</span></h3>
            <h3>country: <span>america: california</span></h3>
            <h3>hour: <span>8:00pm to 8:00am</span></h3>
          </div>
          <div className="social-media">
            <i class="icofont-facebook"></i>
            <i class="icofont-twitter"></i>
            <i class="icofont-instagram"></i>
            <i class="icofont-linkedin"></i>
            <i class="icofont-youtube"></i>
          </div>
        </div>
        <div className="Account-detail">
          <h3>MyAccount</h3>
          <h3>Your Cart</h3>
          <h3>Your buy</h3>
          <h3>Become a Affiliate</h3>
          <h3>MemberShip</h3>
        </div>
        <div className="footer-content">
          <h3>Free delivery</h3>
          <h3>Encrypt Payment</h3>
          <h3>customer support</h3>
          <h3>loyalty point</h3>
          <h3>Premium membership</h3>
        </div>
        <div className="payment">
          <h3>Now use our Encrypt payment method for safer transaction</h3>
          <img src={payImg} alt="" />
          <img src={playImg} alt="" />
        </div>
      </div>
      <div className='copyright'>
        <h3>all right reserved, <i class="icofont-copyright"></i> Thread Elegence</h3>
      </div>
    </div>
  )
}

export default Footer