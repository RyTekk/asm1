import searchData from "./search.json";
import "./Search.css";
import Helper from "../../ui/Helper";

const Search = () => {
  return (
    <>
      <a href="/" className="back-home">Back to Homepage</a>
      <Helper className="search-root">
        <div className="search-form">
          <form>
            <div className="search-title">Search</div>
            <div className="search-des">
              <label>Destination</label>
              <br />
              <input></input>
              <br />
              <label>Check-in Date</label>
              <br />
              <input placeholder="06/24/2022 to 06/24/2022"></input>
            </div>
            <div className="form-option">
              <label>Option</label>
              <div className="form-option-content">
                <div className="form-option-item">
                  <label>Min price per night</label>
                  <input></input>
                </div>
                <div className="form-option-item">
                  <label>Max price per night</label>
                  <input></input>
                </div>
                <div className="form-option-item">
                  <label>Adult</label>
                  <input placeholder="1"></input>
                </div>
                <div className="form-option-item">
                  <label>Children</label>
                  <input placeholder="0"></input>
                </div>
                <div className="form-option-item">
                  <label>Room</label>
                  <input placeholder="1"></input>
                </div>
              </div>
            </div>
          </form>
          <button>Search</button>
        </div>
        <div className="search-items-list">
          {searchData.map((item, index) => (
            <div key={index} className="search-item">
              <img src={item.image_url} alt={item.name} />
              <div className="item-info">
                <p className="item-name">{item.name}</p>
                <p className="item-distance">{item.distance} from center</p>
                <p className="item-tag">{item.tag}</p>
                <p className="item-description">{item.description}</p>
                <p className="item-type">{item.type}</p>
                {item.free_cancel && (
                  <div className="free-cancel">
                    <p style={{ fontWeight: "700" }}>Free cancellation</p>
                    <p>
                      You can cancel later, so lock in this great price today!
                    </p>
                  </div>
                )}
              </div>
              <div className="available">
                <div className="rate">
                  <div className="item-rate-text">{item.rate_text}</div>
                  <div className="item-rate-score">{item.rate}</div>
                </div>
                <div className="cost">
                  <div className="item-price">${item.price}</div>
                  <p className="cost-tax">Include taxes and fees</p>
                  <button>See availability</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Helper>
    </>
  );
};

export default Search;
