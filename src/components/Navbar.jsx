import React, { useEffect, useState } from 'react'
import { useCart } from '../shop/CardContext'

const Navbar = ({ active }) => {
  const [activeClass, setActiveClass] = useState(active)
  const { setLoginAppear, login, loginState, loginStateHandling } = useCart()


  useEffect(() => {
    setActiveClass(active)
  }, [active])

  
  return (
    <div className='container fullscreen:max-w-1530 navbar-section'>
      <div className='navbar'>
        <div className="logo-section">
          <h1 className="logo">Thread <span>Elegence</span></h1>
        </div>
        <div className="menu-section">
          <ul className="flex align-center direction-row py-4 font-bold">
            <li className={`px-3 mx-2 ${activeClass === "home" ? 'active' : ""}`}><a href="/home">Home</a></li>
            <li className={`px-3 mx-2 ${activeClass === "shop" ? 'active' : ""}`}><a href="/shop">Shop</a></li>
            <li className={`px-3 mx-2 ${activeClass === "blog" ? 'active' : ""}`}><a href="/blog">Blog</a></li>
            <li className={`px-3 mx-2 ${activeClass === "about" ? 'active' : ""}`}><a href="/about">About Us</a></li>
            <li className={`px-3 mx-2 ${activeClass === "contact" ? 'active' : ""}`}><a href="/contact">Contact Us</a></li>
            {
              loginState === false ? (
                <li onClick={() => login(true)}><i class="icofont-user"></i></li>
              ) : (
                <div className='logOut'>
                  <li><i class="icofont-user"></i></li>
                  <button onClick={() => loginStateHandling(false, "signout")}>Log out</button>
                </div>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar