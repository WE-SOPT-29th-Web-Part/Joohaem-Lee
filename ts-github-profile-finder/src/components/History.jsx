import React from "react";
import styled from "styled-components";
import axios from "axios";

function History({ history, setHistory, userInfo, onSetUserInfo }) {
  const selectUser = async (e) => {
    const _targetUser = e.target.innerText;
    // getApi-----
    onSetUserInfo(userInfo, "pending");
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${_targetUser}`
      );
      onSetUserInfo({ ...userInfo, data }, "resolved");
    } catch (error) {
      console.log(`error : `, error);
      onSetUserInfo({ ...userInfo, data: null }, "rejected");
    }
    // -----getApi
  };

  const removeUser = (e) => {
    const _targetText = e.target.previousSibling.innerText;
    const _tempHistory = history.filter((el) => el !== _targetText);
    setHistory(_tempHistory);
  };

  return (
    <StWrapper>
      {history.map((history, index) => (
        <StList key={`hisory-${index}`}>
          <p onClick={selectUser}>{history}</p>
          <button type="button" onClick={removeUser}>
            ❌
          </button>
        </StList>
      ))}
    </StWrapper>
  );
}

export default History;

const StWrapper = styled.ul`
  position: absolute;
  top: 80%;
  left: 1rem;
  right: 1rem;
  z-index: 5;

  background-color: #24272b;
  color: #e5e6e7;
`;

const StList = styled.li`
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
