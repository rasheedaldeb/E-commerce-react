import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo/logo.png";
import { AuthContext } from "../Context/AuthProvider";
const NavItems = () => {
  const [menuToggle, setmenuToggle] = useState(false);
  const [socialToggle, setsocialToggle] = useState(false);
  const [headerFixed, setheaderFixed] = useState(false);
  const { user } = useContext(AuthContext);
  // console.log(user);
  //add event listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setheaderFixed(true);
    } else {
      setheaderFixed(false);
    }
  });
  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* header top start */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>

      {/* header bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>

            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <Link
                to="/sign-up"
                className={
                  user
                    ? "lab-btn me-3 d-none"
                    : "lab-btn me-3 d-none d-md-block"
                }
              >
                Create Account
              </Link>
              <Link
                to="/login"
                className={user ? "d-none" : "d-none d-md-block"}
              >
                Log In
              </Link>
              <button
                className={user ? "d-block" : "d-none"}
                style={{ background: "none" }}
              >
                <Link to="/cart-page">
                  <i className="icofont-cart" style={{ fontSize: "30px" }}></i>
                </Link>
              </button>
              {/* menu toggler */}
              <div
                onClick={() => setmenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* social toggler  */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setsocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
