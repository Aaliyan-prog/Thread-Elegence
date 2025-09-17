import React from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../shop/PageHeader'
import Footer from '../components/footer'

const locationList = [
  {
    icon: "icofont-phone",
    text: "012 345 678 90",
  },
  {
    icon: "icofont-email",
    text: "location@gmail.com",
  },
  {
    icon: "icofont-google-map",
    text: "Thread Elegence",
  },
  {
    icon: "icofont-clock-time",
    text: "6:00 - 6:00",
  },
]

const Contact = () => {
  return (
    <div className='container fullscreen:max-w-1530'>
      <Navbar active={"contact"}/>
      <PageHeader pageTitle={"Contact Page"} curPage={"home/contact"} />
      <div className="container m-auto location-sec">
        <div className="map-sec">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.5078919414773!2d-71.11979375576729!3d42.37432580718792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377427d7f0199%3A0x5937c65cee2427f0!2sHarvard%20University!5e0!3m2!1sen!2s!4v1730690452044!5m2!1sen!2s" 
          style={{border: 0}} 
          className='map'
          allowfullscreen="" 
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="map-detail">
          {locationList.map((val, i) => (
            <div key={i} className="map-items">
              <i className={val.icon}></i>
              <h1>{val.text}</h1>
            </div>
          ))
          }
        </div>
      </div>
      <div className="container m-auto form-sec">
        <h1>Contact Us</h1>
        <div className="form">
          <input type="text" name='email' id='email' placeholder='Enter Your Email' />
          <input type="number" name='number' id='number' placeholder='Enter Your number' />
          <textarea name="massage" id="massage" placeholder='Enter Your Thoughts'></textarea>
          <div className="button-div">
            <button type='submit'>Submit</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact