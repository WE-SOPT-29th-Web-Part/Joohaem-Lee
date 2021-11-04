import React from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  text-align: center;
  margin: 10px 0;
`;

const NavBtn = styled.button`
  background-color: orange;
  color: white;
  margin: 0 10px;
`;

const Nav = ({ setOpenToday, setOpenTommorrow }) => {
  const clickToday = () => {
    setOpenToday("open");
    setOpenTommorrow("");
  };
  const clickTommorrow = () => {
    setOpenToday("");
    setOpenTommorrow("open");
  };
  const clickBoth = () => {
    setOpenToday("open");
    setOpenTommorrow("open");
  };
  return (
    <NavWrapper>
      <NavBtn onClick={clickToday}>오늘만 보기</NavBtn>
      <NavBtn onClick={clickTommorrow}>내일만 보기</NavBtn>
      <NavBtn onClick={clickBoth}>함께 보기</NavBtn>
    </NavWrapper>
  );
};

export default Nav;
