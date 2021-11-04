import React from "react";
import styled from "styled-components";

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const TodayPresenter = ({ toDoToday }) => {
  const removeToDo = (e) => {
    e.target.parentNode.remove();
  };

  return (
    <>
      {toDoToday.map((toDo, i) => (
        <Item key={i}>
          <p>{toDo}</p>
          <button onClick={removeToDo}>❌</button>
        </Item>
      ))}
    </>
  );
};

export default TodayPresenter;
