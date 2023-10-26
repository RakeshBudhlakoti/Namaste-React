import { LOGO_URL } from "../utils/constants";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // Subscribing to the store using selectors
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("cartItems",cartItems)

  const handleLoginClick = () => {
    setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
  };

  const onlineStatus = useOnlineStatus(); // Custom Hook for online status

  const { loggedInUser } = useContext(UserContext);


  const [sidepanelOpen, setSidepanelOpen] = useState(false);

  const openSidepanel = () => {
    setSidepanelOpen(true);
  };

  const closeSidepanel = () => {
    setSidepanelOpen(false);
  };



  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          {" "}
          <img className="logo" src={LOGO_URL} alt="FoodVillage" />{" "}
        </Link>
        <div className="location-container" onClick={openSidepanel}>
          <span className="location-title">
            <span className="location-subtitle">Chhatarpur</span>
          </span>
          <span className="location-address">
            Chattarpur Enclave, Chhatarpur, New Delhi, Delhi, India
          </span>
          <span className="location-icon-downArrow">
            <i className="fa fa-angle-down"></i>
          </span>
        </div>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fa fa-shopping-cart"></i>{" "}
              {cartItems.length > 0 ? (
                <span className="cart-count">{cartItems.length}</span>
              ) : (
                ""
              )}
            </Link>
          </li>
          <li>
            {!loggedInUser ? (
              <Link to="/login">Login</Link>
            ) : (
              <Link to="#">{loggedInUser}</Link>
            )}
          </li>
          {/* <li>
            <button className="login" onClick={handleLoginClick}>
              {btnNameReact}
            </button>
            {onlineStatus ? <span>&#128994;</span> : <span>&#128308;</span>}
          </li> */}
          {/* <li><Link to="#">{loggedInUser}</Link></li> */}
        </ul>
      </div>


    {/* <div class="overlay"></div> */}
    <div className={`sidepanel ${sidepanelOpen ? 'open' : ''}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeSidepanel}>&times;</a>
        <div className="location-wrapper">
          <input type="text" className="search-location" placeholder="Search for area, street name.."></input>

          <div className="current-location" id="current-location">
            <div className="current-location-icon">
            <i className="fa fa-dot-circle-o" aria-hidden="true"></i>

            </div>
            <div className="current-location-detail">
              <span className="current-location-name">Get Current Location</span>
              <span className="current-location-text">Using GPS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Header;
