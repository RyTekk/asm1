import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./NavBarItem.css";
import Helper from "../../../ui/Helper";

library.add(fas);

function NavBarItem(props) {
  return (
    <Helper className="nav">
      {props.items.map((item, index) => (
        <div key={index} className={`nav-item ${item.active ? "active" : ""}`}>
          <FontAwesomeIcon icon={item.icon} />
          <span>{item.type}</span>
        </div>
      ))}
    </Helper>
  );
}

export default NavBarItem;
