import "./HotelType.css";
import typeData from "./type.json";

function HotelType() {
  return (
    <div className="hotel-type">
      <p className="top-text">Browse by property type</p>
      <div className="type-list">
        {typeData.map((item, index) => (
          <div key={index} className="type-item">
            <img src={item.image} alt={item.name} />
            <p className="item-name">{item.name}</p>
            <p className="item-count">{item.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelType;
