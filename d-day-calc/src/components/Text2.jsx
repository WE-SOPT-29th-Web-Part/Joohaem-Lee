import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 50%;
  margin: 0 auto;
  text-align: left;
`;
const Input = styled.input`
  width: 10%;
  height: 2em;
  border: 1px solid #e4e4e4;
  padding-left: 10px;
  margin-right: 0.5em;
`;
const ResultDate = styled.p`
  text-align: right;
`;

// dday 계산하기!

const Text2 = ({ year, month, date }) => {
  return (
    <Wrapper>
      D-
      <Input type="text" />
      는?
      <ResultDate>yyyy년 mm월 dd일</ResultDate>
    </Wrapper>
  );
};

export default Text2;
