import "./HotelList.css";
import listData from "./hotel_list.json";

function HotelList() {
  return (
    <div className="hotel-list">
      <p className="top-text">Homes guests love</p>
      <div className="list">
        {listData.map((item, index) => (
          <div key={index} className="list-item">
            <img src={item.image_url} alt={item.name} />
            <a href="/detail">
              <p className="hotel-name">{item.name}</p>
            </a>
            <p className="hotel-city">{item.city}</p>
            <p className="hotel-price">Starting from ${item.price}</p>
            <div className="review">
              <p className="hotel-rate">{item.rate}</p>
              <p className="hotel-type">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelList;
