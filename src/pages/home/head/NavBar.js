import React from "react";
import "./NavBar.css";
import NavBarItem from "./NavBarItem";
import Header from "./Header";
import SearchBar from "./SearchBar";
import NavBarTop from "./NavBarTop";

function NavBar(props) {
  const isNavBar = props.isNavBar;

  function handleClick() {
    console.log("Clicked");
  }

  return (
    <div className="navbar">
      <NavBarTop />
      <NavBarItem />
      {isNavBar && <Header onClick={handleClick} />}
      {isNavBar && <SearchBar />}
    </div>
  );
}

export default NavBar;
