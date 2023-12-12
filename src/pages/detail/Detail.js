import detailData from "./detail.json";
import "./Detail.css";
import Helper from "../../ui/Helper";
import NavBar from "../home/head/NavBar";
import SignUp from "../home/signup/SignUp";
import Footer from "../home/foot/Footer";

const Detail = () => {
  return (
    <>
      <NavBar isNavBar={false} />
      <Helper className="detail-root">
        <div className="top">
          <div className="info">
            <h1>{detailData.name}</h1>
            <p className="address">{detailData.address}</p>
            <p className="distance">{detailData.distance}</p>
            <p className="price">{detailData.price}</p>
          </div>
          <button>Reserve or Book Now!</button>
        </div>
        <div className="photos">
          {detailData.photos.map((item, index) => (
            <img key={index} src={item} alt={index} />
          ))}
        </div>
        <div className="bottom">
          <div className="detail">
            <div className="title">{detailData.title}</div>
            <p className="description">{detailData.description}</p>
          </div>
          <div className="nine-night">
            <div className="content">
              <p className="content-top">Perfect for a 9-night stay!</p>
              <p className="content-detail">
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </p>
              <p className="content-price">
                <span style={{ fontWeight: "700" }}>
                  ${detailData.nine_night_price}
                </span>{" "}
                (9 nights)
              </p>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </Helper>
      <SignUp />
      <Footer />
    </>
  );
};

export default Detail;
