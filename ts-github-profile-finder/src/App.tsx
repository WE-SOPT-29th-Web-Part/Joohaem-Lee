import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResultCase from "./components/ResultCase";

function App() {
  const [userInfo, setUserInfo] = useState({
    data: {},
    status: "idle", // 아무 데이터도 받아오지 않은 상태
  });

  return (
    <div className="App">
      <Header />
      <SearchBar setUserInfo={setUserInfo} />
      <ResultCase userInfo={userInfo} setUserInfo={setUserInfo} />
    </div>
  );
}

export default App;
