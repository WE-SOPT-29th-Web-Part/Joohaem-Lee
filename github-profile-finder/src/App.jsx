import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";

function App() {
  const [userInfo, setUserInfo] = useState();

  return (
    <div className="App">
      <Header />
      <SearchBar setUserInfo={setUserInfo} />
      <Result userInfo={userInfo} setUserInfo={setUserInfo} />
    </div>
  );
}

export default App;
