import React from "react";
import styled from "styled-components";

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
  border-right: 1px solid black;
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

const ListContainer = () => {
  return (
    <MainWrapper>
      <TodayWrapper className="open">
        <Title className="todos__header">오늘 할 일</Title>

        <Items>{/* JS 추가 */}sadas</Items>

        <Input type="text" name="" id="" />
        <AddBtn>➕</AddBtn>
      </TodayWrapper>
      <TommorrowWrapper className="open">
        <Title className="todos__header">내일 할 일</Title>

        <Items>{/* JS 추가 */}</Items>

        <Input type="text" name="" id="" />
        <AddBtn>➕</AddBtn>
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
