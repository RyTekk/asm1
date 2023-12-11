import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./NavBarItem.css";
import Helper from "../../../ui/Helper";
import navBarData from "./navBar.json";

library.add(fas);

function NavBarItem() {
  return (
    <Helper className="nav">
      {navBarData.map((item, index) => (
        <div key={index} className={`nav-item ${item.active ? "active" : ""}`}>
          <FontAwesomeIcon icon={item.icon} />
          <span>{item.type}</span>
        </div>
      ))}
    </Helper>
  );
}

export default NavBarItem;
