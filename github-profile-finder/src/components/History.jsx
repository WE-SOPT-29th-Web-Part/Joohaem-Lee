import React from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.ul`
  position: absolute;
  top: 80%;
  left: 1rem;
  right: 1rem;
  z-index: 5;

  background-color: #24272b;
  color: #e5e6e7;
`;

const List = styled.li`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  & > button {
    border: 0;
    outline: 0;
    background-color: #24272b;
    color: white;
    cursor: pointer;
  }
  & > p {
    width: 100%;
    cursor: pointer;
    &:hover {
      font-weight: 700;
    }
  }
`;

function History({ history, setHistory, setUserInfo }) {
  const selectUser = async (e) => {
    const _targetUser = e.target.innerText;

    // getApi-----
    setUserInfo((currentUserInfo) => ({
      ...currentUserInfo,
      status: "pending",
    }));

    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${_targetUser}`
      );

      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        data,
        status: "resolved",
      }));
    } catch (error) {
      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        data: null,
        status: "rejected",
      }));
      console.log(`error : `, error);
    }
    // -----getApi
  };

  const removeUser = (e) => {
    const _targetText = e.target.previousSibling.innerText;
    const _tempHistory = history.filter((el) => el !== _targetText);
    setHistory(_tempHistory);
  };

  return (
    <Wrapper>
      {history.map((history, index) => (
        <List key={`hisory-${index}`}>
          <p onClick={selectUser}>{history}</p>
          <button type="button" onClick={removeUser}>
            ❌
          </button>
        </List>
      ))}
    </Wrapper>
  );
}

export default History;
