import { useState, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";
import History from "./History.jsx";

const SearchBar = ({ userInfo, onUserInfoChange }) => {
  const [user, setUser] = useState("");
  const [history, setHistory] = useState([]);

  const getHistory = (userName) => {
    if (history.length >= 3) return;
    if (history.includes(userName)) return;
    setHistory((currentHistory) => {
      return [...currentHistory, userName];
    });
  };

  // when mouting
  useEffect(() => {
    localStorage.getItem("history") &&
      setHistory(JSON.parse(localStorage.getItem("history")));
  }, []);

  // when mounting && of history
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  // ------------------------------------------------------------------------

  const getApi = async (e) => {
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

  const handleHistory = (newHistories) => {
    setHistory(newHistories);
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
