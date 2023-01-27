import React from "react";
import "./home.scss";
import Deshell from "../../components/Deshell";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Product from "../../components/Product";
import Offer from "../../components/Offer";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Offer />
      <Product />
      <Deshell />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
