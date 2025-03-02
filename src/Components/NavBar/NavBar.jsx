import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul>

      <div className="nav-contact">Contact Me</div>
    </div>
  );
}

export default NavBar;
