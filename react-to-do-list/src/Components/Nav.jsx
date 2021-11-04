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

const Nav = () => {
  return (
    <NavWrapper>
      <NavBtn>오늘만 보기</NavBtn>
      <NavBtn>내일만 보기</NavBtn>
      <NavBtn>함께 보기</NavBtn>
    </NavWrapper>
  );
};

export default Nav;
