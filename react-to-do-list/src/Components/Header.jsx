import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 50px;
  color: white;
  background-color: thistle;
`;

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  height: 50px;
  line-height: 50px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>To Do List</Title>
    </HeaderWrapper>
  );
};

export default Header;
