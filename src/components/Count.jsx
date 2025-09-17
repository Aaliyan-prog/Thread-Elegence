import React, { useState } from 'react'
import { useCart } from '../shop/CardContext';

const Count = ({ proQuantity, updatePrice }) => {
  const { setProductQuantity, updateCartPrice } = useCart()
  console.log(updatePrice);
  
  // let countVal = 0;
  const [count, setCount] = useState(proQuantity);
  // const [countQuantity, setCountQuantity] = useState(proQuantity);


  const countUpdate = (operator) => {
    let newCount = count;
    let newQuantity = proQuantity;

    if (operator === "increment"){
        newCount = count + 1
        console.log(newCount);
    }
    if (operator === "decrement") {
        newCount = count - 1
        // console.log(countQuantity);
    }

    if (operator === "increment" && updatePrice){
        newQuantity = updatePrice.quantity + 1
        console.log(newCount);
    }
    if (operator === "decrement" && updatePrice) {
        newQuantity = updatePrice.quantity - 1
        // console.log(countQuantity);
    }
    
    if (newCount !== count){
      setCount(newCount)
      setProductQuantity(newCount)
    }

    if (newCount !== count && updatePrice){
      setCount(newCount)
      setProductQuantity(newCount)
      updateCartPrice({ ...updatePrice, quantity: newQuantity })
    }
  }
  
  return (
    <div className='quan-btn'>
      <button className='increment-btn' onClick={() => countUpdate("increment")}>+</button>
      <p className='quantity-val'>{count}</p>
      <button className='decrement-btn' onClick={() => countUpdate("decrement")}>-</button>
    </div>
  )
}

export default Count