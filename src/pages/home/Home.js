import Body from "./body/Body";
import Footer from "./foot/Footer";
import NavBar from "./head/NavBar";
import SignUp from "./signup/SignUp";

const Home = () => {
  return (
    <>
      <NavBar isNavBar={true} />
      <Body />
      <SignUp />
      <Footer />
    </>
  );
};

export default Home;
