import TextResult from "./TextResult";
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
      return <TextResult textProp="Pending..." />;
    case "resolved":
      return userInfo.data !== null ? (
        <Result
          userInfoData={userInfo.data}
          onUserInfoChange={onUserInfoChange}
        />
      ) : (
        <TextResult textProp="None Data..." />
      );
    case "rejected":
      return <RejectedResult />;
    case "idle":
    default:
      return <></>;
  }
};

export default ResultCase;
