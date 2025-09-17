import React, { useState } from 'react'
import { productData } from '../product'
import { Link } from 'react-router-dom';
import { useCart } from '../shop/CardContext';
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase"

const title = <h1>Trending <span>Fashion</span></h1>
const desc = "Discover Fashion That Speaks to You, Timeless Trends, Unbeatable Quality"

const HeroSection = () => {
  const { loginappear, setLoginAppear, login, loginStateHandling } = useCart()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [searchInput, setSearchInput] = useState("");
  const [filterProduct, setFilterProduct] = useState(productData);

  console.log(loginappear);

  

  function searchBar (e) {
    const searchValue = e.target.value.toLowerCase()
    setSearchInput(searchValue);
    
    let filterItems = filterProduct.filter((product) => product.category.toLowerCase().includes(searchValue))   
    setFilterProduct(filterItems);
  }

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        alert(`${user.displayName} successfully login`)
        login(false)
        loginStateHandling(true)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    loginStateHandling(true)

    if (!email || ! password) {
      alert("please Enter email and password")
    }

    if (password.length < 6) {
      alert("password should be atleast 6 characters")
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      login(false)
      loginStateHandling(true)
      console.log(user)
      console.log("user successfully register");
      
    } catch (error) {
      console.log(error.massage);
    }
  }


  return (
    <div className='HeroSection'>
      <div className={loginappear === true ? "login-form-section" : "login-inactive"}>
        <div className="login-section">
          <i onClick={() => login(false)} className='icofont-brand-nexus'></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <input 
            type="email" 
            id='email' 
            placeholder='Enter Your name' 
            autoComplete='off' 
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input 
            type='password'
            id='password' 
            placeholder='Enter Your Password' 
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <div className='remember-class'>
              <input type="checkbox" name="remember me" id="remember-me" className='checkbox-input' value='Remember me'/>
              <p>Remember me</p>
            </div>
            <button>Sign In</button>
          </form>
          <button onClick={googleLogin}>Sign In with google</button>
          <p>Have an account ? Sign In</p>
          <p className='last-p'>Create a new account</p>
        </div>
      </div>
      <div className="backgroundImage">
        <div className="heroTitle">
          {title}
          <p>{desc}</p>
        </div>
        <div className="searchbar">
          <form>
            <input type="text" name='search' id='search' placeholder='Search Your Product' onChange={searchBar} className='pl-4'/>
            <button><i className='icofont-search'></i></button>
          </form>
        </div>
        <div className='searchProduct'>
          <ul className="lab-ul">
            {
              searchInput && filterProduct.map((products, i) => (                
                <li key={i}><Link to={`cart/${products.id}`}>{products.name}</Link></li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeroSection