import React from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../shop/PageHeader'
import Footer from '../components/Footer'
import { useCart } from '../shop/CardContext'
import blogImg11 from "../assets/images/10.jpg"

const BlogDetail = () => {
  const { blog } = useCart()

  return (
    <div className='container fullscreen:max-w-1530'>
      <Navbar active={"blog"}/>
      <PageHeader pageTitle={"Blog Page"} curPage={"home/blog"} />
        {
          blog.map((val) => (
            <div className="container blog-item m-auto">
              <div className="blog-img">
                <img src={val.Image} alt="" />
              </div>
              <div className="blog-text">
                <p>{val.text} Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium odio qui, fugit iste esse minima placeat eos totam obcaecati repudiandae pariatur est tenetur magni repellendus asperiores adipisci alias veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam id quia, tempora optio aliquid? Placeat, id suscipit! Repudiandae labore nulla omnis eaque eum atque nobis earum iste iure provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusantium saepe culpa deleniti perferendis obcaecati ipsum. Repellat ducimus ab aliquid, accusamus quia earum adipisci aperiam reiciendis esse quos cum iusto? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere qui fuga tenetur. Voluptate possimus quae libero doloremque fuga dolorum aut quos. Quo ab quidem, non expedita voluptatibus architecto consequuntur ex.</p>
              </div>
              <div className="blog-img2">
                <img src={blogImg11} alt="" />
              </div>
              <div className="blog-text">
                <p>{val.text} Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium odio qui, fugit iste esse minima placeat eos totam obcaecati repudiandae pariatur est tenetur magni repellendus asperiores adipisci alias veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam id quia, tempora optio aliquid? Placeat, id suscipit! Repudiandae labore nulla omnis eaque eum atque nobis earum iste iure provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusantium saepe culpa deleniti perferendis obcaecati ipsum. Repellat ducimus ab aliquid, accusamus quia earum adipisci aperiam reiciendis esse quos cum iusto? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error tempora assumenda nobis nostrum tenetur natus exercitationem quasi totam consequuntur. Incidunt sequi quia quae cupiditate, officia minima harum ratione rem natus!</p>
              </div>
            </div>
          ))
        }
      <Footer/>
    </div>
  )
}

export default BlogDetail