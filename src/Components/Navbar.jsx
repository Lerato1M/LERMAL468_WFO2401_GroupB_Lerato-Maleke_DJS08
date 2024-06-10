import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";
function Navbar() {
  return (
    <header>
      <Link className="site-logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        <Link to="/VanDetails">Van Details</Link>
        <Link to="/Vans">Vans</Link>
      </nav>
    </header>
  );
}

export default Navbar;