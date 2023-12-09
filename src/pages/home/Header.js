import "./Header.css";
import SearchBar from "./SearchBar";

function Header({ onClick }) {
  return (
    <div className="header">
      <div className="header-content">
        <h1>A lifetime of discounts? It's Genius.</h1>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <button onClick={onClick}>Sign in / Register</button>
      </div>
      <SearchBar />
    </div>
  );
}

export default Header;
