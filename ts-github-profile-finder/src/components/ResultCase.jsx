import React from "react";
import PendingResult from "./PendingResult";
import Result from "./Result";
import RejectedResult from "./RejectedResult";

const ResultCase = ({ setUserInfo, userInfo }) => {
  switch (userInfo.status) {
    case "pending":
      return <PendingResult />;
    case "resolved":
      return <Result userInfoData={userInfo.data} setUserInfo={setUserInfo} />;
    case "rejected":
      return <RejectedResult />;
    case "idle":
    default:
      return <></>;
  }
};

export default ResultCase;
