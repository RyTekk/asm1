import React from "react";
import "./NavBar.css";
import NavBarItem from "./NavBarItem";
import Header from "./Header";
import Helper from "../../../ui/Helper";

function NavBar() {
  function handleClick() {
    console.log("Clicked");
  }

  return (
    <div className="navbar">
      <Helper className="topnavbar">
        <p className="text">Booking Website</p>
        <div className="buttons">
          <button>Register</button>
          <button>Login</button>
        </div>
      </Helper>
      <NavBarItem />
      <Header onClick={handleClick} />
    </div>
  );
}

export default NavBar;
