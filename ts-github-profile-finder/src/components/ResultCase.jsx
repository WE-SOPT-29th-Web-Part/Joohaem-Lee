import React from "react";
import PendingResult from "./PendingResult";
import Result from "./Result";
import RejectedResult from "./RejectedResult";

const ResultCase = ({ userInfo, onSetUserInfo }) => {
  switch (userInfo.status) {
    case "pending":
      return <PendingResult />;
    case "resolved":
      return (
        <Result userInfoData={userInfo.data} onSetUserInfo={onSetUserInfo} />
      );
    case "rejected":
      return <RejectedResult />;
    case "idle":
    default:
      return <></>;
  }
};

export default ResultCase;
