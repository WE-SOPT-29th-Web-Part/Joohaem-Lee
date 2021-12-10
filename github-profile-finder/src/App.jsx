import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Result2 from "./components/Result2";

function App() {
  const [userInfo, setUserInfo] = useState({
    data: null,
    status: "idle", // 아무 데이터도 받아오지 않은 상태
  });

  // useEffect(() => {
  //   console.log(`userInfo - `, userInfo);
  // }, [userInfo]);

  return (
    <div className="App">
      <Header />
      <SearchBar userInfo={userInfo} setUserInfo={setUserInfo} />
      <Result2 userInfo={userInfo} setUserInfo={setUserInfo} />
    </div>
  );
}

export default App;
