import React from "react";
import "./home.scss";
import Deshell from "../../components/Deshell";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Deshell />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
