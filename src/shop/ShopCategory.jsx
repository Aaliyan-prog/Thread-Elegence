import React, { useState } from 'react'
import SearchProduct from './SearchProduct';

const ShopCategory = ({ products, updateproductsData }) => {
  const [filtersItems, setFiltersItems] = useState([])

  function category (productsCategory) {
    let filterProductItems;

    if (productsCategory === "All"){
      filterProductItems = products;
    } else{
      filterProductItems = products.filter((val) => val.category.toLowerCase().includes(productsCategory.toLowerCase()))
    }
    updateproductsData(filterProductItems)
    
    // let filterProductItems = productsFilter.filter((val) => val.category.toLowerCase().includes(productsCategory.toLowerCase()))

    // console.log(filterProductItems);
    
  }

  function searchItems (e) {
    let searchValue = e.target.value.toLowerCase();

    const filterItems = products.filter((val) => val.category.toLowerCase().includes(searchValue))
    setFiltersItems(filterItems)

    if(searchValue === ""){
      setFiltersItems("")
    }
    // console.log(filterItems);
    
  }
  console.log(filtersItems);
  



  return (
      <div className="Tags-section">
        <div className="category-search">
        <input type="text" name='category-search' id='category-search' placeholder='Search product' onChange={searchItems}/>
          <button><i className='icofont-search'></i></button>
        </div>
        <div className={` ${filtersItems.length === 0 ? "hidden" : "block search-items"}`}>
          <SearchProduct filterItems={filtersItems}/>
        </div>
        <div className="tags">
          <ul className="lab-ul">
            <li onClick={() => category("All")} className="lab-li">All</li>
            <li onClick={() => category("plain shirt")} className="lab-li">plain shirt</li>
            <li onClick={() => category("shirt")} className="lab-li">shirt</li>
            <li onClick={() => category("jean")} className="lab-li">Jeans</li>
          </ul>
        </div>
      </div>
  )
}

export default ShopCategory