import React from "react";
import Header from "../components/common/Header";
import Profile from "../components/Home/Profile";
import HomeNav from "../components/Home/HomeNav";

const Home = () => {
  return (
    <main>
      <Header />
      <Profile />
      <HomeNav />
    </main>
  );
};

export default Home;
