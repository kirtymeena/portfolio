import React from "react";
import codingFemale from "../assets/images/Capture-removebg-preview.png";
import PrimaryButton from "../components/buttons/PrimaryButton"
const Home = () => {
  const openResume=()=>{
    
  }
  return (
    <div id="home" className="home container-wrap">
      <div className="home__content">
        <div className="home__intro__text">
        <h1 className="text1 letter-spacing2">Hi</h1>
        <h1 className="text2 letter-spacing">I am Kirty</h1>
        <p className="text3">A passionate frontend developer</p>
        </div>
        <div className="home__button">
          <div>
          <PrimaryButton text="Resume" onClick={openResume}/>
          </div>
          <div> 
          <PrimaryButton text="Contact me"/>
          </div>
        </div>
      </div>
      <div className="home__gif">
        <img className="code-img" src={codingFemale} alt="coding female" />
      </div>
    </div>
  );
};

export default Home;
