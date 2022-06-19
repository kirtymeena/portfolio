import React, { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  let domNode = useRef();

  const toggleNavbar = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const closeOpenMenu = (e) => {
      if (domNode.current && open && !domNode.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", closeOpenMenu);
  });

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
