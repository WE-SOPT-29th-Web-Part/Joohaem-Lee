import { useState, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";
import History from "./History.jsx";

const SearchBar = ({ userInfo, onSetUserInfo }) => {
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
    onSetUserInfo(userInfo, "pending");
    try {
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      onSetUserInfo({ ...userInfo, data }, "resolved");
    } catch (error) {
      console.log(`error : `, error);
      onSetUserInfo({ ...userInfo, data: null }, "rejected");
    }
    // -----getApi

    getHistory(user);
    setUser("");
  };

  return (
    <Form onSubmit={getApi}>
      <Input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        type="text"
        placeholder="Github 프로필을 검색해보세요"
      />
      <History
        history={history}
        setHistory={setHistory}
        userInfo={userInfo}
        onSetUserInfo={onSetUserInfo}
      />
    </Form>
  );
};

export default SearchBar;

const Form = styled.form`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 4rem;

  padding: 1rem;
  outline: none;
  border: 0.5rem solid rgba(105, 105, 105, 0.5);
  border-radius: 1.25rem;

  background-color: rgb(36, 39, 43);
  color: rgb(220, 230, 231);
`;
