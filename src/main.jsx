import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'icofont/dist/icofont.min.css';
import "./assets/css/style.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Home/Home.jsx';
import Shop from './shop/Shop.jsx';
import Cart from './shop/Cart.jsx';
import CardProvider from './shop/CardContext.jsx';
import Blog from './blog/Blog.jsx';
import BlogDetail from './blog/BlogDetail.jsx';
import AboutUs from './About/AboutUs.jsx';
import Contact from './contact/Contact.jsx';
import BuyNow from './buyNow/BuyNow.jsx';
import Checkout from './BuyNow/Checkout.jsx';

// import 'icofont';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/cart/:id",
        element: <Cart/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/blog/:id",
        element: <BlogDetail/>
      },
      {
        path: "/about",
        element: <AboutUs/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/buy-now",
        element: <BuyNow/>
      },
      {
        path: "/checkout",
        
        element: <Checkout/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <CardProvider>
    <RouterProvider router={router} />
  </CardProvider>
)
