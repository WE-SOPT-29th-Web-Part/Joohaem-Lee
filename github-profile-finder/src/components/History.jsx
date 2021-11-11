import React from "react";
import styled from "styled-components";

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
  const selectUser = (e) => {
    // console.log(e.target.innerText);
    setUserInfo((currentUserInfo) => ({
      ...currentUserInfo,
      data: e.target.innerText,
    }));
  };
  const removeUser = () => {};

  return (
    <Wrapper>
      {history.map((history, index) => (
        <List key={`hisory-${index}`}>
          <p onClick={selectUser}>{history}</p>
          <button onClick={removeUser}>❌</button>
        </List>
      ))}
    </Wrapper>
  );
}

export default History;
