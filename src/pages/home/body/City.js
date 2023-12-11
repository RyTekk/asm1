import "./City.css";

const DUMMY_CITY = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

function City() {
  return (
    <div className="city">
      {DUMMY_CITY.map((item, index) => (
        <div key={index} className="city-item">
          <div className="subtext">
            <h2>{item.name}</h2>
            <p style={{ fontWeight: "bold" }}>{item.subText}</p>
          </div>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
}

export default City;
