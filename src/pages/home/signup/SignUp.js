import Helper from "../../../ui/Helper";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signup">
      <Helper className="signup-content">
        <p className="text1">Save time, save money!</p>
        <p>Sign up and we'll send the best deals to you</p>
        <div className="signup-form">
          <input placeholder="Your Email"></input>
          <button>Subscribe</button>
        </div>
      </Helper>
    </div>
  );
}

export default SignUp;
