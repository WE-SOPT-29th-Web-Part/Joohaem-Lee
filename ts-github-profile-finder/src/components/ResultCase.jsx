import React from "react";
import PendingResult from "./PendingResult";
import Result from "./Result";
import RejectedResult from "./RejectedResult";

const ResultCase = ({ userInfo, onUserInfoChange }) => {
  switch (userInfo.status) {
    case "pending":
      return <PendingResult />;
    case "resolved":
      return (
        <Result
          userInfoData={userInfo.data}
          onUserInfoChange={onUserInfoChange}
        />
      );
    case "rejected":
      return <RejectedResult />;
    case "idle":
    default:
      return <></>;
  }
};

export default ResultCase;
