import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./SearchBar.css";
import Helper from "../../../ui/Helper";

library.add(fas);

function SearchBar() {
  return (
    <Helper className="search">
      <FontAwesomeIcon icon="fa-bed" />
      <input placeholder="Where are you going?"></input>
      <FontAwesomeIcon icon="fa-calendar-days" />
      <input placeholder="06/24/2022 to 06/24/2022"></input>
      <FontAwesomeIcon icon="fa-person" />
      <input placeholder="1 adult - 0 children - 1 room"></input>
      <button onClick={() => (window.location.href = "/search")}>
        Search
      </button>
    </Helper>
  );
}

export default SearchBar;
