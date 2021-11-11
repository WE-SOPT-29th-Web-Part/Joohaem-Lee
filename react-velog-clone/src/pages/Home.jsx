import React from "react";
import Header from "../components/common/Header";
import Profile from "../components/Home/Profile";
import HomeNav from "../components/Home/HomeNav";
import ArticlesContainer from "../components/Home/ArticlesContainer";

const Home = () => {
  return (
    <main>
      <Header />
      <Profile />
      <HomeNav />
      <ArticlesContainer />
    </main>
  );
};

export default Home;
