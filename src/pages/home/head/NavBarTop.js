import Helper from "../../../ui/Helper";
import "./NavBarTop.css";

function NavBarTop() {
  return (
    <Helper className="topnavbar">
      <a href="/">Booking Website</a>
      <div className="buttons">
        <button>Register</button>
        <button>Login</button>
      </div>
    </Helper>
  );
}

export default NavBarTop;
