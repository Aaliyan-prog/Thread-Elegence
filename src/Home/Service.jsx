import React from 'react'

const serviceList = [
  {
    icon: "icofont-truck-alt",
    title: "Free Delivery",
    text: "Get your orders delivered for free"
  },
  {
    icon: "icofont-pay",
    title: "Encrypt payment",
    text: "Use encrypted payment for secure transactions"
  },
  {
    icon: "icofont-dollar",
    title: "Loyalty Point",
    text: "Reward repeat customers with points or discounts"
  },
  {
    icon: "icofont-live-support",
    title: "Live customer support",
    text: "offers instant chat assistance, addressing inquiries"
  },
]

const Service = () => {
  return (
    <div className='container service-sec m-auto bg-black text-white mt-10'>
      <div className='service-section'>
        {
          serviceList.map((service, i) => (
            <div key={i} className="service-container">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="service-detail">
                <h1>{service.title}</h1>
                <p>{service.text}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Service