import Helper from "../../../ui/Helper";
import "./Footer.css";
import footerData from "./footer.json";

function Footer() {
  return (
    <Helper className="footer">
      {footerData.map((item) => (
        <ul key={item.col_number}>
          {item.col_values.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
      ))}
    </Helper>
  );
}

export default Footer;
