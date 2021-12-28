import { useState } from "react";
import { UserInfoData } from "types";

import Header from "components/Header";
import SearchBar from "components/SearchBar";
import ResultCase from "components/ResultCase";

type UserInfoStatus = "idle" | "pending" | "resolved" | "rejected";

interface UserInfo {
  data: UserInfoData | null;
  status: UserInfoStatus;
}

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    data: null,
    status: "idle", // 아무 데이터도 받아오지 않은 상태
  });

  const handleUserInfo = (
    targetUserInfo: UserInfo,
    targetStatus: UserInfoStatus
  ) => {
    setUserInfo({
      ...targetUserInfo,
      status: targetStatus,
    });
  };

  return (
    <div className="App">
      <Header />
      <SearchBar userInfo={userInfo} onUserInfoChange={handleUserInfo} />
      <ResultCase userInfo={userInfo} onUserInfoChange={handleUserInfo} />
    </div>
  );
}

export default App;
