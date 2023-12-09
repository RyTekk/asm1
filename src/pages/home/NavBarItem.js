import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./NavBarItem.css";

library.add(fas);

function NavBarItem(props) {
  return (
    <div className="nav">
      {props.items.map((item, index) => (
        <div key={index} className={`nav-item ${item.active ? "active" : ""}`}>
          <FontAwesomeIcon icon={item.icon} />
          <span>{item.type}</span>
        </div>
      ))}
    </div>
  );
}

export default NavBarItem;
