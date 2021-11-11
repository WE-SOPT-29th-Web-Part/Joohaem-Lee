import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import History from "./History";

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

const SearchBar = ({ userInfo, setUserInfo }) => {
  const [user, setUser] = useState("");
  const [history, setHistory] = useState([]);

  const getHistory = (userName) => {
    if (history.length >= 3) return;
    if (history.includes(userName)) return;
    setHistory((currentHistory) => {
      console.log(`currentHistory - `, currentHistory);
      return [...currentHistory, userName];
    });
  };

  // when mouting
  useEffect(() => {
    localStorage.getItem("history") &&
      setHistory(JSON.parse(localStorage.getItem("history")));
  }, []);

  // of history
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  // ------------------------------------------------------------------------

  const getApi = async (e) => {
    e.preventDefault();
    setUserInfo((currentUserInfo) => ({
      ...currentUserInfo,
      status: "pending",
    }));

    try {
      const { data } = await axios.get(`https://api.github.com/users/${user}`);

      getHistory(user);
      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        data,
        status: "resolved",
      }));
      setUser("");
    } catch (error) {
      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        data: null,
        status: "rejected",
      }));
      console.log(`error : `, error);
    }
  };

  // useEffect(() => {
  //   getApi();
  // }, [userInfo]);

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
        setUserInfo={setUserInfo}
      />
    </Form>
  );
};

export default SearchBar;
