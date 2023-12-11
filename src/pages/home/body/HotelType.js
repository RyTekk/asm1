import "./HotelType.css";

const DUMMY_TYPE = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

function HotelType() {
  return (
    <div className="hotel-type">
      <p className="top-text">Browse by property type</p>
      <div className="type-list">
        {DUMMY_TYPE.map((item, index) => (
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
