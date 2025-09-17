import React, { useState } from 'react'
import { productData } from '../product';
import ShopCategory from './ShopCategory';
import { Link } from "react-router-dom"
import { useCart } from './CardContext';
import Pagination from './Pagination';

const ShopProduct = () => {
  const { addToCart } = useCart()
  const [gridClass, setGridClass] = useState("");
  const [productsData, setProductData] = useState(productData);

  const [currentPagination, setCurrentPagination] = useState(1);
  const perPage = 10;

  const indexOfLastProduct = currentPagination * perPage
  const indexOfFirstProduct = indexOfLastProduct - perPage

  const currentProduct = productsData.slice(indexOfFirstProduct, indexOfLastProduct)

  console.log(currentPagination, productsData.length , perPage, currentProduct);


  const updateproductsData = (updateProduct) => {
    setProductData(updateProduct)
  }

  return (
    <div className='container fullscreen:max-w-1530'>
      <div className="shopProductSection">
        <div className="shop-product-container">
          <div className="product-section">
            {/* product navbar */}
            <div className="pro-nav">
              <div className="pro-title"><h3>Feature Product</h3></div>
              <div className="pro-class-btn">
                <button onClick={() => setGridClass("grid")} className="column-btn">
                  <i class="icofont-listing-box"></i>
                </button>
                <button onClick={() => setGridClass("column")} className="grid-btn">
                  <i class="icofont-navigation-menu"></i>
                </button>
              </div>
            </div>
            {/* Product Items */}
            <div className={gridClass === "column" ? "grid" : "column"}>
              {
                productsData.map((val, i) => (
                  <div key={i} className="product-item-section">
                    <div className="pro-img">
                      <img src={val.image} alt="" />
                    </div>
                    <div className="pro-details">
                      <div className="pro-name"><h3>{val.name}</h3></div>
                      <div className="pro-price"><h3>${val.price}</h3></div>
                    </div>
                    <div className="layer">
                      <button className='add-button' onClick={() => addToCart(val)}><Link to={`/cart/:${val.id}`}>Add to cart</Link></button>
                      <button className='buy-button'><Link to="/buy-now">Buy now</Link></button>
                    </div>
                  </div>
                ))
              }
            </div>
            <Pagination currentPagination={currentPagination} setCurrentPagination={setCurrentPagination} totalitems={productsData.length} perPage={perPage}/>
          </div>
        </div>
        <div className="shopProductContent">
          <div className="shop-category-filter">
            <ShopCategory products={productsData} updateproductsData={updateproductsData}  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopProduct