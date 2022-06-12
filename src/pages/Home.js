import React from 'react'
import codingFemale from "../images/Capture-removebg-preview.png"
const Home = () => {
  return (
    <div id="home" className='home container-wrap'>
      <div className='home__content'>
        <h1 className='text1 letter-spacing2'>Hi</h1>
        <h1 className='text2 letter-spacing'>I am Kirty</h1>
        <p className='text3'>A passionate frontend developer</p>
      </div>  
      <div className='home__gif'>
          <img src={codingFemale} alt="coding female"/>
      </div>
    
    </div>
  )
}

export default Home