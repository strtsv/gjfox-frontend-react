import React from "react";

import Header from "../components/Header";
import Slider from "../components/Home/Slider";
import FeaturedEvent from "../components/Home/FeaturedEvent";
import RecentVideos from "../components/Home/RecentVideos";
import DreamVillage from "../components/Home/DreamVillage";
import LatestNews from "../components/Home/LatestNews";
import Map from "../components/Home/Map";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Slider />
      <FeaturedEvent />
      <RecentVideos />
      <DreamVillage />
      <LatestNews />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
