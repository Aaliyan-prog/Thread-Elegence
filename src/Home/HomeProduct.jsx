import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { productData } from '../product'
import { useCart } from '../shop/CardContext'

const productTitle = "Feature Product"

const HomeProduct = () => {
  const { addToCart } = useCart()

  const [productsData, setProductsData] = useState(productData);
  const [menuValue, setMenuValue] = useState();
  const [filterItems, setFilterItems] = useState(productData);

  function filterProductItems (menuval) {
    setMenuValue(menuval);

    if (menuValue !== 'All'){
      const filterItem = productData.filter((product) => product.category.toLowerCase().includes(menuval))
      setFilterItems(filterItem)
    }
    if (menuValue === 'All'){
      setFilterItems(productData)
    }
  }

  return (
    <div className='container m-auto mb-28'>
      <div className="product-section">
        <div className="product-header">
          <div className="pro-nav">
            <div className="title">
              <h1>{productTitle}</h1>
            </div>
            <div className="pro-menu">
              <ul>
                <li onClick={() => filterProductItems('All')}><Link>All</Link></li>
                <li onClick={() => filterProductItems('shirt')}><Link>T-shirt</Link></li>
                <li onClick={() => filterProductItems('plain shirt')}><Link>Plain shirt</Link></li>
                <li onClick={() => filterProductItems('jeans')}><Link>Jeans</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="home-product">
          <div className="home-product-section">
              {
                filterItems.map((productItems, i) => (
                  <div key={i} className="product-item-section">
                    <div className="pro-img">
                      <img src={productItems.image} alt="" />
                    </div>
                    <div className="pro-details">
                      <div className="pro-name"><h3>{productItems.name}</h3></div>
                      <div className="pro-price"><h3>${productItems.price}</h3></div>
                    </div>
                    <div className="layer">
                      <button className='add-button' onClick={() => addToCart(productItems)}><Link to={`/cart/:${productItems.id}`}>Add to cart</Link></button>
                      <button className='buy-button'><Link to="/buy-now">Buy now</Link></button>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeProduct