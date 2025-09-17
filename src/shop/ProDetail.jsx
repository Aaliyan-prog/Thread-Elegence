import React, { useState } from 'react'
import { useCart } from './CardContext'
import Count from '../components/Count'
import { Link } from "react-router-dom"

const proDetails = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quis, neque quidem voluptate distinctio, nemo nesciunt modi asperiores ipsa labore veritatis non pariatur eos? Tenetur at repudiandae assumenda dolorum omnis.</p>"


const ProDetail = () => {
  const { cartItems, goToCart, productQuantity } = useCart()
  const [buttontoggle, setButtonToggle] = useState(true)
  const [selectedSizes, setSizes] = useState(null);
  const [selectedColor, setColor] = useState(null)

  const sizes = ["XXl", "Xl", "large", "medium", "small"]
  const colors = ["blue", "white", "red", "green", "black"]

  const selecteSize = (size) => {
    setSizes(selectedSizes === size ? null : size)
    console.log(selectedSizes, size);
  }

  const selecteColor = (color) => {
    setColor(selectedColor === color ? null : color)
    console.log(selectedColor, color);
  }

  console.log(selectedSizes, selectedColor);

  
  const optionToggle = () => {
    setButtonToggle(!buttontoggle)
  }

  return (
    <div className='container'>
      <div className="pro-detail">
        {
          cartItems.map((val, i) => (
            <div className='pro-items-details' key={i}>
              <h3>{val.brand}</h3>
              <h1>{val.name}</h1>
              <h2>${val.price * productQuantity}</h2>
              <div className="count-section">
                <Count proQuantity={productQuantity}/>
              </div>
              <div className="pro-detail-button">
                <button className='add-button' onClick={() => goToCart(val)}><Link to={`/cart/:${val.id}`}>Go to cart</Link></button>
                <button className='buy-button'><Link to="/buy-now">Buy now</Link></button>
              </div>
              <div className="detail-write">
                <div className="title-section">
                  <div className={`title-container ${buttontoggle ? "activetab" : ""}`} onClick={() => optionToggle()}>Details</div>
                  <div className={`title-container ${buttontoggle ? "" : "activetab-table"}`} onClick={() => optionToggle()}>Size</div>
                </div>
                <div className="pro-detail-container">
                  {
                    buttontoggle === true ? 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, possimus consequatur incidunt alias beatae commodi iste facilis autem. At mollitia provident, soluta non maiores fugiat nulla eum ut illum doloribus.</p> : 
                    <table>
                        <tr className='thead-sec'>
                          <th className='thead-content'>size</th>
                        </tr>
                        {
                          sizes.map((size) => (
                            <tr key={size} className='tbody-sec'>
                              <td onClick={() => selecteSize(size)} className={selectedSizes === size ? "selected" : ""}>{size}</td>
                            </tr>
                          ))
                        }
                        <tr className='thead-sec'>
                          <th className='thead-content'>color</th>
                        </tr>
                        {
                          colors.map((color) => (
                            <tr key={color} className='tbody-sec'>
                              <td onClick={() => selecteColor(color)}
                                className={selectedColor === color ? "selected" : ""}>{color}</td>
                            </tr>
                          ))
                        }
                    </table>
                  }
                      {/* <thead className='thead'>
                        <tr>
                          <td id='optionTitle'>option</td>
                        </tr>
                      </thead>
                      <tbody className='tbody'>
                        <tr className='tbody-table-row'>
                          <td className='table-option'>XXl</td>
                          <td className='table-option'>Xl</td>
                          <td className='table-option'>large</td>
                          <td className='table-option'>medium</td>
                          <td className='table-option'>small</td>
                        </tr>
                        <tr className='tbody-table-row'>
                          <td className='table-option'>XXl</td>
                          <td className='table-option'>Xl</td>
                          <td className='table-option'>large</td>
                          <td className='table-option'>medium</td>
                          <td className='table-option'>small</td>
                        </tr>
                      </tbody> */}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProDetail