import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Explore from "../components/Explore";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Live from "../components/Live";
import Hot from "../components/Hot";
import Sellers from "../components/Sellers";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Live />
      <Sellers />
      <Features />
      <Hot />
      <Explore />
      <Footer />
    </div>
  );
};

export default Home;
