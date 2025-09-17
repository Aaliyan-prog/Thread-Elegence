import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHeader from '../shop/PageHeader'
import aboutImg from "../assets/images/a6.jpg"
import Service from '../Home/Service'

const AboutUs = () => {
  return (
    <div className="container fullscreen:max-w-1530">
      <Navbar active={"about"}/>
      <PageHeader pageTitle={"About Us Page"} curPage={"home/about us"}/>
      <div className="container about-sec m-auto">
        <img src={aboutImg} alt="" />
        <div className="about-detail">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum sint optio aliquid. Delectus repellat, quam unde corrupti quas nobis? Quos ullam quisquam blanditiis aut consectetur iste aperiam quam autem. Nihil? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, inventore cupiditate maiores voluptatem itaque quasi amet error perferendis provident molestias voluptas quaerat optio assumenda nam ex soluta? Excepturi, accusamus aliquid!</p>
          <abbr className='abbr' title="">We are the No 1 E-commerce Store in pakistan</abbr>
          <marquee className="marquee" bgcolor="#ccc" loop="-1" width="100%" scrollamount="5" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum, dolorem quis veniam odit explicabo ipsum tempora repudiandae aperiam autem molestiae nisi temporibus. Sequi ipsum assumenda vitae possimus, distinctio in?</marquee>
        </div>
      </div>
      <Service/>
      <Footer/>
    </div>
  )
}

export default AboutUs