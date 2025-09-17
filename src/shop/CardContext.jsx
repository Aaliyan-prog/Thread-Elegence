import React, { createContext, useContext, useEffect, useState } from 'react'
import randomImg from "../assets/images/f1.jpg"
import randomImg2 from "../assets/images/f2.jpg"
import randomImg3 from "../assets/images/f3.jpg"
import { signOut } from "firebase/auth";
import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth";



const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [loginappear, setLoginAppear] = useState(false);
  const [loginState, setLoginState] = useState(false)
  const [cartProduct, setCartProduct] = useState([])
  const [blog, setBlog] = useState([])
  const [productQuantity, setProductQuantity] = useState(0)

  
  const login = async (val, sign) => {
    setLoginAppear(val)
    console.log(loginappear);

    if(sign === "signout"){
      try{
        await signOut(auth)
          console.log("Successfully signed out");
          setLoginState(false)
          // Sign-out successful.
      }catch(error) {
        console.error(error);
        // An error happened.
      }
    }
  }
  
  useEffect(() => {
    const subcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user);
      }
      else {
        console.log("User is logged out:", user);
      }
    }) 

    return() => subcribe()
  }, [])


  const loginStateHandling = (val) => {
    setLoginState(val)
    console.log(loginappear);
  }
  

  const updateBlog = (blogval) => {
    setBlog([blogval])
  }

  function addToCart (items) {
    setCartItems([items])
  }

  function updateCartPrice (val) {
    const matchingStorage = cartProduct.findIndex((product) => product.id === val.id)
    console.log(val, matchingStorage, val.id);
    

    if(matchingStorage !== -1){
      const updateProductPrice = [...cartProduct]
      updateProductPrice[matchingStorage] = {
        ...updateProductPrice[matchingStorage],
        quantity: val.quantity
        // quantity: updateProductPrice[matchingStorage].quantity + productQuantity
      }

      setCartProduct(updateProductPrice);
      localStorage.setItem("cartItem", JSON.stringify(updateProductPrice))
    }
  }

  function goToCart (items) {
    console.log(items.quantity);
    const existingCartItem = cartProduct.findIndex((product) => product.id === items.id)

    console.log(existingCartItem);
    

    if (existingCartItem !== -1) {
      const updateCart = [...cartProduct]
      updateCart[existingCartItem] = {
        ...updateCart[existingCartItem],
        quantity: updateCart[existingCartItem].quantity + productQuantity,
      }
      // // let cartProductQuantity = [...cartProduct]
      // cartItemQuantity = {
      //   quantity: productQuantity
      // }

      console.log(updateCart);
      setCartProduct(updateCart);
      localStorage.setItem("cartItem", JSON.stringify(updateCart))
    } else {
      const updateCart = [...cartProduct, {...items, quantity: productQuantity}]

      setCartProduct(updateCart)
      localStorage.setItem("cartItem", JSON.stringify(updateCart))
    }
    // setCartProduct((prevItem) => [...prevItem, {...items, quantity: productQuantity}])
    // localStorage.setItem("cartItem", JSON.stringify([...cartProduct, items]))
  }

  function removeFromCart (product) {
    const currentCart = JSON.parse(localStorage.getItem("cartItem")) || [];

    const updateCart = currentCart.filter((item) => item.id !== product.id)

    setCartProduct([updateCart])

    localStorage.setItem("cartItem", JSON.stringify(updateCart))
    console.log("Updated Cart after removal: ", updateCart);
    console.log(updateCart, currentCart);
  }
  // console.log((cartProduct));
  

  return (
    <CardContext.Provider value={{ cartItems, addToCart, updateBlog, goToCart, removeFromCart, blog, randomImg, randomImg2, randomImg3, setProductQuantity, cartProduct, productQuantity, updateCartPrice, setLoginAppear, loginappear, login, loginState, setLoginState, loginStateHandling }}>{children}</CardContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CardContext)
}

export default CardProvider 