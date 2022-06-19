import React from "react";
import gmail from "../assets/images/icons8-gmail-48.png";
import SecondaryButton from "../components/buttons/SecondaryButton";
const Contact = () => {
  return (
    <div id="contact" className="about-container container">
      <h1 className="label title__about letter-spacing">Contact</h1>
      <div>
        <p>Let's get in touch!</p>
      </div>
      <div className="contact__buttons">
        <div
          onClick={() => (window.location.href = "mailto:kirtymeena@gmail.com")}
          className="gmail"
        >
          <img src={gmail} alt="email" />
        </div>
        <div>
          <svg
          className="linkedin"
          onClick={()=>window.location.href="https://www.linkedin.com/in/kirty-meena/"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path
              fill="#0288d1"
              d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
            />
            <path
              fill="#fff"
              d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"
            />
          </svg>
        </div>
        
      </div>
      <div>
          <p>You can shoot me an email, or send me a message on LinkedIn.</p>
        </div>
    </div>
  );
};

export default Contact;
