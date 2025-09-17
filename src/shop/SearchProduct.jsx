import React, { useState } from 'react'

const SearchProduct = ({ filterItems }) => {
  // const [filterData, setFilterData] = useState(filterItems);
  // console.log(filterData);
  


  return (
    <div className={` ${filterItems.length === 0 ? "hidden" : "block search-items" }`}>
      <div className="search-product">
        {filterItems.length > 0 ? (
          filterItems.map((val, i) => (
            <div key={i} className="lab-div">
                <div className="img">
                  <img src={val.image} alt="" />
                </div>
                <div className="title">
                  <h3>{val.name}</h3>
                  <p>${val.price}</p>
                </div>
            </div>
          ))
        ) : ""
        }
      </div>
    </div>
  )
}

export default SearchProduct