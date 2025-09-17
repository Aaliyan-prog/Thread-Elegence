import React, { useState } from 'react'
import { useCart } from './CardContext'

const Gallery = () => {
  const { cartItems, randomImg, randomImg2, randomImg3 } = useCart()
  const [changeImg, setChangeImg] = useState(cartItems.image);
  const [changeImgStatus, setChangeImgStatus] = useState(false);


  function swipImg (img) {
    setChangeImg(img)
    setChangeImgStatus(true)
    // setChangeImgStatus(true)
  }

  function swipmain () {
    setChangeImgStatus(false)
    setChangeImg(cartItems.image)
  }

  return (
    <div className='gallery-sec'>
      <div className="mainImg">
        {
          cartItems.map((img) => (
            <img src={changeImgStatus === false ? img.image : changeImg} alt="" onClick={() => swipmain()} className='main-img' />
        ))
        }
      </div>
      <div className="side-img">
        {
          cartItems.map((img, i) => (
            <div key={i} className='side-img-sec'>
              <img src={changeImg === randomImg ? img.image : randomImg} className='sideimg' onClick={() => swipImg(randomImg)} alt="" />
              <img src={changeImg === randomImg2 ? img.image : randomImg2} onClick={() => swipImg(randomImg2)} alt="" />
              <img src={changeImg === randomImg3 ? img.image : randomImg3} onClick={() => swipImg(randomImg3)} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Gallery