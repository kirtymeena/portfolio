import React, { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";






const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  let domNode = useRef();

  const toggleNavbar = () => {
    setOpen((prev) => !prev);
  };

  
  useEffect(()=>{
    
    const closeOpenMenu = (e)=>{
        if(domNode.current && open && !domNode.current.contains(e.target))
        setOpen(false)
    }
    document.addEventListener('mousedown',closeOpenMenu)
  })

  return (
    <header>
      <nav className="navbar container">
        <div className="navbar__logo">
          <h1 className="letter-spacing">
            <Link to="/" className="link">
              Kirty
            </Link>
          </h1>
        </div>
        {/* ====================== menu items for larger screen ==============*/}
        <div className="navbar__menu menu-items-lg">
          <div className="nav__item uppercase letter-sapcing">
            <Link
              onClick={(e) => setActive(e.target.textContent)}
              className={`link underline-indicator ${
                active === "Home" ? "active" : ""
              }`}
              to="#home"
              smooth
            >
              Home
            </Link>
          </div>
          <div className="nav__item uppercase letter-sapcing">
            <Link
              onClick={(e) => setActive(e.target.textContent)}
              className={`link underline-indicator ${
                active === "Project" ? "active" : ""
              }`}
              to="#project"
              smooth
            >
              Project
            </Link>
          </div>
          <div className="nav__item uppercase letter-sapcing">
            <Link
              onClick={(e) => setActive(e.target.textContent)}
              className={`link underline-indicator ${
                active === "Education" ? "active" : ""
              }`}
              to="#education"
              smooth
            >
              Education
            </Link>
          </div>
          <div className="nav__item uppercase letter-sapcing">
            <Link
              onClick={(e) => setActive(e.target.textContent)}
              className={`link underline-indicator ${
                active === "About" ? "active" : ""
              }`}
              to="#about"
              smooth
            >
              About
            </Link>
          </div>
        </div>
        {/*================== navbar for small screen =============== */}
        <div className="navbar__menu-sm">
          <div className="navbar__menu menu-items-sm">
            <button className="btn btn-toggle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={toggleNavbar}
                width="2.5rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#e8eaed"
                  d="M10,13H3a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,20H4V15H9ZM21,2H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,9H15V4h5Zm1,4H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Zm-1,7H15V15h5ZM10,2H3A1,1,0,0,0,2,3v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM9,9H4V4H9Z"
                />
              </svg>
            </button>
          </div>
          <div
            ref={domNode}
            className={`menu__link-sm ${open === true ? "open" : "close"}`}
          >
            <Link className="link" to="#home" smooth>
              <div className="nav__item">
                Home{" "}
                <div>
                  <svg
                    width="2rem"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#e8eaed"
                      d="M21.66,10.25l-9-8a1,1,0,0,0-1.32,0l-9,8a1,1,0,0,0-.27,1.11A1,1,0,0,0,3,12H4v9a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V12h1a1,1,0,0,0,.93-.64A1,1,0,0,0,21.66,10.25ZM13,20H11V17a1,1,0,0,1,2,0Zm5,0H15V17a3,3,0,0,0-6,0v3H6V12H18ZM5.63,10,12,4.34,18.37,10Z"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            <Link className="link" to="#project" smooth>
              <div className="nav__item">
                Project
                <div>
                  <svg
                    width="2rem"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#e8eaed"
                      d="M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a21.71,21.71,0,0,0,8,1.53A21.75,21.75,0,0,0,20,13Zm0-7.69a19.89,19.89,0,0,1-16,0V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link className="link" to="#education" smooth>
              <div className="nav__item">
                Education
                <div>
                  <svg
                    width="2rem"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#e8eaed"
                      d="M20.18,10.19A11.9,11.9,0,0,0,18,10c-.42,0-.83,0-1.24.08a5.91,5.91,0,0,0-1.91-1.65,3.81,3.81,0,0,0,1-2.57,3.86,3.86,0,0,0-7.72,0,3.81,3.81,0,0,0,1,2.57,6.11,6.11,0,0,0-1.91,1.64C6.83,10,6.42,10,6,10a11.9,11.9,0,0,0-2.18.21,1,1,0,0,0-.82,1v8.25a1,1,0,0,0,.36.77,1,1,0,0,0,.82.22A9.75,9.75,0,0,1,6,20.23a9.89,9.89,0,0,1,5.45,1.63h0l0,0,.13.05h0A1.09,1.09,0,0,0,12,22a.87.87,0,0,0,.28-.05l.07,0,.13-.05,0,0h0A9.89,9.89,0,0,1,18,20.23a9.75,9.75,0,0,1,1.82.18,1,1,0,0,0,.82-.22,1,1,0,0,0,.36-.77V11.17A1,1,0,0,0,20.18,10.19ZM12,4a1.86,1.86,0,0,1,0,3.71h0A1.86,1.86,0,0,1,12,4ZM11,19.33a11.92,11.92,0,0,0-5-1.1c-.33,0-.66,0-1,.05V12a9.63,9.63,0,0,1,2.52.05l.11,0A10,10,0,0,1,11,13.33Zm1-7.73a11.77,11.77,0,0,0-1.38-.68l-.06,0c-.33-.13-.66-.26-1-.36A4,4,0,0,1,12,9.69h0a4,4,0,0,1,2.44.85A12.43,12.43,0,0,0,12,11.6Zm7,6.68a11.6,11.6,0,0,0-6,1v-6a9.76,9.76,0,0,1,3.37-1.22l.2,0A9.39,9.39,0,0,1,19,12Z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link className="link" to="#about" smooth>
              <div className="nav__item">
                About{" "}
                <div>
                  <svg
                    width="2rem"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#e8eaed"
                      d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
