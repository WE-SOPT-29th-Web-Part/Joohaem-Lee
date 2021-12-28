import React from "react";
import PendingResult from "./PendingResult";
import Result from "./Result";
import RejectedResult from "./RejectedResult";
import { UserInfo, UserInfoStatus } from "types";

interface ResultCaseProps {
  userInfo: UserInfo;
  onUserInfoChange: (
    targetUserInfo: UserInfo | null,
    targetStatus: UserInfoStatus
  ) => void;
}

const ResultCase = (props: ResultCaseProps) => {
  const { userInfo, onUserInfoChange } = props;

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
