import React from "react";
import "./NavBar.css";
import NavBarItem from "./NavBarItem";
import Header from "./Header";

const DUMMY_NAVBAR = [
	{
		"type": "Stays",
		"icon": "fa-bed",
		"active": true
	},
	{
		"type": "Flights",
		"icon": "fa-plane",
		"active": false
	},
	{
		"type": "Car rentals",
		"icon": "fa-car",
		"active": false
	},
	{
		"type": "Attractions",
		"icon": "fa-bed",
		"active": false
	},
	{
		"type": "Airport taxis",
		"icon": "fa-taxi",
		"active": false
	}
];

function NavBar() {
  function handleClick() {
    console.log("Clicked");
  }

  return (
    <div className="navbar">
      <div className="topnavbar">
        <p className="text">Booking Website</p>
        <div className="buttons">
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
      <NavBarItem items={DUMMY_NAVBAR} />
      <Header onClick={handleClick} />
    </div>
  );
}

export default NavBar;
