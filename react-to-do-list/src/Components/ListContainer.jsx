import React, { useState } from "react";
import styled from "styled-components";
import TodayPresenter from "./TodayPresenter";
import TommorrowPresenter from "./TommorrowPresenter";

const MainWrapper = styled.main`
  background-color: whitesmoke;
  display: flex;
  /* todos growing */
  flex-grow: 1;
`;

const TodayWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* display로 구현할 경우, width 조정 없이 바로 사라져 애니메이션 적용이 안 됨 */
  /* display: none; */
  width: 0%;
  visibility: hidden;
  transition: width 0.3s ease-in-out;
  &.open {
    /* display: flex; */
    width: 100%;
    visibility: visible;
    border-right: ${(props) => (props.isBoth ? "1px solid black" : "none")};
  }
`;

const TommorrowWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* display로 구현할 경우, width 조정 없이 바로 사라져 애니메이션 적용이 안 됨 */
  /* display: none; */
  width: 0%;
  visibility: hidden;
  transition: width 0.3s ease-in-out;
  &.open {
    /* display: flex; */
    width: 100%;
    visibility: visible;
  }
`;

const Title = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const Items = styled.ul`
  /* todos__items growing */
  flex-grow: 1;
  width: 100%;
  padding: 0 20px;
`;

const Input = styled.input`
  width: 100%;
  border: 0;
`;

const AddBtn = styled.button`
  height: 30px;
  width: 100%;
`;

const ListContainer = ({ openToday, openTommorrow }) => {
  const [toDoToday, setToDoToday] = useState([]);
  const [toDoTommorrow, setToDoTommorrow] = useState([]);

  const addToDoToday = (e) => {
    const targetValue = e.target.previousSibling.value;
    if (targetValue === "") return;
    setToDoToday([...toDoToday, targetValue]);
  };
  const addToDoTommorrow = (e) => {
    const targetValue = e.target.previousSibling.value;
    if (targetValue === "") return;
    setToDoTommorrow([...toDoTommorrow, targetValue]);
  };

  return (
    <MainWrapper>
      <TodayWrapper className={openToday} isBoth={openTommorrow === "open"}>
        <Title>오늘 할 일</Title>

        <Items>
          <TodayPresenter toDoToday={toDoToday} />
        </Items>

        <Input type="text" name="" id="" />
        <AddBtn onClick={addToDoToday}>➕</AddBtn>
      </TodayWrapper>
      <TommorrowWrapper className={openTommorrow}>
        <Title>내일 할 일</Title>

        <Items>
          <TommorrowPresenter toDoTommorrow={toDoTommorrow} />
        </Items>

        <Input type="text" name="" id="" />
        <AddBtn onClick={addToDoTommorrow}>➕</AddBtn>
      </TommorrowWrapper>
    </MainWrapper>
  );
};

// .todos__item {
//   display: flex;
//   justify-content: space-between;
//   border-bottom: 1px solid black;
// }
// .todos__name {
//   height: 36px;
//   line-height: 36px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// }

export default ListContainer;
