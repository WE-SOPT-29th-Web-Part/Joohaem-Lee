import React from "react";
import styled from "styled-components";

const Heading = styled.header`
  margin-top: 2em;
  font-size: 1.5em;
  font-weight: 700;
`;

const Header = () => {
  return <Heading>D-day 계산기</Heading>;
};

export default Header;
