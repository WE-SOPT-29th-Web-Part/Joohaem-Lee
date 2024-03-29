import { useState, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";
import History from "./History";

import { UserInfo, UserInfoStatus } from "types";

interface SearchBarProps {
  userInfo: UserInfo;
  onUserInfoChange: (
    targetUserInfo: UserInfo,
    targetStatus: UserInfoStatus
  ) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const { userInfo, onUserInfoChange } = props;

  const [user, setUser] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const getHistory = (userName: string) => {
    if (history.length >= 3) return;
    if (history.includes(userName)) return;
    setHistory((currentHistory) => {
      return [...currentHistory, userName];
    });
  };

  const handleHistory = (newHistories: string[]) => {
    setHistory(newHistories);
  };

  // const isStringArray = (arr: any[]): arr is string[] =>
  //   arr.every((elem) => typeof elem === "string");
  // const JSONParseWithString = (json: string): string[] => {
  //   try {
  //     const parseResult = JSON.parse(json);
  //     if (!(parseResult instanceof Array)) return [];
  //     if (!isStringArray(parseResult)) return [];
  //     return parseResult;
  //   } catch (error) {
  //     throw Error("failed to parse JSON");
  //   }
  // };

  // when mouting
  useEffect(() => {
    const _localHistory = localStorage.getItem("history");
    _localHistory && setHistory(JSON.parse(_localHistory));
  }, []);

  // when mounting && of history
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  // ------------------------------------------------------------------------

  const getApi = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // getApi-----
    onUserInfoChange(userInfo, "pending");
    try {
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      onUserInfoChange({ ...userInfo, data }, "resolved");
    } catch (error) {
      console.log(`error : `, error);
      onUserInfoChange({ ...userInfo, data: null }, "rejected");
    }
    // -----getApi

    getHistory(user);
    setUser("");
  };

  return (
    <StForm onSubmit={getApi}>
      <StInput
        value={user}
        onChange={(e) => setUser(e.target.value)}
        type="text"
        placeholder="Github 프로필을 검색해보세요"
      />
      <History
        history={history}
        onHistoryChange={handleHistory}
        userInfo={userInfo}
        onUserInfoChange={onUserInfoChange}
      />
    </StForm>
  );
};

export default SearchBar;

const StForm = styled.form`
  position: relative;
`;

const StInput = styled.input`
  width: 100%;
  height: 4rem;

  padding: 1rem;
  outline: none;
  border: 0.5rem solid rgba(105, 105, 105, 0.5);
  border-radius: 1.25rem;

  background-color: rgb(36, 39, 43);
  color: rgb(220, 230, 231);
`;
