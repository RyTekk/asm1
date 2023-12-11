import City from "./City";
import "./Body.css";
import Helper from "../../../ui/Helper";
import HotelType from "./HotelType";
import HotelList from "./HotelList";

function Body() {
  return (
    <Helper className="body">
      <City />
      <HotelType />
      <HotelList />
    </Helper>
  );
}

export default Body;
