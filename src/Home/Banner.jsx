import React from 'react'
import CountUp from "react-countup"

const countList = [
  {
    icofont: "icofont-world",
    count: "8000",
    text: "Worldwide Sales"
  },
  {
    icofont: "icofont-user",
    count: "4500",
    text: "Customers"
  },
  {
    icofont: "icofont-gift",
    count: "100",
    text: "Reward and Gift Card"
  }
]

const Banner = () => {
  return (
    <div className='container mt-5 fullscreen:max-w-1530 mb-5'>
      <div className="banner-section">
        <div className='count-section'>
          {
            countList.map((val, i) => (
              <div key={i} className="count-container">
                <div className="icon">
                  <i className={val.icofont}></i>
                </div>
                <div className="count-detail">
                  <h1><CountUp end={val.count}/></h1>
                  <h3>{val.text}</h3>
                </div>
              </div>
            ))
          }
        </div>
        
        <div className="detail-section">
          <div className="banner-title">
            <h1>Explore about Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam, totam incidunt dicta magnam repellendus quam optio voluptatum. Ducimus reprehenderit cupiditate saepe debitis eius aliquam iste, mollitia quidem quis nemo.</p>
            <div className='banner-button-container'>
              <button className="banner-button">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner