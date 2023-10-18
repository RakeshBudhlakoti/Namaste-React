import { LOGO_URL } from "../utils/constants";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Header() {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const handleLoginClick = () => {
    setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
  };

  const onlineStatus = useOnlineStatus(); // Custom Hook for online status

  return (
    <div className="bg-blue-500 p-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="logo-container">
      <img className="w-40" src={LOGO_URL} alt="FoodVillage" />
    </div>
    <div className="nav-items">
      <ul className="flex space-x-6 text-white">
        <li className="relative group">
          <span className="online-status">
            {onlineStatus ? <span>&#128994;</span> : <span>&#128308;</span>}
          </span>
          <Link to="/" className="nav-link group-hover:text-blue-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link group-hover:text-blue-300">About</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link group-hover:text-blue-300">Contact</Link>
        </li>
        <li>
          <Link to="/grocery" className="nav-link group-hover:text-blue-300">Grocery</Link>
        </li>
      </ul>
    </div>
    <div className="login">
      <button className="bg-white text-blue-500 hover:bg-blue-100 py-2 px-4 rounded-full" onClick={handleLoginClick}>
        {btnNameReact}
      </button>
    </div>
  </div>
</div>

  );
}

export default Header;
