import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../shop/PageHeader'
import Footer from '../components/Footer'
import { blog } from '../blog'
import { Link } from 'react-router-dom'
import { useCart } from '../shop/CardContext'

const Blog = () => {
  const [blogList, setBlogList] = useState(blog)
  const { updateBlog } = useCart()

  return (
    <div className='container fullscreen:max-w-1530'>
      <Navbar active={"blog"}/>
      <PageHeader pageTitle={"Blog Page"} curPage={"home/blog"} />
      <div className="container m-auto blog-sec">
        {
          blogList.map((val, i) => (
            <div className="blog-section" key={i}>
              <div className="blog-img">
                <img src={val.Image} alt="" />
              </div>
              <div className="blog-detail">
                <h1>{val.Title}</h1>
                <div className="blog-detail-para">
                  <p>{val.text}</p>
                </div>
                <Link className='read-more' to={`/blog/:${val.id}`} onClick={() => updateBlog(val)}>Read More...</Link>
                <p>{val.date}</p>
              </div>
            </div>
          ))
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Blog