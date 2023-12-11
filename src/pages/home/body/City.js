import "./City.css";
import cityData from "./city.json";

function City() {
  return (
    <div className="city">
      {cityData.map((item, index) => (
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
